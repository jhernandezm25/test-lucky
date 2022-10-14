FROM node:12.13-alpine As development

WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./

RUN npm install
RUN npm install rimraf
COPY --chown=node:node . .

RUN npm run build

COPY . .
COPY ./dist ./dist
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD ["node", "dist/main"]