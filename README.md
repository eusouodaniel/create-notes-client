# Project notes - Frontend

![Heroku](http://heroku-badge.herokuapp.com/?app=d-notes)

## How to run

- Install libraries **npm install or yarn**

- Run project **npm start or yarn start**

- Run project with **Docker**:<br>

		docker build -t notes-client:dev .
		docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true notes-client:dev
