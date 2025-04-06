# 🚀 Docker Load Balancer Setup

This guide helps you spin up two web server containers and an NGINX load balancer using Docker.

## 🔧 Prerequisites

- Docker installed and running
- A Docker network named `my-network` (create it if not exists)
- A valid `loadbalancer.conf` file in the current directory

---

## 🧪 Setup Commands


### Create Docker network if not already created
```bash
docker network create my-network
```
### Step 1: Run the first web server container
```bash
docker run -d --name web1 --network my-network my-web-server1
```
### Step 2: Run the second web server container
```bash
docker run -d --name web2 --network my-network my-web-server2
```
### Step 3: Run the NGINX load balancer container
```bash
docker run -d --name lb \
  --network my-network \
  -p 8080:80 \
  -v $(pwd)/loadbalancer.conf:/etc/nginx/nginx.conf:ro \
  nginx:alpine
```