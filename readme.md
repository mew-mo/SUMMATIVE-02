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
* **JS Linting:** Automatically linted my JS code on save, which saves time that would've been spent manually copying my JS onto an online linting tool and waiting for it to run. The results are instant and greatly increase efficiency.
* **Sass:** In the past, I have used Koala to watch my SCSS files and convert them into CSS. While functional, it was always a touch buggy- using Gulp to watch my SCSS and convert it saved on time greatly as I wasn't relying on an individual application and it runs through the terminal instantly on save without any hassle. This is also closer to an industry standard way of writing SCSS compared to Koala.

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
* **Imports:** Using sass imports allowed me to seperate my variables from the mass of my js code, which helped my code to be more clean. Additionally, it made it much easier to locate the variables whenever I needed to adjust them slightly.
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
* **Extends:** Sass extends are similar to mixins, but you can use classes you've already created and include their code into a new element- this is efficient for it also reduces code repition and doesn't break the logical flow of your cascade. Example included in nesting.
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
worms

#### CSS :ski:
worms

#### JS :ski:
worms

---
## JS Code Style Guide
#### Idiomatic JS :ski:
The Javascript Style Guide I adhered by in this project was idiomatic.js, with the ruleset found [here](https://github.com/rwaldron/idiomatic.js/).
In my project I chose to use tabs rather than soft indents, and worked with ‘show invisibles’ turned on inside of atom to ensure that no blank line or end of line whitespaces were present.
In section 2.D.1.1 it is declared that the ‘inner whitespace’ rule is optional, so I chose to not do this (including a space after the beginning and before the end of round brackets ( like so )) but ensured that the spacing of the contents remained spaced like in 2.A.1.1. I applied this consistently, as that is the primary rule stressed in section 2.D.
## more worms

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
```html
<!-- head links -->
<link rel="stylesheet" href="css/daterangepicker.css">
<link rel="stylesheet" type="text/css" href="slick/slick.css"/>

<!-- links before </body> -->
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

# this is where I'm up to :)


* Description of project √
* Productions tools [RETURN HERE AT SOME POINT] √
* Validation statement for .js/.css & html
* Some detail of javascript style guide --idiomatic and examples??
* Any other info you wish to add
  * maybe all plugins, libraries and APIs included? :0 !!


*This text will be italic* (forward slash to line break)\
_This will also be italic_\
**This text will be bold**\
__This will also be bold__\
*You **can** combine them*

✨
