import React from "react";
import hungry from "../assets/portfolio/hungry.png";
import travelx from "../assets/portfolio/travelx.png";
import hackman from "../assets/portfolio/hackmans.png";
import techbooks from "../assets/portfolio/techbooks.png";
import moodster from "../assets/portfolio/moodster.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: moodster,
      backend: 'https://github.com/jesusglezt27/moodster-server',
      frontend: 'https://github.com/jesusglezt27/moodster-client',
      demo: 'https://moodster.netlify.app/'
    },
    {
      id: 2,
      src: hungry,
      backend: 'https://github.com/jesusglezt27/hungryhives-server',
      frontend: 'https://github.com/jesusglezt27/hungryhives-client',
      demo: 'https://elaborate-tapioca-bdef7a.netlify.app/'
    },
    {
      id: 3,
      src: travelx,
      backend: 'https://github.com/jesusglezt27/travelx-server',
      frontend: 'https://github.com/jesusglezt27/travelx-client',
      demo: 'https://spiffy-nougat-f83cee.netlify.app/'
    },
    {
      id: 4,
      src: techbooks,
      backend: 'https://github.com/jesusglezt27/techbook-server',
      frontend: 'https://github.com/jesusglezt27/techbook-client',
      demo: 'https://charming-vacherin-08744a.netlify.app/'    
    },
    {
      id: 5,
      src: hackman,
      demo: 'https://glowing-gelato-b2a9ef.netlify.app/'
    },
  ];

  const redirectToCode = (codeUrl) => {
    window.open(codeUrl, "_blank"); // Abre el enlace en una nueva pestaña o ventana
  };

  return (
    <div name='portfolio' className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white pb-80">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
  
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, backend, frontend, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {backend && (
                  <button
                    className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 hover:shadow-lg"
                    onClick={() => redirectToCode(backend)}
                  >
                    Backend
                  </button>
                )}
                {frontend && (
                  <button
                    className="px-6 py-3 w-1/2 m-2 duration-200 hover:scale-105 hover:shadow-lg"
                    onClick={() => redirectToCode(frontend)}
                  >
                    Frontend
                  </button>
                )}
              </div>
              {demo && (
                <div className="flex justify-center">
                  <button
                    className="px-6 py-3 duration-200 hover:scale-105 hover:shadow-lg"
                    onClick={() => redirectToCode(demo)}
                  >
                    Demo
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );  
};

export default Portfolio;
