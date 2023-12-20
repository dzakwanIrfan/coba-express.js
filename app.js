const express = require('express');
var expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
  // res.sendFile('./index.html', {root: __dirname});
  const mahasiswa = [
    {
      nama: 'Malika Azra Permata',
      email: 'malika@gmail.com'
    },
    {
      nama: 'Dzakwan Irfan Ramdhani',
      email: 'dzakwan@gmail.com'
    },
    {
      nama: 'Jeje',
      email: 'jeje@gmail.com'
    }
  ];
  res.render('index', {
    nama: 'Dzakwan Irfan',
    judul: 'Halaman Home',
    mahasiswa,
    layout: 'layouts/main'
  });
});

app.get('/product/:id', (req, res) => {
    res.send(`Product ID: ${req.params.id} <br> Category: ${req.query.category}`);
})

app.get('/about', (req, res) => {
  // res.sendFile('./about.html', {root: __dirname});
  res.render('about', {
    judul: 'Halaman About',
    layout: 'layouts/main'
  });
});

app.get('/contact', (req, res) => {
  // res.sendFile('./contact.html', {root: __dirname});
  res.render('contact', {
    judul: 'Halaman Contact',
    layout: 'layouts/main'
  });
});

app.use('/', (req, res) => {
    res.status(404)
    res.send("<h1>404 NOT FOUND</h1>");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const http = require('http');
// const fs = require('fs');

// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if(err){
//             res.writeHead(404);
//             res.write('Error: file not found');
//         }else{
//             res.write(data);
//         }
//         res.end();
//     });
// };

// http
//     .createServer((req, res) => {
//         const url = req.url;
//         if(url === '/about'){
//             renderHTML('about.html', res);
//         }else if(url === '/contact'){
//             renderHTML('contact.html', res);
//         }else{
//             // res.writeHead(200, {
//             //     'Content-Type': 'text/html',
//             // });
//             // res.write('Hello World!');
//             // res.end();

//             // fs.readFile('./index.html', (err, data) => {
//             //     if(err){
//             //         res.writeHead(404);
//             //         res.write('Error: file not found');
//             //     }else{
//             //         res.write(data);
//             //     }
//             //     res.end();
//             // });

//             renderHTML('index.html', res);
//         }
//     })
//     .listen(3000, () => {
//         console.log('Server is listening on port 3000..');
//     });


// // const server = http.createServer((req, res) => {});

// // server.listen(3000, () => {
// //     console.log('Server is listening on port 3000..');
// // });