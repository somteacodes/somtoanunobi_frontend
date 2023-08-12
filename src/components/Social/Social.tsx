import githubLogo from "../../assets/github.svg";
import twitterLogo from "../../assets/twitter.svg";
import emailLogo from "../../assets/email.svg";
const Social = ({ invert = false }: { invert: boolean }) => {
    const invertColors = {
        filter: `invert(${invert ? 1 : 0})`,
    }
  return (
    <div className="flex space-x-3 ">
      <a
        href="https://github.com/somteacodes"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:shadow-lg hover:-translate-y-1 transform transition duration-300 ease-in-out"
      >
        <img
          src={githubLogo}
          style={invertColors}
          className="w-6 h-6 cursor-pointer   "
        />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:shadow-lg hover:-translate-y-1 transform transition duration-300 ease-in-out"
      >
        <img
          src={twitterLogo}
          style={invertColors}
          className="w-6 h-6 cursor-pointer   "
        />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className=" hover:shadow-lg hover:-translate-y-1 transform transition duration-300 ease-in-out"
      >
        <img
          src={emailLogo}
          style={invertColors}
          className="w-6 h-6 cursor-pointer   "
        />
      </a>
    </div>
  );
};

export default Social;
