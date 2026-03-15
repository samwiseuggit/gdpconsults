# Serve pre-built dist directly - no build step needed
FROM nginx:alpine

# Copy pre-built frontend assets from repo
COPY dist /usr/share/nginx/html

# Copy nginx configuration for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
