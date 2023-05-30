import React, { useCallback, useEffect, useState } from "react";
import ResumeFile from "../../Resume/Aditya's Resume.pdf";
import "./Home.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import HomePage from "../../images/HomePage.json";
import astronaut from "../../images/119142-astronaut-blue-rocket.json";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdFileDownload } from "react-icons/md";
import HomeDB from "../../Database/HomeDB.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

const Home = () => {
  const [data, setData] = useState({});
  const [text, setText] = useState([]);
  const theme = useSelector((state) => state.theme.value);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  useEffect(() => {
    setData(HomeDB);
    setText(data.text_group);
    AOS.init();
  }, [text, data]);
  const handleDownloadButton = () => {
    const link = document.createElement("a");
    link.href = ResumeFile;
    link.download = "Aditya's Resume.pdf";
    link.click();
  };
  

  return (
    <>
      <div
        className={`home-page ${theme ? "home-page-dark" : "home-page-light"}`}
      >
        {theme ? (
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#4D455D",
                },
                links: {
                  color: "#191825",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  directions: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 60,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "star",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        ) : (
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#4D455D",
                },
                links: {
                  color: "#191825",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  directions: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 60,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
        <div className="container mobile-margin">
          <div className="row d-flex justify-content-center">
            <div
              className="col-lg-6  d-flex justify-content-center flex-column align-items-start px-5 "
              data-aos="fade-right"
            >
              <div className="text-contant ">
                <h3
                  className={
                    theme ? "home-firsttext-dark " : "home-firsttext-light"
                  }
                >
                  {/* Hello */}
                  {data.text}
                </h3>
                <h1 className={`d-flex  flex-row align-items-center `}>
                  {/* I'm */}
                  <span
                    className={
                      theme ? "home-secondtext-dark" : "home-secondtext-light"
                    }
                  >
                    {data.static_text}
                  </span>

                  <span className="text-animated">
                    <Typewriter
                      options={{
                        strings: text,

                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </h1>
              </div>{" "}
              <p
                className={`home-description ${
                  theme ? "home-description-dark " : "home-description-light"
                }`}
              >
                {data.home_description}
              </p>
              <button
                onClick={handleDownloadButton}
                className={`download-Resume-button ${
                  theme ? "download-Resume-button-dark" : "download-Resume-button-light"
                }`}
              >
                <MdFileDownload
                  style={{ fontSize: "1.2rem" }}
                  className="download-animation-icon"
                />{" "}
                <span className="download-resume-text">
                  {data.download_resume_text}
                </span>
              </button>
              <ul className="social-media-component mt-5">
                <li className={`social-media-tag `}>
                  <a
                    href={data.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-media-handle ${
                      theme
                        ? "social-media-handle-dark"
                        : "social-media-handle-light"
                    }`}
                  >
                    <BsInstagram />
                  </a>
                </li>
                <li className={`social-media-tag`}>
                  <a
                    href={data.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-media-handle ${
                      theme
                        ? "social-media-handle-dark"
                        : "social-media-handle-light"
                    }`}
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li className={`social-media-tag `}>
                  <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-media-handle ${
                      theme
                        ? "social-media-handle-dark"
                        : "social-media-handle-light"
                    }`}
                  >
                    <BsGithub />
                  </a>
                </li>
                <li className={`social-media-tag `}>
                  <a
                    href={data.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-media-handle ${
                      theme
                        ? "social-media-handle-dark"
                        : "social-media-handle-light"
                    }`}
                  >
                    <BsLinkedin />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 d-flex justify-content-center flex-column align-items-center">
              {theme ? (
                <Lottie
                  animationData={astronaut}
                  className="Home-lottie-image"
                />
              ) : (
                <Lottie
                  animationData={HomePage}
                  className="Home-lottie-image"
                />
              )}
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Home;
