import React, { createContext, useState } from "react";

const ThreadContext = createContext();

const colors = [
  "#3f51b5",
  "#f50057",
  "#3d8769",
  "#87673d",
  "#874f84",
  "#ee430d",
  "#4caf50",
];

function ThreadProvider(props) {
  const [threadNumber, setThreadNumber] = useState("");
  const [progress, setProgress] = useState(0);
  const [threadColors, setThreadColors] = useState([]);
  const [created, setCreated] = useState(false);
  const [running, setRunning] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [terminated, setTerminated] = useState(false);

  console.log(threadColors);

  const runThread = () => {
    setRunning(true);
    setCreated(false);
    setBlocked(false);
    setTerminated(false);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setRunning(false);
          return;
        }
        const diff = Math.random() * 1;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);
  };

  // HANDLE RUNNING
  const runOne = (thread) => {
    console.log(`Running ${thread} from Context`);
  };

  const runTwo = (thread) => {
    console.log(`Running ${thread} from Context`);
  };

  const runThree = (thread) => {
    console.log(`Running ${thread} from Context`);
  };

  const runFour = (thread) => {
    console.log(`Running ${thread} from Context`);
  };

  const runFive = (thread) => {
    console.log(`Running ${thread} from Context`);
  };

  const runSix = (thread) => {
    console.log(`Running ${thread} from Context`);
  };

  const runSeven = (thread) => {
    console.log(`Running ${thread} from Context`);
  };

  // HANDLE SLEEPING
  const sleepOne = (thread) => {
    console.log(`Sleeping ${thread} from Context`);
  };

  const sleepTwo = (thread) => {
    console.log(`Sleeping ${thread} from Context`);
  };

  const sleepThree = (thread) => {
    console.log(`Sleeping ${thread} from Context`);
  };

  const sleepFour = (thread) => {
    console.log(`Sleeping ${thread} from Context`);
  };

  const sleepFive = (thread) => {
    console.log(`Sleeping ${thread} from Context`);
  };

  const sleepSix = (thread) => {
    console.log(`Sleeping ${thread} from Context`);
  };

  const sleepSeven = (thread) => {
    console.log(`Sleeping ${thread} from Context`);
  };

  // HANDLE KILLING
  const killOne = (thread) => {
    console.log(`Killing ${thread} from Context`);
  };

  const killTwo = (thread) => {
    console.log(`Killing ${thread} from Context`);
  };

  const killThree = (thread) => {
    console.log(`Killing ${thread} from Context`);
  };

  const killFour = (thread) => {
    console.log(`Killing ${thread} from Context`);
  };

  const killFive = (thread) => {
    console.log(`Killing ${thread} from Context`);
  };

  const killSix = (thread) => {
    console.log(`Killing ${thread} from Context`);
  };

  const killSeven = (thread) => {
    console.log(`Killing ${thread} from Context`);
  };

  const createThread = (num) => {
    setCreated(true);
    setRunning(false);
    setBlocked(false);
    setTerminated(false);
    setThreadNumber("");
    setThreadNumber(num);
    const selectedColors = createColorArray(num);
    setThreadColors(shuffle(selectedColors));
  };

  const pauseSimulation = () => {
    console.log("pausing things 1");
    setBlocked(true);
    setCreated(false);
    setRunning(false);
    setTerminated(false);
    console.log("pausing things");
  };

  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const createColorArray = (length) => {
    let colorArray = [];
    for (let i = 0; i < length; i++) {
      colorArray.push(colors[i]);
    }
    return colorArray;
  };

  const value = {
    threadNumber,
    progress,
    threadColors,
    createThread,
    runThread,
    created,
    running,
    blocked,
    terminated,
    pauseSimulation,
    shuffle,
    runOne,
    runTwo,
    runThree,
    runFour,
    runFive,
    runSix,
    runSeven,
    sleepOne,
    sleepTwo,
    sleepThree,
    sleepFour,
    sleepFive,
    sleepSix,
    sleepSeven,
    killOne,
    killTwo,
    killThree,
    killFour,
    killFive,
    killSix,
    killSeven,
  };

  return (
    <ThreadContext.Provider value={value}>
      {props.children}
    </ThreadContext.Provider>
  );
}

export { ThreadContext, ThreadProvider };

// const runThread = () => {
//   const timer = setInterval(() => {
//     setProgress((oldProgress) => {
//       if (oldProgress === 100) {
//         return;
//       }
//       const diff = Math.random() * 0.7;
//       return Math.min(oldProgress + diff, 100);
//     });
//   }, 50);
// };
