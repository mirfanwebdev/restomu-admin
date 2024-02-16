import propTypes from "prop-types";
import { useState, useEffect } from "react";
export default function Messages({ message, error }) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    if (message || error) {
      setIsDisplayed(true);
      setTimeout(() => {
        setIsDisplayed(false);
      }, 3000);
    }
  }, [message, error]);

  if (message && isDisplayed) {
    return (
      <article className="p-4 rounded-md bg-green-400 text-green-800">
        <h1 className="font-bold text-lg">Success</h1>
        <p className="text-sm">{message}</p>
      </article>
    );
  }
  if (error && isDisplayed) {
    return (
      <article className="p-4 rounded-md bg-red-400 text-red-900">
        <h1 className="font-bold text-lg">Error</h1>
        <p className="text-sm">{error}</p>
      </article>
    );
  }
}

Messages.propTypes = {
  message: propTypes.string,
  error: propTypes.string,
};
