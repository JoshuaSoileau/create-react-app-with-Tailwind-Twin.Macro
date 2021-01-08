import { useEffect, useState } from "react";

export default function useKeyPress(
  targetKey,
  onPressDown = () => {},
  onPressUp = () => {}
) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    // If pressed key is our target key then set to true
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
        onPressDown();
      }
    }

    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
        onPressUp();
      }
    };

    // Add event listeners
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  return keyPressed;
}
