FROM node:8
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENV USER=ecom
ENV PASS=ecom
ENV HOST=localhost
ENV DB=ecomjet_dev
CMD node server.js
EXPOSE 8080
