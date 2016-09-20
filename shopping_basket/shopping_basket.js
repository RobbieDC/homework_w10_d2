var shoppingBasket = {
  items: [],
  loyaltyCard: true,
  total: 0,

  add: function( item ) {
    this.items.push( item );
    this.calculateTotal();
  },

  remove: function() {
    var removedItem = this.items.pop();
    this.calculateTotal();
    return removedItem;
  },

  calculateTotal: function() {
    this.total = 0;
    for (var item of this.items) {
      this.total += item.price;
    }
  },

  discountTenPercent: function() {
    this.calculateTotal();
    if(this.total > 20) {
      this.total *= 0.9;
      this.total.toFixed(2);
    }
  },

  loyaltyDiscount: function() {
    if(this.loyaltyCard === true) {
      this.total *= 0.95;
      this.total.toFixed(2);
    }
  },

  // bogofDiscount: function() {
  //   var bogofItems = []
  //   for (var item of this.items) {
  //     if(item.bogof == true) {
  //       bogofItems.push(item);
  //     }
  //   }
  // }

}

module.exports = shoppingBasket;
