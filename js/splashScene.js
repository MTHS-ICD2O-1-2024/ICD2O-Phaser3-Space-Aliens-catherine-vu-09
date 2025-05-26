/*global Phaser */

//Copyright (c) 2025 Catherine Vu All Rights Reserved 
//
// Created by: Catherine Vu
//;Created on: April 17 2025
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  /**
   * This method is the constructor
   */
  constructor() {
    super({ key: 'splashScene' })
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts, 
   * before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
/** */
  preload() {
    console.log('Splash Scene')
  }

  creat(data) {
  }

  update(time, delta) {
  }
}

export default SplashScene