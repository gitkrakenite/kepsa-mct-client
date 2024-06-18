import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "../../axios";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import { MdOutlineMail } from "react-icons/md";
import moment from "moment";

const Subscribed = () => {
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchSubs = async () => {
    try {
      setLoading(true);
      let response = await axios.get("/subscribe");
      if (response.data) {
        setSubs(response.data.response);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed To Fetch Subs");
      console.log(error, "error at subs");
    }
  };

  const handleDeleteSub = async (userId) => {
    try {
      let confirm = window.confirm("Delete This Sub ?");
      if (confirm) {
        let result = await axios.delete("/subscribe/" + userId);
        if (result.data) {
          handleFetchSubs();
        }
      }
    } catch (error) {
      toast.error("Failed To Delete Sub", { theme: "dark" });
    }
  };

  useEffect(() => {
    handleFetchSubs();
  }, []);

  return (
    <div className="px-[10px] md:px-[2em]  xl:px-[5em]  pb-[10px] mt-[10px] sm:mt-[2em]">
      {/* topbar */}
      <div className="flex justify-between items-center">
        <Link to="/admin">
          <FaArrowLeft className="text-2xl" />
        </Link>
      </div>
      {/* users */}
      <div className="mt-[2em]">
        {loading ? (
          <div className="h-[70vh] w-full flex justify-center items-center">
            <Spinner message="Fetching Subs" />
          </div>
        ) : (
          <>
            <h4 className="mb-4">Manage Email Subs</h4>
            <div>
              <table className="react-table">
                <thead>
                  <th>Emails</th>
                </thead>
                <tbody>
                  {subs.map((user) => (
                    <tr key={user?._id}>
                      <td className="flex justify-between items-center">
                        <div>
                          <a
                            href={`mailto:${user.email}`}
                            className="text-inherit hover:text-blue-600 flex gap-2 items-center"
                          >
                            <p>
                              <MdOutlineMail className="text-2xl" />
                            </p>
                            <p>{user.email}</p>
                          </a>
                          <p> {moment(user?.createdAt).fromNow()}</p>
                        </div>
                        <div>
                          <FaRegTrashCan
                            className="text-2xl text-red-500 cursor-pointer"
                            onClick={() => handleDeleteSub(user?._id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Subscribed;
