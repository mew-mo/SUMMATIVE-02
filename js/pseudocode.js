

-- PSEUDOCODE !!

What i am doing right now: MEAL SELECTION

1. Pull checkboxes from DOM
2. Conditionals - if 4th checkbox is selected, can't select any of the others. if any of the 1st three checked, cant select the 4th. this part is tricky already tbh
3. Dynamically add prices into DOM display √




4. Add prices of selected thingo to user.totalPrice :)
  - Since my checkboxes are custom, .checked doesn't work!
  - Pass checkbox into if statement, append 1 to clicks when checked and unchecked:
  - if clicks is even (unchecked), then take the price away.
  - if clicks is odd (checked), add the price of checked item to user.total





0325. NO clicking next button unless there is a valid input, we need to make this the case for all of stuff and things tbh... like maybe if user.thing = false, next is non clickable? i'll figure it out.

ToDo (probably at home):
* attempt inline calendar -- https://jsfiddle.net/9m63neo2/
* grey out arrow key button if user.thing is false
* favicon -- gradiented fern mayhaps
* redo user flows, ensure they are comprehensive and accurate
* MINIFICATION

// no pseudocode needed for this step > non js step!


-- CURRENT PROBLEMS !!


RIGHT N O W !!

trying to make it so that when breakfast / lunch / dinner buttons are clicked, NO THANKS! button resets. Also so that when NO THANKS! button is clicked, breakfast / lunch / dinner buttons reset. the buttons are unhappy and do not want to do this.



1. figuring out how to minify my custom js with gulp-- try to add this in at the end probably
2. trying to force daterangepicker to stay open (it seems to really not want to do this)-- i have tried a lot of different things so it might not be possible, come back to it in the end


-- SOLVED (to some extent) !!

3. app.accNames[i].remove() doesn't want to do what /i/ want it to do. it will be punished accordingly
3. every time i go back and forward, the meal prices append to the dom again. this is likely a result of += but i need to make sure it only happens ONCE


-- EXTRAS !!

1. animated transitions, make it more exciting
2. loading prior to the actual page load-in
3. extra fun animations on the next/back buttons and other buttons :)
4. background image adjusting cleanly based on user interaction
5. next arrow button greyed out until user inputs in each step

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

// LOCATION / ACCOMMODATION SELECTION
//
// 1. Set up mapbox API √
// 2. Place relevant markers on map and in select box √
// 3. Create conditionals for relevant markers to be shows (ie whats available to the relevant user.people number and user.staylength number) √
// 4. Fly to place on map when it has been clicked on the selectbox √
// 5. Display place info on DOM and relevant things √
// 6. Push selection option to relevant user object item :D √
// 7. Dont allow to move on if user option is empty √
// 8. make placeholder come back again :P
// 1332432. don't stress because this step is a little bit overwhelming


-- MOURNING MY HTML AND JS THAT HAD TO BE REDONE !!

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

// pulling accommodation data into a style of array :)
// data: Object.keys(accommodation),
