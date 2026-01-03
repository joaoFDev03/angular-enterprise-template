# Build
FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --configuration angular-enterprise-template

# Serve
FROM nginx:alpine
COPY --from=build /app/dist/angular-enterprise-template /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
