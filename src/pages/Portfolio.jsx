import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Project from "../components/Project";

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global duration for all elements
      once: true, // Elements will animate once
    });
  }, []);

  const lastWorks = [
    {
      url: "https://jonibek-unsplash.netlify.app",
      bgURL:
        "https://media1.thehungryjpeg.com/thumbs2/ori_44683_d83059469a5c665d62121b6d6bc115f487e6ea31_portfolio-design.jpg",
      title: "Unsplash site. You can find out 100 000 pictures",
    },
    {
      url: "https://jonibek-uzum-market-95fa68.netlify.app",
      bgURL:
        "https://i.pinimg.com/originals/f5/ff/e4/f5ffe4f0b2b717c3b79c1587db3cf716.jpg",
      title: "E-commers site. This is copy site from 'Uzum market' in UZB",
    },
    {
      url: "https://zingy-peony-4c47c6.netlify.app",
      bgURL:
        "https://media1.thehungryjpeg.com/thumbs2/ori_11510_e30ecd29d4360f4836cf36885c23116900b3c290_creative-portfolio.jpg",
      title: "Coffee site. You can choose your favourite coffee",
    },
    {
      url: "https://jonibek-dev-portfolio.netlify.app",
      bgURL:
        "https://images.examples.com/wp-content/uploads/2017/11/Editable-Graphic-Design-Portfolio.jpg",
      title: "Portfolio site. In this site you can see my older portfolio",
    },
    {
      url: "https://jonibek-to-do-list.netlify.app",
      bgURL:
        "https://www.oso-web.com/wp-content/uploads/2018/04/Image_1-4.jpeg",
      title: "To do list. This is CRUD project",
    },
    {
      url: "https://user-create1.netlify.app",
      bgURL:
        "https://thumbs.dreamstime.com/b/user-profile-icon-abstract-blue-background-illustration-dark-blue-digital-texture-grunge-elegant-paint-modern-design-concept-user-167078251.jpg",
      title: "In this site you can create your own user",
    },
    {
      url: "https://jonibek-rent-car.netlify.app",
      bgURL:
        "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Rental car. This site created by copying exist site",
    },
    {
      url: "https://https://jonibek-coffee.netlify.app/",
      bgURL: "./proxy-image.jpg",
      title: "This is a coffee break site",
    },
  ];

  return (
    <section className="portfolio w-full h-auto">
      <div className="custom-container w-full h-auto px-[3%]">
        <h1 className="text-4xl font-semibold text-center my-14 text-white">
          Last works
        </h1>
        <div className="portfolios   sm:grid sm:grid-cols-2 sm:grid-rows-5 ">
          {/* ========================================================================== */}
          {lastWorks.map((work) => {
            return (
              <Project
                key={work.title}
                url={work.url}
                bgURL={work.bgURL}
                title={work.title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
