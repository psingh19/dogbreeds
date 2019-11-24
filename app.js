const express = require('express');
const app = express();

const connection = require('./db/connection');

const DogComment = require('./models/DogComment');

app.use(express.static('public'));
app.use(express.json());

app.get('/comments/:dog', (req,res)=>{

    DogComment.find({'breed':req.params.dog})
    .then(results=>{

        res.send(results);
    })
    .catch(error=>res.send(error));

});

app.post('/comments', (req,res)=>{

   let comment = new DogComment(req.body);

   comment.save()
   .then(result=>{

       res.send(comment);
   })
    .catch(error=>res.send(error));

});

connection.once('open', ()=>{

    console.log('connected to db');

        const server = app.listen(8080, ()=>{
        console.log('listening on 8080');
    });
});
