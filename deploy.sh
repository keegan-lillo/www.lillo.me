#!/bin/sh 

export FUEL_ENV="production"
export APP_VERSION="$(git rev-parse --verify HEAD)"

cd public

mkdir -p src/css
sass src/scss/app.scss src/css/app.css
sass src/scss/ie.scss src/css/ie.css

r.js -o src/js/app.build.js

php index.php > index.html;

mkdir -p api/portfolio;
php index.php api/portfolio > api/portfolio/index.html

for i in {1..9}
do
	mkdir -p "api/portfolio/{$i}"
	php index.php "api/portfolio/{$i}" > "api/portfolio/{$i}/index.html"
done
