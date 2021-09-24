import React, { useEffect, createContext, useState } from "react";

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
  const [threads, setThreads] = useState([]);
  const [progress, setProgress] = useState(0);
  const [created, setCreated] = useState(false);
  const [running, setRunning] = useState({});
  const [blocked, setBlocked] = useState(false);
  const [terminated, setTerminated] = useState(false);
  const [processThreads, setProcessThreads] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(() => {
    setProcessThreads(threads);
  }, [threads]);

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

  const createThread = (num) => {
    const COLORS = shuffle(createColorArray(num));
    const threads = [];
    for (let i = 0; i < num; i++) {
      threads.push({
        threadID: i + 1,
        color: COLORS[i],
        isCreated: true,
        isRunning: false,
        isSleeping: false,
        isTerminated: false,
        isCompletedRun: false,
        threadWidth: running?.threadWidth || 0,
      });
    }
    setThreads(threads);
    setCreated(true);
  };

  const runAll = () => {
    const newThreads = threads.map((thread) => {
      if (
        thread.isRunning === false &&
        thread.isSleeping === false &&
        thread.isTerminated !== true
      ) {
        thread.isCreated = false;
        thread.isRunning = true;
      }
      return thread;
    });

    setThreads(newThreads);
  };

  const runThread = (threadID) => {
    const newThreads = threads.map((thread) => {
      if (thread.threadID === threadID) {
        thread.isCreated = false;
        thread.isRunning = true;
        thread.isSleeping = false;
        thread.isTerminated = false;
      }
      return thread;
    });
    setThreads(newThreads);
    setProcessThreads(newThreads);
  };

  const sleepThread = (threadID) => {
    const newThreads = threads.map((thread) => {
      if (thread.threadID === threadID) {
        thread.isCreated = false;
        thread.isRunning = false;
        thread.isSleeping = true;
        thread.isTerminated = false;
      }
      return thread;
    });
    setThreads(newThreads);
  };

  const killThread = (threadID) => {
    const newThreads = threads.map((thread) => {
      if (thread.threadID === threadID) {
        thread.isCreated = false;
        thread.isRunning = false;
        thread.isSleeping = false;
        thread.isTerminated = true;
      }
      return thread;
    });

    setThreads(newThreads);
  };

  useEffect(() => {
    let intervalID;
    let done = [];

    const newThreads = threads.map((thread) => {
      if (thread.isRunning === true) {
        intervalID = setInterval(() => {
          thread.threadWidth = Math.min(
            thread.threadWidth + Math.random(),
            100
          );
          setRunning(thread);
          if (thread.threadWidth === 100) {
            thread.isRunning = false;
            done.push(thread);
            setDone([...done, thread]);
          }
        }, 100);
      }
      return thread;
    });

    return () => {
      clearInterval(intervalID);
    };
  }, [processThreads, done]);

  const value = {
    progress,
    created,
    running,
    blocked,
    terminated,
    createThread,
    threads,
    processThreads,
    runThread,
    sleepThread,
    killThread,
    runAll,
    done,
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
