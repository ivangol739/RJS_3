export default class Counter {
  constructor() {
    this.hits = document.querySelector(".hits");
    this.misses = document.querySelector(".misses");
    this.countHits = 0;
    this.countMisses = 0;
  }

  Hits() {
    this.countHits++;
    this.hits.innerText = this.countHits;
  }

  Misses() {
    this.countMisses++;
    this.misses.innerText = this.countMisses;
  }
}
