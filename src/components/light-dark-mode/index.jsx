import React from "react";

const handleToggleTheme = () => {};

const LightDarkMode = () => {
  return (
    <div className="light-dark-mode">
      <div className="container">
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
