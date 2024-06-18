import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import axios from "../axios";
import imageCompression from "browser-image-compression";

const UpdateCourse = ({ post, onClose }) => {
  const [title, setTitle] = useState(post.title || "");
  const [photo, setPhoto] = useState(post.photo || "");
  const [description, setDescription] = useState(post.description || "");

  const [loading, setLoading] = useState(false);

  // upload photo to cloudinary
  const [loadingPhoto, setLoadingPhoto] = useState(false);
  const postPhoto = async (pic) => {
    if (pic === null || undefined) {
      toast.error("Please select photo");
      return;
    }

    // Compress the image
    const options = {
      maxSizeMB: 1, // Adjust the maximum size of the compressed image
      maxWidthOrHeight: 1920, // Adjust the maximum width or height of the compressed image
      useWebWorker: true, // Use Web Worker for better performance
    };

    try {
      setLoadingPhoto(true);
      const compressedFile = await imageCompression(pic, options);
      const data = new FormData();
      data.append("file", compressedFile);
      data.append("upload_preset", "p2jnu3t2");
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/ddqs3ukux/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const urlData = await res.json();
      setLoadingPhoto(false);
      setPhoto(urlData.url);
      toast.success("Uploaded Photo", { theme: "dark" });
    } catch (error) {
      setLoadingPhoto(false);
      toast.error("Error uploading Photo", { theme: "dark" });
    }
  };

  const handleUpdate = async () => {
    if (!title) {
      return toast.error("title missing", { theme: "dark" });
    }
    if (!description) {
      return toast.error("description missing", { theme: "dark" });
    }
    if (!photo) {
      return toast.error("photo missing", { theme: "dark" });
    }

    try {
      setLoading(true);
      let dataToSend = { title, photo, description };
      let result = await axios.put("/indemand/" + post._id, dataToSend);
      if (result.data) {
        toast.success("Action Success", { theme: "dark" });
        setLoading(false);
      }

      setLoading(false);
      onClose();
    } catch (error) {
      setLoading(false);
      toast.error("Failed To Update", { theme: "dark" });
    }
  };

  return (
    <div className="">
      {/* close btn */}
      {/* data */}
      <div className="pop-up-content prompt px-3">
        <div className="flex justify-center mb-[50px] mt-[50px] z-[999] hide-scrollbar">
          <button onClick={onClose}>
            <AiOutlineClose
              className="text-5xl text-white p-[10px] rounded-full "
              style={{
                border: "2px solid #0067b8",
                position: "sticky",
                top: "60px",
              }}
              title="close"
            />
          </button>
        </div>
        <div className=" h-[70vh] pb-4 sm:h-[60vh] overflow-y-scroll prompt">
          <form
            className=" w-[95%] sm:w-[70%]  md:w-[50%] xl:w-[30%] m-auto"
            onSubmit={handleUpdate}
          >
            <div className="flex flex-col mb-5">
              <label htmlFor="title">
                <p className="font-semibold text-zinc-400">
                  Update This title (25)
                </p>
              </label>
              <input
                type="text"
                placeholder="title"
                className="border-2 border-[#0067b8] p-1 rounded-lg outline-none"
                required
                maxLength={25}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="description">
                <p className="font-semibold text-zinc-400">
                  Update This Description (150)
                </p>
              </label>
              <textarea
                placeholder="description"
                className="border-2 border-[#0067b8] p-1 rounded-lg outline-none prompt"
                required
                rows={3}
                maxLength={150}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                id="description"
              ></textarea>
            </div>

            {/* upload image */}
            <div className="flex flex-col items-start gap-[20px] sm:gap-0 sm:flex-row sm:items-center mt-[20px] mb-[20px]  px-[5px] rounded-lg">
              <div className="flex flex-col gap-2 mt-[20px]">
                <label
                  htmlFor="mainPhoto"
                  className="flex items-center gap-[20px] flex-wrap"
                >
                  <p className="text-zinc-400">Update This Photo</p>
                  <div className="flex flex-col items-center">
                    {loadingPhoto ? (
                      <Spinner color="white" message="uploading ..." />
                    ) : (
                      <img
                        src={
                          photo
                            ? photo
                            : "https://pixel-share-25.netlify.app/assets/preview-35b286f0.png"
                        }
                        alt=""
                        className="w-[100px] h-[100px] object-cover"
                      />
                    )}
                  </div>
                </label>
                <input
                  type="file"
                  placeholder="Add Image"
                  accept="image/*"
                  onChange={(e) => postPhoto(e.target.files[0])}
                  required
                  id="mainPhoto"
                  className="hidden"
                />
              </div>
            </div>

            <div className="mt-4">
              {loading ? (
                <>
                  <Spinner color="white" message="Adding New" />
                </>
              ) : (
                <button
                  className="w-full bg-[#0067b8] p-2 text-white rounded-tl-2xl rounded-br-2xl transition-all hover:rounded-tr-2xl hover:rounded-bl-2xl hover:rounded-tl-none hover:rounded-br-none "
                  onClick={handleUpdate}
                >
                  Update Course
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourse;
