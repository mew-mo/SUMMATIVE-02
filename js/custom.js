(function() {

// --------------- DATA OBJECTS ---------------

  var accomodation = {
    hotel: {
      minPeople: 1,
      maxPeople: 2,
      pricePerNight: 157,
      minNights: 1,
      maxNights: 5
    },
    hostel: {
      minPeople: 1,
      maxPeople: 1,
      pricePerNight: 30,
      minNights: 1,
      maxNights: 10
    },
    motel: {
      minPeople: 2,
      maxPeople: 4,
      pricePerNight: 90,
      minNights: 3,
      maxNights: 10
    },
    house: {
      minPeople: 1,
      maxPeople: 4,
      pricePerNight: 240,
      minNights: 2,
      maxNights: 15
    }
  };
  // accomodation object ENDS

  var meals = {
    breakfast: 20,
    lunch: 20,
    dinner: 25,
    all: 65
  };
  // meal object ENDS

// user object to store user inputs later
  var user = {
    people: false,
    checkIn: false,
    checkOut: false,
    stayLength: false,
    place: false
  };
  // user object ENDS

// --------------- LOAD IN SLICK ---------------

  $('.screens').slick({
    accessibility: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });

// --------------- APP OBJECT ---------------

  var app = {
    // pulling buttons from dom
    startBtn: document.querySelector('.go-btn'),
    nextBtn: document.querySelector('.next i'),
    backBtn: document.querySelector('.back i'),

    // initialisation function
    init: function() {
      // will call a function when clicked (should be the function to go to the first slide!!! ok!!!)
      app.startBtn.addEventListener('click', app.next, false);
    },
    // init function ENDS

    next: function() {
      console.log('works?');
      app.nextBtn.style.display = 'block';
      app.backBtn.style.display = 'block';
      $('.screens').slick('slickNext');
    }
    // next function ENDS
  };

  // starts the code by calling the initialisation function
  app.init();

//  slick code to bonk out later haha ----------------------
  //
  // function vertical() {
  //   $('.slides').slick({
  //     vertical: true,
  //     accessibility: false,
  //     draggable: false,
  //     swipe: false,
  //     touchMove: false,
  //     infinite: true,
  //     speed: 300,
  //     slidesToShow: 1,
  //     slidesToScroll: 1
  //   });
  //   console.log('vertical should be working');
  // }
  //
  // function horizontal() {
  //   $('.slides').slick({
  //     accessibility: false,
  //     draggable: false,
  //     swipe: false,
  //     touchMove: false,
  //     infinite: true,
  //     speed: 300,
  //     slidesToShow: 1,
  //     slidesToScroll: 1
  //   });
  //   console.log('horizontal is working..?');
  // }
  //
  // // change the initialisation based on what slide theyre on? ormaybe thats too much and not so cool. maybe theres aninmations to be put in instead thatll make it look nice.
  //
  // var moveOne = document.querySelector('#forward'),
  //   moveAgain = document.querySelector('#again'),
  //   back = document.querySelector('#back'),
  //   slideArea = document.querySelector('.slides');
  //
  // moveOne.addEventListener('click', toNext, false);
  // back.addEventListener('click', backOne, false);
  //
  // function toNext() {
  //   console.log('works');
  //   horizontal(slideArea);
  //   $('.slides').slick('slickNext');
  //   // vertical can be true to create vertical option?
  // }
  //
  // function backOne() {
  //   console.log('goingback');
  //   // vertical(slideArea);
  //   $('.slides').slick('slickPrev');
  // }


}());
// iife ENDS
