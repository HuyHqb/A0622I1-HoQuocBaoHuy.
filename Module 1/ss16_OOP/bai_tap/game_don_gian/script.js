/**
 * Created by nhatnk on 4/26/17.
 */
class Hero {
  constructor(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
  }
  getHeroElement() {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }
  moveRight() {
    this.left += this.speed;
    console.log('ok: ' + this.left);
  }
  moveLeft() {
    this.left -= this.speed;
  }
  moveUp() {
    this.top -= this.speed;
  }
  moveDown() {
    this.top += this.speed;
  }
}

var hero = new Hero('ducbo.png', 20, 30, 200, 100);

function start() {
  if (hero.left < window.innerWidth - hero.size&& hero.top===20) {
    hero.moveRight();
  } else if (hero.top < window.innerHeight - hero.size && hero.left >= window.innerWidth - hero.size) {
    hero.moveDown()
  } else if (hero.left >30) {
    hero.moveLeft();
  } else if (hero.left>20) {
    hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();