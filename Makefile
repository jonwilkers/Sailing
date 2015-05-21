#OMG we use make files?

bcc=./node_modules/.bin/browserify

run: public/sound.js
	node app.js

public/sound.js: web/js/sound.js
	$(bcc) web/js/sound.js > public/sound.js

install:
	npm install

clean:
	rm public/*.js

.PHONY: install clean
