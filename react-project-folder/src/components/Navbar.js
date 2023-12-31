import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { useState } from "react";
function Navbar() {

    let [navbar, setNavbar] = useState(false)

    const changeBackfound = () => {
            if(window.scrollY >= 30) {
                setNavbar(true)
            } else {
                setNavbar(false)
            }
    }

    window.addEventListener("scroll", changeBackfound)

    return (
        <>
            <nav  className={navbar ? "navbar theNavbar fixed-top navbar-expand-lg active" : "navbar theNavbar fixed-top navbar-expand-lg"}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="teamLogo" src={logo} alt="logo" />
                    </Link>
                    <button
                        className="navbar-toggler menuIcon"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span style={{opacity:"0.5"}} className="navbar-toggler-icon "></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">

                            <li className="nav-item navLink">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/our-services"
                                    style={{color:"#eee"}}
                                >
                                      خدماتنا
                                </Link>
                            </li>
                            <li className="nav-item navLink">
                                <Link
                                style={{color:"#eee"}}
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                      المدونة
                                </Link>
                            </li>
                            <li className="nav-item navLink">
                                <Link
                                style={{color:"#eee"}}
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/contact-us"
                                >
                                      تواصل معنا
                                </Link>
                            </li>
                            <li className="nav-item navLink">
                                <Link
                                style={{color:"#eee"}}
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/about-us"
                                >
                                      من نحن؟
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
