const cookieParser = require('cookie-parser');
const ex = require('express');
app = ex();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.raw());
console.log('done')
 app.use(cookieParser());

//  app.use(ex.json());
//  app.use(ex.urlencoded({extended:false}));
 app.use('/f',ex.static('d'));
 
//a
app.get('/login', (req,res)=>{
     res.cookie('a','b');
    res.send('abc');
});

app.get('/b', (req,res)=>{
    res.send('abcd');
});

app.get('/aa', (req,res)=>{

    res.json(req.cookies);
});

app.post('/api', (req,res)=>{
    console.log(req.body);
    console.log(req.body);
    res.cookie(Object.keys(req.body)[0], 
    
    Object.values(req.body)[0]);
    
    res.json({...req.cookies,...res.cookies});
});

app.get('/api', (req,res)=>{
    res.json(req.cookies);
});


app.get('/c', (req,res)=>{
    res.send('abcd');
});

app.listen(8080);