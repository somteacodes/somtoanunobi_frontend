 
import "./fallback.css";
const Fallback = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Fallback;
