import Logo from "../Logo/Logo";
import Social from "../Social/Social";

const ContactSection = () => {
  return (
    <div
      className="bg-white   flex w-full
    flex-col-reverse lg:flex-row justify-between
    dark:bg-gray-800
    "
    >
      <div className="lg:p-12 p-6 lg:w-2/3 dark:bg-green-900 bg-green-700">
        <Logo />
        <p className="text-sm text-white
        ">
          © 2023 - {new Date().getFullYear()}. Designed by Somtochukwu Anunobi.
          All rights reserved.
        </p>
      </div>
      <div className="   lg:p-12 p-6 lg:w-1/3 lg:items-end justify-center flex items-center flex-col space-y-2
     bg-green-100
      ">
        <p className="text-sm">Reach me on</p>
        <Social invert={false} />
      </div>
    </div>
  );
};

export default ContactSection;
