# Stage - 1
# Use official Golang image as base image
FROM golang:latest AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the source code into the container
COPY . .

# Build the Go app
RUN go build -o myapp .

# Stage == 2

# Final stage
FROM alpine:latest

# Set the working directory inside the container
WORKDIR /root/

# Copy the binary from the builder stage to the final stage
COPY --from=builder /app/myapp .

# Command to run the executable
CMD ["./myapp"]
