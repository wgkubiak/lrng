const http = require('http');
const { Buffer } = require('buffer');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');

    if(url === '/') {
        res.write('<html>')
        res.write('<div><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Log user</button></form></div>')
        res.write('</html>')
        return res.end();
    }

    if(url === '/users') {
        res.write('<html>')
        res.write('<ul><li>User 1</li></ul>');
        res.write('<ul><li>User 2</li></ul>');
        res.write('</html>')

        return res.end();
    }

    if(url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', el => {
            body.push(el);
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.write('<html>')
    res.write('</html>')

    res.end();
})

server.listen(3000);