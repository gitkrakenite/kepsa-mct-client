import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import axios from "../axios";

const InDemand = () => {
  const [inDemand, setInDemand] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchInDemand = async () => {
    try {
      setLoading(true);
      let result = await axios.get("/indemand");
      if (result) {
        // let reversed = result.data.response.reverse();
        setInDemand(result.data.response);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInDemand();
  }, []);

  return (
    <div className="blueBg text-white py-2 mt-10">
      {loading ? (
        <div>
          <Spinner message="Loading..." />
        </div>
      ) : (
        <>
          {inDemand.length > 0 && (
            <div className="px-[10px] md:px-[2em]  xl:px-[5em]  pb-[10px] mt-[5em]">
              <h2 className="text-center mb-10">Explore In-demand Skills</h2>
              {/* wrapper */}
              <div className="inDemandContainer">
                {inDemand?.map((item) => (
                  <div key={item._id}>
                    <Link className="text-inherit" to="/platform">
                      <img
                        src={item.photo}
                        alt={item.title}
                        className="rounded-lg"
                      />
                      <p className="my-3 font-semibold md:text-lg">
                        {item.title}
                      </p>
                      <p className="text-sm hidden md:block">
                        {item.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default InDemand;
