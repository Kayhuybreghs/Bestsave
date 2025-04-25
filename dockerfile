# Use an official Node.js runtime as the base image
FROM node:18-bullseye

# Install dependencies required by Puppeteer’s bundled Chrome
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
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

# Create and set the working directory inside the container
WORKDIR /app

# Copy the package.json files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build your project (this runs your build scripts, including TypeScript compile and Vite build)
RUN npm run build

# Expose a port (if your app is served via a static server)
EXPOSE 3000

# Define the startup command
CMD [ "npx", "serve", "dist", "-l", "3000" ]
