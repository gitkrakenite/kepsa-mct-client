import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* wrapper */}
      <div className="text-center" style={{ lineHeight: "1.1em" }}>
        <Link to="/admin/login" className="text-inherit">
          <p>Copyright &copy; 2024. All rights reserved.</p>
        </Link>
        <p>Powered by KEPSA</p>
      </div>
    </div>
  );
};

export default Footer;
