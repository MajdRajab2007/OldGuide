import team1 from "../images/team1.jpg"
import team2 from "../images/team2.jpg"
import team3 from "../images/team4.jpg"
import team4 from "../images/team5.jpg"
import team5 from "../images/team3.jpg"
import "./Slider.css"

function Slider() {
    return (
        <>
            <div
                id="carouselExampleInterval"
                className="carousel theSlider slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div
                        className=" sliderImg3 carousel-item active"
                        data-bs-interval="10000"
                    >
                        <img src={team1}

                            className="heightofImages "
                            alt="..."
                        />
                    </div>
                    <div className="sliderImg1 carousel-item" data-bs-interval="2000">
                        <img src={team2}

                            className="heightofImages "
                            alt="..."
                        />

                    </div>
                    <div className="sliderImg2 carousel-item">
                        <img src={team3}

                            className="heightofImages "
                            alt="..."
                        />

                    </div>
                    <div className="sliderImg4 carousel-item">
                        <img src={team4}

                            className="heightofImages "
                            alt="..."
                        />

                    </div>
                    <div className="sliderImg5 carousel-item">
                        <img src={team5}

                            className="heightofImages "
                            alt="..."
                        />

                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">السابق</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">التالي</span>
                </button>
            </div>
        </>
    );
}

export default Slider
