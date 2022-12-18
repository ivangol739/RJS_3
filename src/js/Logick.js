import Counter from "./Counter";

export default class Logick {
  constructor() {
    this.counter = new Counter();
    this.cellSpawn = null;
    this.spawn = 0;
    this.cell = document.querySelectorAll(".cell");
    this.cells = document.querySelector(".field");
  }

  interval() {
    setInterval(() => {
      this.respawn();
    }, 1000);
  }

  respawn() {
    if (this.spawn !== this.counter.countHits + this.counter.countMisses) {
      if (this.counter.countMisses !== 5) {
        this.counter.Misses();
      } else {
        Logick.lose();
      }
    }
    this.spawn++;
    const r = Math.floor(Math.random() * 16);
    if (!this.cellSpawn && this.cellSpawn !== 0) {
      this.cell[r].classList.add("goblin");
      this.cellSpawn = r;
    } else if (this.cellSpawn !== r) {
      this.cell[r].classList.add("goblin");
      this.cell[this.cellSpawn].classList.remove("goblin");
      this.cellSpawn = r;
    }
  }

  damage() {
    this.cells.addEventListener("click", (e) => {
      if (e.target.className === "cell goblin") {
        this.counter.Hits();
        if (this.counter.countHits === 5) {
          Logick.win();
        }
      } else {
        this.counter.Misses();
        if (this.counter.countMisses === 5) {
          Logick.lose();
        }
      }
    });
  }

  static win() {
    setTimeout(() => {
      alert("WIN");
      window.location.reload();
    }, 500);
  }

  static lose() {
    setTimeout(() => {
      alert("LOSE");
      window.location.reload();
    }, 500);
  }
}
