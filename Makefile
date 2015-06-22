#OMG we use make files?

bcc=./node_modules/.bin/browserify

run: public/sound.js public/battle.js
	node app.js

public/sound.js: web/js/sound.js
	$(bcc) web/js/sound.js > public/sound.js
public/battle.js: web/js/battle.js
	$(bcc) web/js/battle.js > public/battle.js

install:
	npm install

clean:
	rm public/*.js

.PHONY: install clean
