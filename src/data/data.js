import scimx_image from "../images/project-images/scimx.png";
import pomodoro_image from "../images/project-images/pomodoro.png";
import meditation_image from "../images/project-images/meditationapp.png";

const projectsData = [
  {
    name: "Sci-Mc Training",
    img: scimx_image,
    description: `Sci-Mx Training App is built during 4 weeks as part of our study at _nology.io in a group of 8 people. During the project we were practising Agile methodology and pair programming. Each Friday reviewing our progress and presenting the achieved work to the companies representative.`,
  },
  {
    name: "Pomodoro App",
    img: pomodoro_image,
    description: `Pomodoro App includes 2 buttons on the top "Pomodoro"(25 minutes) and "Break"(5 minutes), the timer in the center, start button below the timer(changes to pause), and in the bottom right corner there is a button to play music(changes to pause).`,
  },
  {
    name: "Meditation App",
    img: meditation_image,
    description: `Breathing meditation app that allows a person to follow a circle
      that grows and shrinks depending on the breath(9 seconds per
      breathe). The meditation can be stopped and restarted. By
      default it is 3 minutes.`,
  },
];

export default projectsData;
