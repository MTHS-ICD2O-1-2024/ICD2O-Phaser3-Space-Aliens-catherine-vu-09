/*global Phaser */

// Copyright (c) 2025 Catherine All rights reserved
//
// Created by: Catherine
// Created on: April 11 2025
// This is the Phaser3 game configuration file


/**
* Start Phaser Game.
*/
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  //set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}


const game = new Phaser.Game(config)
console.log(game)