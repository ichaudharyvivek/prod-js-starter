import express from 'express';
import dotenv from 'dotenv';
import add from '@src/utils/maths';

// Dotenv configuration
dotenv.config({ path: './src/config/config.env' });

// Constants
const PORT = process.env.PORT || 3000;
const app = express();

// Sample routes
app.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'Visit route /add?a=<number_1>&b=<number_2> to perform addition.' });
});

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  res.status(200).json({ success: true, result: add(+a, +b) });
});

// Listen to port
app.listen(PORT, () => {
  console.log(`Server started in ${process.env.NODE_ENV} mode at port ${PORT}`);
});
