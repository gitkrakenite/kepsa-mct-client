import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import axios from "../axios";

const Tracks = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTracks = async () => {
    try {
      setLoading(true);
      let result = await axios.get("/tracks");
      if (result) {
        let reversed = result.data.response.reverse();
        setTracks(reversed);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <Spinner message="Loading..." />
        </div>
      ) : (
        <>
          {tracks.length > 0 && (
            <>
              <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[100px] pb-[20px]">
                <h2
                  className="font-bold text-2xl text-center mb-4"
                  style={{ lineHeight: "1.3em" }}
                >
                  Current Available Tracks
                </h2>
                <p
                  className="font-semibold text-center mb-4"
                  style={{ lineHeight: "1.3em" }}
                >
                  Whether you are a beginner, intermediate or advanced, we have
                  resources for you.
                </p>

                <div className="tracksContainer">
                  {tracks?.map((item) => (
                    <div key={item._id}>
                      <Link to={`/track/${item._id}`} className="text-inherit">
                        <img
                          src={item.photo}
                          loading="lazy"
                          alt={item.title}
                          className="w-full h-[500px] sm:h-[380px] object-cover rounded-xl"
                        />
                        <p className=" mt-2 font-semibold ">{item.title}</p>
                        <p>{item.description.substring(0, 80)}...</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Tracks;
