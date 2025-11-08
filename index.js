const express = require('express');
const app = express();
const productRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
const booksRouter = require('./routes/book');

app.use(express.json());

//Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
})

app.use('/products', productRouter);
app.use('/categories', categoriesRouter);
app.use('/books', booksRouter);

// ✅ Wildcard Route (handles undefined routes)
app.use((req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(4000, () => {
    console.log('🚀 Server is running on http://localhost:4000');
});
