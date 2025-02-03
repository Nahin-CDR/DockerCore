# Use a lightweight Nginx image as the base image
FROM nginx:latest

# Copy the HTML file to the default Nginx web directory
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80 to access the web page
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
