# Use an official Node.js runtime as the base image
FROM node:18-bullseye

# Install libraries required by Chromium (and thus Puppeteer) plus install Chromium
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

# Set environment variables BEFORE npm install so that Puppeteer does not download its bundled Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Set the working directory inside the container
WORKDIR /app

# Copy package manifests and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Build your project (this will also run the "postbuild" script defined in package.json)
RUN npm run build

# Expose port 3000 (adjust if necessary)
EXPOSE 3000

# Define the startup command (here using "serve" to serve the static "dist" folder)
CMD [ "npx", "serve", "dist", "-l", "3000" ]

