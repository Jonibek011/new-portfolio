import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global duration for all elements
      once: true, // Elements will animate once
    });
  }, []);
  return (
    <section className="portfolio w-full h-auto ">
      <div className="custom-container w-full h-auto px-[3%]">
        <h1 className="text-4xl font-semibold text-center my-14">Last works</h1>
        <div className="portfolios   sm:grid sm:grid-cols-2 sm:grid-rows-5 ">
          <div className="w-full h-72 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-[url('https://media1.thehungryjpeg.com/thumbs2/ori_44683_d83059469a5c665d62121b6d6bc115f487e6ea31_portfolio-design.jpg')] bg-center bg-cover"></div>
          <div className="w-full h-72 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-[url('https://i.pinimg.com/originals/f5/ff/e4/f5ffe4f0b2b717c3b79c1587db3cf716.jpg')]  "></div>
          <div className="w-full h-72 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-[url('https://media1.thehungryjpeg.com/thumbs2/ori_11510_e30ecd29d4360f4836cf36885c23116900b3c290_creative-portfolio.jpg')]  "></div>
          <div className="w-full h-72 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-[url('https://images.examples.com/wp-content/uploads/2017/11/Editable-Graphic-Design-Portfolio.jpg')]  "></div>
          <div className="w-full h-72 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-[url('https://www.oso-web.com/wp-content/uploads/2018/04/Image_1-4.jpeg')]  "></div>
          <div className="w-full h-72 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-[url('https://i.etsystatic.com/34412533/r/il/4d7802/3907612986/il_570xN.3907612986_j6vr.jpg')]  "></div>
          <div className="w-full h-72 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-[url('https://media.gettyimages.com/id/1133611435/photo/office-with-white-board.jpg?s=612x612&w=gi&k=20&c=DQ4bjR66DbZ4C3nJxeUg4coYgDyYGO2UdJh26ed7Y6I=')]  ">
            hello
          </div>
          <div className="w-full h-72 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-[url('https://wallpaperaccess.com/full/5651981.jpg')]  "></div>
          <div className="w-full h-72 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-[url('https://www.imtglobalinc.com/wp-content/uploads/2020/07/AdobeStock_164909094-scaled.jpeg')]  "></div>
          <div className="w-full h-72 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-[url('https://www.imtglobalinc.com/wp-content/uploads/2020/07/AdobeStock_164909094-scaled.jpeg')]  "></div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
