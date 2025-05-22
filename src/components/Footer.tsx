import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-4 justify-center m-10">
      <div className="flex items-center justify-center space-x-5">
        <a
          href="https://www.instagram.com/rachels.rchive"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image width={50} height={50} alt="" src="/icons8-instagram.svg" />
        </a>
        
      </div>
      <p className="flex justify-center">made with ☕️ by rachel</p>
    </footer>
  );
};
export default Footer;
