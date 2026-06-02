---
theme: seeed
title: Watcher 空间数字化升级 & 零售语音方案
colorSchema: light
transition: slide-left
mdc: true
drawings:
  persist: false
layout: cover
---

<div class="mcv-kicker">方案工作坊 · 2025.11.28</div>

# Watcher 空间数字化<br>& 零售语音方案

<div class="mcv-cover-subtitle">
SenseCAP Watcher · 小智 AI · MCP · Sensor Network
</div>

<!--
开场介绍背景：今天两个主题合在一起讲——
第一部分是 Watcher 空间数字化升级，
第二部分是零售语音方案。
-->

---
layout: media
---

<div class="mcv-title-row">
  <h1>今天的 Agenda</h1>
  <p>两个主题，六个环节。</p>
</div>

<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.8rem; height: calc(100% - 5.8rem); padding-top: 1rem;">
  <div class="mcv-agenda-card">
    <div><b>01</b><strong>认识产品</strong><p>Watcher 硬件与基本形态</p></div>
  </div>
  <div class="mcv-agenda-card">
    <div><b>02</b><strong>技术架构</strong><p>AI 大脑与硬件躯体的协同架构</p></div>
  </div>
  <div class="mcv-agenda-card">
    <div><b>03</b><strong>感知"革命"</strong><p>从被动指令到主动交互的进化</p></div>
  </div>
  <div class="mcv-agenda-card">
    <div><b>04</b><strong>跨平台协同</strong><p>沿着网络的赛博神经交互</p></div>
  </div>
  <div class="mcv-agenda-card">
    <div><b>05</b><strong>零售语音方案</strong><p>零售场景之语音用途</p></div>
  </div>
  <div class="mcv-agenda-card">
    <div><b>06</b><strong>动手环节</strong><p>Hands-on 实操体验</p></div>
  </div>
</div>

---
layout: section
---

# 01 · 认识产品

<p>Watcher 硬件与基本形态</p>

---
layout: media
---

<div class="mcv-title-row">
  <h1>初识 SenseCAP Watcher</h1>
  <p>小智 AI 的物理载体，一个集成了丰富传感器的紧凑型硬件。</p>
</div>

<div class="mcv-media-split">
  <div class="mcv-side-note">
    <div class="mcv-kicker">四大感知模块</div>
    <ul>
      <li><strong>显示 (Screen)</strong> — 1.45" 触摸屏，提供可视化反馈</li>
      <li><strong>视觉 (Vision)</strong> — 120° 广角摄像头 + Himax AI 芯片</li>
      <li><strong>听觉 (Audio)</strong> — 内置单麦克风与扬声器</li>
      <li><strong>交互 (Control)</strong> — 侧边滚轮与「可编程」按钮</li>
    </ul>
    <div class="mcv-quote">
      麦克风、扬声器、摄像头、显示器、滚轮——<br>
      终端级一体化感知设备
    </div>
  </div>
  <div style="display: flex; align-items: center; justify-content: center; background: var(--mcv-warm); border-radius: 8px; border: 1px solid rgba(0,58,74,0.1);">
    <!-- assets/watcher-product.png — 从 Keynote 导出 -->
    <p style="color: var(--mcv-muted); text-align: center; padding: 2rem; font-size: 0.9rem;">
      [ Watcher 产品图 ]<br>
      <span style="font-size: 0.75rem; opacity: 0.6;">assets/watcher-product.png</span>
    </p>
  </div>
</div>

<!--
Watcher 是小智 AI 的物理载体。
它有摄像头、麦克风、扬声器、显示屏、滚轮按钮——这些组合在一起，让它成为一个能看、能听、能说的终端设备。
-->

---
layout: media
---

<div class="mcv-title-row">
  <h1>大脑？躯体？</h1>
  <p>软件与硬件各司其职，协同完成从感知到执行的全链路。</p>
</div>

<div class="mcv-compare">
  <div class="mcv-side-note">
    <div class="mcv-kicker">小智 AI · 软件 / 大脑</div>
    <ul>
      <li>聊天对话能力</li>
      <li>MCP 工具链调度</li>
      <li>逻辑推理与任务拆解</li>
      <li><strong>负责思考与规划</strong></li>
    </ul>
  </div>
  <div class="mcv-side-note">
    <div class="mcv-kicker">Watcher · 硬件 / 躯体</div>
    <ul>
      <li>提供摄像头、麦克风硬件接口</li>
      <li>NPU (Himax) 提供端侧算力</li>
      <li>执行视觉唤醒与物理反馈</li>
      <li><strong>负责感知与执行</strong></li>
    </ul>
  </div>
