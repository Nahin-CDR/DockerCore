# This is example 1 of the docker volume learning 
I will explain the things I learn here from example 1

---------------------------------------------------
<br>

# Step 1

```
sudo docker build -t nahincdr/html-server .
```

# Step 2

```
sudo docker create volume server-volume
```


# Step 3

```
sudo docker run --rm -p 8090:8090 -v server-volume:/app nahincdr/html-server 
```