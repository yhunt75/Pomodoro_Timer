import React from "react";

function Focus({
  decrementFocusLengthByOneMinute,
  incrementFocusLengthByFiveMinute,
  focusTime,
  disableButton,
}) {
  return (
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          {/* DONE: Update this text to display the current focus focus duration */}
          Focus Duration: {focusTime}
        </span>
        <div className="input-group-append">
          {/* DONE: Implement decreasing focus duration and disable during a focus or break focus */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            onClick={decrementFocusLengthByOneMinute}
            disabled={disableButton}
          >
            <span className="oi oi-minus" />
          </button>
          {/* DONE: Implement increasing focus duration  and disable during a focus or break focus */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
            onClick={incrementFocusLengthByFiveMinute}
            disabled={disableButton}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Focus;
