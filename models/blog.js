const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
}, { timestamps: true });
//timestamps true automatically generates timestamps properties for us on our blogs document such as created at ... updated at ...

//the model for our blogSchema
//the name is important since its gonna plural it and search for the correspending collection in the databse, therefor this one is gonna search for blogs
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;