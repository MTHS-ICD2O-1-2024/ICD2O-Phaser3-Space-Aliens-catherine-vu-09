/*global Phaser */

//Copyright (c) 2025 Catherine Vu All Rights Reserved 
//
// Created by: Catherine Vu
//;Created on: April 23 2025
// This is the Title Scene

/**
 * This class is the Title Scene.
 */
class TitleScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor() {
    super({ key: "titleScene" })
    this.titleSceneBackgroundImage = null
  }

  /**
   * Can be defined by your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   * before preload() and create()
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  /**
   * Can be defined by your own Scenes. 
   * Use it to load assets.
   */
  preload() {
    console.log("Title Scene")
    this.load.image("titleSceneBackground","assets/aliens_screen_image.jpg")
  }

  /**
   * Can be defined by your own Scenes.
   * Use it to create your game objects. 
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */

  creat(data) {
    //pass
  }

  /**Should be overridden by your Own Scenes. 
   * This method is called once per game while scene is running.
   * @param {number} time - The current time
   * @param {number} delta -The delta time in ms since last frame.
   */
  update(time, delta) {
    //pass
  }
}

export default TitleScene