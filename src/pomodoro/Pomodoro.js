import React, { useState } from "react";
import classNames from "../utils/class-names";
import { minutesToDuration } from "../utils/duration";
import useInterval from "../utils/useInterval";
import ProgressBar from "./ProgressBar";
import Countdown from "./Countdown";

// Update the session state with new state after each tick of the interval.
function nextTick(prevState) {
  const timeRemaining = Math.max(0, prevState.timeRemaining - 1);
  return {
    ...prevState,
    timeRemaining,
  };
}

// Function that returns a function to update the session state with the next session type upon timeout.
function nextSession(focusDuration, breakDuration) {
  return (currentSession) => {
    if (currentSession.label === "Focusing") {
      return {
        label: "On Break",
        timeRemaining: breakDuration * 60,
      };
    }
    return {
      label: "Focusing",
      timeRemaining: focusDuration * 60,
      visible: true,
    };
  };
}

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // The current session - null where there is no session running
  const [session, setSession] = useState(null);

  // Allow the user to stop the current focus of break duration.
  const stopFocusOrBreakSession = () => {
    if (isTimerRunning === true) {
      setIsTimerRunning(false);
      setSession(null);
    }
  };

  // Allow the user to adjust the focus and break duration.
  const [focusDuration, setFocusDuration] = useState(25);

  const increaseFocusByFiveMinutes = () => {
    if (focusDuration < 60) {
      setFocusDuration(focusDuration + 5);
    }
  };

  const decreaseFocusByFiveMinutes = () => {
    if (focusDuration > 5) {
      setFocusDuration(focusDuration - 5);
    }
  };

  const [breakDuration, setBreakDuration] = useState(5);

  const increaseBreakByOneMinute = () => {
    if (breakDuration < 15) {
      setBreakDuration(breakDuration + 1);
    }
  };

  const decreaseBreakByOneMinute = () => {
    if (breakDuration > 1) {
      setBreakDuration(breakDuration - 1);
    }
  };

  // Custom hook that invokes the callback function every second.
  useInterval(
    () => {
      if (session.timeRemaining === 0) {
        new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
        return setSession(nextSession(focusDuration, breakDuration));
      }
      return setSession(nextTick);
    },
    isTimerRunning ? 1000 : null
  );

  /*
   * Called whenever the play/pause button is clicked.
   */
  function playPause() {
    setIsTimerRunning((prevState) => {
      const nextState = !prevState;
      if (nextState) {
        setSession((prevStateSession) => {
          // If the timer is starting and the previous session is null,
          // start a focusing session.
          if (prevStateSession === null) {
            return {
              label: "Focusing",
              timeRemaining: focusDuration * 60,
            };
          }
          return prevStateSession;
        });
      }
      return nextState;
    });
  }

  // Increase the width of the progress bar as the time remaining decreases.
  function progressBarIncrease() {
    if (!session) {
      return;
    }
    if (session.label === "Focusing") {
      return (1 - session.timeRemaining / (focusDuration * 60)) * 100;
    } else {
      return (1 - session.timeRemaining / (breakDuration * 60)) * 100;
    }
  }

  // Render
  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* DONE: Update this text to display the current focus session duration */}
              Focus Duration: {minutesToDuration(focusDuration)}
            </span>
            <div className="input-group-append">
              {/* DONE: Implement decreasing focus duration and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={decreaseFocusByFiveMinutes}
                disabled={isTimerRunning}
              >
                <span className="oi oi-minus" />
              </button>
              {/* DONE: Implement increasing focus duration  and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={increaseFocusByFiveMinutes}
                disabled={isTimerRunning}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* DONE: Update this text to display the current break session duration */}
                Break Duration: {minutesToDuration(breakDuration)}
              </span>
              <div className="input-group-append">
                {/* DONE: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={decreaseBreakByOneMinute}
                  disabled={isTimerRunning}
                >
                  <span className="oi oi-minus" />
                </button>
                {/* DONE: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={increaseBreakByOneMinute}
                  disabled={isTimerRunning}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            {/* DONE: Implement stopping the current focus or break session. and disable the stop button when there is no active session */}
            {/* DONE: Disable the stop button when there is no active session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="stop"
              title="Stop the session"
              onClick={stopFocusOrBreakSession}
              disabled={!isTimerRunning}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <Countdown
          session={session}
          focusDuration={focusDuration}
          breakDuration={breakDuration}
        />
      </div>
      <div>
        <ProgressBar progressBarIncrease={progressBarIncrease} />
      </div>
    </div>
  );
}

export default Pomodoro;
