import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import logo from "../images/logo.png";

function Signup() {
    const navigate = useNavigate();

    return (
        <>
            <img className="  logoAct" src={logo} alt="sada" />
            <div className="login template d-flex vh-100 ms-5 align-items-center w-100  backgroundForForm">
                <div className="40-w p-5 rounded  formContainer">
                    <form method="POST" action="http://127.0.0.1/signup">
                        <h3 className="text-center">تسجيل حساب جديد</h3>
                        <div className="mb-2 mt-3">
                            <label htmlFor="name">الاسم</label>
                            <input
                                type="name"
                                required
                                minLength="2"
                                maxLength="18"
                                placeholder="Ahmed"
                                className="form-control"
                            />
                            <p
                                style={{ color: "red", fontWeight: "bold" }}
                                className="warning"
                            ></p>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="lName">الكنية</label>
                            <input
                                type="lName"
                                required
                                minLength="2"
                                maxLength="18"
                                placeholder="الكنية"
                                className="form-control"
                            />
                            <p
                                style={{ color: "red", fontWeight: "bold" }}
                                className="warning"
                            ></p>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email">البريد الإلكتروني</label>
                            <input
                                required
                                type="email"
                                placeholder="البريد الإلكتروني"
                                className="form-control"
                            />
                            <p
                                style={{ color: "red", fontWeight: "bold" }}
                                className="warning"
                            ></p>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password">كلمة السر</label>
                            <input
                                type="password"
                                required
                                minLength="10"
                                maxLength="28"
                                placeholder="كلمة السر"
                                className="form-control"
                            />
                            <p
                                style={{ color: "red", fontWeight: "bold" }}
                                className="warning"
                            ></p>
                        </div>

                        <div className="d-grid">
                            <input
                                type="submit"
                                className="btn btn-youth"
                                value="تسجيل الحساب"
                            />
                        </div>
                        <p className="text-left mt-2">
                            <Link
                                className="me-2"
                                to="/signin"
                                style={{ fontWeight: "bold" }}
                            >
                                لدي حساب
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
