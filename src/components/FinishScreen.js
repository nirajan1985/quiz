import React from "react";

export default function FinishScreen({ maxPossiblePoints, points, highscore }) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {percentage}%)
      </p>
      <p className="highscore">(Highscore : {highscore})</p>
    </>
  );
}
