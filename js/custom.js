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
    },
    hotelTwo: {
      name: 'Nugget Point Queenstown Hotel',
      coordinates: [168.68462613895989, -44.98008714506038],
      minPeople: 1,
      maxPeople: 4,
      pricePerNight: 139,
      minNights: 1,
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
    start: true,
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
    // pulling slide elements and setting slide index, setting blank error message
    slides: document.querySelectorAll('.full-screen'),
    currentScreen: 0,
    needsFill: false,
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
    // PULLING FOR ACCOMMODATION SELECT SCREEN ---------------
    availableTo: document.querySelector('.user-people'),
    // map to be added so that it can be pulled out of function scope
    map: false,
    accSelect: document.querySelector('#accommodation'),
    hotelOpt: document.createElement('option'),
    hostelOpt: document.createElement('option'),
    motelOpt: document.createElement('option'),
    houseOpt: document.createElement('option'),
    hotelTwoOpt: document.createElement('option'),

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

      // LOAD IN DATEPICKER ---------------
      $(function() {
        $("#datepicker").datepicker();
      });

      // LOAD IN MAP ---------------
      mapboxgl.accessToken = 'pk.eyJ1IjoibWV3LW1vIiwiYSI6ImNrcDRvZGlvczA0bHQyb3J2czczaXk0cTUifQ.OFSA4kWW4IMpTG6MTy6TPQ';

      var map = new mapboxgl.Map({
        container: 'map',
        zoom: 11,
        center: [168.70906691642736, -45.018670516814126],
        pitch: 0,
        style: 'mapbox://styles/mew-mo/ckpui5rhp1gcl17p6rzvoqbbw'
      });

      app.map = map;

      //  LOAD IN BACK BTN FUNCTIONALITY ---------------
      $(app.backBtn).off().on('click', function() {
        app.back();
      });
      app.checkScreen();
    },
    // init function ENDS

    next: function(val) {
      if (val) {
        app.currentScreen += 1;
        console.log(app.currentScreen + ' is the current screen');
        app.nextBtn.style.display = 'block';
        app.backBtn.style.display = 'block';
        $('.screens').slick('slickNext');
        console.log(val);
      } else {
        alert('Please select ' + app.needsFill + ' first.');
        console.log(val);
      }
      app.checkScreen();
    },
    // next function ENDS

    back: function() {
      app.currentScreen -= 1;
      console.log(app.currentScreen + ' is the current screen');
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

    welcome: function() {
      app.nextBtn.style.display = 'none';
      app.backBtn.style.display = 'none';
      $(app.startBtn).off().on('click', function() {
        app.next(user.start);
      });
    },
    // welcome function ENDS

    peopleBooking: function() {

      app.needsFill = 'the number of people you are booking for';
      app.maxPeople.innerHTML = accommodation.house.maxPeople;
      // jquery click event that ensures click only fires ONCE (removes issue that caused click to fire multiple times despite only being clicked once)
      $(app.nextBtn).off().on('click', function() {
        app.next(user.people);
      });

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

      app.needsFill = 'your check-in and check-out dates';
      app.maxDays.innerHTML = accommodation.house.maxNights;

      $(app.nextBtn).off().on('click', function() {
        app.next(user.stayLength);
      });

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
          app.dateFeedback.innerHTML = 'Booking for ' + user.stayLength + ' night - For ' + user.checkIn;
        } else {
          app.dateFeedback.innerHTML = 'Booking for ' + user.stayLength + ' nights - From ' + user.checkIn + ' to ' + user.checkOut;
        }
      });
      // daterangepicker ENDS
    },
    // dateBooking function ENDS

    placeBooking: function() {
      // map markers
      var allMarkers = [],
        hotelMarker = new mapboxgl.Marker()
          .setLngLat(accommodation.hotel.coordinates),
        hostelMarker = new mapboxgl.Marker()
          .setLngLat(accommodation.hostel.coordinates),
        motelMarker = new mapboxgl.Marker()
          .setLngLat(accommodation.motel.coordinates),
        houseMarker = new mapboxgl.Marker()
          .setLngLat(accommodation.house.coordinates),
        hotelTwoMarker = new mapboxgl.Marker()
          .setLngLat(accommodation.hotelTwo.coordinates),
        options = [];

      // app feedback conditionals
      app.needsFill = 'your accommodation';
      if (user.people === 1 && user.stayLength === 1) {
        app.availableTo.innerHTML = user.people + ' person for ' + user.stayLength + ' night';
      } else if (user.people === 1 && user.stayLength > 1) {
        app.availableTo.innerHTML = user.people + ' person for ' + user.stayLength + ' nights';
      } else if (user.people > 1 && user.stayLength === 1) {
        app.availableTo.innerHTML = user.people + ' people for ' + user.stayLength + ' night';
      } else {
        app.availableTo.innerHTML = user.people + ' people for ' + user.stayLength + ' nights';
      }

      // HOTEL CONDITIONAL
      if ((user.people >= accommodation.hotel.minPeople && user.people <= accommodation.hotel.maxPeople) && (user.stayLength >= accommodation.hotel.minNights && user.stayLength <= accommodation.hotel.maxNights)) {

        hotelMarker.addTo(app.map);
        allMarkers.push(hotelMarker);

        app.hotelOpt.innerHTML = accommodation.hotel.name;
        app.accSelect.appendChild(app.hotelOpt);
        options.push(app.hotelOpt);

        app.hotelOpt.addEventListener('click', function() {
          app.map.flyTo({
            center: accommodation.hotel.coordinates,
            zoom: 15,
            essential: true
          });
        }, false);
        console.log('verycool, the hotel is SUITABLE');

      } else {
        console.log('lol??? looool lolololo');
      }
      // hotel conditional ENDS

      // HOSTEL CONDITIONAL
      if ((user.people >= accommodation.hostel.minPeople && user.people <= accommodation.hostel.maxPeople) && (user.stayLength >= accommodation.hostel.minNights && user.stayLength <= accommodation.hostel.maxNights)) {

        hostelMarker.addTo(app.map);
        allMarkers.push(hostelMarker);

        app.hostelOpt.innerHTML = accommodation.hostel.name;
        app.accSelect.appendChild(app.hostelOpt);
        options.push(app.hostelOpt);

        console.log('verycool, the hostel is SUITABLE');

      } else {
        console.log('lol??? looool lolololo');
      }
      // hostel conditional ENDS

      // MOTEL CONDITIONAL
      if ((user.people >= accommodation.motel.minPeople && user.people <= accommodation.motel.maxPeople) && (user.stayLength >= accommodation.motel.minNights && user.stayLength <= accommodation.motel.maxNights)) {

        motelMarker.addTo(app.map);
        allMarkers.push(motelMarker);

        app.motelOpt.innerHTML = accommodation.motel.name;
        app.accSelect.appendChild(app.motelOpt);
        options.push(app.motelOpt);

        console.log('verycool, the motel is SUITABLE');

      } else {
        console.log('lol??? looool lolololo');
      }
      // motel conditional ENDS

      // HOUSE CONDITIONAL
      if ((user.people >= accommodation.house.minPeople && user.people <= accommodation.house.maxPeople) && (user.stayLength >= accommodation.house.minNights && user.stayLength <= accommodation.house.maxNights)) {

        houseMarker.addTo(app.map);
        allMarkers.push(houseMarker);

        app.houseOpt.innerHTML = accommodation.house.name;
        app.accSelect.appendChild(app.houseOpt);
        options.push(app.houseOpt);

        console.log('verycool, the house is SUITABLE');

      } else {
        console.log('lol??? looool lolololo');
      }
      // house conditional ENDS

      // HOTEL TWO CONDITIONAL
      if ((user.people >= accommodation.hotelTwo.minPeople && user.people <= accommodation.hotelTwo.maxPeople) && (user.stayLength >= accommodation.hotelTwo.minNights && user.stayLength <= accommodation.hotelTwo.maxNights)) {

        hotelTwoMarker.addTo(app.map);
        allMarkers.push(hotelTwoMarker);

        app.hotelTwoOpt.innerHTML = accommodation.hotelTwo.name;
        app.accSelect.appendChild(app.hotelTwoOpt);
        options.push(app.hotelTwoOpt);

        console.log('verycool, the hotelTwo is SUITABLE');

      } else {
        console.log('lol??? looool lolololo');
      }
      // hotel two conditional ENDS

      $(app.backBtn).off().on('click', function() {
        app.back();
        for (var i = allMarkers.length - 1; i >= 0; i--) {
          console.log(allMarkers[i]);
          allMarkers[i].remove();
        }
        for (var i = 0; i < options.length; i++) {
          options[i].remove();
        }
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