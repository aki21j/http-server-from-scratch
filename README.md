# http-server-from-scratch

## 📚 Resources
Based on [Build Your Own HTTP Server](https://build-your-own.org/webserver/#table-of-contents)

## Guide:
Part I: Make A Basic HTTP Server

    Introduction
    HTTP Overview
    Code A TCP Server
    Promises and Events
    A Simple Network Protocol
    HTTP Semantics and Syntax
    Code A Basic HTTP Server

Part II: Applications & Extensions

    Dynamic Content and Streaming
    File IO & Resource Management
    Range Requests
    HTTP Caching
    Compression & the Stream API
    WebSocket & Concurrency

--- ------------------------------- ---

## Advanced Topics
## 🧱 Build Your Own HTTP Server From Scratch (1-Week Challenge)

Build a basic but real HTTP server in one week — from raw sockets to handling multiple concurrent requests, all without using a web framework. Great for learning systems, networking, protocols, and sharpening your coding skills.

---

## 🚀 Goal

Create a minimal, standards-compliant HTTP/1.1 server in your chosen language that can:

- Accept and respond to HTTP requests
- Serve static files
- Handle routing and methods (GET, POST)
- Run concurrently (threaded or async)
- Provide proper HTTP status responses
- Optionally: Support TLS, sessions, and templating

---

## 🛠 Recommended Tech

Pick any language you want to go deep in. Examples:

- ⚙️ C / C++ (low-level control)
- 🦀 Rust (safe + fast)
- 🐍 Python (fast to prototype)
- 🟦 Go (great concurrency)
- 🔷 Node.js (event-driven, JS-based)

---

## 📅 Daily Breakdown

### ✅ Day 1 – Raw Socket & Hello, HTTP
- Create a TCP server socket.
- Accept incoming connections.
- Read the raw request.
- Return a hardcoded HTTP `200 OK` response with an HTML body.

📚 **Learn**: Sockets, TCP, HTTP headers

---

### ✅ Day 2 – Parse & Respond to Real Requests
- Parse HTTP method, path, and headers.
- Handle `GET` requests dynamically.
- Return a `404 Not Found` if route is unknown.
- Clean up and organize the code.

📚 **Learn**: Protocol parsing, string handling, minimal router

---

### ✅ Day 3 – Serve Static Files
- Map paths to local files (`/index.html` → `./static/index.html`).
- Serve different MIME types (HTML, CSS, PNG).
- Add directory security (no `../` access).

📚 **Learn**: File I/O, MIME types, basic web server behavior

---

### ✅ Day 4 – Add POST Support & Routing
- Handle `POST` requests with body parsing.
- Implement a simple router with different endpoints.
- Echo back submitted form data or JSON.

📚 **Learn**: Content-Length, headers, body parsing

---

### ✅ Day 5 – Concurrency: Handle Multiple Clients
- Add multithreading or async support.
- Handle multiple requests in parallel (thread-per-connection or event loop).
- Gracefully handle broken connections.

📚 **Learn**: Threads, select/poll/epoll, async IO

---

### ✅ Day 6 – HTTP 1.1 Features & Logging
- Add `Connection: keep-alive` support.
- Log requests and status codes to a file.
- Return proper HTTP status codes (404, 500, 405).

📚 **Learn**: HTTP/1.1 headers, access logs, error handling

---

### ✅ Day 7 – Polish and (Optional) Extras
- Add a CLI flag or config file for port/static directory.
- Implement TLS (HTTPS) with OpenSSL or library.
- Add simple templating (`{{name}} → value`).
- Containerize with Docker.
- Test with `curl`, `telnet`, or load tools like `wrk`.

📚 **Learn**: Deployment, security, performance testing

---

## 📦 Example Usage

```bash
$ ./my_http_server --port 8080 --root ./static
Listening on http://localhost:8080

# Example:
GET /hello HTTP/1.1
→ 200 OK
Hello, world!
