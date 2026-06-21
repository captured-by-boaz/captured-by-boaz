import os, sys
os.chdir(os.path.dirname(os.path.abspath(__file__)))
sys.argv = ['server']
import http.server, socketserver
PORT = 3456
handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("", PORT), handler) as httpd:
    httpd.serve_forever()
