.PHONY: api ui build

api:
	DEBUG=1 php -S 0.0.0.0:8000 api/index.php

ui:
	npx parcel web/index.html --no-cache

build:
	npx parcel build web/index.html
