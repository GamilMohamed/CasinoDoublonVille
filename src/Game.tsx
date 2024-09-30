import React, { useState, useEffect } from 'react';

function Game() {
  const nbbombs = 12;
  const nblines = 6;
  const [tab, setTab] = useState<number[][]>(() => Array.from({ length: nblines }, () => Array(6).fill(1)));
  const nbcolumns = 6;

  // Create the initial tab, linebomb, and colbomb arrays
  // const [tab, setTab] = useState<number[][]>(() => Array.from({ length: nblines }, () => Array(nbcolumns).fill(1)));
  
  const [linebomb, setLinebomb] = useState<number[]>(() => Array(nblines).fill(0));
  const [colbomb, setColbomb] = useState<number[]>(() => Array(nbcolumns).fill(0));

  // Helper function to get random integer between min (inclusive) and max (inclusive)
  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  
  // Function to place bombs on the grid
  const placeBombs = (tab: number[][]) => {
    let b = 0;
    while (b < nbbombs) {
      const x = getRandomInt(0, nblines - 2);
      const y = getRandomInt(0, nbcolumns - 2);
      if (tab[x][y] === 1) {
        tab[x][y] = 0;
        linebomb[x] += 1;
        colbomb[y] += 1;
        b += 1;
      }
    }
  };

  // Level generator
  const generateLevel = (tab: number[][]) => {
    const levels = [[3, 3, 3, 3]];
    const randlevel = levels[getRandomInt(0, levels.length - 1)];

    let b = 0;
    while (b < randlevel.length) {
      const rx = getRandomInt(0, nblines - 2);
      const ry = getRandomInt(0, nbcolumns - 2);
      if (tab[rx][ry] === 1) {
        tab[rx][ry] = randlevel[b];
        b += 1;
      }
    }
  };

  // Function to update the sums for the last row and column
  const updateSums = (tab: number[][]) => {
    for (let i = 0; i < 5; i++) {
      tab[i][5] = [tab[i].slice(0, 5).reduce((a, b) => a + b, 0), linebomb[i]] as any;
      tab[5][i] = [tab.slice(0, 5).reduce((acc, row) => acc + row[i], 0), colbomb[i]] as any;
    }
  };

  // Initialize the grid with bombs and level on first render
  useEffect(() => {
    const newTab = [...tab];
    placeBombs(newTab);
    generateLevel(newTab);
    updateSums(newTab);
    setTab(newTab);
  }, []);

  return (
    tab
  );
};

export default Game;
