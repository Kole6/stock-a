const { fetchStock, DEFAULT_LIST } = require('../lib/stock');

module.exports = async (req, res) => {
  const list = req.query.list || DEFAULT_LIST;
  try {
    const data = await fetchStock(list);
    res.json(data);
  } catch (error) {
    console.error('Error calling external API:', error.message);
    res.status(500).send('Error calling external API');
  }
};
