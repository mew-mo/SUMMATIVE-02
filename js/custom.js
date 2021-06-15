(function() {

// ------------------------------ DATA OBJECTS ------------------------------

  var accommodation = {
    hotel: {
      name: 'Novotel Queenstown Lakeside',
      coordinates: [168.66260642950354, -45.03336634266233],
      minPeople: 1,
      maxPeople: 2,
      pricePerNight: 157,
      minNights: 1,
      maxNights: 5
    },
    hostel: {
      name: 'Haka Lodge Queenstown',
      coordinates: [168.66277322589283, -45.030134427348074],
      minPeople: 1,
      maxPeople: 1,
      pricePerNight: 30,
      minNights: 1,
      maxNights: 10
    },
    motel: {
      name: 'Manata Lodge',
      coordinates: [168.7565615118034, -44.99238458104406],
      minPeople: 2,
      maxPeople: 4,
      pricePerNight: 90,
      minNights: 3,
      maxNights: 10
    },
    house: {
      name: 'Shotover Country Cottages',
      coordinates: [168.77857503612444, -45.00940820579655],
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
    people: false,
    checkIn: false,
    checkOut: false,
    stayLength: false,
    place: false
  };
  // user object ENDS

// ------------------------------ APP OBJECT ------------------------------

  var app = {
    // pulling buttons from dom
    startBtn: document.querySelector('.go-btn'),
    nextBtn: document.querySelector('.next i'),
    backBtn: document.querySelector('.back i'),
    // pulling slide elements and setting slide index
    slides: document.querySelectorAll('.full-screen'),
    currentScreen: 0,
    // PULLING FOR PEOPLE SELECT SCREEN ---------------
    // pulling the screen div
    peopleScreen: document.querySelector('#peopleSelect'),
    // pulling round buttons
    oneBtn: document.querySelector('.one-btn'),
    twoBtn: document.querySelector('.two-btn'),
    threeBtn: document.querySelector('.three-btn'),
    fourBtn: document.querySelector('.four-btn'),
    // pulling feedback h3 and max ppl note
    maxPeople: document.querySelector('.max-people'),
    pplFeedback: document.querySelector('.people-feedback'),
    // PULLING FOR DATE SELECT SCREEN ---------------
    // creating empty calendar, will add on date picker init
    calendar: false,
    // pulling feedback h3 and max days span
    maxDays: document.querySelector('.max-days'),
    dateFeedback: document.querySelector('.date-feedback'),

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
        style: 'mapbox://styles/mew-mo/ckpui5rhp1gcl17p6rzvoqbbw'
      });

      var canvas = map.getCanvasContainer();

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
      // app.allowNext()
      app.currentScreen += 1;
      app.nextBtn.style.display = 'block';
      app.backBtn.style.display = 'block';
      app.checkScreen();
      $('.screens').slick('slickNext');
    },
    // next function ENDS

    back: function() {
      app.currentScreen -= 1;
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
    // checkScreen function ENDS
    //
    // allowNext: function(huh) {
    //   var huh;
    //   if (huh === false) {
    //     console.log('its false');
    //     console.log(huh);
    //   } else if (huh !== false) {
    //     console.log(huh);
    //     console.log('its true');
    //     app.nextBtn.addEventListener('click', app.next, false);
    //   }
    // },

    welcome: function() {
      app.nextBtn.style.display = 'none';
      app.backBtn.style.display = 'none';
      app.startBtn.addEventListener('click', app.next, false);
    },
    // welcome function ENDS

    peopleBooking: function() {

      app.maxPeople.innerHTML = accommodation.house.maxPeople;

      app.peopleScreen.addEventListener('click', function(e) {
        if (e.target === app.oneBtn) {
          app.setNum(1);
          app.oneBtn.classList.add('one-clicked');
        } else {
          app.oneBtn.classList.remove('one-clicked');
        }

        if (e.target === app.twoBtn) {
          app.setNum(2);
          app.twoBtn.classList.add('two-clicked');
        } else {
          app.twoBtn.classList.remove('two-clicked');
        }

        if (e.target === app.threeBtn) {
          app.setNum(3);
          app.threeBtn.classList.add('three-clicked');
        } else {
          app.threeBtn.classList.remove('three-clicked');
        }

        if (e.target === app.fourBtn) {
          app.setNum(4);
          app.fourBtn.classList.add('four-clicked');
        } else {
          app.fourBtn.classList.remove('four-clicked');
        }
      }, false);
    },
    // peopleBooking function ENDS

    setNum: function(num) {
      user.people = num;
      if (num === 1) {
        app.pplFeedback.innerHTML = 'Booking for ' + num + ' person';
      } else {
        app.pplFeedback.innerHTML = 'Booking for ' + num + ' people';
      }
    },
    // setNum function ENDS

    dateBooking: function() {
      app.maxDays.innerHTML = accommodation.house.maxNights;

      app.calendar = $('#datePicker').daterangepicker({
        'maxSpan': {
          'days': 14
        },
        'autoApply': false,
        'minDate': moment(),
        'alwaysShowCalendars': true,
        'drops': 'left',
        'opens': 'center'
      },
      function(start, end, label) {
        var startDate = new Date (start.format('MM/DD/YYYY')),
          endDate = new Date (end.format('MM/DD/YYYY')),
          timeDifference = endDate.getTime() - startDate.getTime();

        user.checkIn = start.format('DD-MM-YY');
        user.checkOut = end.format('DD-MM-YY');
        user.stayLength = timeDifference / (1000 * 3600 * 24) + 1;

        if (user.stayLength === 1) {
          app.dateFeedback.innerHTML = 'Booking for ' + user.stayLength + ' night - From ' + user.checkIn + ' to ' + user.checkOut;
        } else {
          app.dateFeedback.innerHTML = 'Booking for ' + user.stayLength + ' nights - From ' + user.checkIn + ' to ' + user.checkOut;
        }
      });
      // daterangepicker ENDS
    },
    // dateBooking function ENDS

    placeBooking: function() {

      // test marker
      var marker1 = new mapboxgl.Marker()
        .setLngLat(accommodation.hotel.coordinates)
        .addTo(map);


      var geojson = {
        type: 'FeatureCollection',
        features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: accommodation.hotel.coordinates
          },
          properties: {
            title: accommodation.hotel.name,
            description: ''
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: accommodation.hostel.coordinates
          },
          properties: {
            title: accommodation.hostel.name,
            description: ''
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: accommodation.motel.coordinates
          },
          properties: {
            title: accommodation.motel.name,
            description: ''
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: accommodation.house.coordinates
          },
          properties: {
            title: accommodation.house.name,
            description: ''
          }
        }]
      };

      // add markers to map -- looping through geojson object
      geojson.features.forEach(function(marker) {

      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
      });

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
