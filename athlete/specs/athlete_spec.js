var athlete = require("../athlete");
var waterBottle = require("../water_bottle");
var assert = require("assert");

describe( "athlete", function() {

  it("hydration starts at 100", function() {
    assert.equal( 100, athlete.hydration );
  });

  it("distanceCovered starts at 0", function() {
    assert.equal( 0, athlete.distanceCovered );
  });

  it("running decreases hydration", function() {
    athlete.run();
    assert.equal( 90, athlete.hydration );
  });

  it("running increases distanceCovered", function() {
    assert.equal( 10, athlete.distanceCovered );
  });

  it("cannot run due to dehydration", function() {
    for (var i = 0; i < 9; i++) {
      athlete.run();
    }
    assert.equal( "cannot run due to dehydration", athlete.run() );
  });

  it("drinking from waterBottle increases hydration", function() {
    waterBottle.fill();
    athlete.drink( waterBottle );
    assert.equal( 10, athlete.hydration );
  });

  it("drinking from waterBottle decreases its volume", function() {
    assert.equal( 90, waterBottle.volume );
  });

});
