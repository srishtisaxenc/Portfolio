import ExperienceCard from "./ui/ExperienceCard";

const Experience = () => {
  

  // const college = [`Computer Science and Engineering`, `CGPA of: 8.3/10`];
  // const school = [`Saroj Convent ,Tikamgarh`, `Percentage : 87%`];
  const education = [
    {
      name : "B.Tech - Vellore Institute of Technology, Bhopal, Madhya Pradesh, India"
    },
    {
      name : "Class 12th - Saroj Convent ,Tikamgarh, Madhya Pradesh, India"
    }
  ]

  return (
    <div
      id="education"
      className="mx-auto flex flex-col justify-center gap-8 p-4 text-center md:items-center  md:justify-between lg:max-w-7xl"
    >
      <h1 className="py-6 text-3xl font-bold text-primary md:text-4xl ">
        Education
      </h1>

      {/* Experience Cards */}
      <ExperienceCard
        education = {education}
      />
    </div>
  );
};

export default Experience;
