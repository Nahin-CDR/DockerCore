FROM node:21-alpine
ENV PORT=3000
COPY ./package.json .
RUN yarn
COPY . .
CMD ["node","index.js"]