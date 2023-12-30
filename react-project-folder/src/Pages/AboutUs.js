import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import logo from "../images/logo.png"
import "./AboutUs.css"

function AboutUs() {


    return (
        <>


                <div className="aboutus mt-4">
                    <div className="container">
                    <div className="row mt-3 headOfAbout">
                        <div className=" col-4" style={{display:"flex", alignItems:"center"}}>
                            <img className="teamlogo" src={logo} alt=".." />

                        </div>
                        <div className="col-7" style={{display:"flex", alignItems:"center"}}><p className="whous ">من نحن؟</p></div>
                    {/* <div className="col-1 me-auto">
                            <Link to="/" className="btn backHome">الصفحة الرئيسية</Link>
                    </div> */}
                    </div>
                        <h4 className="col-12 mt-4 defineWhoAreUs ms-4">دليل الشباب: شركة برمجية ناشئة تهدف لخلق المهارات البرمجية عن طريق مبدأ تدريب اليافعين بالفياعفين أنفسهم</h4>
                    <div className="row mt-3">
                            <div className="cardAbout col-lg-4 col-md-6 col-12">
                                <p className="aboutText">                            دليل الشباب: شركة برمجية ناشئة تهدف لخلق المهارات البرمجية عن طريق مبدأ تدريب اليافعين بالفياعفين أنفسهمدليل الشباب: شركة برمجية ناشئة تهدف لخلق المهارات البرمجية عن طريق مبدأ تدريب اليافعين بالفياعفين أنفسهم
</p>                            </div>
                            <div className="cardAbout col-lg-4 col-md-6 col-12">
                                <p className="aboutText">                            دليل الشباب: شركة برمجية ناشئة تهدف لخلق المهارات البرمجية عن طريق مبدأ تدريب اليافعين بالفياعفين أنفسهمدليل الشباب: شركة برمجية ناشئة تهدف لخلق المهارات البرمجية عن طريق مبدأ تدريب اليافعين بالفياعفين أنفسهم
</p>                            </div>
                            <div className="cardAbout col-lg-4 col-md-6 col-12">
                                <p className="aboutText">                            دليل الشباب: شركة برمجية ناشئة تهدف لخلق المهارات البرمجية عن طريق مبدأ تدريب اليافعين بالفياعفين أنفسهمدليل الشباب: شركة برمجية ناشئة تهدف لخلق المهارات البرمجية عن طريق مبدأ تدريب اليافعين بالفياعفين أنفسهم
</p>                            </div>
                    </div>


                    </div>
                    <div style={{clear:"both"}}></div>
                    <Link to="/" className="btn backHome">الصفحة الرئيسية</Link>
                </div>


        </>
    )
}

export default AboutUs
