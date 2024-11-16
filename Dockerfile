# Use a Node.js base image
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]