</div>

<!--
小智 AI 是大脑，Watcher 是躯体。
大脑负责思考、规划、调度工具；
躯体负责感知现场、执行反馈。
两者合一，才构成一个完整的智能体。
-->

---
layout: media
---

<div class="mcv-title-row">
  <h1>Watcher 的硬件与软件能力</h1>
  <p>硬件提供感知接口，软件提供智能处理。</p>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; height: calc(100% - 5.8rem); padding-top: 1rem;">
  <div style="display: flex; flex-direction: column; gap: 0.6rem;">
    <div class="mcv-kicker">硬件</div>
    <div class="mcv-system-card"><b>📷</b><strong>边缘 AI 摄像头</strong><p>120° 广角，Himax NPU 本地推理，无需联网即可运行视觉模型。</p></div>
    <div class="mcv-system-card"><b>🎙️</b><strong>麦克风 / 扬声器</strong><p>内置拾音与播报，支持语音唤醒和自然语言交互。</p></div>
    <div class="mcv-system-card"><b>📺</b><strong>屏幕 + 外置传感器接口</strong><p>1.45" 触摸屏提供视觉反馈，支持扩展温湿度等外部传感器。</p></div>
  </div>
  <div style="display: flex; flex-direction: column; gap: 0.6rem;">
    <div class="mcv-kicker">软件</div>
    <div class="mcv-system-card"><b>🤖</b><strong>内置小智 AI 对话</strong><p>基于 LLM 的自然语言处理，支持多轮上下文对话。</p></div>
    <div class="mcv-system-card"><b>🔧</b><strong>MCP 工具调用</strong><p>通过 Model Context Protocol 连接数字世界，查天气、控家居、运行代码。</p></div>
    <div class="mcv-system-card"><b>⚡</b><strong>端侧触发 + 云端扩展</strong><p>本地视觉感知触发，云端大模型增强，两者可灵活组合。</p></div>
  </div>
</div>

---
layout: section
---

# 02 · 技术架构

<p>AI 大脑与硬件躯体的协同架构</p>

---
layout: media
---

<div class="mcv-title-row">
  <h1>全感官交互体验</h1>
  <p>四个感知维度，构成完整的人机交互闭环。</p>
</div>

<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.85rem; height: calc(100% - 5.8rem); padding-top: 1rem;">

<v-clicks>

<div class="mcv-agenda-card">
  <div>
    <b>👁️ 看 (See)</b>
    <strong>视觉识别</strong>
    <p>存在感知 · 识别物体 · 检测人脸 · 感知环境变化</p>
  </div>
</div>

<div class="mcv-agenda-card">
  <div>
    <b>👂 听 (Hear)</b>
    <strong>语音识别</strong>
    <p>关键词唤醒 · 自然语言理解 · 多轮对话上下文</p>
  </div>
</div>

<div class="mcv-agenda-card">
  <div>
    <b>🗣️ 说 (Speak)</b>
    <strong>语音播报</strong>
    <p>交互反馈 · TTS 语音合成 · 主动问候与引导</p>
  </div>
</div>

<div class="mcv-agenda-card">
  <div>
    <b>⚙️ 做 (Do)</b>
    <strong>业务执行</strong>
    <p>工具调用 · MCP 协议 · 控制设备 · 触发自动化</p>
  </div>
</div>

</v-clicks>

</div>

---
layout: media
---

<div class="mcv-title-row">
  <h1>Watcher 三大核心功能</h1>
  <p>不只是问答，而是感知 + 理解 + 行动的完整链路。</p>
</div>

<div class="mcv-roles">
  <div class="mcv-role-card">
    <b>💬 聊天对话</b>
    <strong>多轮上下文理解</strong>
    <p>基于 LLM 的自然语言处理。不仅能听懂指令，更能进行多轮上下文对话，理解意图而非只识别关键词。</p>
  </div>
  <div class="mcv-role-card">
    <b>🔧 工具调用</b>
    <strong>连接数字世界</strong>
    <p>通过 MCP Protocol 连接数字世界——查询天气、控制家居、运行代码，将对话转化为真实行动。</p>
  </div>
  <div class="mcv-role-card">
    <b>👁️ 感知识别</b>
    <strong>不只是"看"，而是"理解"</strong>
    <p>识别物体、检测人脸、感知环境变化——在用户开口之前就已感知到场景状态。</p>
  </div>
</div>

---
layout: media
---

