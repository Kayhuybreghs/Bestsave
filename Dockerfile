# Use an official Node.js runtime as the base image
FROM node:18-bullseye

# Install dependencies required by Puppeteer’s Chromium and other libraries
RUN apt-get update && apt-get install -y \
    libnss3 \
    libnss3-dev \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libgdk-pixbuf2.0-0 \
    libnspr4 \
    libx11-xcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxi6 \
    libxtst6 \
    libgbm1 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libasound2 \
    libxrandr2 \
    libxss1 \
    fonts-liberation \
    chromium \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

# Tell Puppeteer (and thus, react-snap) to use the system Chromium instead
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Set the working directory inside the container
WORKDIR /app

# Copy package manifests and install dependencies
COPY package*.json ./
RUN npm install

# Copy the remainder of your application
COPY . .

# Build your project (this also triggers the postbuild script if defined)
RUN npm run build

# Expose the desired port (if your app is served via a server)
EXPOSE 3000

# Start a static server to serve your built files (adjust if needed)
CMD [ "npx", "serve", "dist", "-l", "3000" ]
