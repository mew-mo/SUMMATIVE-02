#  Sweet As!<br> Queenstown Getaways
##### T O U R I S M &nbsp;&nbsp;N E W &nbsp;&nbsp;Z E A L A N D
\
This project is a Single Page Application (SPA) requested by Tourism New Zealand, the client, for their new campaign. The campaign, 'Sweet As! Queenstown Getaways' is aimed at Kiwis who want a brief holiday in Queenstown- the application is for allowing them to book their accommodation for up to 4 people, for a length of up to 15 days.

:ski:

The main objectives of the application is to create a simple, easy to understand UI that provides the user with live updating feedback throughout the whole booking process, including thorough information validation to minimize user error.


*This project was done for class at Yoobee Colleges, and the premise is entirely fictional. Made for educational purposes only to build on the foundations of my Javascript coding and showcase what I have learned through the second module.*

---

## Production tools
#### Atom :ski:
Atom was used for all coding- html, css, sass and js. This tool enhanced my workflow greatly, especially with the package 'emmet' that gives you shortcuts while coding, as well as auto-predicting based on class/id/variable names you have previously used. This saved me great amounts of typing time and also accounted for typos I would potentially make, and packages allowed me to keep my code tidy and error free.
#### Terminal :ski:
The terminal was used extensively throughout the project alongside Gulp and Git, and worked as a way for me to access my project both inside and outside of class. The terminal was used to run all Gulp functions which helped me with ensuring my code was error free as I worked, as the terminal would update on file save thanks to how Gulp was set up.

#### Gulp :ski:
Gulp was used for various different functions that greatly enhanced my production workflow:
* **Live refresh:** Refreshes the HTML live page on HTML, JS and CSS save, therefore reducing time spent saving and manually refreshing the page. Gulp does so by simulating a live-server environment, which follows industry best practices as the application would run through a server in a real scenario. Being able to instantly see changes saved time and allowed me to make changes faster and more efficiently.
* **Minifying:** Automatically minifies CSS and JS files. This is efficient for reducing the file-size of these pieces of code, and follows industry best practices.
* **JS Linting:** Automatically linted my JS code on save, which saves time that would've been spent manually copying my JS onto an online linting tool and waiting for it to run. The results are instant and greatly increase efficiency, pointing out errors and their exact line and column position. I was able to eliminate errors nearly the instant they appeared.
* **Sass:** In the past, I have used Koala to watch my SCSS files and convert them into CSS. While functional, it was always a touch buggy- using Gulp to watch my SCSS and convert it saved on time greatly as I wasn't relying on an individual application and it runs through the terminal instantly on save without any hassle. This is also closer to an industry standard way of writing SCSS compared to Koala.
1,665 companies use gulp, showcasing how it is an industry standard tool utilised professionally for a similar purpose of making workflow more efficient.

#### Chrome Inspector :ski:
The chrome inspector was extremely helpful, as the errors it throws in the console are sometimes undetected by the gulp linter. Using the two in collaboration with each other enabled me to most efficiently weed out issues and figure out problems as I worked. The inspector was particularly handy for checking if the html file was altering as I'd expected it to, and checking when functions were firing. This made my work process much more efficient, giving me clues or direct nods to where issues lie throughout the coding process.

#### Node.js and npm :ski:
Node.js is a hugely popular open-source platform for executing JS server-side (back-end). It is absolutely an industry standard tool, used by huge companies such as Netflix, LinkedIn and Paypal. I personally used node.js in order to access npm installs, which greatly decreased the amount of time I had to spend searching for specific plugins or libraries as I could download them straight into my project using the 'npm i' command- this follows best practices as I didn't waste any time and was able to have quick, easy access to all the files I needed.

#### Github :octocat:
This Github repo was used from start-to-end in order to access my project in it's full glory from both home and my school workspace. By pulling and pushing from terminal I constantly was able to update the files quickly and efficiently, barely having to wait for any upload / download time compared to more lengthy methods like using a USB or uploading to Google Drive- this greatly enhanced my workflow, as accessing files became a matter of simply pressing a few buttons. Since my terminal was constantly open for the project anyway, this was the most efficient method of not only accessing my files between different workspaces, but being able to keep up to date with the commit messages and refreshed on things I had done, hadn't done and still needed to do.\
Github is also a very popular website in the world of developers, and could definitely be considered as an industry standard tool to utilize and understand.

#### Sass :ski:
Sass (SCSS) is a style of coding akin to CSS that I have become very font of for the shortcuts that it enables me to use that greatly save time. The main Sass methods I used were:
* **Variables:** Sass variables save typing time and also make code more readable- I especially enjoy setting colour variables so that I do not have to type out hex codes.
 ``` scss
   $cyan: #51fbdf;
   $turquoise: #51c1da;
   $blue: #7093e3;
   $purple: #7e65e6;
 ```
* **Imports:** Using sass imports allowed me to separate my variables from the mass of my js code, which helped my code to be more clean. Additionally, it made it much easier to locate the variables whenever I needed to adjust them slightly.
``` scss
@import 'vars';
```

