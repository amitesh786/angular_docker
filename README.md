# Angular Docker Nginx

* This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 8.1.0

## Development server

* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

* Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

* Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
* Before running the tests make sure you are serving the app via `ng serve`.

## Dependencies

* The example code uses apps built with [Angular-CLI](https://github.com/angular/angular-cli). 
* To create Docker images and containers, you'll need [Docker](https://www.docker.com/).

## Structure

* `angular_docker_nginx` provides a base Angular application with simple Dockerfile and default.conf for nginx 
to create a container that will serve up the Angular app.
* `angular_docker_nginx` provides and update conf file to proxy all calls to `/` to another server

## Docker

# Build Docker Image
* Run `docker build -t ${name_docker_image} .` to build the docker image.

# Docker port
* Run `docker run -p 4200:4200 ${name_docker_image}` navigate to `http://localhost:4200/` the app will start.
