# React + TypeScript + Vite

### How to run the app with Docker

To run the app with Docker, you need to have Docker installed on your machine. If you don't have Docker installed, you can download it from the official website.

To run the app with Docker, follow these steps:

```
docker build . -t "depo-project:v1.0"
docker run -p 3000:3000 -d depo-project:v1.0
```

After running the commands above, you can access the app by navigating to http://localhost:3000 in your web browser.
