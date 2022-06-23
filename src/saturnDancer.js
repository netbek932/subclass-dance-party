var Saturn = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps + 2000);
  this.$node = $('<span class="saturn"></span>');
};

Saturn.prototype = Object.create(Dancer.prototype);
Saturn.prototype.constructor = Saturn;

Saturn.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};