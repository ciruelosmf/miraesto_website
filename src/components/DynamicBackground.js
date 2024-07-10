import React, { useState, useEffect } from 'react';

const colorValues = [

  '#fae8ff' ,
  '#d1fae5',
  '#dcfce7',
  '#fae8ff' ,
  '#d1fae5',
  '#dcfce7',
  '#fae8ff' ,
  '#d1fae5',
  '#dcfce7',
  '#fae8ff' ,
  '#d1fae5',
  '#dcfce7',
  '#fae8ff' ,
  '#d1fae5',
  '#dcfce7',
  '#fae8ff' ,
  '#d1fae5',
  '#dcfce7',
];

const DynamicBackground = ({ rows = 30, cols = 30 }) => {
  const [rectangles, setRectangles] = useState([]);

  useEffect(() => {
    const initialRectangles = Array(rows * cols).fill().map(() => ({
      colorIndex: Math.floor(Math.random() * colorValues.length),
      direction: Math.random() > 0.5 ? 1 : -1,
    }));
    setRectangles(initialRectangles);

    const interval = setInterval(() => {
      setRectangles(prevRectangles => 
        prevRectangles.map(rect => {
          let newIndex = rect.colorIndex + rect.direction;
          if (newIndex >= colorValues.length || newIndex < 0) {
            rect.direction *= -1;
            newIndex = rect.colorIndex + rect.direction;
          }
          return { ...rect, colorIndex: newIndex };
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [rows, cols]);

  return (
    <div className="fixed inset-0 -z-10">
      <div className={`grid w-full h-full  `} style={{gridTemplateColumns: `repeat(${cols}, 2fr)`, gridTemplateRows: `repeat(${rows}, 1fr)`}}>
        {rectangles.map((rect, index) => (
          <div 
            key={index}
            className="duration-1000 linear shadow-lg  "
            style={{backgroundColor: colorValues[rect.colorIndex]}}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicBackground;