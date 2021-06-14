(function() {

// --------------- DATA OBJECTS ---------------

  var accommodation = {
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
  // accommodation object ENDS

  var meals = {
    breakfast: 20,
    lunch: 20,
    dinner: 25,
    all: 65
  };
  // meal object ENDS

// user object to store user inputs later
  var user = {
    people: 0,
    checkIn: false,
    checkOut: false,
    stayLength: false,
    place: false
  };
  // user object ENDS

// --------------- APP OBJECT ---------------

  var app = {
    // pulling buttons from dom
    startBtn: document.querySelector('.go-btn'),
    nextBtn: document.querySelector('.next i'),
    backBtn: document.querySelector('.back i'),
    // pulling slide elements and setting slide index
    slides: document.querySelectorAll('.full-screen'),
    currentScreen: 0,
    // pulling round buttons
    oneBtn: document.querySelector('.one-btn'),
    twoBtn: document.querySelector('.two-btn'),
    threeBtn: document.querySelector('.three-btn'),
    fourBtn: document.querySelector('.four-btn'),

    // initialisation function
    init: function() {
      //  LOAD IN SLICK ---------------
      $('.screens').slick({
        accessibility: false,
        arrows: false,
        draggable: false,
        swipe: false,
        touchMove: false,
        infinite: false,
        speed: 300,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1
      });

      // LOAD IN MAP ---------------
      mapboxgl.accessToken = 'pk.eyJ1IjoibWV3LW1vIiwiYSI6ImNrcDRvZGlvczA0bHQyb3J2czczaXk0cTUifQ.OFSA4kWW4IMpTG6MTy6TPQ';

      var map = new mapboxgl.Map({
        container: 'map',
        zoom: 9,
        center: [168.65997835410565, -45.03140568895895],
        pitch: 0,
        bearing: 80,
        style: 'mapbox://styles/mew-mo/ckpui5rhp1gcl17p6rzvoqbbw'
      });

      // LOAD IN DATEPICKER ---------------
      $(function() {
        $("#datepicker").datepicker();
      });

      //  LOAD IN BTN FUNCTIONALITY ---------------
      app.nextBtn.addEventListener('click', app.next, false);
      app.backBtn.addEventListener('click', app.back, false);
      app.checkScreen();
    },
    // init function ENDS

    next: function() {
      app.currentScreen += 1;
      console.log(app.currentScreen);
      app.nextBtn.style.display = 'block';
      app.backBtn.style.display = 'block';
      app.checkScreen();
      $('.screens').slick('slickNext');
    },
    // next function ENDS

    back: function() {
      app.currentScreen -= 1;
      console.log(app.currentScreen);
      app.nextBtn.style.display = 'block';
      app.backBtn.style.display = 'block';
      app.checkScreen();
      $('.screens').slick('slickPrev');
    },
    // back function ENDS

    checkScreen: function() {
      if (app.currentScreen === 0) {
        app.welcome();
      } else if (app.currentScreen === 1) {
        app.peopleBooking();
      } else if (app.currentScreen === 2) {
        app.dateBooking();
      } else if (app.currentScreen === 3) {
        app.placeBooking();
      } else if (app.currentScreen === 4) {
        app.mealBooking();
      } else if (app.currentScreen === 5) {
        app.reviewBooking();
      } else if (app.currentScreen === 6) {
        app.confirm();
      }
    },

    welcome: function() {
      app.nextBtn.style.display = 'none';
      app.backBtn.style.display = 'none';
      app.startBtn.addEventListener('click', app.next, false);
    },
    // welcome function ENDS

    peopleBooking: function() {

      console.log('peoplebooking is working');

      app.oneBtn.onclick = function() {
        app.setNum(1);
      };

      app.twoBtn.onclick = function() {
        app.setNum(2);
      };

      app.threeBtn.onclick = function() {
        app.setNum(3);
      };

      app.fourBtn.onclick = function() {
        app.setNum(4);
      };
    },
    // peopleBooking function ENDS

    setNum: function(num) {
      user.people = num;
      console.log(user.people);
    },

    dateBooking: function() {
      // always add class .show-calendar right away !
      $('#datePicker').daterangepicker({
        "maxSpan": {
          "days": 14
        },
        "alwaysShowCalendars": true,
        "drops": "center"
      }, function(start, end, label) {
        console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
      });
      // daterangepicker ENDS
    },
    // dateBooking function ENDS

    placeBooking: function() {

    },
    // placeBooking function ENDS

    mealBooking: function() {

    },
    // mealBooking function ENDS

    reviewBooking: function() {

    },
    // reviewBooking function ENDS

    confirm: function() {
      app.nextBtn.style.display = 'none';
    }
    // confirm function ENDS
  };

  // starts the code by calling the initialisation function
  app.init();

}());
// iife ENDS
