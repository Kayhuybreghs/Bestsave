# Use an official Node.js runtime as the base image
FROM node:18-bullseye

# Install libraries required by Chromium and Puppeteer plus install Chromium
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

# Set environment variables BEFORE installing node modules
# Instruct Puppeteer to skip downloading its bundled Chromium and use the system version
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Set the working directory
WORKDIR /app

# Copy package manifests and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Build your project (this will run tsc, vite build, and trigger "postbuild" which calls react-snap)
RUN npm run build

# Expose the port (your static server will use this, if needed)
EXPOSE 3000

# Define the startup command (using "serve" to serve the "dist" folder)
CMD [ "npx", "serve", "dist", "-l", "3000" ]

