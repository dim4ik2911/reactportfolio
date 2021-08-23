import scimx_image from "../images/project-images/scimx.png";
import pomodoro_image from "../images/project-images/pomodoro.png";
import meditation_image from "../images/project-images/meditationapp.png";
import noughtsandcrosses_image from "../images/project-images/noughtsandcrosses.png";
import rickandmortyapi_image from "../images/project-images/rickandmortyapi.png";
import todoreact_image from "../images/project-images/todoreact.png";
import vinylrecords_image from "../images/project-images/vinylrecords.png";

const projectsData = [
  {
    name: "Sci-Mc Training",
    githubHref: "https://github.com/nology-tech/sci-mx",
    websiteHref: "https://vinyl-records-835b2.web.app",
    img: scimx_image,
    description: `Sci-Mx Training App is built during 4 weeks as part of our study at _nology.io in a group of 8 people. During the project we were practising Agile methodology and pair programming. Each Friday reviewing our progress and presenting the achieved work to the companies representative.`,
  },
  {
    name: "Pomodoro App",
    githubHref: "https://github.com/dim4ik2911/pomodoro",
    websiteHref: "https://dim4ik2911.github.io/pomodoro/",
    img: pomodoro_image,
    description: `Pomodoro App includes 2 buttons on the top "Pomodoro"(25 minutes) and "Break"(5 minutes), the timer in the center, start button below the timer(changes to pause), and in the bottom right corner there is a button to play music(changes to pause).`,
  },
  {
    name: "Meditation App",
    githubHref: "https://github.com/nology-tech/sci-mx",
    websiteHref: "https://dim4ik2911.github.io/meditationapp/",
    img: meditation_image,
    description: `Breathing meditation app that allows a person to follow a circle
      that grows and shrinks depending on the breath(9 seconds per
      breathe). The meditation can be stopped and restarted. By
      default it is 3 minutes.`,
  },
  {
    name: "Noughts&&Crosses",
    githubHref: "https://github.com/dim4ik2911/noughtsandcrosses",
    websiteHref: "https://dim4ik2911.github.io/noughtsandcrosses/",
    img: noughtsandcrosses_image,
    description: `Noughts and Crosses has a classic grid 3*3. After the first
    round there are the scores on the sides of the grid. The game
    lasts until someone will get 5 points(confetti for the winner),
    and after you can restart and play again.`,
  },
  {
    name: "Rick and Morty API",
    githubHref: "https://github.com/dim4ik2911/rickandmorty",
    websiteHref: "https://dim4ik2911.github.io/rickandmorty/",
    img: rickandmortyapi_image,
    description: `The project is made using Rick and Morty API. You can find the
    characher using search bar. The maximum amound of cards to be
    displayed is 20 due to API. Total amount of characters: 600. You
    can see the photo, name, status, species and location of the
    character.`,
  },
  {
    name: "To Do List",
    githubHref: "https://github.com/dim4ik2911/todoreact",
    websiteHref: "https://dim4ik2911.github.io/todoreact/",
    img: todoreact_image,
    description: `Simple To Do List made by using React. You can write your task,
    click add button and it will be added to the list. After you can
    delete the task using "X" button. In top left corner there is a
    button that allows to change between light and dark mode of the
    app.`,
  },
  {
    name: "Vinyl Records Store",
    githubHref: "https://github.com/dim4ik2911/vinylrecords",
    websiteHref: "https://vinyl-records-835b2.web.app",
    img: vinylrecords_image,
    description: `Vinyl Records Online Store is made using React. It contains from
    5 components. Data was created in separated file. Navigation
    made using React Routing. Functionality is created using props
    and state hook. For deployment was used Firebase.`,
  },
];

export default projectsData;
