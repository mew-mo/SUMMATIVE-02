

-- PSEUDOCODE !!

What i am doing right now: LOCATION / ACCOMMODATION SELECTION

1. Set up mapbox API
2. Place relevant markers on map and in select box
3. Create conditionals for relevant markers to be shows (ie whats available to the relevant user.people number and user.staylength number)
4. Display place info on DOM
5. Fly to place on map when it has been clicked on the selectbox
6. don't stress because this step is a little bit overwhelming

0325. NO clicking next button unless there is a valid input, we need to make this the case for all of stuff and things tbh... like maybe if user.thing = false, next is non clickable? i'll figure it out.

ToDo (probably at home):
* hero Logo
* attempt inline calendar -- https://jsfiddle.net/9m63neo2/

// no pseudocode needed for this step > non js step!


-- CURRENT PROBLEMS !!

1. figuring out how to minify my custom js with gulp.
2. trying to force daterangepicker to stay open (it seems to really not want to do this)


-- EXTRAS !!

1. animated transitions, make it more exciting
2. loading prior to the actual page load-in
3. extra fun animations on the next/back buttons and other buttons :)
4. background image adjusting cleanly based on user interaction


-- COMPLETED PSEUDOCODE SECTIONS !!

// TRANSITIONS
//
// 1. Pull back and next buttons from DOM
// 2. Add event listeners- create functions to move slide forward on click of next arrow, back on click of back arrow
// 3. celebrate successful implementation

// i am also trying to set up my slick to have more function based code rather than slamming everything in the init function

// finishing getting DOM resources for my html document
//   * calendars
//   * mapbox stuff

// PEOPLE SELECTION
//
// 1. Pull round buttons from DOM
// 2. Assign appropriate values from 1-4 to each button
// 3. Apply functionality that assigns appropriate value to userobject value -- log to ensure it's working
// 4. celebrate successful code <3

// DATE SELECTION
//
// 1. Position calendar properly and rejig layout to accommodate for it, mourn the fact that it doesn't match the design i had been thinking of
// 2. Pull calendars from dom
// 3. Create variables that calculate the date range that you selct :sparkles:
// 4. Push user selection constantly into user object variables
// 5. Display current selection on DOM accordingly uwu


-- MOURNING MY HTML THAT HAD TO BE REDONE !!

// <!-- date select STARTS -->
// <div id="dateSelect" class="full-screen">
//   <div class="date-content row">
//
//     <div class="check-in col-md-6 mx-auto">
//       <h2>Select Check-In date</h2>
//       <input type="text" id="datePicker">
//     </div>
//
//     <div class="check-out col-md-6 mx-auto">
//       <h2>Select Check-Out date</h2>
//     </div>
//
//     <h6>*Note: The Sweet As Campaign only accepts <span class="max-days"></span> days booked maxiumum. Keep your trips sweet!</h6>
//   </div>
//   <!-- date content col ENDS -->
// </div>
// <!-- date select ENDS -->
