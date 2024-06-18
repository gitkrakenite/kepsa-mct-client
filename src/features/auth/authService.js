import axios from "../../axios";

// login user
const login = async (userData) => {
  const response = await axios.post("/users/login", userData);

  if (response.data) {
    // This will make our data persist even when we refresh
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("newLogIn", new Date().getTime());
  }

  return response.data;
};

// logout user
const logout = async () => {
  try {
    localStorage.removeItem("user");
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  logout,
  login,
};

export default authService;
