const express = require('express');
const connectDB = require('./config/db')
const app = express();
const PORT = process.env.PORT || 5000;

//Connect database
connectDB();

app.get('/', (req, res) => res.send('API running'));

//Define routes
app.use('api/users', require('./routes/api/users'))
// app.use('api/auth', require('./routes/api/auth'))
app.use('api/profile', require('./routes/api/profile'))
app.use('api/post', require('./routes/api/post'))

app.listen(PORT, () => console.log(`server started on port ${PORT}`));