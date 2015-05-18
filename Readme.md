#Pirates Bounty

#Overview
A FTL clone set in pirate times. For game play see the [readme.txt](https://github.com/jonwilkers/Sailing/blob/master/ReadMe.txt).

#Architecture
The game runs a pure html/JavaScript game. The server is based on the express 4
framework and uses the handlebars template engine. The server code loosely
follows the model-view-controller architecture, but it's more of a guide line
...savvy?

Controllers are located in the `cntl` directory. They should be JavaScript
*classes*. This allows us to do inheritance and pass in different runtime
environments (like testing or production).

Views are located in the `views` directory. Layouts are the full page containers
(think full page html). They are located in `views/layouts`. Partials are re-
usable components. These are located in `views/partials`. For details see the 
[express-handlebars](https://www.npmjs.com/package/express3-handlebars), and
[handlebars](http://handlebarsjs.com/) projects.

Public contains all the public facing files. These are the images, *compiled*
css, and *compiled* JavaScript files. Source client side JavaScript and css
files are located in the `web/js` and `web/css` directories respectively.

##Client-Server Side Design
The idea behind the application is make the game a smooth as possible. We will
achieve this by using a single page application (SPA) and has the maximum
amount of data pre-loaded by server rendering. The SPA will primarily focus on 
saving and synchronizing the state of the clients in the background. However,
to save on http requests, we will have the server pre-render as much as 
possible.

One simple way of reducing http request is to concatenate smaller JavaScript
and CSS files together. For JavaScript we will use [Browserfiy](http://browserify.org/).
The CSS will be up to our graphics person...if we can find one.

#Installation

```
make install
```

This will install the dependencies through npm (and possibly some other ways.)

#Launching

```
make
```

Direct your browser to localhost:8000 and you should see the game.

#License
Copyright 2015 Jon Wilkerson
Copyright 2015 Ryan Lee
