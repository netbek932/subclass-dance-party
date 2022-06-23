var SillyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('silly');
};

SillyDancer.prototype = Object.create(Dancer.prototype);
SillyDancer.prototype.constructor = SillyDancer;

SillyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.$node.toggle();

  // change size of dancer
  if (this.$node.css('width').substr(0,2) === '20' && this.$node.css('display') === 'block') {
    this.$node.css('width', '40px');
  }
  else if (this.$node.css('display') === 'block') {
    this.$node.css('width', '20px');
  }

};