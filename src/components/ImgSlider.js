import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Noithat from "../assets/images/slideshow_5.jpg";
import Noithat1 from "../assets/images/slideshow_1_master.jpg";
function ImgSlider(){

  const settings = {
  autoplay: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
};
    return(
        <div className="slider-header">
            <Slider {...settings}>
                <div>
                    <img src={Noithat} alt="Banner"/>
                </div>
                <div>
                    <img src={Noithat1} alt="Banner"/>
                </div>
            </Slider>
        </div>
    )
}
export default ImgSlider;