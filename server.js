require('dotenv').config();
const express = require('express');
const app = express();
const blogRoutes = require('./routes/blog')

app.use(express.json());
app.use('/api/blog', blogRoutes)

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => app.listen(process.env.PORT, () => {
        app.listen(process.env.PORT)
    }))
    .catch(err => {
        console.log(`Could not connect to MongoDB. ERROR: ${err}`);
        process.exit(1);
    });


