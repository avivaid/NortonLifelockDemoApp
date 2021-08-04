FROM node as Dev
WORKDIR /app
COPY package.json . 
RUN npm install 
COPY . .
CMD ["npm", "run", "serve"]

