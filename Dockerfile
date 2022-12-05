# Start from a node base image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Install the dependencies
COPY package.json ./
RUN npm install

# Copy the source files
COPY . .

# Expose the source code directory as a volume
VOLUME /usr/src/app/src

# Build the app
RUN npm run build

# Start the Webpack dev server on port 3001
CMD ["npm", "run", "start"]





