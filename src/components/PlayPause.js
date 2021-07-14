import React, { useState } from "react";
import classNames from "../utils/class-names";

/**
 * Called whenever the play/pause button is clicked.
 */
function PlayPause({ setSession, focusDuration }) {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

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

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-testid="play-pause"
        title="Start or pause timer"
        onClick={nextState}
      >
        <span
          className={classNames({
            oi: true,
            "oi-media-play": !isTimerRunning,
            "oi-media-pause": isTimerRunning,
          })}
        />
      </button>
    </>
  );
}

export default PlayPause;
