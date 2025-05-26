/*global Phaser */

//Copyright (c) 2025 Catherine Vu All Rights Reserved 
//
// Created by: Catherine Vu
//;Created on: April 23 2025
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'titleScene' })
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload() {
    console.log('Title Scene')
  }

  creat(data) {
  }

  update(time, delta) {
  }
}

export default TitleScene