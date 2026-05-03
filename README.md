# PHX 个人主页

> 基于 [supine0703/home](https://github.com/supine0703/home)（fork 自 [imsyy/home](https://github.com/imsyy/home)）改造而成的个人主页，部署到 **Cloudflare Workers + Static Assets**，绑定域名 [iPHX.io](https://iphx.io)。

技术栈：Vue 3 + Vite + Element Plus + Cloudflare Workers（serverless 静态资产）。

---

## 一、快速预览 / 本地开发

```bash
npm install        # 安装依赖
npm run dev        # 本地开发服务器，默认 http://localhost:3000
npm run build      # 生产构建到 dist/
npm run preview    # 预览构建产物
```

---

## 二、个性化配置入口

| 内容 | 文件 | 说明 |
| --- | --- | --- |
| 站点标题 / 描述 / 域名 / 建站时间 | `.env` | 改完需重新 `npm run build` |
| 简介区文案 | `.env` 中的 `VITE_DESC_*` |  |
| 备案号 | `.env` 中的 `VITE_SITE_ICP` / `VITE_SITE_NET` | 留空即不显示，海外域名 + CF 边缘默认无需 |
| 音乐播放器 | `.env` 中的 `VITE_SONG_ID` | 留空即整体禁用，当前已禁用 |
| 社交链接（左下角） | `src/assets/socialLinks.json` | 当前：GitHub + Telegram |
| 网站链接（右下角卡片组） | `src/assets/siteLinks.json` | 当前为空数组 → 不渲染该模块 |
| Made-By 项目链 | `src/assets/madeByInfos.json` | 已添加 PHX 一行 |
| 站点头像 / favicon | `public/images/icon/logo.png`、`favicon.ico`、`apple-touch-icon.png` | 推荐替换为你自己的头像；尺寸保持原图比例 |
| 背景图 | `public/images/background1.jpg ~ background10.jpg` | 直接覆盖即可，自动随机轮换 |

---

## 三、Cloudflare Workers 部署（serverless）

> 此项目是纯静态 SPA，使用 Cloudflare Workers 的 **Static Assets** 能力 —— 无需写一行 Worker 代码即可托管。

### 1. 登录 Cloudflare 账号（首次部署一次性操作）

```powershell
npx wrangler login
```

执行后会弹出浏览器窗口，授权 Wrangler 访问你的 Cloudflare 账号即可。授权完成后，本机就拥有了部署权限，无需保存任何 token 到代码里。

> 即使你已在浏览器登录 Cloudflare，wrangler 也是独立的 CLI 凭据，**必须再 login 一次**。

### 2. 构建 + 部署一键命令

```powershell
npm run deploy
# 等价于：vite build && wrangler deploy
```

首次部署完成后，Wrangler 会输出一条 `https://phx-homepage.<你的子域>.workers.dev` 的临时地址，可以立刻在浏览器打开验证。

### 3. 绑定自定义域 iPHX.io

`wrangler.toml` 已经包含：

```toml
[[routes]]
pattern = "iphx.io"
custom_domain = true

[[routes]]
pattern = "www.iphx.io"
custom_domain = true
```

只要 **iPHX.io 的 DNS Zone 在同一个 Cloudflare 账号下**，部署时 wrangler 会自动：

1. 在该 Zone 下创建 / 更新指向本 Worker 的 DNS 记录；
2. 将 `iphx.io` 与 `www.iphx.io` 注册为该 Worker 的 Custom Domain；
3. 自动签发 / 续期 HTTPS 证书。

部署完成大约 1–3 分钟，访问 <https://iphx.io> 即可。

### 4. 如果首次部署报域名错误

部署日志若出现 `Could not find zone for "iphx.io"` 之类，按下面任一方式处理：

- **方式 A（推荐）**：在 Cloudflare Dashboard 确认 `iphx.io` 已经"添加站点（Add site）"且使用 CF 的两个 NS。然后重新跑 `npm run deploy`。
- **方式 B（手动绑定）**：先把 `wrangler.toml` 里两个 `[[routes]]` 段注释掉，再 `npm run deploy`。然后到 **Cloudflare Dashboard → Workers & Pages → phx-homepage → Settings → Domains & Routes → Add → Custom domain**，输入 `iphx.io` 与 `www.iphx.io` 分别添加即可。CF 会自动签证书与建路由。

### 5. 后续更新

每次改完代码或资源：

```powershell
npm run deploy
```

即可推一次新版本上去，CF 边缘会自动全网刷新（通常秒级）。

---

## 四、目录结构速览

```
PHXhomePage/
├── .env                       # 站点配置（昵称、域名、文案、备案、音乐开关…）
├── wrangler.toml              # Cloudflare Workers 部署配置
├── package.json               # 含 deploy 脚本
├── index.html                 # Vite 入口模板
├── src/
│   ├── App.vue / main.js
│   ├── assets/
│   │   ├── socialLinks.json   # 社交链接
│   │   ├── siteLinks.json     # 网站列表（空数组则不显示）
│   │   └── madeByInfos.json   # Made-By 项目链（含 PHX 自身）
│   ├── components/            # 通用组件（Footer / Music / Player / SocialLinks …）
│   ├── views/                 # 页面区域（Main / Func / Box / MoreSet）
│   ├── store/                 # Pinia 状态
│   ├── utils/ api/ style/
│
├── public/                    # 直出静态资源（头像 / 背景图 / 字体 / 图标）
└── dist/                      # 构建产物（部署到 CF 的目录，已 gitignore）
```

---

## 五、致谢

- [imsyy/home](https://github.com/imsyy/home) —— 原始项目作者
- [supine0703/home](https://github.com/supine0703/home) —— 中间层 fork，移动端体验优化、Made-By 模块化等

本项目 `madeByInfos.json` 中已保留作者链，点击页面左下角 "Made By" 可以查看完整项目谱系。

---

## 六、License

MIT — 与上游一致。
