import { useEffect } from "react";
import { useState } from "react";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((preTime) => preTime - 10);
    }, 10);

    useEffect(() => {
      console.log("TIMER SET");
      const timer = setTimeout(() => {
        onConfirm();
      }, 3000);

      return () => {
        console.log("Cleaning up timer");
        clearTimeout(timer);
      };
    }, [onConfirm]);
  }, []);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER} />
    </div>
  );
}
