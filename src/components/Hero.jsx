import ReactTypingEffect from "react-typing-effect";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import TypedAnimantion from "./ui/TypedAnimantion";

const Hero = () => {
  return (
    <div
      id="about"
      className=" mx-auto	flex h-[100vh] flex-col justify-center overflow-hidden px-4 py-1 text-center md:flex-row md:items-center md:justify-between md:text-left lg:max-w-7xl"
    >
      <div className="py-4 md:w-1/2 md:flex-col">
        <ReactTypingEffect
          speed="300"
          typingDelay="150"
          eraseDelay="1000"
          className="py-1 text-5xl font-black text-primary md:text-7xl"
          text="Srishti Saxena"
        />
        <h2 className="py-1 text-3xl font-bold">Software Engineer</h2>
        <p className="py-1 text-xl md:w-3/4">
          I am a recent software engineering graduate deeply passionate about
          front-end development, mobile applications, and UI/UX design. My
          commitment lies in crafting software that seamlessly blends
          functionality with visually appealing and user-friendly interfaces.
          Specializing in creating engaging and responsive user experiences, I
          bring a unique blend of technical expertise and design thinking to
          every project. With a keen eye for detail and a dedication to staying
          abreast of the latest technologies, I am eager to contribute to
          innovative and impactful software development teams.
        </p>
        <div className="flex items-center justify-center gap-4 py-4 md:justify-start md:py-6">
          <a
            className="inline-flex items-center gap-2"
            href="https://github.com/srishtisaxenc"
          >
            <GoMarkGithub className="text-2xl" />
          </a>
          <a
            className="inline-flex items-center gap-2"
            href="https://www.linkedin.com/in/srishtiisaxena/"
          >
            <BsLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="relative whitespace-pre text-[.50rem] text-primary text-opacity-30 md:text-base">
          <TypedAnimantion />
        </div>
      </div>
    </div>
  );
};

export default Hero;
