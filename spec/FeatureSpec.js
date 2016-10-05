'use strict';

describe('Feature Test', function(){
  var plane;
  var airport;
  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it("planes can be instructed to land at an airport", function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it("planes can take off from an airport", function(){
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.planes()).not.toContain(plane);
  });

  it("prevents the takeoff when weather is stormy", function(){
    plane.land(airport)
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff(airport); }).toThrowError('cannot takeoff during storm');
    expect(airport.planes()).toContain(plane);
  });


});
