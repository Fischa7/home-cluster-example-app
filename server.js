const http = require('http');
const os = require('os');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const hostname = os.hostname();
  const timestamp = new Date().toISOString();

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Custom App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: #f0f0f0;
          }
          .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          h1 { color: #333; }
          .info { background: #e3f2fd; padding: 15px; border-radius: 5px; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Hello from my Home Cluster!</h1>
          <div class="info">
            <p><strong>Pod Hostname:</strong> ${hostname}</p>
            <p><strong>Timestamp:</strong> ${timestamp}</p>
            <p><strong>Request URL:</strong> ${req.url}</p>
          </div>
          <p>This is a custom application deployed via GitOps on my k3s cluster!</p>
        </div>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Hostname: ${os.hostname()}`);
});
