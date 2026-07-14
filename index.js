const express = require('express');
const { fetchStock, DEFAULT_LIST } = require('./lib/stock');

const server = express();

server.use(express.static('public'));

server.get('/stock', async (req, res) => {
  const list = req.query.list || DEFAULT_LIST;
  try {
    res.json(await fetchStock(list));
  } catch (error) {
    console.error('Error calling external API:', error.message);
    res.status(500).send('Error calling external API');
  }
});

server.get('/health', (req, res) => {
  res.json({ status: 'ok', endpoint: '/stock?list=sh000001' });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = server;
