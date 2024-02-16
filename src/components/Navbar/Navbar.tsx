import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../store/authStore/authSlice";
import minivanIcon from "../../assets/minivan.png";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import "./navbar.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { MdOutlineMenu } from "react-icons/md";
import { deleteRental } from "../../store/rentalStore/rentalSlice";


const Navbar = () => {
  const [activeKey, setActiveKey] = useState<string>("home");
  const [menuIsOpened, setMenuIsOpened] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const authState = useSelector((store: any) => store.auth);
  const handleLogout = () => {
    dispatch(logoutSuccess());
    dispatch(deleteRental());
    navigate("/vite-deploy/");
    setMenuIsOpened(false);
  };
  const handleNavClick = (key: string) => {
    setActiveKey(key);
  };
  const handleHamburgerClick = () => {
    setMenuIsOpened(!menuIsOpened);
  };
  const handleOutsideClick = (event: any) => {
    if (
      menuIsOpened &&
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setMenuIsOpened(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuIsOpened]);
  return (
    <div>
      {/* mobile-navbar start */}
      <div className="col-12 d-md-none d-flex align-items-center justify-content-between bg-body-tertiary">
        <div className=" d-flex  align-items-center gap-2  ms-2">
          <Link
            className="navbar-brand"
            to="/vite-deploy/"
            onClick={() => handleNavClick("home")}
          >
            <img id="minivan" src={minivanIcon} alt="mini van icon" />
          </Link>
          <ul className="navbar-nav me-auto align-items-center mb-2 mb-lg-0 col flex-row gap-1 ">
            <li className="nav-item">
              <Link
                className={`nav-link px-2 ${
                  activeKey === "home" &&
                  "active bg-primary rounded-1 text-light"
                }`}
                to="/vite-deploy/"
                onClick={() => handleNavClick("home")}
              >
                {t("home")}
              </Link>
            </li>

            {authState.role === "ADMIN" && (
              <li className="nav-item">
                <Link
                  className={`nav-link px-2 ${
                    activeKey === "admin" &&
                    "active bg-primary rounded-1 text-light"
                  }`}
                  to="/vite-deploy/dashboard"
                  onClick={() => handleNavClick("admin")}
                >
                  {t("admin")}
                </Link>
              </li>
            )}
            <li className="nav-item d-flex align-items-center ">
              <LanguageSelector />
            </li>
          </ul>
        </div>

        <div
          className="text-end me-2"
          ref={menuRef}
          onFocus={() => setMenuIsOpened(false)}
        >
          <MdOutlineMenu
            color={"#0d6efd"}
            size={40}
            onClick={handleHamburgerClick}
          />
        </div>
      </div>
      {menuIsOpened && (
        <div className="p-2 col-4 col-sm-3 open-nav text-light rounded  position-absolute end-0 z-3 ">
          {authState.id === 0 ? (
            <div className="d-flex flex-column align-items-start justify-content-end ">
              <div
                className="border-bottom w-100 py-2 "
                onClick={() => setMenuIsOpened(false)}
              >
                <Link
                  to={"/vite-deploy/login"}
                  className="text-light d-flex text-decoration-none align-items-center gap-1 "
                >
                  <CiLogin size={25} />
                  <span>{t("login")}</span>
                </Link>
              </div>

              <div onClick={() => setMenuIsOpened(false)}>
                <Link
                  to={"/vite-deploy/sign-up"}
                  className="text-light d-flex text-decoration-none align-items-center gap-1 py-2"
                >
                  <CgProfile size={25} />
                  <span>{t("signUp")}</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="d-flex flex-column align-items-start justify-content-end  ">
              <div
                className="border-bottom w-100 py-2 "
                onClick={() => setMenuIsOpened(false)}
              >
                <Link
                  to={"/vite-deploy/profile"}
                  className="text-light d-flex text-decoration-none  align-items-center gap-1"
                >
                  <CgProfile size={25} />
                  <span>{t("profile")}</span>
                </Link>
              </div>

              <div onClick={handleLogout}>
                <Link
                  to={"/vite-deploy/"}
                  className="text-light d-flex text-decoration-none py-2 align-items-center gap-1"
                >
                  <IoIosLogOut size={25} />
                  <span>{t("exit")}</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      {/* mobile-navbar end */}
      <nav className="mb-5 d-none d-md-block navbar navbar-expand-lg bg-body-tertiary">
        <div
          className="mx-3 collapse navbar-collapse d-flex justify-content-between align-itmes-center "
          id="navbarSupportedContent"
        >
          <Link
            className="navbar-brand"
            to="/vite-deploy/"
            onClick={() => handleNavClick("home")}
          >
            <img id="minivan" src={minivanIcon} alt="mini van icon" />
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 col flex-row gap-2 ">
            <li className="nav-item ">
              <Link
                className={`nav-link ${
                  activeKey === "home" &&
                  "active bg-primary rounded-1 text-light"
                }`}
                to="/vite-deploy/"
                onClick={() => handleNavClick("home")}
              >
                {t("home")}
              </Link>
            </li>

            {authState.role === "ADMIN" && (
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeKey === "admin" &&
                    "active bg-primary rounded-1 text-light"
                  }`}
                  to="/vite-deploy/dashboard"
                  onClick={() => handleNavClick("admin")}
                >
                  {t("admin")}
                </Link>
              </li>
            )}
          </ul>

          <div className="col text-end">
            {authState.id === 0 ? (
              <div className="d-flex align-items-center justify-content-end ">
                <div className="btn btn-primary ">
                  <Link
                    to={"/vite-deploy/login"}
                    className="text-light d-flex  align-items-center gap-1"
                  >
                    <CiLogin size={25} />
                    <span>{t("login")}</span>
                  </Link>
                </div>

                <div className="btn btn-primary ms-3 ">
                  <Link
                    to={"/vite-deploy/sign-up"}
                    className="text-light  d-flex  align-items-center gap-1"
                  >
                    <CgProfile size={25} />
                    <span>{t("signUp")}</span>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="d-flex align-items-center justify-content-end ">
                <div className="btn btn-primary  ">
                  <Link
                    to={"/vite-deploy/profile"}
                    className="text-light d-flex  align-items-center gap-1"
                  >
                    <CgProfile size={25} />
                    <span>{t("profile")}</span>
                  </Link>
                </div>

                <div onClick={handleLogout} className="btn btn-primary ms-3 ">
                  <Link
                    to={"/vite-deploy/"}
                    className="text-light d-flex  align-items-center gap-1"
                  >
                    <IoIosLogOut size={25} />
                    <span>{t("exit")}</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="col-1  text-end">
            <LanguageSelector />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;