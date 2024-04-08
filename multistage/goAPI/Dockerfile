# Stage 1: Build stage
FROM golang:latest AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the Go modules files
COPY go.mod ./

# Download dependencies
RUN go mod download

# Copy the source code into the container
COPY . .

# Build the Go app
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o myapp .

# Stage 2: Final stage
FROM alpine:latest  

# Set the working directory inside the container
WORKDIR /root/

# Copy the binary from the builder stage to the final stage
COPY --from=builder /app/myapp .

# Expose port 8080
EXPOSE 8080

# Command to run the executable
CMD ["./myapp"]
