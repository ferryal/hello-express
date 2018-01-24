var express = require('express');
var router = express.Router();
// var movie = require('./models/dbMovie');
// mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');
//
let movie = [
  {
    id:0,
    title:"Jumanji",
    genre:"Action",
    rating:7
  },{
    id:1,
    title:"Insidious",
    genre:"Horor",
    rating:8
  },{
    id:2,
    title:"Maze Runner",
    genre:"Mystery",
    rating:7
  },{
    id:3,
    title:"Dunia Dalam Berita",
    genre:"unknown",
    rating:1
  }

]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Movie Express.js')
  // res.render('index', { title: 'Movie Express' });
});

//get all items
router.get('/api/items', (req, res) => {
  res.send(movie)
})

// get a single items
router.get('/api/items/:id', (req, res) => {
  let items= movie
  let ItemId = Number(req.params.id)
  let item = items.filter(item => {
    return item.id === ItemId;
  });
  res.send({
    message:`Get data by id`,
    movie: item
  })
})

// save new movie
router.post('/api/items', (req, res) =>{
  const newData = {
    id: movie.length,
    title: req.body.title,
    genre: req.body.genre,
    rating: Number(req.body.rating)
  }
  movie.push(newData)
  res.send({
    message:`Data movie has been added`,
    movie: movie
  })
})


// delete movie by Id
router.delete('/api/items/:id', (req, res) =>{
  let items = movie
  let itemId = Number(req.params.id)
  let currentMovie = items.filter(item => {
    return itemId !== item.id;
  });
  movie = currentMovie
  res.send({
    message:" data has been deleted",
    movie: movie
  })
})

//update movie by Id
router.put('/api/items/:id', (req, res) => {
  let itemId= Number(req.params.id);
  let title= req.body.title;
  let genre= req.body.genre;
  let rating=Number(req.body.rating);

  const itemIndex = movie.findIndex((item, index) => {
    return item.id === itemId;
  })

  movie[itemIndex]["title"]= title
  movie[itemIndex]["genre"]= genre
  movie[itemIndex]["rating"]= rating

  const response = {
    message:"data has been updated",
    movie: movie
  }
  res.send(response)
})



module.exports = router;
