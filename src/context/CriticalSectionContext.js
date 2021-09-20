import { ThreeDRotation } from "@material-ui/icons";
import React, { useEffect, createContext, useState } from "react";
import { useSnackbar } from "notistack";

const CriticalSectionContext = createContext();

const colors = [
  "#3f51b5",
  "#f50057",
  "#3d8769",
  "#87673d",
  "#874f84",
  "#ee430d",
  "#4caf50",
];

function CriticalSectionProvider(props) {
  const [threads, setThreads] = useState([]);
  const [CSThreads, setCSThreads] = useState([]);
  const [executingThread, setExecutingThread] = useState([]);
  const [running, setRunning] = useState({});
  const [simulating, setSimulating] = useState(false);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    setCSThreads(threads);
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
    console.log(COLORS);
    const threads = [];
    for (let i = 0; i < num; i++) {
      threads.push({
        threadID: i + 1,
        color: COLORS[i],
        isRunnable: true,
        isExecuting: false,
        isDone: false,
        hasRequested: false,
        threadWidth: running?.threadWidth || 0,
      });
    }
    setThreads(threads);
  };

  const enterCriticalSection = (id) => {
    if (executingThread[0]?.threadID === id) {
      enqueueSnackbar(`T${id} is already in it's critical section`, {
        variant: "info",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      return;
    }
    let threadExecuting = [];
    if (executingThread.length > 0) {
      const confirm = window.confirm(
        `T${executingThread[0]?.threadID} is currently accessing it's critical section. NO OTHER thread can access it's critical section until T${executingThread[0]?.threadID} has exited. This fulfills the condition of MUTUAL EXCLUSION which states that: "ONCE ONE PROCESS (THREAD) ENTERS ITS CRITICAL SECTION, OTHER PROCESSES (THREADS) CANNOT ENTER THEIR CRITICAL SECTION UNTIL THIS PROCESS (THREAD) EXITS ITS CRITICAL SECTION." T${id} will now be marked with the "Requested Access" badge and will access it's critical section in due time to fulfill the other conditions of the Critical Section Problem Solution which is PROGRESS and FREEDOM FROM STARVATION/BOUNDED WAITING`
      );
      if (confirm) {
        setCSThreads(
          CSThreads.map((thread) => {
            if (thread.threadID === id) {
              thread.hasRequested = true;
            }
            return thread;
          })
        );
      }
    } else {
      const threadState = threads.map((thread) => {
        if (thread.threadID === id) {
          thread.isRunnable = false;
          thread.isExecuting = true;
          thread.isDone = false;
        }
        return thread;
      });
      const newThread = threads.find((thread) => thread.threadID === id);
      threadExecuting.push(newThread);
      setExecutingThread(threadExecuting);
      setCSThreads(CSThreads.filter((thread) => thread.threadID !== id));
      enqueueSnackbar(`T${id} has entered it's critical section`, {
        variant: "info",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  };

  const exitCriticalSection = (id) => {
    if (executingThread.length > 0 && executingThread[0]?.threadID === id) {
      const threadState = threads.map((thread) => {
        if (thread.threadID === id) {
          thread.isRunnable = false;
          thread.isExecuting = false;
          thread.isDone = true;
        }
        return thread;
      });
      const newThread = threads.find((thread) => thread.threadID === id);
      const nextThread = CSThreads.find(
        (thread) => thread.hasRequested === true
      );
      const remainingThreads = CSThreads.filter(
        (thread) => thread.threadID !== nextThread?.threadID
      );

      if (nextThread) {
        setExecutingThread([nextThread]);
        nextThread.hasRequested = false;
      } else {
        setExecutingThread([]);
      }

      setCSThreads([...remainingThreads, newThread]);
      enqueueSnackbar(`T${id} has exited it's critical section`, {
        variant: "default",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
      });
    } else {
      enqueueSnackbar(`T${id} is not in it's critical section`, {
        variant: "warning",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  };

  useEffect(() => {
    let intervalID;

    threads.map((thread) => {
      if (thread.isRunning === true) {
        intervalID = setInterval(() => {
          console.log("we are there");
          thread.threadWidth = Math.min(
            thread.threadWidth + Math.random(),
            100
          );
          setRunning(thread);
          if (thread.threadWidth === 100) {
            thread.isRunning = false;
          }
          console.log(thread.threadWidth);
        }, 100);
      }
      return thread;
    });

    return () => {
      clearInterval(intervalID);
    };
  }, [threads]);
  console.log(threads);

  const value = {
    createThread,
    threads,
    CSThreads,
    executingThread,
    simulating,
    setSimulating,
    setExecutingThread,
    enterCriticalSection,
    exitCriticalSection,
  };

  return (
    <CriticalSectionContext.Provider value={value}>
      {props.children}
    </CriticalSectionContext.Provider>
  );
}

export { CriticalSectionContext, CriticalSectionProvider };
