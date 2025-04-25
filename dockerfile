# Use an official Node.js runtime as the base image
FROM node:18-bullseye

# Install dependencies required by Puppeteer’s bundled Chrome
RUN apt-get update && apt-get install -y \
    libnss3 \
    libatk-bridge2.0-0 \
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
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

# Create and set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remainder of your project into the container
COPY . .

# Build your project (this runs your build scripts, including TypeScript compile and Vite build)
RUN npm run build

# The postbuild script (react-snap) will run automatically if it’s defined as "postbuild" in package.json:
# RUN npm run postbuild
# (Normally npm run build will trigger "postbuild" automatically)

# Expose the port (if your app is intended to run as a server; for static sites this may not be used)
EXPOSE 3000

# Define the startup command (adjust if needed; if you're serving static files with a server, for example using 'serve')
CMD [ "npx", "serve", "dist", "-l", "3000" ]
