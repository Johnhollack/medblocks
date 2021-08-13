FROM node:14

RUN mkdir /medblocks_healthcare

WORKDIR /medblocks_healthcare

COPY ./package.json /medblocks_healthcare/

RUN yarn install

COPY . /medblocks_healthcare/

RUN yarn build

CMD ["yarn", "start"]