// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  const headquarters = 42;
  return Math.abs(headquarters - street);
}

function distanceFromHqInFeet(street) {
  const blockInFeet = 264;
  return distanceFromHqInBlocks(street) * blockInFeet;
}

function distanceTravelledInFeet(start, destination) {
  const blockInFeet = 264;
  return Math.abs(start - destination) * blockInFeet;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let fare;
  if (distance <= 400) {
    fare = 0;
  } else if (distance > 400 && distance <= 2000) {
    fare = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    fare = 25;
  } else {
    fare = 'cannot travel that far';
  }
  return fare;
}
