import snappy from "../assets/snappy.png";
import DevLog from "../assets/DevLog.png";
import developer from "../assets/developer.png";
import { default as blob } from "../assets/blob.svg";
import data from "../data";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="projects mx-auto flex flex-col justify-center gap-12 p-4 text-center md:items-center md:justify-between lg:max-w-7xl"
    >
      <h1 className="py-10 text-3xl font-bold text-primary md:text-4xl ">
        Projects
      </h1>
      {/* RECENT PROJECTS */}
      <ProjectCard
        title="DevLog"
        subtitle="Full-stack "
        description="DevLog is a comprehensive development log and project management tool. With DevLog, you can effortlessly document your coding journey, track progress, and share updates with team members and stakeholders. DevLog seamlessly integrates with popular version control systems like Git, allowing you to link commits directly to your development log."
        picture={DevLog}
        github="https://github.com/srishtisaxenc/DevLog"
        tools={data.project3}
      />
      <ProjectCard
        title="Snappy"
        subtitle="Full-stack "
        description="A cutting-edge chat application designed to provide you with a seamless and secure messaging experience. The clean interface ensures that users of all levels can easily navigate the application and start chatting within seconds."
        picture={snappy}
        github="https://github.com/srishtisaxenc/Snappy-"
        tools={data.project2}
        isImageOnLeft={true}
      />
      <ProjectCard
        title="FlotTech"
        subtitle="Full-stack "
        description="FloatTech is an innovative and powerful open-source platform designed to empower developers in creating robust and scalable enterprise level web applications. it is built on a scalable architecture that ensures your web applications can handle high traffic."
        picture={developer}
        github="https://github.com/srishtisaxenc/FloatTech"
        tools={data.project4}
      />
      {/* OTHER PROJECTS */}
      <img className="mx-auto w-1/2 md:w-1/6" src={blob} alt="blob" />
    </div>
  );
};

export default Projects;
