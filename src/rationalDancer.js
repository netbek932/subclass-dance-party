var RationalDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('rational');
};

RationalDancer.prototype = Object.create(Dancer.prototype);
RationalDancer.prototype.constructor = RationalDancer;

RationalDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};