import Phaser from 'phaser';

const state = {};

function preload() {
  this.load.setBaseURL('https://cdn.jsdelivr.net/gh/kefik/kenney/Shooter/');
  this.load.image('playership1', 'playerShip1_blue.png');
}

function create() {
  state.sprite = this.add.sprite(130, 130, 'playership1');
  state.keyW = this.input.keyboard.addKey('W');
  state.keyA = this.input.keyboard.addKey('A');
  state.keyS = this.input.keyboard.addKey('S');
  state.keyD = this.input.keyboard.addKey('D');
}

function update() {
  const { x, y } = state.sprite;
  const angle = Phaser.Math.Angle.Between(x, y, this.input.x, this.input.y);
  state.sprite.setRotation(angle + Math.PI / 2);

  if (state.keyW.isDown) {
    state.sprite.y -= 4;
  }
  if (state.keyA.isDown) {
    state.sprite.x -= 4;
  }
  if (state.keyS.isDown) {
    state.sprite.y += 4;
  }
  if (state.keyD.isDown) {
    state.sprite.x += 4;
  }
}

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: '#18216D',
  scene: { preload, create, update },
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
