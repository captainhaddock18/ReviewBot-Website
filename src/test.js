// Snowfall.js
import React, { useEffect, useState } from 'react';
import Snowflake from './particles';

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const generateSnowflakes = () => {
      const flakes = [];
      for (let i = 0; i < 100; i++) {
        const size = Math.random() * 10 + 5;
        const duration = Math.random() * 5 + 5;
        const initialX = Math.random() * window.innerWidth;
        const initialY = Math.random() * -100;
        const scatterX = (Math.random() - 0.5) * 200;
        const scatterY = (Math.random() - 0.5) * 200;

        flakes.push(
          <Snowflake
            key={i}
            size={size}
            duration={duration}
            initialX={initialX}
            initialY={initialY}
            scatterX={scatterX}
            scatterY={scatterY}
          />
        );
      }
      setSnowflakes(flakes);
    };

    generateSnowflakes();
  }, []);

  return <div style={{ position: 'relative', width: '100%', height: '200vh', color:"#001D21" }}>{snowflakes}</div>;
};

export default Snowfall;
