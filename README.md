# MicroFrontend POC

## Overview
This repository demonstrates a proof of concept (POC) for implementing micro-frontends using Webpack Module Federation. The project consists of a host application and a remote application, showcasing how to integrate and deploy micro-frontends independently.

## Project Structure
- **host-app**: The main application that loads remote components.
- **remote-app**: The micro-frontend application that exposes components to be used by the host.

## Technologies Used
- **React**: For building user interfaces.
- **Webpack**: For module bundling and Module Federation.
- **Docker**: For containerizing applications.
- **Kubernetes (GKE)**: For deploying and managing containerized applications.
- **GitHub Actions**: For CI/CD pipeline automation.

## Getting Started

### Prerequisites
- Node.js and npm installed
- Docker installed
- Kubernetes cluster (GKE) set up
- GitHub account

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/micro-frontend-hub.git MicroFrontendPOC
   cd MicroFrontendPOC

Install Dependencies: Navigate to both host-app and remote-app directories and install dependencies

cd host-app
npm install
cd ../remote-app
npm install

Run Applications Locally: Start both applications on different ports

# In host-app directory
npm start

# In remote-app directory
npm start

# Build Docker Images:
docker build -t your-username/host-app ./host-app

docker build -t your-username/remote-app ./remote-app

# Push Docker Images to GCR:
docker tag your-username/host-app gcr.io/YOUR_PROJECT_ID/host-app

docker tag your-username/remote-app gcr.io/YOUR_PROJECT_ID/remote-app

docker push gcr.io/YOUR_PROJECT_ID/host-app

docker push gcr.io/YOUR_PROJECT_ID/remote-app



# Deploy to GKE: Apply Kubernetes deployment and service files

kubectl apply -f k8s/host-deployment.yaml

kubectl apply -f k8s/remote-deployment.yaml

kubectl apply -f k8s/host-service.yaml


kubectl apply -f k8s/remote-service.yaml

# CI/CD Pipeline
This project uses GitHub Actions for CI/CD. The pipeline is defined in .github/workflows/main.yml and automates the process of building, pushing Docker images, and deploying to GKE.

# Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.




