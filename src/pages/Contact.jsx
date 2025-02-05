import { balloons } from "balloons-js";
function Contact() {
  const handleBalloon = () => {
    balloons();
  };
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleBalloon}
        className="border bg-slate-200 cursor-pointer"
      >
        click me
      </button>
    </div>
  );
}

export default Contact;
