# Home Cluster Example App

A simple Node.js web application demonstrating GitOps deployment to a k3s home cluster.

## Features

- Lightweight Node.js HTTP server
- Displays pod hostname and timestamp
- Containerized with Docker
- Automated CI/CD with GitHub Actions
- Deployed via ArgoCD

## Local Development

```bash
npm start
```

Visit `http://localhost:8080`

## Container Build

```bash
docker build -t home-cluster-example-app .
docker run -p 8080:8080 home-cluster-example-app
```

## Deployment

This app is automatically built and pushed to GitHub Container Registry (GHCR) on every push to main. The home cluster pulls the image and deploys via ArgoCD.
