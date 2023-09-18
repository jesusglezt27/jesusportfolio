import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pb-44"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
        I'm an experienced Full Stack developer with expertise in modern web technologies, entrepreneurial spirit, and a passion for creative tech solutions. I excel in clean coding, scalability, and have a track record of tackling challenging projects.
        </p>

        <br />

        <p className="text-xl">
        As an entrepreneur, I've founded startups and managed teams. I thrive on innovative projects and seek opportunities to create impactful solutions. If you're looking for an experienced Full Stack developer with an entrepreneurial mindset, don't hesitate to reach out for effective tech solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
