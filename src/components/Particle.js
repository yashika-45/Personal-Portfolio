import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        pointerEvents: "none", // allows clicks through
        zIndex: 0,
      }}
    >
      <Particles
        id="tsparticles"
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            color: {
              value: "#9017bf",
            },
            line_linked: {
              enable: false,
              opacity: 0.03,
            },
            move: {
              direction: "right",
              speed: 0.05,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
}

export default Particle;
