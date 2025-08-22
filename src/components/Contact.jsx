const Contact = () => {
  return (
    <div className="pb-4 " id="contactPage p-8">
      <>
        {/* wrapper */}
        <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[20px] py-4 ">
          <div className="flex flex-col md:flex-row gap-[30px] items-center">
            {/* google maps */}
            <div className=" hidden md:flex flex-1 md:flex-[0.5] mt-6 lg:mt-0">
              <iframe
                title="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.927592857247!2d36.792088774541284!3d-1.2107140355472912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10cfc9fcb239%3A0x42b778612282cde3!2sKenya%20Private%20Sector%20Alliance!5e0!3m2!1sen!2ske!4v1717152142747!5m2!1sen!2ske"
                className=" w-full h-full md:h-[300px]"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* nav lins */}

            <div className="flex-1 md:flex-[0.5] ">
              <div className="flex gap-6 sm:gap-[8em]">
                <ul>
                  <li className="mb-2">
                    <a
                      className="text-inherit hover:text-[#0078d4]"
                      href="https://kepsa.or.ke/"
                    >
                      KEPSA
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-inherit hover:text-[#0078d4]"
                      href="https://kepsa-dseap.azurefd.net/"
                    >
                      MCT PLATFORM
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-inherit hover:text-[#0078d4]"
                      href="https://admin.kepsa.or.ke/public/images/policies/privacy.pdf"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-inherit hover:text-[#0078d4]"
                      href="https://www.fuzu.com/kenya/company/kepsa"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-inherit hover:text-[#0078d4]"
                      href="https://admin.kepsa.or.ke/public/images/policies/cookies.pdf"
                    >
                      Cookies Policy
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="mb-2">
                    <a
                      href="https://aiskillsnavigator.microsoft.com/en-us"
                      className="text-inherit hover:text-[#0078d4]"
                    >
                      AI Skills Navigator
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-inherit hover:text-[#0078d4]"
                      href="https://www.microsoft.com/en-us/education"
                    >
                      Microsoft in education
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-inherit hover:text-[#0078d4]"
                      href="https://www.microsoft.com/en-us/education/products/microsoft-365"
                    >
                      Microsoft 365 Education
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="text-inherit hover:text-[#0078d4]"
                      href="https://www.microsoft.com/en-us/education/products/microsoft-365"
                    >
                      How to buy for your school
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-inherit hover:text-[#0078d4]"
                      href="https://www.microsoft.com/about"
                    >
                      About Microsoft
                    </a>
                  </li>
                </ul>
              </div>

              <div className="ml-7">
                <p> &copy; 2025 by KEPSA. All rights reserved.</p>
                <p>Call: +254 720 340949 | +254 735 999979</p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Contact;
