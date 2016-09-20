var athlete = {
  hydration: 100,
  distanceCovered: 0,

  run: function() {
    if(this.hydration > 0) {
      this.hydration -= 10;
      this.distanceCovered += 10;
    } else {
      return "cannot run due to dehydration";
    }
  },

  drink: function( waterBottle ) {
    waterBottle.drink();
    this.hydration += 10;
  }

};

module.exports = athlete;
