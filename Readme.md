#Pirates Bounty

#Overview
A FTL clone set in pirate times.
#Temporary Game Title: Pirates Bounty

#Gameplay Mechanics: 

#Map
Map would be influenced by FTL. User would move around strategic map set in the 1700s at the height of Brittish naval power. The story would revolve around smuggling in and out various goods from harbors. Map would be split in "sectors" like in FTL. Each sector having multiple paths to take to rearch the next sector. Each area within a sector would have a random chance to either find a Royal Navy encounter, another pirate encounter, trading vessel, mercenaries, etc for combat encounters. Areas could also contain events where you aid a stranded person, buy wares from merchant vessels, etc.

Differences than FTL: Instead of having the rebels chasing you like in FTL we could have the transported goods have an expiration timer attached to them. Fits in with the whole old timey feel and perishable goods thing. We could still have the Royal Navy chase you if they identify your vessel and then inform the Navy, but it wouldnt be there from the get go.
Another difference could be that unlike FTL you dont have to start over after you deliver your good. You could take on more difficult transportations while upgrade your vessel. However you could still decide on starting a mission from a different perspective like being a pirate and having a fast agile ship, being a merchant and hiring smaller ships to protect you, being a royal navy member and chasing down pirates. Each with their own style of play to keep the game from getting dull.

#Encounters 
Would be a similar static event similar to FTL. You would have either a top or side view of your vessel and would use your weapons to try to destroy enemy vessels. 
Weapons could include stuff like cannons, throwing anchors, other type of weapnry (probably need to get creative on this). Boarding would remain a big feature with the opportunity to take slaves, have people join your crew, receive bigger rewards since you didn't destroy their ship.

Differences from FTL: I'd like to have boat speed be a factor instead of just pitting both sides against each other like in FTL. Certain weapons would turn on as you get closer to the vessel. Boat agility would help in dodging veseels with a lot of fire power. We could have a little graphic on the top denoting how far away the boat is and show you either gaining on or having been approached by an enemy vessel. Users would have to strategize between getting long range or short range weaponry to carry out their missions. 

#Flavorful factors

Smuggling: Would like to entertain the idea of smaller boats being able to sneak up on larger vessels. Could have a smuggler board the boad and steal some goods. Would require the crew to be on high alert.

Mutiny: Each perspective could have a moral guage that would need to be kept in check or else face a potential mutiny. Would need to worry about who you decide to take in as your crew as they could ignite unrest amongst the other crew members.

More to come

This should give us enough to get started. Feel free to add additional aspects that you think would be cool.


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
