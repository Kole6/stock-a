# stock-a

A 股 / 港股实时行情查询服务，提供 REST API 和网页界面。

## 本地运行

```bash
npm install
npm start
```

浏览器访问 http://localhost:3000

## 免费部署到 Render（推荐）

项目已配置 [Render](https://render.com) 免费套餐，部署后可通过公网 URL 访问。

### 一键部署

1. 将代码推送到 **GitHub** 仓库（本项目默认：`https://github.com/Kole6/stock-a`）
2. 打开 [Render Dashboard](https://dashboard.render.com/)
3. 点击 **New +** → **Blueprint**
4. 连接 GitHub 账号，选择 `stock-a` 仓库
5. Render 会自动读取 `render.yaml` 并创建免费 Web Service
6. 等待部署完成（约 2–3 分钟），获得类似 `https://stock-api-xxxx.onrender.com` 的地址

### 访问方式

| 地址 | 说明 |
|------|------|
| `https://你的域名/` | 网页行情面板 |
| `https://你的域名/stock?list=sh000001,sz000001` | JSON API |
| `https://你的域名/health` | 健康检查 |

### 免费套餐说明

- **费用**：$0 / 月
- **限制**：15 分钟无访问会休眠，下次打开需等待约 30 秒冷启动
- **流量**：每月 100 GB 出站流量

## API 示例

```
GET /stock?list=sh000001,sz000001,hkHSMPI
```

返回 JSON，字段：`name`（名称）、`price`（现价）、`pcent`（涨跌幅）、`liang`（成交量，部分品种）。