<div class="mcv-title-row">
  <h1>差异化核心：端侧 NPU</h1>
  <p>为什么 Watcher 与众不同？</p>
</div>

<div class="mcv-media-split">
  <div class="mcv-side-note">
    <p>传统的小智载体通常依赖语音或按钮唤醒。而 Watcher 内置了独立的 <strong>Himax NPU 处理器</strong>。</p>
    <p>这意味着它具备「主动撩人」的能力：</p>
    <ul>
      <li>无需联网即可进行人脸 / 存在检测</li>
      <li>通过「看到你」来触发交互，而非等待「听到你」</li>
      <li>极低的待机功耗，实时的视觉响应</li>
    </ul>
    <div class="mcv-quote">
      传统模式：等用户先说话<br>
      Watcher 模式：用户一靠近，交互自动触发
    </div>
  </div>
  <div style="display: flex; align-items: center; justify-content: center; background: var(--mcv-warm); border-radius: 8px; border: 1px solid rgba(0,58,74,0.1);">
    <!-- assets/npu-arch.png — 从 Keynote 导出 -->
    <p style="color: var(--mcv-muted); text-align: center; padding: 2rem; font-size: 0.9rem;">
      [ NPU 架构示意图 ]<br>
      <span style="font-size: 0.75rem; opacity: 0.6;">assets/npu-arch.png</span>
    </p>
  </div>
</div>

<!--
传统小智载体通常靠语音或按钮唤醒。
Watcher 内置 Himax NPU，可以做到在本地、低功耗、实时地进行视觉感知。
它能"看到你"之后再触发交互——而不是等你先开口。
-->

---
layout: section
---

# 03 · 感知"革命"

<p>从被动指令到主动交互的进化</p>

---
layout: media
---

<div class="mcv-title-row">
  <h1>为什么「存在感知」很重要？</h1>
  <p>不仅仅是新增一个功能，而是一个新的交互范式。</p>
</div>

<div class="mcv-compare">
  <div class="mcv-side-note">
    <div class="mcv-kicker">传统模式（被动）</div>
    <ul>
      <li>高操作成本——用户必须先唤醒「你好小智」</li>
      <li>信息是「拉取 (Pull)」式的——你不问，它不说</li>
      <li>本质是一个基于 MCP 的聊天助手 ChatBot</li>
    </ul>
    <div class="mcv-quote">你不主动，它就沉默。</div>
  </div>
  <div class="mcv-side-note">
    <div class="mcv-kicker">Watcher 模式（主动）</div>
    <ul>
      <li>零操作成本——用户只需「停下来看」，交互自动触发</li>
      <li>服务是「推送 (Push)」式的——主动勾搭你</li>
      <li>成为能够空间感知的智能体</li>
    </ul>
    <div class="mcv-quote">它看到你，它先开口。</div>
  </div>
</div>

---
layout: media
---

<div class="mcv-title-row">
  <h1>交互模式的变化：小智 AI vs Watcher</h1>
  <p>同一个 AI 大脑，完全不同的交互体验。</p>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; height: calc(100% - 5.8rem); padding-top: 1rem;">
  <div style="display: flex; flex-direction: column; gap: 0.6rem;">
    <div class="mcv-kicker">小智 AI 传统模式</div>
    <div class="mcv-system-card"><b>Wait</b><strong>等用户说话</strong><p>被动等待唤醒词，不说话就没有任何反应。</p></div>
    <div class="mcv-system-card"><b>Interaction</b><strong>唤醒词显得「打扰」</strong><p>用户必须主动说出特定词语，交互感生硬、不自然。</p></div>
    <div class="mcv-system-card"><b>Action</b><strong>只能根据语音内容做事</strong><p>没有视觉输入，无法感知用户所处的场景状态。</p></div>
  </div>
  <div style="display: flex; flex-direction: column; gap: 0.6rem;">
    <div class="mcv-kicker">Watcher 主动存在感知</div>
    <div class="mcv-system-card" style="border-left: 3px solid var(--mcv-green);"><b>Active</b><strong>主动发现用户靠近</strong><p>NPU 实时监测，用户出现即触发，零操作成本。</p></div>
    <div class="mcv-system-card" style="border-left: 3px solid var(--mcv-green);"><b>Interaction</b><strong>非语言交互，自然流畅</strong><p>目光接触、上屏问候——无需任何唤醒动作。</p></div>
    <div class="mcv-system-card" style="border-left: 3px solid var(--mcv-green);"><b>Action</b><strong>根据「场景 + 用户状态」做事</strong><p>看到 VIP 自动问候，看到陌生人触发警报，看懂场景再行动。</p></div>
  </div>
