const http = require('http')

const server = http.createServer((req, res) => {
    if(req.method == 'GET'){
        switch(req.url){
            case '/':
                res.end("Welcome our home page")
                break;
            

            case '/about':
                res.end('about page')
                break;
            case '/contact':
                res.end('contach us page')
                break
            
            default:
                res.statusCode = 404;
                res.end('page not found')
                break;
        }


    }
    else{
        res.statusCode = 405;
        res.end('method not valid')
    }


})

server.listen(8000, () => {
    console.log("Server is sucessfully running!")
})