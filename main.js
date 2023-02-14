import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import "./style.css";

gsap.registerPlugin(Flip);

const navlinks = document.querySelectorAll(".nav-link");
const navlinkicons = document.querySelectorAll(".nav-link_icon");
const blob = document.querySelector(".blob");
const ball = document.querySelector(".ball");

navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Turn all navlinks white and the clicked navlink aqua
    gsap.to(navlinks, { fill: "white" });
    gsap.to(link, { fill: "#00d5ff" });

    // Remove glow from all navlinkicons and add glow to the clicked navlinkicon
    gsap.to(navlinkicons, {
      filter: "drop-shadow(0 0 0 #00d5ff)",
      duration: 0,
    });
    gsap.to(link.querySelector(".nav-link_icon"), {
      filter: "drop-shadow(0 0 0.75rem #00d5ff)",
    });

    // Move the blob
    const state = Flip.getState(blob);
    link.appendChild(blob);
    Flip.from(state, { duration: 0.3 });

    // Move the ball
    const state2 = Flip.getState(ball);
    link.appendChild(ball);
    Flip.from(state2, {
      duration: 1,
      ease: "elastic.out(0.5, 0.5)",
      delay: 0.02, // Delay the ball a bit so it doesn't start moving at the same time as the blob
    });
  });
});
