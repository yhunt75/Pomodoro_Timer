import React, { useState } from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function Duration({ focusDuration, breakDuration }) {
  // focus
  const [focusLength, setFocusLength] = useState(focusDuration);

  const decrementFocusLengthByOneMinute = () => {
    const newFocusLength = focusLength - 1;

    if (newFocusLength < 0) {
      setFocusLength(0);
    } else {
      setFocusLength(newFocusLength);
    }
  };

  const incrementFocusLengthByOneMinute = () => {
    setFocusLength(focusLength + 1);
  };

  const focusLengthInMinutes = minutesToDuration(focusLength);

  // break
  const [breakLength, setBreakLength] = useState(breakDuration);

  const decrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength - 1;

    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLengthByOneMinute = () => {
    setBreakLength(breakLength + 1);
  };

  const breakLengthInMinutes = minutesToDuration(breakLength);

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/* DONE: Update this text to display the current focus focus duration */}
            Focus Duration: {focusLengthInMinutes}
          </span>
          <div className="input-group-append">
            {/* DONE: Implement decreasing focus duration and disable during a focus or break focus */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={decrementFocusLengthByOneMinute}
            >
              <span className="oi oi-minus" />
            </button>
            {/* DONE: Implement increasing focus duration  and disable during a focus or break focus */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={incrementFocusLengthByOneMinute}
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
              Break Duration: {breakLengthInMinutes}
            </span>
            <div className="input-group-append">
              {/* DONE: Implement decreasing break duration and disable during a focus or break session*/}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={decrementBreakLengthByOneMinute}
              >
                <span className="oi oi-minus" />
              </button>
              {/* DONE: Implement increasing break duration and disable during a focus or break session*/}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={incrementBreakLengthByOneMinute}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Duration;
