import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Signup.css";
import logo from "../images/logo.png";

function Signup() {
    let [name, setName] = useState("");
    let navigate = useNavigate();
    let [lName, setLname] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [log, setLog] = useState(false)
    // setEmail("adham@gmail.com")
    console.log(email);
    // const formSubmit = () => {
    //     fetch("http://127.0.0.1:8000/api/users", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "text/plain",
    //         },
    //         body: JSON.stringify({
    //             name: name,
    //             lName: lName,
    //             email: email,
    //             password: password,
    //         }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             navigate("/signin");
    //         });
    // };

            

    return (
        <>
            <img className="  logoAct" src={logo} alt="sada" />
            <div className="login template d-flex vh-100 ms-5 align-items-center w-100  backgroundForForm">
                <div className="40-w p-5 rounded  formContainer">
                    <form  action="http://127.0.0.1:8000/api/users" method="POST">
                        <h3 className="text-center">تسجيل حساب جديد</h3>
                        <div className="mb-2 mt-3">
                            <label htmlFor="name">الاسم</label>
                            <input
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                name="name"
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
                                onChange={(e) => {
                                    setLname(e.target.value);
                                }}
                                name="lName"
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
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                required
                                type="email"
                                name="email"
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
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                type="password"
                                required
                                name="password"
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
