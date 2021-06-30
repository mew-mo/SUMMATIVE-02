(function() {

// ------------------------------ DATA OBJECTS ------------------------------

// ACCOMMODATION OBJECT -------------------------------
  var accommodation = {
    hotel: {
      name: 'Novotel Queenstown Lakeside',
      coordinates: [168.66260642950354, -45.03336634266233],
      minPeople: 1,
      maxPeople: 2,
      pricePerNight: 157,
      minNights: 1,
      maxNights: 5,
      info: 'Centrally located on the shores of Lake Wakatipu, treat yourself to 4-star tranquility at Novotel Queenstown Lakeside Hotel. Start your day fresh with a breath of mountain air from your hotel room balcony and a delicious buffet breakfast in the airy restaurant. Your hotel room will be waiting for you after a long day of soaking up Queenstown\'s natural beauty.',
      nearAttractions: ['Local Golf Course', 'Coronet Peak Ski  Resort', 'Lake Wakatipu', 'Skyline Luge'],
      img: 'img/novotel.jpg'
    },
    hostel: {
      name: 'Haka Lodge Queenstown',
      coordinates: [168.66277322589283, -45.030134427348074],
      minPeople: 1,
      maxPeople: 1,
      pricePerNight: 30,
      minNights: 1,
      maxNights: 10,
      info: 'You are invited to stay at our upmarket backpackers in Queenstown; Haka Lodge! Opened just a few years ago, close to the city centre and kitted out with top of the line facilities, this lodge is an absolute stunner. We offer accommodation suitable for everybody from luxury bunk beds to private rooms. We believe in offering affordable accommodation that is premium and up-scale. Come and see why we have been awarded a TripAdvisor 2019 Certificate of Excellence.',
      nearAttractions: ['Lake Wakatipu', 'Fergburger', 'Shotover / Camp St intersection', 'Skyline Luge'],
      img: 'img/haka.jpg'
    },
    motel: {
      name: 'Manata Lodge',
      coordinates: [168.7565615118034, -44.99238458104406],
      minPeople: 2,
      maxPeople: 4,
      pricePerNight: 90,
      minNights: 3,
      maxNights: 10,
      info: 'Manata Homestead & Lodge is nestled in the heart of Wakatipu Basin with stunning views of Coronet Peak and the Remarkables. Our beautiful property contains a large 4-bedroom house and 4 self-contained apartments. Manata is perfect for groups of families or friends, small weddings, after wedding BBQ\’s, family celebrations, ski teams, hiking groups, golfers, family reunions and tour groups.',
      nearAttractions: ['Shotover River', 'The Remarkables Ski Area', 'Five Mile Shopping Centre', 'Coronet Peak Ski Area'],
      img: 'img/manata.jpg'
    },
    house: {
      name: 'Shotover Country Cottages',
      coordinates: [168.77857503612444, -45.00940820579655],
      minPeople: 1,
      maxPeople: 4,
      pricePerNight: 240,
      minNights: 2,
      maxNights: 15,
      info: 'Shotover Country Cottages are a fantastic base to explore Queenstown and surroundings. Shotover Country Cottages provide boutique accommodation conveniently located between Queenstown and Arrowtown, NZ. Fully self-contained, the cottages are perfect for a weekend away or a longer stay.',
      nearAttractions: ['The Queenstown Trail', 'The Remarkables and Coronet Peak Ski Areas', 'Shotover and Kawarau Rivers', 'Onsen Hot Pools', 'Lake Hayes'],
      img: 'img/shotover.jpg'
    },
    hotelTwo: {
      name: 'Nugget Point Queenstown Hotel',
      coordinates: [168.68462613895989, -44.98008714506038],
      minPeople: 1,
      maxPeople: 4,
      pricePerNight: 139,
      minNights: 1,
      maxNights: 15,
      info: 'Nugget Point, a THC Group Hotel, is located in Arthur\'s Point, New Zealand. The closest hotel to the stunning Coronet Peak Ski Area, within easy reach of central Queenstown, this property will allow you to experience this destination in a unique and unforgettable way. Our secluded location offers you peace and tranquility to relax during your stay, while also allowing you to enjoy the buzz of central Queenstown – just a 7 minute drive away.',
      nearAttractions: ['Coronet Peak Ski Area', 'Shotover River', 'Onsen Hot Pools', 'Arthur\'s Point Gorge Scenic Reserve'],
      img: 'img/nuggetpoint.jpg'
    }
  };
  // accommodation object ENDS

// MEAL OBJECT -------------------------------
  var meals = {
    breakfast: 20,
    lunch: 20,
    dinner: 25
  };
  // meal object ENDS

// user object to store user inputs later
  var user = {
    start: true,
    people: false,
    checkIn: false,
    checkOut: false,
    stayLength: false,
    place: false,
    price: false,
    meals: false,
    gettingMeals: ['', '', ''],
    total: false
  };
  // user object ENDS

// APP OBJECT -------------------------------
  var app = {
    // pulling loading screen from dom
    loadingScreen: document.querySelector('.loading-screen'),
    loadingIcon: document.querySelector('.loading-icon'),
    // pulling buttons from dom
    startBtn: document.querySelector('.go-btn'),
    infoBtn: document.querySelector('.info-btn'),
    nextBtn: document.querySelector('.next i'),
    backBtn: document.querySelector('.back i'),
    // pulling slide elements and setting slide index, setting blank error message
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
    maxDays: document.querySelector('.max-days'),
    dateFeedback: document.querySelector('.date-feedback'),

    // PULLING FOR ACCOMMODATION SELECT SCREEN ---------------
    availableTo: document.querySelector('.user-people'),
    // map to be added so that it can be pulled out of function scope
    map: false,
    accSelect: document.querySelector('#accommodation'),
    // creating new option elements to be added to dom conditionally
    hotelOpt: document.createElement('option'),
    hostelOpt: document.createElement('option'),
    motelOpt: document.createElement('option'),
    houseOpt: document.createElement('option'),
    hotelTwoOpt: document.createElement('option'),
    allMarkers: [],
    accNames: [],
    options: [],
    optIndex: false,
    resetIndex: false,
    // pulling DOM display text
    price: document.querySelector('.price'),
    locationInfo: document.querySelector('.location-info'),
    attractionList: document.querySelector('.attractions'),
    needsReset: true,

    // PULLING FOR MEAL SELECT SCREEN ---------------
    mealScreen: document.querySelector('#mealSelect'),
    breakfastCheck: document.querySelector('#breakfast'),
    breakfastLabel: document.querySelector('.breakfast label'),
    lunchCheck: document.querySelector('#lunch'),
    lunchLabel: document.querySelector('.lunch label'),
    dinnerCheck: document.querySelector('#dinner'),
    dinnerLabel: document.querySelector('.dinner label'),
    noMealsCheck: document.querySelector('#noMeals'),
    noMealsLabel: document.querySelector('.no-meals label'),
    showPrices: false,
    mealPrices: [meals.breakfast, meals.lunch, meals.dinner],

    // PULLING FOR REVIEW SCREEN ---------------
    revPeople: document.querySelector('.rev-ppl'),
    revStay: document.querySelector('.rev-stay'),
    revPlace: document.querySelector('.rev-place'),
    revMeals: document.querySelector('.rev-meals'),
    finalPrice: document.querySelector('.final-price'),

    // initialisation function
    init: function() {
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

      // LOAD IN WINDOW ---------------
      window.addEventListener('load', function() {
        setTimeout(function() {
          app.loadingIcon.classList.add('hide-loading-icon');
        }, 2000);
        setTimeout(function() {
          app.loadingScreen.classList.add('hide-loading-screen');
        }, 3000);
      });

      // LOAD IN MODAL ---------------
      app.infoBtn.addEventListener('click', function() {
        $('#infoModal').modal('show');
      }, false);

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

      app.checkScreen();
    },
    // init function ENDS

    next: function(val) {
      if (val) {
        app.currentScreen += 1;
        app.nextBtn.style.display = 'block';
        app.backBtn.style.display = 'block';
        $('.screens').slick('slickNext');
      } else {
        alert('Please select ' + app.needsFill + ' first.');
      }
      app.checkScreen();
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
      app.nextBtn.style.opacity = '0.3';

      if (user.people) {
        app.nextBtn.style.opacity = '1';
      }
      // this will fire if the user has already had an input and returned to this screen again- ensures the arrow doesn't display as if it's unavailable to click. This is the case in other functions as well.

      $(app.oneBtn).tilt({
        scale: 1.2
      });

      $(app.twoBtn).tilt({
        scale: 1.2
      });

      $(app.threeBtn).tilt({
        scale: 1.2
      });

      $(app.fourBtn).tilt({
        scale: 1.2
      });

      // peopleScreen eventListener
      app.peopleScreen.addEventListener('click', function(e) {
      app.nextBtn.style.opacity = '1';

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
      // peopleScreen eventListener ENDS

      $(app.backBtn).off().on('click', function() {
        app.nextBtn.style.opacity = '1';
        app.back();
      });

      $(app.nextBtn).off().on('click', function() {
        app.next(user.people);
      });
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
      app.nextBtn.style.opacity = '0.3';

      if (user.stayLength) {
        app.nextBtn.style.opacity = '1';
      }

      // daterangepicker STARTS
      $('#datePicker').daterangepicker({
        'maxSpan': {
          'days': 14
        },
        'autoApply': false,
        'minDate': moment(),
        // sets the min date to the current date
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
        // calculates the number of days between check in and out dates
        app.nextBtn.style.opacity = '1';
        // if this function fires, it means an input has been applied, so the arrow should display as clickable.

        if (user.stayLength === 1) {
          app.dateFeedback.innerHTML = 'Booking for ' + user.stayLength + ' night - For ' + user.checkIn;
          // this conditional is to ensure the grammar is correct on the DOM display depending on if the user has selected 1 night only or not.
        } else {
          app.dateFeedback.innerHTML = 'Booking for ' + user.stayLength + ' nights - From ' + user.checkIn + ' to ' + user.checkOut;
        }
      });
      // daterangepicker ENDS

      $(app.backBtn).off().on('click', function() {
        app.nextBtn.style.opacity = '1';
        // if the user is going back, it means they have already entered an input on the previous step, therefore the next arrow should display as clickable.
        app.back();
      });

      $(app.nextBtn).off().on('click', function() {
        app.next(user.stayLength);
      });
    },
    // dateBooking function ENDS

    placeBooking: function() {
      // map popups
      var hotelPopup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<p>' + accommodation.hotel.name + '</p>' +
        '<img src="' + accommodation.hotel.img + '">'
      ),
        hostelPopup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          '<p>' + accommodation.hostel.name + '</p>' +
          '<img src="' + accommodation.hostel.img + '">'
        ),
        motelPopup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          '<p>' + accommodation.motel.name + '</p>' +
          '<img src="' + accommodation.motel.img + '">'
        ),
        housePopup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          '<p>' + accommodation.house.name + '</p>' +
          '<img src="' + accommodation.house.img + '">'
        ),
        hotelTwoPopup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          '<p>' + accommodation.hotelTwo.name + '</p>' +
          '<img src="' + accommodation.hotelTwo.img + '">'
        ),
      // map markers
        hotelMarker = new mapboxgl.Marker()
          .setLngLat(accommodation.hotel.coordinates)
          .setPopup(hotelPopup),
        hostelMarker = new mapboxgl.Marker()
          .setLngLat(accommodation.hostel.coordinates)
          .setPopup(hostelPopup),
        motelMarker = new mapboxgl.Marker()
          .setLngLat(accommodation.motel.coordinates)
          .setPopup(motelPopup),
        houseMarker = new mapboxgl.Marker()
          .setLngLat(accommodation.house.coordinates)
          .setPopup(housePopup),
        hotelTwoMarker = new mapboxgl.Marker()
          .setLngLat(accommodation.hotelTwo.coordinates)
          .setPopup(hotelTwoPopup);

      // app feedback conditionals
      app.needsFill = 'your accommodation';
      app.nextBtn.style.opacity = '0.3';

      if (user.place) {
        app.nextBtn.style.opacity = '1';
      }

      // conditional to ensure correct grammar is used
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
        app.allMarkers.push(hotelMarker);

        app.hotelOpt.innerHTML = accommodation.hotel.name;
        app.accNames.push('hotel');
        // accNames is an array of the current available accommodation data options to the user. accNames is used to ensure only the relevant names from the accommodation object are targeted later.

        app.accSelect.appendChild(app.hotelOpt);
        app.options.push(app.hotelOpt);
      }
      // hotel conditional ENDS

      // HOSTEL CONDITIONAL
      if ((user.people >= accommodation.hostel.minPeople && user.people <= accommodation.hostel.maxPeople) && (user.stayLength >= accommodation.hostel.minNights && user.stayLength <= accommodation.hostel.maxNights)) {

        hostelMarker.addTo(app.map);
        app.allMarkers.push(hostelMarker);

        app.hostelOpt.innerHTML = accommodation.hostel.name;
        app.accNames.push('hostel');

        app.accSelect.appendChild(app.hostelOpt);
        app.options.push(app.hostelOpt);
      }
      // hostel conditional ENDS

      // MOTEL CONDITIONAL
      if ((user.people >= accommodation.motel.minPeople && user.people <= accommodation.motel.maxPeople) && (user.stayLength >= accommodation.motel.minNights && user.stayLength <= accommodation.motel.maxNights)) {

        motelMarker.addTo(app.map);
        app.allMarkers.push(motelMarker);

        app.motelOpt.innerHTML = accommodation.motel.name;
        app.accNames.push('motel');

        app.accSelect.appendChild(app.motelOpt);
        app.options.push(app.motelOpt);
      }
      // motel conditional ENDS

      // HOUSE CONDITIONAL
      if ((user.people >= accommodation.house.minPeople && user.people <= accommodation.house.maxPeople) && (user.stayLength >= accommodation.house.minNights && user.stayLength <= accommodation.house.maxNights)) {

        houseMarker.addTo(app.map);
        app.allMarkers.push(houseMarker);

        app.houseOpt.innerHTML = accommodation.house.name;
        app.accNames.push('house');

        app.accSelect.appendChild(app.houseOpt);
        app.options.push(app.houseOpt);
      }
      // house conditional ENDS

      // HOTEL TWO CONDITIONAL
      if ((user.people >= accommodation.hotelTwo.minPeople && user.people <= accommodation.hotelTwo.maxPeople) && (user.stayLength >= accommodation.hotelTwo.minNights && user.stayLength <= accommodation.hotelTwo.maxNights)) {

        hotelTwoMarker.addTo(app.map);
        app.allMarkers.push(hotelTwoMarker);

        app.hotelTwoOpt.innerHTML = accommodation.hotelTwo.name;
        app.accNames.push('hotelTwo');

        app.accSelect.appendChild(app.hotelTwoOpt);
        app.options.push(app.hotelTwoOpt);
      }
      // hotel two conditional ENDS

      // selectbox change event STARTS
      app.accSelect.addEventListener('change', function() {

        if (app.resetIndex) {
          app.optIndex = app.accSelect.selectedIndex;
        } else {
          app.optIndex = app.accSelect.selectedIndex - 1;
        }
        // when resetting from being on a different screen, the index number of the option selection box changes- on the first runthrough of the website, the index is offset, though I couldn't figure out why. This statement fixes it that so errors aren't thrown when the index resets if you go back a step from selecting accommodation, while still running properly on the first try.

        while (app.attractionList.firstChild) {
          app.attractionList.removeChild(app.attractionList.lastChild);
        }
        // on change of option selection, resets the DOM display list by removing all children if the firstChild exists --> this is so the list doesn't print multiple times each time the user makes a new selection.

        if (app.options[app.optIndex].label === accommodation[app.accNames[app.optIndex]].name) {
          // checks if the label of the option matches the type of accommodation within the newly defined accNames array based on the user case, and fires when they match.

          app.nextBtn.style.opacity = '1';

          user.place = app.options[app.optIndex].label;

          user.price = accommodation[app.accNames[app.optIndex]].pricePerNight * user.stayLength;

          app.price.innerHTML = '$' + accommodation[app.accNames[app.optIndex]].pricePerNight + ' per night ($' + user.price + ')';

          app.locationInfo.innerHTML = accommodation[app.accNames[app.optIndex]].info;

          app.map.flyTo({
            center: accommodation[app.accNames[app.optIndex]].coordinates,
            zoom: 15,
            essential: true
          });

          for (var i = 0; i < accommodation[app.accNames[app.optIndex]].nearAttractions.length; i++) {
            var attractionItem = document.createElement('li');
            attractionItem.innerHTML = accommodation[app.accNames[app.optIndex]].nearAttractions[i];
            app.attractionList.appendChild(attractionItem);
          }
          // loop that displays the relevant near attractions from the accommodation data in a list on the DOM
          // attraction list loop ENDS
        }
        // if conditional for accommodation options ENDS
      }, false);
      // selectbox change event ENDS

      $(app.backBtn).off().on('click', function() {
        app.needsReset = true;
        app.nextBtn.style.opacity = '1';
        app.resetIndex = true;
        // resetting the index, since going back means this is no longer the first time the placeBooking function is being run. Corrects the issue previously mentioned.
        app.back();
        app.placeReset();
        // on this screen, going back means that several items will need to reset in preparation for the user changing some of their previous inputs, so it can update to new inputs.
      });

      $(app.nextBtn).off().on('click', function() {
        app.next(user.place);
      });
    },
    // placeBooking function ENDS

    placeReset: function() {
      if (app.needsReset) {
        app.optIndex = app.accSelect.selectedIndex;
        app.accNames = [];
        app.options = [];
        app.needsReset = false;
        app.resetMarkers();
        while (app.accSelect.firstChild) {
          app.accSelect.removeChild(app.accSelect.lastChild);
        }
      }
      // if loop ENDS
    },
    // placeReset function ENDS

    resetMarkers: function() {
      for (var i = app.allMarkers.length - 1; i >= 0; i--) {
        app.allMarkers[i].remove();
      }
      // resetting markers in a different scope as to not re-use variable i
    },
    // resetMarkers function ENDS

    mealBooking: function() {

      app.needsFill = 'the meal options you want';
      app.nextBtn.style.opacity = '0.3';

      if (user.meals) {
        app.nextBtn.style.opacity = '1';
      }

      if (!app.showPrices) {
        app.showPrices = true;
        app.breakfastLabel.innerHTML += ' - $' + meals.breakfast;
        app.lunchLabel.innerHTML += ' - $' + meals.lunch;
        app.dinnerLabel.innerHTML += ' - $' + meals.dinner;
      }

      app.addListeners();

      $(app.backBtn).off().on('click', function() {
        app.nextBtn.style.opacity = '1';
        app.back();
      });

      $(app.nextBtn).off().on('click', function() {
        app.next(user.meals);
      });
    },
    // mealBooking function ENDS

    addListeners: function() {

      $(app.breakfastCheck).off().on('click', function() {
        app.breakfastCheck.classList.toggle('clicked-box');
        app.checkItems(app.mealPrices);
        app.hasMeals();
      });

      $(app.lunchCheck).off().on('click', function() {
        app.lunchCheck.classList.toggle('clicked-box');
        app.checkItems(app.mealPrices);
        app.hasMeals();
      });

      $(app.dinnerCheck).off().on('click', function() {
        app.dinnerCheck.classList.toggle('clicked-box');
        app.checkItems(app.mealPrices);
        app.hasMeals();
      });

      $(app.noMealsCheck).off().on('click', function() {
        app.noMealsCheck.classList.toggle('clicked-box');
        app.checkItems(app.mealPrices);
        app.onlyNoMeals();
      });
    },
    // addListeners function ENDS

    checkItems: function(items) {

      user.total = user.price;
      app.nextBtn.style.opacity = '1';

      if (app.breakfastCheck.classList.contains('clicked-box')) {
        user.total = user.total + items[0];
        user.gettingMeals[0] = ' Breakfast';
      } else {
        user.gettingMeals[0] = '';
      }

      if (app.lunchCheck.classList.contains('clicked-box')) {
        user.total = user.total + items[1];
        user.gettingMeals[1] = ' Lunch';
      } else {
        user.gettingMeals[1] = '';
      }

      if (app.dinnerCheck.classList.contains('clicked-box')) {
        user.total = user.total + items[2];
        user.gettingMeals[2] = ' Dinner';
      } else {
        user.gettingMeals[2] = '';
      }

      setTimeout(function () {
        if (app.noMealsCheck.classList.contains('clicked-box')) {
          user.total = user.price;
          user.gettingMeals = ['No extra meals', '', ''];
        }
      }, 500);
      // there was an issue with this firing too fast before the DOM had even changed when trying to select off noMeals, so a setTimeOut had to be added to ensure this conditional doesn't overwrite the others without being correct.

      if (!app.dinnerCheck.classList.contains('clicked-box') && !app.lunchCheck.classList.contains('clicked-box') && !app.breakfastCheck.classList.contains('clicked-box') && !app.noMealsCheck.classList.contains('clicked-box')) {
        user.meals = false;
        app.nextBtn.style.opacity = '0.3';
        // makes it so the user must select an option before they can click the 'next' button
      } else {
        user.meals = true;
        app.nextBtn.style.opacity = '1';
      }
    },
    // checkItems function ENDS

    onlyNoMeals: function() {
      app.breakfastCheck.classList.remove('clicked-box');
      app.lunchCheck.classList.remove('clicked-box');
      app.dinnerCheck.classList.remove('clicked-box');
    },
    // only no meals function ENDS

    hasMeals: function() {
      app.noMealsCheck.classList.remove('clicked-box');
    },
    // has meals function ENDS

    reviewBooking: function() {
      var printMeals = '';
      app.nextBtn.style.opacity = '1';

      for (var i = 0; i < user.gettingMeals.length; i++) {
        if (user.gettingMeals[i] != '') {
          printMeals += user.gettingMeals[i];
        }
      }
      // this for loop and the following if conditional are just so the user's selection of meals display more nicely on the DOM rather than displaying the array of their choices directly, which would display like 'Breakfast, Lunch, Dinner' or 'Breakfast,, Dinner' which isn't so nice. gettingMeals array has a set amount so meals display in logical order rather than order user clicked in.

      // printMeals conditional
      if ((printMeals === user.gettingMeals[0] + user.gettingMeals[1]) && (user.gettingMeals[1] != '') && (user.gettingMeals[0] != '')) {
        printMeals = ' Breakfast & Lunch';

      } else if ((printMeals === user.gettingMeals[0] + user.gettingMeals[2]) && (user.gettingMeals[2] != '') && (user.gettingMeals[0] != '')) {
        printMeals = ' Breakfast & Dinner';

      } else if ((printMeals === user.gettingMeals[1] + user.gettingMeals[2]) && (user.gettingMeals[1] != '') && (user.gettingMeals[2] != '')) {
        printMeals = ' Lunch & Dinner';

      } else if ((printMeals === user.gettingMeals[0] + user.gettingMeals[1] + user.gettingMeals[2]) && (user.gettingMeals[0] != '') && (user.gettingMeals[1] != '') && (user.gettingMeals[2] != '')) {
        printMeals = ' Breakfast, Lunch & Dinner';

      } else if (printMeals === user.gettingMeals[0]) {
        printMeals = user.gettingMeals[0];

      } else if (printMeals === user.gettingMeals[1]) {
        printMeals = user.gettingMeals[1];

      } else if (printMeals === user.gettingMeals[2]) {
        printMeals = user.gettingMeals[2];

      } else {
        printMeals = user.gettingMeals[0];
      }
      // printMeals conditional ENDS

      if (user.people === 1) {
        app.revPeople.innerHTML = '- Booking for ' + user.people + ' person';
      } else {
        app.revPeople.innerHTML = '- Booking for ' + user.people + ' people';
      }

      if (user.stayLength === 1) {
        app.revStay.innerHTML = '- ' + user.stayLength + ' night, for ' + user.checkIn;
      } else {
        app.revStay.innerHTML = '- ' + user.stayLength + ' nights, from ' + user.checkIn + ' to ' + user.checkOut;
      }

      app.revPlace.innerHTML = '- Staying at ' + user.place;

      app.revMeals.innerHTML = '- Extra Meals: ' + printMeals;

      app.finalPrice.innerHTML = '$' + user.total;

      $(app.backBtn).off().on('click', function() {
        app.nextBtn.style.opacity = '1';
        app.back();
      });
    },
    // reviewBooking function ENDS

    confirm: function() {
      app.nextBtn.style.display = 'none';

      $(app.backBtn).off().on('click', function() {
        app.nextBtn.style.opacity = '1';
        app.back();
      });
    }
    // confirm function ENDS
  };
  // app object ENDS

  // starts the code by calling the initialisation function
  app.init();

}());
// iife ENDS
