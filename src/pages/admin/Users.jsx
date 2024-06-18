import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LuPen } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import Spinner from "../../components/Spinner";
import UpdateUser from "../../utils/UpdateUser";
import CreateUser from "../../utils/CreateUser";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchUsers = async () => {
    try {
      setLoading(true);
      let response = await axios.get("/users");
      if (response.data) {
        setUsers(response.data.response);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed To Fetch Users");
      console.log(error, "error at users");
    }
  };

  // working on edit modal
  const [selectedUser, setSelectedUser] = useState(null);
  const [isPopUpEditOpen, setIsPopUpEditOpen] = useState(false);
  const handleUserUpdate = (user) => {
    setSelectedUser(user);
    document.body.style.overflow = "hidden";
    setIsPopUpEditOpen(true);
  };

  // working on creation modal
  const [isPopUpCreateOpen, setIsPopUpCreateOpen] = useState(false);
  const handleUserCreate = () => {
    document.body.style.overflow = "hidden";
    setIsPopUpCreateOpen(true);
  };

  useEffect(() => {
    handleFetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      let confirm = window.confirm("Delete This User ?");
      if (confirm) {
        let result = await axios.delete("/users/" + userId);
        if (result.data) {
          handleFetchUsers();
        }
      }
    } catch (error) {
      toast.error("Failed To Delete User", { theme: "dark" });
    }
  };

  return (
    <div className="px-[10px] md:px-[2em]  xl:px-[5em]  pb-[10px] mt-[10px] sm:mt-[2em]">
      {/* topbar */}
      <div className="flex justify-between items-center">
        <Link to="/admin">
          <FaArrowLeft className="text-2xl" />
        </Link>
        <div>
          <button>
            <IoMdAdd
              className="blueBg p-2 text-5xl text-white rounded-lg"
              onClick={() => handleUserCreate()}
            />
          </button>
        </div>
      </div>
      {/* users */}
      <div className="mt-[2em]">
        {loading ? (
          <div className="h-[70vh] w-full flex justify-center items-center">
            <Spinner message="Fetching Users" />
          </div>
        ) : (
          <>
            <h4 className="mb-4">Manage Users Who Can Access</h4>
            <div>
              <table className="react-table">
                <thead>
                  <th>username</th>
                  <th>manage</th>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user?._id}>
                      <td>{user?.username}</td>
                      <td className="flex gap-5 justify-end">
                        <LuPen
                          className="text-2xl blueTxt cursor-pointer"
                          onClick={() => handleUserUpdate(user)}
                        />
                        <FaRegTrashCan
                          className="text-2xl text-red-500 cursor-pointer"
                          onClick={() => handleDeleteUser(user?._id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* edit options */}
            <div>
              {isPopUpEditOpen && (
                <div className="">
                  {/* overlay div */}
                  <div
                    className="fixed z-[999] top-0 bottom-0 w-full left-0 right-0 bg-[rgba(0,0,0,0.6)]"
                    onClick={() => {
                      setIsPopUpEditOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    <div className="  mt-5 w-[96%]  md:w-[80%]   lg:w-[70%]   2xl:w-[60%] m-auto">
                      <div
                        className="  bg-[rgba(0,0,0,0.8)] rounded-xl"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <UpdateUser
                          post={selectedUser}
                          onClose={() => {
                            setIsPopUpEditOpen(false);
                            document.body.style.overflow = "auto";
                            handleFetchUsers();
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* create options */}
            <div>
              {isPopUpCreateOpen && (
                <div className="">
                  {/* overlay div */}
                  <div
                    className="fixed z-[999] top-0 bottom-0 w-full left-0 right-0 bg-[rgba(0,0,0,0.6)]"
                    onClick={() => {
                      setIsPopUpCreateOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    <div className="  mt-5 w-[96%]  md:w-[80%]   lg:w-[70%]   2xl:w-[60%] m-auto">
                      <div
                        className="  bg-[rgba(0,0,0,0.8)] rounded-xl"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <CreateUser
                          onClose={() => {
                            setIsPopUpCreateOpen(false);
                            document.body.style.overflow = "auto";
                            handleFetchUsers();
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Users;
