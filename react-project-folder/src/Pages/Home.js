import Navbar from "../components/Navbar"
import Slider from "../components/Slider"


    function Home(props)
 {

    return (
        <>
            <Navbar />
            <Slider />
        {props.children}
        </>
    )
 }

 export default Home
