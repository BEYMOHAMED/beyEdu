// Header.jsx
import React from 'react';

function Header({ toggleTheme, darkMode }) {
    console.log(darkMode)
  return (
    <header className="bg-headerBGLight dark:bg-headerBGDark p-4 w-full mb-8">
      <div className="mx-auto flex justify-between items-center" style={{ maxWidth: '756px' }}>
        <div>
          <img src={process.env.PUBLIC_URL + `/assets/images/logo.png`} alt="Logo" className="h-8" />
        </div>
        <div>
          <button onClick={toggleTheme} className="w-10 h-10 bg-buttonBgLight hover:bg-buttonBgHoverLight dark:bg-buttonBgDark dark:hover:bg-buttonBgHoverDark rounded-lg flex justify-center items-center transition ease-in-out duration-300">
            <img src={darkMode ? "/assets/icons/sun.svg" : "/assets/icons/moon.svg"} alt="Theme Icon" className="h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
