import React, { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Project from './components/Project/Project';

import data from './data'

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    document.body.classList.toggle('bg-light-background', !darkMode);
    document.body.classList.toggle('bg-dark-background', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`text-light-text dark:text-dark-text`}>
      <Header toggleTheme={toggleTheme} darkMode={darkMode}  />
      {data.map((data, index) => (
        <Project
          key={index}
          title={data.title}
          description={data.description}
          imageUrl={data.imageUrl}
          courseDocumentUrl={data.courseDocumentUrl}
          exercisesDocumentUrl={data.exercisesDocumentUrl}
        />
      ))}
    </div>
  );
}

export default App;
