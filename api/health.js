module.exports = (req, res) => {
  res.json({ status: 'ok', endpoint: '/stock?list=sh000003' });
};
