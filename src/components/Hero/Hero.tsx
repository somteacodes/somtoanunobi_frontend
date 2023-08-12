import { ArrowDownIcon } from "@heroicons/react/24/solid";
import heroBackground from "../../assets/hero.svg";
import avatar from "../../assets/somto_avatar.jpg";
import Social from "../Social/Social";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <section
      className="relative h-[100vh] w-full pt-16
    bg-no-repeat bg-cover bg-center
    bg-green-50 dark:bg-gray-900
    
    "
      // style={{
      //   backgroundImage: `url(${heroBackground})`,
      // }}
    >
      <div className="flex flex-col h-full w-full  justify-between">
        <section
          className="flex flex-col items-center justify-center   w-full px-12   text-center 
            lg:text-right  h-full"
        >
          <div className="xl:w-2/5 md:w-1/2">
            <div
              className="flex flex-col w-full justify-center items-center space-y-4
          lg:flex-row lg:justify-between 
            "
            >
              <img
                src={avatar}
                alt=""
                className="rounded-full  h-32 w-32 object-cover "
              />
              <div
                className="flex flex-col   space-x-12 w-full lg:w-10/12  
          
            "
              >
                <p
                  className="text-lg text-green-700 font-bold
                dark:text-green-200
                "
                >
                  I am Somtochukwu ANUNOBI
                </p>
                <p
                  className="text-sm text-gray-700 font-semibold
                dark:text-gray-50
                "
                >
                  /So-mu-tow-chew-ho/
                </p>
                <p
                  className="text-2xl xl:text-4xl text-gray-900 font-bold capitalize  whitespace-nowrap dark:text-gray-50
                "
                >
                  A fullstack developer
                </p>
              </div>
            </div>
            <p className="text-sm xl:text-base text-gray-700 mt-6
                   dark:text-gray-200
            ">
              It started with a passion for technology and a desire to learn,
              now I am a fullstack developer with a passion for building web
              applications and solving problems.
            </p>
            <div className="flex justify-end mt-3">
              {/* <Social invert={false} /> */}
            </div>
          </div>
        </section>
        <div className="flex justify-center w-full">
          <Link
            to={"work"}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <ArrowDownIcon className="h-6 w-6 text-gray-900 animate-bounce cursor-pointer" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
