<template>
  <div class="more-content">
    <!-- 打字机 Header（沿用原 README typing svg） -->
    <div class="typing">
      <img
        :src="typingSvg"
        alt="PHX"
        loading="lazy"
        referrerpolicy="no-referrer"
      />
    </div>

    <!-- 关于 -->
    <section class="block">
      <h3>关于</h3>
      <p>
        我是 <strong>PHX</strong>，多个商业项目创始人。主攻 <strong>IDC</strong>，对网络、前后端、中小型团队运营以及
        <strong>DDoS 攻防</strong>都有持续研究与一些成果。已实现财富自由，欢迎各路同行交流。
      </p>
      <blockquote>
        平常不怎么看 GitHub Issue，<strong>有事请直接联系我的 Telegram</strong>：
        <a href="https://t.me/PHX_poster?direct" target="_blank" rel="noreferrer">@PHX_poster</a>
      </blockquote>
    </section>

    <!-- 信条 -->
    <section class="block">
      <h3>信条</h3>
      <div class="creed">
        <div class="creed-card">
          <span class="creed-text">「 我永远相信中国奠信 」</span>
        </div>
        <div class="creed-card">
          <span class="creed-text">「 Vibe Coding is BEST! 」</span>
          <a href="https://cursor.com" target="_blank" rel="noreferrer" class="badge-link">
            <img
              src="https://img.shields.io/badge/Powered%20by-Cursor-111?style=flat-square&logo=cursor&logoColor=white"
              alt="Powered by Cursor"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>

    <!-- 技术栈 -->
    <section class="block">
      <h3>技术栈</h3>
      <p class="badges">
        <img src="https://img.shields.io/badge/Python-111?style=flat-square&logo=python&logoColor=white" alt="Python" loading="lazy" />
        <img src="https://img.shields.io/badge/Node.js-111?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js" loading="lazy" />
        <img src="https://img.shields.io/badge/Cloudflare%20Workers-111?style=flat-square&logo=cloudflareworkers&logoColor=white" alt="Cloudflare Workers" loading="lazy" />
        <img src="https://img.shields.io/badge/TypeScript-111?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" loading="lazy" />
        <img src="https://img.shields.io/badge/Linux-111?style=flat-square&logo=linux&logoColor=white" alt="Linux" loading="lazy" />
        <img src="https://img.shields.io/badge/Nginx-111?style=flat-square&logo=nginx&logoColor=white" alt="Nginx" loading="lazy" />
        <img src="https://img.shields.io/badge/Docker-111?style=flat-square&logo=docker&logoColor=white" alt="Docker" loading="lazy" />
        <img src="https://img.shields.io/badge/Cloudflare-111?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare" loading="lazy" />
        <img src="https://img.shields.io/badge/Cursor-111?style=flat-square&logo=cursor&logoColor=white" alt="Cursor" loading="lazy" />
      </p>
    </section>

    <!-- 方向 -->
    <section class="block">
      <h3>方向</h3>
      <table class="focus">
        <thead>
          <tr><th>领域</th><th>内容</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>IDC</strong></td><td>机房选型、线路规划、节点调度、长期稳定运营</td></tr>
          <tr><td><strong>网络</strong></td><td>高性能转发、边缘加速、Anycast、协议优化</td></tr>
          <tr><td><strong>安全</strong></td><td>DDoS 攻防、清洗策略、风控、服务器加固</td></tr>
          <tr><td><strong>研发</strong></td><td>Python 与 Node.js 后端、前端工程、Cloudflare Workers</td></tr>
          <tr><td><strong>团队</strong></td><td>中小型团队的运营、协作流程与产品交付</td></tr>
        </tbody>
      </table>
    </section>

    <div class="motto">— Less, but better. —</div>
  </div>
</template>

<script setup>
const typingSvg =
  "https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=22&pause=1200&color=FFFFFF&center=true&vCenter=true&width=560&height=50&lines=Hi%2C+I'm+PHX.;Founder+of+multiple+ventures.;IDC+%C2%B7+Network+%C2%B7+Security.;Vibe+Coding+is+BEST!";
</script>

<style lang="scss" scoped>
.more-content {
  margin-top: 18px;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  padding-right: 6px;
  color: #efefef;
  font-size: 0.92rem;
  line-height: 1.7;

  // 滚动条美化
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.18);
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.32); }

  .typing {
    display: flex;
    justify-content: center;
    margin-bottom: 14px;
    img { max-width: 100%; height: auto; }
  }

  .block {
    animation: fade 0.5s;
    padding: 14px 16px;
    margin-bottom: 14px;
    background: rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(6px);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.06);

    h3 {
      font-size: 1.05rem;
      margin: 0 0 10px;
      padding-left: 10px;
      border-left: 3px solid #ffd24a;
      letter-spacing: 0.5px;
    }
    p { margin: 6px 0; }
    a {
      color: #ffd24a;
      text-decoration: none;
      &:hover { text-decoration: underline; }
    }
    blockquote {
      margin: 10px 0 0;
      padding: 8px 12px;
      border-left: 3px solid rgba(255, 255, 255, 0.35);
      background: rgba(255, 255, 255, 0.04);
      border-radius: 0 6px 6px 0;
      font-size: 0.88rem;
    }
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 8px;
    align-items: center;
    img { display: block; height: 22px; }
  }

  .creed {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    .creed-card {
      flex: 1 1 0;
      min-width: 220px;
      padding: 18px 14px;
      text-align: center;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      .creed-text {
        display: block;
        font-weight: 600;
        font-size: 1rem;
        margin-bottom: 8px;
      }
      .badge-link img { height: 22px; }
    }
  }

  .focus {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
    th, td {
      padding: 8px 10px;
      text-align: left;
      border-bottom: 1px dashed rgba(255, 255, 255, 0.12);
    }
    th { color: #ffd24a; font-weight: 600; }
    tr:last-child td { border-bottom: none; }
    td:first-child { width: 80px; white-space: nowrap; }
  }

  .motto {
    text-align: center;
    margin: 18px 0 6px;
    font-size: 0.85rem;
    opacity: 0.75;
    letter-spacing: 1px;
    font-style: italic;
  }

  // 窄屏适配
  @media (max-width: 980px) {
    .creed .creed-card { min-width: 0; }
  }

  // 手机端：减小留白，标题/正文字号微调
  @media (max-width: 720px) {
    margin-top: 10px;
    font-size: 0.88rem;
    line-height: 1.65;
    .typing { margin-bottom: 8px; }
    .block {
      padding: 12px 14px;
      margin-bottom: 12px;
      h3 { font-size: 1rem; margin-bottom: 8px; }
    }
    .creed { gap: 8px; flex-direction: column; }
    .focus {
      font-size: 0.85rem;
      th, td { padding: 6px 8px; }
      td:first-child { width: 64px; }
    }
    .badges img { height: 20px; }
    .motto { margin: 12px 0 4px; font-size: 0.78rem; }
  }
}
</style>
