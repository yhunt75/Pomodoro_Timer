import React, { useState } from "react";
/**
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

export default playPause;