</div>

---
layout: media
---

<div class="mcv-title-row">
  <h1>交互模式改变带来的场景变化</h1>
  <p>以零售 / 展厅 / 网点为例。</p>
</div>

<div class="mcv-compare">
  <div class="mcv-side-note">
    <div class="mcv-kicker">Before · 改变前</div>
    <ul>
      <li>客人来了，设备意识不到</li>
      <li>必须主动唤醒，操作麻烦</li>
      <li>无法作为空间感知「节点」</li>
      <li>对话内容无法积累为数据资产</li>
    </ul>
  </div>
  <div class="mcv-side-note">
    <div class="mcv-kicker">After · 改变后</div>
    <ul>
      <li>主动「揽客」——人来屏亮，看一眼就交互</li>
      <li>零门槛，无需任何唤醒操作</li>
      <li>基于场景触发，联动业务系统</li>
      <li>每次交互都成为可分析的数据</li>
    </ul>
    <div class="mcv-quote">从被动等待，到主动出击。</div>
  </div>
</div>

---
layout: section
---

# 04 · 跨平台协同

<p>沿着网络的赛博神经交互——连接万物的能力</p>

---
layout: media
---

<div class="mcv-title-row">
  <h1>开放生态与跨平台协同</h1>
  <p>Watcher 通过 MCP 或微调小智固件，实现与已有 / 三方平台协同。</p>
</div>

<div class="mcv-roles">
  <div class="mcv-role-card">
    <b>🏠 Home Assistant 集成</b>
    <strong>控制家中 / 空间设备</strong>
    <p>通过 HA MCP 服务，Watcher 可以直接控制接入 Home Assistant 的所有设备。说一句话，联动整个空间。</p>
  </div>
  <div class="mcv-role-card">
    <b>🔌 Model Context Protocol</b>
    <strong>标准化 AI 工具接口</strong>
    <p>MCP 是 Anthropic 开放的标准协议，让 Watcher 通过对话调用任意外部 API——查数据、发消息、写记录。</p>
  </div>
  <div class="mcv-role-card">
    <b>🔧 开源固件扩展</b>
    <strong>开发者自定义能力</strong>
    <p>支持开发者自定义功能与逻辑，开放的固件生态让 Watcher 可以适配各类垂直场景。</p>
  </div>
</div>

<div class="mcv-center-quote">
  一个设备，连接数字世界的所有入口。
</div>

---
layout: media
---

<div class="mcv-title-row">
  <h1>Hands-On · 体验 Watcher 的存在感知</h1>
  <p>三类实操案例，从零开始感受主动交互。</p>
</div>

<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.8rem; height: calc(100% - 5.8rem); padding-top: 1rem;">
  <div class="mcv-role-card">
    <b>案例 A</b>
    <strong>主动撩人</strong>
    <p>人靠近 → 屏幕亮起 → Watcher 主动问候。零帧起步，零操作成本。</p>
  </div>
  <div class="mcv-role-card">
    <b>案例 B</b>
    <strong>VIP 人脸识别</strong>
    <p>记住客户面孔 → 再次见面自动称呼 → 情绪价值拉满。可自定义识别策略。</p>
  </div>
  <div class="mcv-role-card">
    <b>案例 C</b>
    <strong>仓库管理</strong>
    <p>视觉识别物料 → 触发场景 → 自动记录入库 / 出库变更。存料 / 取料记录可追溯。</p>
  </div>
</div>

<div class="mcv-center-quote">
  视觉模型可自定义——针对不同场景做内容推广和自动化触发。
</div>

---
layout: section
---

# 05 · 零售语音方案

<p>零售场景的语音用途与痛点解决</p>

---
layout: media
---

<div class="mcv-title-row">
  <h1>智慧零售语音方案 · 目标</h1>
  <p>在智慧语音场景下，同时解决体验、竞争力和数据三个维度。</p>
</div>

<div class="mcv-roles">
  <div class="mcv-role-card">
    <b>体验</b>
    <strong>提高购物体验</strong>
    <p>让每一位进店顾客都能获得及时、准确、个性化的语音服务，不等待，不反复。</p>
  </div>
  <div class="mcv-role-card">
    <b>决策</b>
    <strong>数据驱动的运营决策</strong>
    <p>将门店每次交互转化为可分析的数据，依据趋势和行为数据调整陈列、话术和库存策略。</p>
  </div>
  <div class="mcv-role-card">
    <b>竞争力</b>
    <strong>保持竞争力与吸引力</strong>
    <p>AI 语音助手让门店具备 7×24h 响应能力，同时降低对店员话术水平的依赖。</p>
  </div>
