# Stage 0: Build (optional if you have build steps)
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Stage 2: Run
FROM node:20-alpine

WORKDIR /app

# Copy only necessary files
COPY --from=build /app ./

# Expose backend port
EXPOSE 9003

# Start the app
CMD ["node", "server.js"]
