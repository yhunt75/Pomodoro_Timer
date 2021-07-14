import React from "react";

function Break({
  breakTime,
  decrementBreakLengthByOneMinute,
  incrementBreakLengthByOneMinute,
  disableButton,
}) {
  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            {/* DONE: Update this text to display the current break session duration */}
            Break Duration: {breakTime}
          </span>
          <div className="input-group-append">
            {/* DONE: Implement decreasing break duration and disable during a focus or break session*/}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              onClick={decrementBreakLengthByOneMinute}
              disabled={disableButton}
            >
              <span className="oi oi-minus" />
            </button>
            {/* DONE: Implement increasing break duration and disable during a focus or break session*/}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
              onClick={incrementBreakLengthByOneMinute}
              disabled={disableButton}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Break;
