var SillyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

SillyDancer.prototype = Object.create(Dancer.prototype);
SillyDancer.prototype.constructor = SillyDancer;

SillyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};