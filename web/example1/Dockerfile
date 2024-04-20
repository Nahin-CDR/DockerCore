# Stage 1: Build the Go binary
FROM golang:latest AS builder

WORKDIR /app

COPY . .

# Download dependencies
RUN go mod download

# Build the Go binary
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

# Stage 2: Create a lightweight container to run the Go binary
FROM alpine:latest

RUN mkdir /app

WORKDIR /app

# Copy the Go binary from the builder stage
COPY --from=builder /app/data ./data
COPY --from=builder /app/app .

# Expose the port
EXPOSE 8090

# Command to run the Go binary
CMD ["./app"]
