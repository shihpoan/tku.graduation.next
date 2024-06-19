# # Use the official Node.js image as the base image
# FROM node:18 AS builder

# # Set the working directory
# WORKDIR /src

# # Copy the package.json and package-lock.json (if available)
# COPY package.json ./

# # Install dependencies
# RUN npm install

# FROM node:18

# # Expose the port the app runs on
# EXPOSE 3000

# # Start the Next.js application with pm2
# CMD ["npm", "start"]

# WORKDIR /app

# COPY --from=builder /src/node_modules /app/node_modules

# # Copy the rest of the application code
# COPY . .

# # Build the Next.js application
# RUN npm run build

# Use the official Node.js image as the base image for building
FROM node:18 AS builder

# Set the working directory
WORKDIR /src

# Copy the package.json and package-lock.json (if available)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use the official Node.js image as the base image for running
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the necessary files from the builder stage
COPY --from=builder /src/package.json /src/package-lock.json ./
COPY --from=builder /src/node_modules ./node_modules
COPY --from=builder /src/.next ./.next
COPY --from=builder /src/public ./public

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]

