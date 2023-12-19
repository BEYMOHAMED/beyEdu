import React from 'react';
import styles from './Project.module.css';

export default function Project({ title, description, imageUrl, courseDocumentUrl, exercisesDocumentUrl }) {
  return (
    <div className="p-4 mx-auto mb-14" style={{ maxWidth: '736px' }}>
      <h2 className={`text-xl font-bold mb-8 ${styles.titleUnderline}`}>{title}</h2>

      {/* Flex Container */}
      <div className="flex flex-col-reverse items-center md:flex-row md:items-start mb-6">

        {/* Description */}
        <div className="w-full mb-4 md:w-3/5 md:mb-0 md:mr-4 leading-loose tracking-wider text-justify">
          <p>
            {description}
          </p>
        </div>

        {/* Image */}
        <div className="w-full flex justify-center md:w-2/5 md:justify-start mb-6">
          <img
          src={imageUrl}
          alt="Project"
          className={`w-9/10 md:w-auto rounded-lg ${styles.customImage}`}
          style={{ maxWidth: '274px' }}
        />
        </div>
      </div>

      {/* Label and Link */}
      <div className="flex items-center mt-4 ml-4">
        <span className="mr-2 font-semibold bg-courseLabelBGLight dark:bg-courseLabelBGDark text-courseLabelLight dark:text-courseLabelDark rounded px-2 py-0.5 uppercase">Course</span>
        <a href={courseDocumentUrl} className="text-linkLight dark:text-linkDark" download>Course Link</a>
      </div>
      <div className="flex items-center mt-4 ml-4">
        <span className="mr-2 font-semibold bg-courseLabelBGLight dark:bg-courseLabelBGDark text-courseLabelLight dark:text-courseLabelDark rounded px-2 py-0.5 uppercase">Exercise</span>
        <a href={exercisesDocumentUrl} className="text-linkLight dark:text-linkDark" download>Exercises Link</a>
      </div>
    </div>
  );
}