</div>

---
layout: media
---

<div class="mcv-title-row">
  <h1>门店现在面临的三大痛点</h1>
  <p>语音场景下，传统门店服务的结构性缺陷。</p>
</div>

<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.8rem; height: calc(100% - 5.8rem); padding-top: 1rem;">
  <div class="mcv-role-card">
    <b>🔲 黑盒化</b>
    <strong>门店交互无法追溯</strong>
    <p>顾客问了什么、店员怎么回答、服务流程是否规范——这些数据完全缺失，管理无从提升。</p>
  </div>
  <div class="mcv-role-card">
    <b>📊 量化难</b>
    <strong>服务标准无法量化</strong>
    <p>话术是否统一？说明是否准确？投诉产生前发生了什么？缺乏可分析的数据资源，管理只靠感觉。</p>
  </div>
  <div class="mcv-role-card">
    <b>🎙️ 收音难</b>
    <strong>嘈杂环境下语音识别差</strong>
    <p>背景音乐、顾客交谈、回声、混响相互干扰，导致语音难以准确识别，真实对话无法被捕获。</p>
  </div>
</div>

---
layout: media
---

<div class="mcv-title-row">
  <h1>解决方案</h1>
  <p>针对三大痛点，逐一破解。</p>
</div>

<div style="display: flex; flex-direction: column; gap: 0.7rem; height: calc(100% - 5.8rem); padding-top: 1rem; justify-content: center;">
  <div class="mcv-system-card" style="border-left: 4px solid var(--mcv-green);">
    <b>针对黑盒化</b>
    <strong>全程对话记录与分析</strong>
    <p>每次顾客与设备的交互均被结构化记录，顾客问题、店员（AI）回答、服务节点全部可追溯、可回放、可分析。</p>
  </div>
  <div class="mcv-system-card" style="border-left: 4px solid #3b82f6;">
    <b>针对量化难</b>
    <strong>标准化话术 + 数据仪表盘</strong>
    <p>AI 话术统一输出，消除人员水平差异；对话数据自动汇总，管理者可实时查看服务质量指标。</p>
  </div>
  <div class="mcv-system-card" style="border-left: 4px solid #8b5cf6;">
    <b>针对收音难</b>
    <strong>本地推理 + 抗噪硬件方案</strong>
    <p>reRouter 本地运行语音识别，支持不同算力方案；结合降噪麦克风硬件，在嘈杂零售环境中仍可准确拾音。隐私数据本地处理，不上云。</p>
  </div>
</div>

---
layout: media
---

<div class="mcv-title-row">
  <h1>Hands-On · 零售语音方案初体验</h1>
  <p>动手配置一个完整的零售语音交互场景。</p>
</div>

<div class="mcv-compare">
  <div class="mcv-side-note">
    <div class="mcv-kicker">体验目标</div>
    <ul>
      <li>完成一次端到端的语音问答流程</li>
      <li>体验本地识别 vs 云端识别的差异</li>
      <li>查看交互日志和数据记录</li>
    </ul>
    <div class="mcv-kicker" style="margin-top: 0.5rem;">参考资源</div>
    <ul>
      <li>方案落地页 — 智能空间交互</li>
      <li>GitHub 项目 — 人脸识别 Demo</li>
      <li>Wiki — Watcher 视觉触发交互</li>
      <li>Wiki — Watcher 接入 Home Assistant</li>
      <li>Wiki — MCP 接入点使用</li>
    </ul>
  </div>
  <div style="display: flex; align-items: center; justify-content: center; background: var(--mcv-warm); border-radius: 8px; border: 1px solid rgba(0,58,74,0.1);">
    <!-- assets/hands-on-setup.png — 从 Keynote 导出 -->
    <p style="color: var(--mcv-muted); text-align: center; padding: 2rem; font-size: 0.9rem;">
      [ 实操配置示意图 ]<br>
      <span style="font-size: 0.75rem; opacity: 0.6;">assets/hands-on-setup.png</span>
    </p>
  </div>
</div>

---
layout: end
---

# Q&A

<p class="mcv-end-statement">Watcher：看见即交互，感知即行动。</p>

<div class="mcv-end-links">
  SenseCAP Watcher Wiki：wiki.seeedstudio.com<br>
  MCP 接入文档：seeedstudio.com/sensecraft-ai<br>
  GitHub Demo：github.com/Seeed-Studio
</div>
