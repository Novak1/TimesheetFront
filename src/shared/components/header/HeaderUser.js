import React, { useContext } from "react";
import useComponentVisible from "../../../hooks/useComponentVisible";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

function HeaderUser() {
  const context = useContext(AuthContext);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("userData");
    history.push("/login");
  };

  return (
    <ul className="user right">
      <li>
        <a
          href="#"
          className="user-name"
          ref={ref}
          onClick={() => setIsComponentVisible(true)}
        >
          {context.name}
        </a>
        <div className="invisible"></div>
        <div
          className="user-detail"
          style={{ display: isComponentVisible ? "block" : "none" }}
          ref={ref}
        >
          <ul>
            <li>
              <Link to="/change-password" className="link">
                Change password
              </Link>
            </li>
            <li>
              <a href="" className="link">
                Settings
              </a>
            </li>
            <li>
              <a href="" className="link">
                Export all data
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li className="last">
        <a href="#" onClick={logoutHandler}>
          Logout
        </a>
      </li>
    </ul>
  );
}

export default HeaderUser;
