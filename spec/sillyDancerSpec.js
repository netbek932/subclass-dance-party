describe('sillyDancer', function() {

  var sillyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    sillyDancer = new SillyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(sillyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(sillyDancer.$node, 'toggle');
    sillyDancer.step();
    expect(sillyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(sillyDancer, 'step');
      expect(sillyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(sillyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(sillyDancer.step.callCount).to.be.equal(2);
    });
  });
});
