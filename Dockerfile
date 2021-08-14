FROM node:14

RUN mkdir /healthcare

WORKDIR /healthcare

COPY ./package.json /healthcare/

RUN yarn install

COPY . /healthcare/

RUN yarn build

CMD ["yarn", "start"]