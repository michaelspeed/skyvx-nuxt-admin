FROM node:14

WORKDIR /usr/src/app

COPY . ./
RUN npm install

EXPOSE 6868

ENV HOST=0.0.0.0
ENV PORT=6868

RUN npm run build

CMD [ "npm", "run", "start" ]
