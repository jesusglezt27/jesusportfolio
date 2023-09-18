import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      code: 'https://github.com/jesusglezt27/hungryhives-server',
      demo: 'https://google.com'
    },
    {
      id: 2,
      src: reactParallax,
      code: 'https://github.com/jesusglezt27/hungryhives-server',
      demo: 'https://github.com/jesusglezt27/hungryhives-server'
    },
    {
      id: 3,
      src: navbar,
      code: 'https://github.com/jesusglezt27/hungryhives-server',
      demo: 'https://github.com/jesusglezt27/hungryhives-server'
    },
    {
      id: 4,
      src: reactSmooth,
      code: 'https://github.com/jesusglezt27/hungryhives-server',
      demo: 'https://github.com/jesusglezt27/hungryhives-server'
    },
    {
      id: 5,
      src: installNode,
      code: 'https://github.com/jesusglezt27/hungryhives-server',
      demo: 'https://github.com/jesusglezt27/hungryhives-server'
    },
    {
      id: 6,
      src: reactWeather,
      code: 'https://github.com/jesusglezt27/hungryhives-server',
      demo: 'https://github.com/jesusglezt27/hungryhives-server'
    },
  ];

  const redirectToCode = (codeUrl) => {
    window.open(codeUrl, "_blank"); // Abre el enlace en una nueva pestaña o ventana
  };


  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white pb-80"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, demo }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                        onClick={() => redirectToCode(demo)}
                >
                  Demo
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105"
                        onClick={() => redirectToCode(code)}                
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
