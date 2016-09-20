var basket = require("../shopping_basket");
var myImports = require("../item");
var tomato = myImports.tomato;
var banana = myImports.banana;
var irnBru = myImports.irnBru;
var assert = require("assert");

describe("Shopping Basket", function() {

  it("should be empty at start", function() {
    var numItems = basket.items.length;
    assert.equal( 0, numItems );
  });

  // it("can add string item", function() {
  //   basket.add( "John" );
  //   assert.equal( "John", basket.items[0] );
  // })

  it("can add object item", function() {
    basket.add( tomato );
    var basketTomato = basket.items[0];
    assert.equal( "tomato", basketTomato.name );
  });

  it("can remove last item", function() {
    basket.add( tomato );
    basket.add( banana );
    var basketBanana = basket.remove();
    assert.equal( "banana", basketBanana.name );
  });

  it("calculate total price", function() {
    basket.calculateTotal();
    assert.equal( 4, basket.total );
  });

  it("10% discount over 20", function() {
    basket.add( irnBru );
    basket.discountTenPercent();
    assert.equal( 21.6, basket.total );
  });

  it("5% loyalty discount", function() {
    basket.loyaltyDiscount();
    assert.equal( 20.52, basket.total );
  });

  it("bogof", function() {
    console.log( basket.bogofDiscount() );
  });

});