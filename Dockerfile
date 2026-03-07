# Multi-stage build for GDP Consulting website
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies (use npm install to avoid lockfile conflicts)
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

# Install nginx and supervisor
RUN apk add --no-cache nginx supervisor

WORKDIR /app

# Copy built frontend assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration to correct Alpine location
RUN rm -f /etc/nginx/http.d/default.conf
COPY nginx.conf /etc/nginx/http.d/default.conf

# Copy API server files and its own package.json
COPY api/ ./api/

# Install API server dependencies from api/package.json
WORKDIR /app/api
RUN npm install --omit=dev

# Return to app directory
WORKDIR /app

# Copy supervisord config
COPY supervisord.conf /etc/supervisord.conf

# Expose port
EXPOSE 80

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
