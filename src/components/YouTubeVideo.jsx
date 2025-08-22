import React from "react";

const YouTubeVideo = () => {
  return (
    <div className="   px-[10px] md:px-[2em] xl:px-[5em]  pb-[20px] mt-[3em]">
      <div className="w-full flex justify-center relative">
        <iframe
          src="https://www.youtube.com/embed/oyqTT_hj-VY"
          title="Dr  Ehud Gachugu, from KEPSA, at launch of Microsoft&#39;s skilling initiative in Kenya"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="rounded-lg w-[800px] h-[400px]"
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeVideo;
