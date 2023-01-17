require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const blogRoutes = require('./routes/blog');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use('/api/blog', blogRoutes);

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log(`listening to port ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log(`Could not connect to MongoDB. ERROR: ${err}`);
    process.exit(1);
  });
