const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

//connect to mongoDB
const dbURL = 'mongodb+srv://admin:hey there lil demons 26@nodetutorial.oelzcis.mongodb.net/blogsDB?retryWrites=true&w=majority';
mongoose.connect(dbURL).then((result) => {
  console.log("connected to db");
  app.listen(3000);
}).catch((error) => {
  console.log(error);
});

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

//routes
app.use('/blogs', blogRoutes);

app.get('/', (request, response) => {
  response.redirect('/blogs');
});
app.get('/about', (request, response) => {
  response.render('about', { title: 'About' });
});

app.use((request, response) => {
  response.status(404).render('404', { title: '404' });
});