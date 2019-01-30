// GraphQL
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolver";

// Express
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser'; // PARSE HTML BODY

const server = new GraphQLServer({
    typeDefs: "server/graphql/schema.graphql",
    resolvers 
    // resolvers: resolvers 로도 표현이 가능하지만
    // 최신 자바스크립트는 resolvers 만 써도 같은 의미이다.
});

server.start(() => console.log("Graphql Server Running"));

// Express

const app = express();
const client_id = 'xudKMm4xvu5mqGHFyOtF';
const client_secret = 'II7Ar4ENp4';
const port = 3000;

app.use(bodyParser.json());

app.get('/moves', (req, res) => {
    const api_url = 'https://openapi.naver.com/v1/search/movie.json?query=' + encodeURI(req.query.query);
    const request = require('request');
    const options = {
       url: api_url,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
    console.log(options);
   request.get(options, (error, response, body) => {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
 });

/* handle error */
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use('/', express.static(path.resolve(__dirname, '../build')));
// build 한 파일을 불러오는 경로 build/static/js...css... 등등

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../build/index.html'));
    // React js 를 실행시키는 HTML 경로 이것을 실행함과 동시에 위 use 로 react js 실행
});

app.listen(port, () => {
    console.log('start express port -> ', port);
});