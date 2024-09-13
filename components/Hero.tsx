import Image from "next/image";
import ParticlesBackground from "./ParticlesBackground";
import { FaGithub, FaDev, FaYoutube,FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <header id="home" className="relative h-fit py-10">
      <ParticlesBackground />
      <div className="relative flex justify-between max-w-[1400px] mx-auto items-center h-full w-[91%] max-md:flex-col">
        <div className="flex flex-col justify-center text-white flex-1 max-md:order-2 max-md:text-center">
          <h2 className="font-bold md:text-4xl text-3xl mb-2">
            Hi I'm Bariul a Full Stack
          </h2>
          <h1 className="xl:text-6xl lg:text-8xl md:text-7xl text-6xl text-yellow-500 font-bold mb-5">
           Web Developer
          </h1>
          <span className="md:w-3/4 mb-5">
          I am Bariul, a graduate with a strong foundation in Data Science and versatile Web Development expertise, specializing in the MERN stack and WordPress. Proficient in WordPress development, including Gutenberg Editor, Elementor Pro, other page builders, and theme customization. Skilled in SEO, including on-page optimization, backlink creation, local SEO, and technical SEO, with experience in writing SEO-friendly articles. {" "}
            <Link href={"#contact"}>
              <span className="text-yellow-500 underline text-sm">
                Contact Me &#8594;
              </span>
            </Link>
          </span>

          <div className="flex gap-5 text-yellow-500 text-4xl max-md:justify-center">
        <a href="https://www.linkedin.com/in/md-bariul-munshi/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
       </a>
          <a href="https://github.com/bariulmunshi" target="_blank" rel="noopener noreferrer">
         <FaGithub />
        </a>
        <a href="https://youtube.com/@mdbariulmunshi" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
           </a>
          </div>
        </div>

        <div className="flex flex-1 justify-end max-md:order-1 max-md:mb-3">
          <Image
            src={"/bariuldev.png"}
            width={450}
            height={450}
            role="img"
            aria-label="Antonio's Image"
            alt="Antonio's Image"
            className="md:justify-self-end max-md:w-96"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
