// class Traveler {
//   constructor(element) {
//     this.element = element;
//     this.distance = 10;

//     this.element.addEventListener('mousedown', () => {
//       this.travelAway();
//     });
//   }

//   travelAway() {
//     const element = this.element;
//     let distance = this.distance;
//     this.interval = window.setInterval(() => {
//       distance += 1;
//       element.style.marginLeft = `${distance}px`;
//     }, 10);
//   }
// }

// let travelers = document.getElementsByClassName('block');
// travelers = Array.from(travelers).map(traveler => {
//   return new Traveler(traveler);
// });

class Traveler {
  constructor(element) {
    this.element = element;
    this.distance = 10;

    this.element.addEventListener('mouseover', () => {
      this.travelAway();
    });
  }

  travelAway = function() {
    const element = this.element;
    let distance = this.distance;
    this.interval = window.setInterval(() => {
      distance += 1;
      element.style.marginLeft = `${distance}px`;
    }, 10);
  };
}

let travelers = document.getElementByClassName('block');
travelers = Array.from(travelers).map(traveler => {
  return new Traveler(traveler);
});
