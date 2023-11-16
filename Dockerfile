FROM node:18-alpine3.18 as builder
WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

FROM node:18-alpine3.18
WORKDIR /app

COPY --from=builder /app/build ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

CMD ["sh","-c","npx prisma migrate deploy && node server/src/index.js"]