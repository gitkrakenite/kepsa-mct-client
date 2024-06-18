import React, { useState } from "react";
import { MdEmail, MdOutlinePhoneEnabled } from "react-icons/md";
import Hello from "../assets/hello.png";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import axios from "../axios";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setinquiry] = useState("");
  const [loading, setLoading] = useState(false);

  // agree to data collection
  const [agreed, setAgreed] = useState(false);

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setAgreed(isChecked);
  };

  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName)
      return toast.error("Please enter your name", { theme: "dark" });

    if (!email)
      return toast.error("Please enter your email", { theme: "dark" });

    if (!inquiry)
      return toast.error("Inquiry content needed", { theme: "dark" });

    //verify fullname
    if (fullName.length < 3 || fullName.length > 20) {
      toast.warning("Full Name Between 3 - 20 letters", { theme: "dark" });
      return;
    }
    const containsNumbers = /[0-9]/.test(fullName);
    if (containsNumbers)
      return toast.error("Your Name cannot have numbers.", { theme: "dark" });

    //verify that it is gmail.com
    if (email.length < 12)
      return toast.error("Email incomplete", { theme: "dark" });
    let verifyEmail = email.includes("gmail.com");
    if (verifyEmail === false) {
      toast.error("Enter Gmail address", { theme: "dark" });
      toast.warning("xxx@gmail.com", { theme: "dark" });
      return;
    }

    // check if agreed to terms
    if (!agreed)
      return toast.error("Please Agree With Our Terms", { theme: "dark" });

    let confirm = window.confirm("Are All The Details Correct ? ");
    if (confirm) {
      try {
        setLoading(true);
        let dataToSend = { fullName, email, inquiry };
        let result = await axios.post("/inquire", dataToSend);
        if (result.data) {
          setLoading(false);
          setSuccess(true);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error("Please Use Other Options Above");
      }
    }
  };

  return (
    <div className="pb-4" id="contactPage">
      {success ? (
        <div className="w-full flex justify-center mt-[3em]">
          <div className="text-center">
            <div className="w-full flex justify-center mb-2">
              <img src={Hello} loading="lazy" alt="" />
            </div>
            <h4>Hello {fullName}. Thank You For Contacting Us</h4>
            <p>Be sure to check your email for any communication from us</p>
          </div>
        </div>
      ) : (
        <>
          {/* wrapper */}
          <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[50px] pb-[40px]">
            <h2
              className="font-bold text-2xl text-center mb-4"
              style={{ lineHeight: "1.3em" }}
            >
              Contact Us
            </h2>
            <p
              className="font-semibold text-center mb-[3em]"
              style={{ lineHeight: "1.3em" }}
            >
              Reach Out Today. We'll Get Back To you
            </p>
            <div className="flex flex-col lg:flex-row justify-evenly items-center gap-2">
              {/* form side */}
              <div className=" flex-1 lg:flex-[0.5] w-full">
                {/* buttons */}
                <div className=" mb-3 flex justify-evenly sm:items-center gap-4 flex-wrap">
                  <a
                    href="mailto:kyeeap@kepsa.or.ke"
                    className="flex items-center gap-[10px] text-inherit mb-[15px]"
                  >
                    <MdEmail className="text-4xl text-[#0067b8]" />
                    <span className="hover:text-[#0067b8]">
                      kyeeap@kepsa.or.ke
                    </span>
                  </a>
                  <div className="flex items-center gap-[10px] text-inherit">
                    <div>
                      <MdOutlinePhoneEnabled className="text-4xl text-[#0067b8]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <a href="tel:0720340949" className="text-inherit">
                        <span>+254 720 340949</span>
                      </a>
                      <a href="tel:0735999979" className="text-inherit">
                        <span>+254 735 999979</span>
                      </a>
                    </div>
                  </div>
                </div>

                <form
                  style={{
                    background: "rgba(231, 239, 249, 0.9)",
                    backdropFilter: "blur(4px)",
                  }}
                  className=" p-[10px] rounded-md w-full"
                  onSubmit={handleSubmit}
                >
                  {/* fullname */}
                  <div className="flex flex-col gap-[10px] mb-[20px]">
                    <label htmlFor="fullName">Your Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="enter fullname"
                      className="bg-transparent p-2 rounded-lg"
                      style={{ border: "1px solid gray" }}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>

                  {/*gmail*/}
                  <div className="flex flex-col gap-[10px] mb-[20px]">
                    <label htmlFor="email">Enter A Gmail Address </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="enter email"
                      className="bg-transparent p-2 rounded-lg"
                      style={{ border: "1px solid gray" }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {/*inquiry*/}
                  <div className="flex flex-col gap-[10px] mb-[20px]">
                    <label htmlFor="inquiry">Enter Your Inquiry</label>
                    <textarea
                      name="inquiry"
                      id="inquiry"
                      placeholder="enter content"
                      className="bg-transparent p-2 rounded-lg"
                      style={{ border: "1px solid gray" }}
                      value={inquiry}
                      onChange={(e) => setinquiry(e.target.value)}
                    ></textarea>
                  </div>

                  <div>
                    <label className="flex gap-2  ">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={handleCheckboxChange}
                        className="text-lg"
                      />
                      <p>
                        As KEPSA, respecting your privacy is paramount. By
                        completing this form, you consent to the collection and
                        processing of your data as per our privacy policy.
                      </p>
                    </label>
                  </div>

                  <div className="text-center">
                    {loading ? (
                      <Spinner message="Loading..." />
                    ) : (
                      <button
                        className="blueBg text-white px-4 py-2 rounded-lg"
                        onClick={handleSubmit}
                      >
                        Send Now
                      </button>
                    )}
                  </div>
                </form>
              </div>
              {/* google maps */}
              <div className=" flex-1 lg:flex-[0.5] mt-6 lg:mt-0">
                <iframe
                  title="maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.927592857247!2d36.792088774541284!3d-1.2107140355472912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10cfc9fcb239%3A0x42b778612282cde3!2sKenya%20Private%20Sector%20Alliance!5e0!3m2!1sen!2ske!4v1717152142747!5m2!1sen!2ske"
                  className=" w-[300px] h-[350px]  sm:w-[600px] sm:h-[500px]    lg:w-full  lg:h-[550px]"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
