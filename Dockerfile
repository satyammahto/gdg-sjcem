# Stage 1: Build the application
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Cloud Run expects the container to listen on port 8080 defined by the PORT environment variable
# Nginx is configured to listen on 8080 in nginx.conf
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
