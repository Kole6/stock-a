const axios = require('axios');
const iconv = require('iconv-lite');

const DEFAULT_LIST = 'sh000001,sh601127,sh603108,sh513100,sz000572,sh600418,sz000868,sz002271,sh600733,sz000980,sz000625,hkHSMPI';

function parseStockData(raw) {
  const items = raw.split('str_').slice(1);
  const gp = {};
  for (const i in items) {
    gp[i] = {};
    const gpl = items[i].split(',');
    if (gpl[0].startsWith('hk')) {
      gp[i].name = gpl[1];
      gp[i].price = gpl[6];
      gp[i].pcent = gpl[8] + '%';
    } else if (gpl[0].startsWith('usr_')) {
      gp[i].name = gpl[0];
      gp[i].price = gpl[2] + '%';
    } else {
      gp[i].name = gpl[0];
      gp[i].price = gpl[3];
      gp[i].pcent = ((gpl[3] - gpl[2]) / gpl[2] * 100).toFixed(2) + '%';
      gp[i].liang = gpl[9].slice(0, -8);
    }
  }
  return gp;
}

async function fetchStock(list = DEFAULT_LIST) {
  const url = `https://hq.sinajs.cn/list=${list}`;
  const response = await axios.get(url, {
    responseType: 'arraybuffer',
    transformResponse: [(data) => iconv.decode(data, 'GB18030')],
    headers: { Referer: 'http://finance.sina.com.cn/' },
  });
  return parseStockData(response.data);
}

module.exports = { fetchStock, DEFAULT_LIST };
