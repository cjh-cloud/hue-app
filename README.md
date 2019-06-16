Web App to control colour of RGB LED on a Arduino Uno connected via serial

Backend:
Node-RED container with an HTTP API endpoint and connection to Arduino using Johnny-Five
/colour receives a POST request of a JSON object. eg { "colour" : "#ff0000" }
https://hub.docker.com/r/chewett/hue-backend

docker run --name hue-backend -p "1880:1880" --device=/dev/ttyACM0:/dev/ttyACM0 chewett/hue-backend

Frontend:
React app that displays buttons that send and HTTP POST request to the Node-RED server when pressed.
npm install : Install required Node modules 
npm start   : Start the React app in dev mode
npm run build   : Build the app to create files for apache container
Apache container copies the files that npm builds when the container is created
https://hub.docker.com/r/chewett/hue-frontend

docker run --name hue-frontend -p "80:80" chewett/hue-frontend

Using Docker-Compose:
1. follow the npm commands for the frontend to get the build folder so the apache container can be built
2. docker-compose up

Links I found useful:
https://github.com/rwaldron/johnny-five/wiki/Getting-started-with-Raspberry-Pi-node-red-and-IoT
https://timchooblog.wordpress.com/2016/06/14/configuring-the-johnny-five-robotics-library-to-work-in-node-red/
