describe('rationalDancer', function() {

  var rationalDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rationalDancer = new RationalDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rationalDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(rationalDancer.$node, 'toggle');
    rationalDancer.step();
    expect(rationalDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rationalDancer, 'step');
      expect(rationalDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rationalDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rationalDancer.step.callCount).to.be.equal(2);
    });
  });
});
