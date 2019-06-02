FROM nodered/node-red-docker:rpi

COPY ./flows.json /data/flows.json

RUN npm install johnny-five --unsafe-perm --force \
    && npm install raspi-io --unsafe-perm --force \
    && npm install node-red-contrib-gpio --unsafe-perm --force

RUN usermod -a -G dialout node-red