# Use an official Node.js runtime as the base image
FROM node:18-bullseye

# Install required libraries and Chromium
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

# (Optional) Create a symlink so that /usr/bin/chromium-browser points to /usr/bin/chromium.
# This can help if any tools attempt to look for chromium-browser.
RUN if [ -f /usr/bin/chromium ] && [ ! -f /usr/bin/chromium-browser ]; then \
      ln -s /usr/bin/chromium /usr/bin/chromium-browser; \
    fi

# Set environment variables BEFORE installing node modules so that Puppeteer does not download its bundled Chromium.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
ENV CHROME_BIN=/usr/bin/chromium

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your project code
COPY . .

# Build your project (this runs tsc, vite build, and then triggers your postbuild script that calls react-snap)
RUN npm run build

# Expose port 3000 (your static server will run on this port)
EXPOSE 3000

# Start the static server
CMD [ "npx", "serve", "dist", "-l", "3000" ]
