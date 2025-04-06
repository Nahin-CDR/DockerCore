# Step 1
`` docker run -d --name web1 --network my-network my-web-server1 ``
# Step 2
`` docker run -d --name web1 --network my-network my-web-server2 ``

# Step 3
  
  ``` docker run -d --name lb --network my-network -p 8080:80 -v $(pwd)/loadbalancer.conf:/etc/nginx/nginx.conf:ro nginx:alpine ``` 

