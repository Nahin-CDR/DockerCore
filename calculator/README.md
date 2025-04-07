
# 🧮 Dockerized Calculator App

A simple full-stack calculator app using **HTML + Nginx (frontend)** and **Node.js + Express (backend)**, all running in separate containers using Docker Compose.

---

## 🚀 How It Works

- User inputs two numbers and selects an operation (`+`, `-`, `*`, `/`) in the browser.
- The **frontend** sends the input to the **backend API**.
- The **backend container** performs the calculation and returns the result.
- The **frontend displays** the result.



---

## ⚙️ Main Functionalities

| Component | Technology        | Description                                 |
|-----------|-------------------|---------------------------------------------|
| Frontend  | HTML + Nginx       | UI and JS to take inputs and call API       |
| Backend   | Node.js + Express | Handles `/api/calculate` and does math      |
| Proxy     | Nginx              | Proxies frontend requests to backend safely |
| Network   | Docker Compose     | Runs services in an isolated shared network |

---

## 🛠️ Setup & Run Instructions

### ✅ Prerequisites
- [Docker](https://www.docker.com/products/docker-desktop/) & Docker Compose installed

🧱 Folder Structure
``` bash

📦 docker-calculator
├── 🐳 docker-compose.yml           # Full project er config
├── 📁 api                         # Backend container
│   ├── 📄 Dockerfile              # Backend image build rules
│   ├── 📄 server.js               # Calculation er logic
│   └── 📄 package.json            # Express dependency
├── 📁 web                         # Frontend container
│   ├── 📄 Dockerfile              # Nginx setup
│   ├── 📄 index.html              # UI and JS fetch code
│   └── 📄 nginx.conf              # Proxy kore backend e pathay

---
```
### 🧪 Step-by-Step to Run

1. **Clone the project** or copy all files into a folder.

2. **Navigate to the project folder**:
   ```bash
   cd docker-calculator
   ```
3. **Run**
 ```bash
docker compose up --build
```
http://localhost:8080

```bash
input : 
{
  "a": 12,
  "b": 3,
  "operation": "divide"
}
output :
{
  "result": 4
}


