# stock-a

A 股 / 港股实时行情查询服务，提供 REST API 和网页界面。

## 本地运行

```bash
npm install
npm start
```

浏览器访问 http://localhost:3000

## 免费部署（无需银行卡）— 推荐 Vercel

| 平台 | 需要银行卡 | 说明 |
|------|-----------|------|
| **Vercel** | 否 | 推荐，GitHub 登录即可 |
| **Netlify** | 否 | 需改成 Serverless，类似 Vercel |
| **Render / Railway / Fly.io** | 是 | 绑卡仅做身份验证，免费层一般不扣费 |

### 为什么 Render 要填银行卡？

Render 等平台要求绑卡是为了**防止滥用**（批量注册、挖矿等），不是一定要收费。免费套餐在额度内通常**不会扣钱**，但很多人不想绑卡，所以更推荐 Vercel。

### Vercel 部署步骤（约 3 分钟）

1. 将代码推送到 GitHub
2. 打开 [vercel.com](https://vercel.com)，用 **GitHub 账号登录**（无需银行卡）
3. 点击 **Add New → Project**，导入 `stock-a` 仓库
4. 保持默认配置，点击 **Deploy**
5. 部署完成后获得地址，例如 `https://stock-a.vercel.app`

### 访问方式

| 地址 | 说明 |
|------|------|
| `https://你的域名/` | 网页行情面板 |
| `https://你的域名/stock?list=sh000001,sz000001` | JSON API |
| `https://你的域名/health` | 健康检查 |

### Vercel 免费套餐说明

- **费用**：$0 / 月，无需信用卡
- **限制**：Serverless 冷启动约 1–3 秒（比 Render 休眠后快）
- **流量**：100 GB / 月，个人使用足够

## 备选：Render 部署（需绑卡）

若你接受绑卡验证，项目也保留了 `render.yaml` 配置：

1. 打开 [Render Dashboard](https://dashboard.render.com/)
2. **New + → Blueprint**，连接 GitHub 仓库
3. 自动读取 `render.yaml` 创建免费 Web Service

## API 示例

```
GET /stock?list=sh000001,sz000001,hkHSMPI
```

返回 JSON，字段：`name`（名称）、`price`（现价）、`pcent`（涨跌幅）、`liang`（成交量，部分品种）。
