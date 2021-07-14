import React from "react";

export default function ProgressBar({ progressBarIncrease }) {
  return (
    <div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={progressBarIncrease()} // TODO: Increase aria-valuenow as elapsed time increases
              style={{ width: `${progressBarIncrease()}%` }} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    </div>
  );
}
