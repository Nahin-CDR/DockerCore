# Use an official Python image as the base
FROM python:3.9

# Set the working directory inside the container
WORKDIR /app

# Copy project files into the container
COPY . .

# Install required Python packages
RUN pip install -r requirements.txt

# Expose port 5000
EXPOSE 5000

# Start the Flask app
CMD ["python", "app.py"]
