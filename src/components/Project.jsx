import { Link } from "react-router-dom";
function Project({ url, bgURL, title }) {
  return (
    <div className="overflow-hidden w-full h-72 lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <div
        className={`relative div w-full h-72 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-[url(${bgURL})] bg-center bg-cover group`}
      >
        <div className="absolute bottom-0 left-[50%]  opacity-0 group-hover:bottom-[45%] group-hover:opacity-100 transition-all duration-300  translate-x-[-50%] flex flex-col gap-4">
          <span className="text-md lg:text-lg xl:text-xl 2xl:text-2xl text-center text-white">
            {title}
          </span>
          <Link
            to={url}
            type="button"
            className=" border-2 px-3 border-white text-white hover:text-orange-400 hover:border-orange-400 rounded-md max-w-[100px] mx-auto"
          >
            Visit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