* **Mixins:** Sass mixins are a great way to set a default to be used later in code multiple times, and save you from having to repeat code or break the logical order of your cascade- additionally, the ability to parse values is especially handy for fitting your different needs and creating different instances of a similar element much more efficiently.
``` scss
@mixin jost-default($color: $white) {
  color: $color;
  font-weight: 300;
  font-family: 'Jost', sans-serif;
}
```
* **Extends:** Sass extends are similar to mixins, but you can use classes you've already created and include their code into a new element- this is efficient for it also reduces code repetition and doesn't break the logical flow of your cascade. Example included in nesting.
* **Nesting:** Sass nesting allows you to target children elements similarly to how you would in vanilla css, but laid out more logically to show the child you are targeting literally inside the parent- this makes the code more readable.
``` scss
.date-content {
  @extend .people-content;

  h6 {
    margin-top: 26%;
  }
}
```

---
## Code Validation
#### HTML :ski:
I ran my HTML through the [w3 schools HTML validator](https://validator.w3.org/nu/#textarea), and resulted with no errors.

![Screenshot of my w3 HTML approval](img/html-valid.png?raw=true)

There are also no warnings, so everything is all sweet!

#### CSS :ski:
I ran my CSS through the [w3 schools CSS validator](https://jigsaw.w3.org/css-validator/validator), and resulted with no errors.

![Screenshot of my w3 CSS approval](img/css-valid.png?raw=true)

There are a few warnings, mostly for extension transitions, which were included for the sake of the broadest use of my outcome. Additionally, some warnings for the styles I had to create to overwrite daterangepicker and bootstrap's styles (setting the border colour to the same as the background colour), but this was necessary in order to keep the style in line with my website's style overall.

#### JS :ski:
Throughout my coding process, as mentioned previously, my JS was ran through a linter via gulp. This was constantly open on my terminal and checked, so I could quickly and easily resolve errors as soon as they did pop up. As of finishing my project, the lint was clean and showed no errors.

---
## JS Code Style Guide
#### Idiomatic JS :ski:
The Javascript Style Guide I adhered by in this project was idiomatic.js, with the ruleset found [here](https://github.com/rwaldron/idiomatic.js/).\

Main principles I followed from the manifesto in my project included:
* Declaring variables at the top of functions
* Declaring variables once per scope
``` javascript
var startDate = new Date (start.format('MM/DD/YYYY')),
  endDate = new Date (end.format('MM/DD/YYYY')),
  timeDifference = endDate.getTime() - startDate.getTime();

```
* Consistently using only single quotes
* Evaluating directly for truthy and falsy, with el and !el
```javascript
if (user.meals) {
  app.nextBtn.style.opacity = '1';
}

if (!app.showPrices) {
  app.showPrices = true;
  app.breakfastLabel.innerHTML += ' - $' + meals.breakfast;
  app.lunchLabel.innerHTML += ' - $' + meals.lunch;
  app.dinnerLabel.innerHTML += ' - $' + meals.dinner;
}
```
* Sticking consistently with tabs instead of soft indents
* Working with 'show invisibles' on - I used '1' to represent spaces as that made it easiest for me to locate accidental blank line or end of line whitespaces
![screenshot showing the character '1' representing space](img/invisibles-ex.png?raw=true)

* Consistently using strict equals (===)
* Using readable var names and camelCase for function and var declarations
* Array variable names using 's' at the end to indicate they are an array of multiple items

* In section 2.D.1.1 it is declared that the ‘inner whitespace’ rule is optional, so I chose to not do this (including a space after the beginning and before the end of round brackets ( like so )) but ensured that the inner spacing of the contents remained spaced like in 2.A.1.1. I applied this consistently, as that is the primary rule stressed in the section.
``` javascript
// how I followed the style guide, consistently through my code
  if ((printMeals === user.gettingMeals[0] + user.gettingMeals[1]) && (user.gettingMeals[1] != '') && (user.gettingMeals[0] != '')) {
    printMeals = ' Breakfast & Lunch';
  }

  // how my code would've looked if I didn't
  if(printMeals===user.gettingMeals[0]+user.gettingMeals[1]&&user.gettingMeals[1]!=''&&user.gettingMeals[0]!='') printMeals = ' Breakfast & Lunch';
```

---
## Libraries, Plugins and APIs
#### Libraries :ski:
* bootstrap
* jquery
* jquery UI
* fontawesome
```html
<!-- head links -->
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/font-awesome.min.css">

<!-- links before </body> -->
<script src="js/jquery.min.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/moment.min.js"></script>
```

#### Plugins :ski:
* slick
* daterangepicker
* tilt.js
* hover.css
```html
<!-- head links -->
<link rel="stylesheet" href="css/daterangepicker.css">
<link rel="stylesheet" type="text/css" href="css/hover.css"/>
<link rel="stylesheet" type="text/css" href="slick/slick.css"/>

<!-- links before </body> -->
<script src="js/tilt.jquery.min.js"></script>
<script src="slick/slick.min.js"></script>
<script src="js/daterangepicker.js"></script>
```

#### APIs :ski:
* mapbox
```html
<!-- head links -->
<script src="https://api.tiles.mapbox.com/mapbox-gl-js/v2.3.0/mapbox-gl.js"></script>
<link href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.3.0/mapbox-gl.css" rel="stylesheet" />
```

---
## Future Improvements
:ski:

I learned a lot throughout this project, and am mostly satisfied with the outcome- although there are a few things I would do differently or improve on (potentially to be updated in the future), as follows:
* Making the code auto select the accommodation based on what map marker you've clicked
* Working more images of the accommodation and details into the design
* Reducing code by using more functions with arguments and parameters
* Working more with returns
* Making slick's transitions more interesting / animated

It'd be cool if I could implement these extras in the future and improve my coding skills more!
