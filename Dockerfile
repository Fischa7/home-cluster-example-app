# Use official Node.js LTS (Long Term Support) image
FROM node:20-alpine

# Create app directory inside container
WORKDIR /usr/src/app

# Copy package files first (for better Docker layer caching)
COPY package*.json ./

# Install dependencies (none in our case, but good practice)
RUN npm install --production

# Copy application source code
COPY server.js ./

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the app
CMD [ "npm", "start" ]
