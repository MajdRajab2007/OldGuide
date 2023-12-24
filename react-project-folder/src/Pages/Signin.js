import { Link } from "react-router-dom";
import "./Signup.css";
import logo from "../images/logo.png";

function Signin() {
    return (
        <>
            <div>
                <div className="login template d-flex vh-100 ms-5 align-items-center w-100  backgroundForForm">
                    <div
                        className="40-w p-5 rounded  formContainer"
                        style={{ height: "70%" }}
                    >
                        <form
                            action="http://127.0.0.1:8000/login"
                            method="POST"
                        >
                            <img
                                className="mt-5 logoAct "
                                src={logo}
                                alt="sada"
                            />
                            <h3 className="text-center mb-5">تسجيل الدخول</h3>

                            <div className="mb-4">
                                <label htmlFor="email" className="mb-2">
                                    البريد الإلكتروني
                                </label>
                                <input
                                    name="email"
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
                            <div className="mb-3">
                                <label htmlFor="password" className="mb-2">
                                    كلمة السر
                                </label>
                                <input
                                    name="password"
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
                                <Link className="btn btn-youth">
                                    تسجيل الدخول
                                </Link>
                            </div>
                            <p className="text-left mt-2">
                                لا تملك حساب؟
                                <Link className="me-2" to="/signup">
                                    إنشاء حساب جديد
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signin;
