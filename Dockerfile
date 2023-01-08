# Step 1 ts 를 js로 빌드 
FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./

COPY . .

RUN npm install
RUN npm run build

# Step 2 컴파일된 app을 실행
FROM node:18-alpine
WORKDIR /app

## Step 1의 builder에서 build된 프로젝트를 가져온다
COPY --from=builder /app ./

CMD ["npm", "run", "start:prod"]