---
theme: seeed
title: HA + AI Agent：商业落地和交互体验
colorSchema: light
transition: slide-left
mdc: true
drawings:
  persist: false
layout: cover
---

<div class="mcv-kicker">Seeed Studio 方案团队 · 实践分享</div>

# HA + AI Agent

<div class="mcv-cover-subtitle">
商业落地经验与 AI 交互体验探索<br>
从设备接入到意图驱动
</div>

<div style="margin-top: 2.5rem; display: flex; gap: 0.6rem; flex-wrap: wrap;">
  <SeeedBadge icon="i-carbon:calendar">2026.03.14 · 深圳</SeeedBadge>
  <SeeedBadge icon="i-carbon:user-avatar">颜志鹏 (Spencer) · Seeed Studio</SeeedBadge>
</div>

<!--
大家好，我是志鹏，来自 Seeed Studio 的方案团队。

方案呢，顾名思义就是解决方案，我们是矽递科技产品的首位用户，结合硬件优势帮助更多用户更好、更快地用起来。

今天分享三件事。
-->

---
layout: media
---

<div class="mcv-title-row">
  <h1>今天讲三件事</h1>
  <p>从商业实践到 AI 探索，最后是一个有意思的预告。</p>
</div>

<div class="mcv-agenda">
  <div class="mcv-agenda-card">
    <div>
      <b>01</b>
      <strong>用 HA 管了一个商业综合体</strong>
      <p>园区能源管理的真实落地经验，包括能力边界和系统架构。</p>
    </div>
  </div>
  <div class="mcv-agenda-card">
    <div>
      <b>02</b>
      <strong>AI Agent 让 HA 更好用</strong>
      <p>从写规则到说意图，交互方式正在发生根本变化。</p>
    </div>
  </div>
  <div class="mcv-agenda-card">
    <div>
      <b>03</b>
      <strong>把 HA 装进了一辆 VAN</strong>
      <p>HA 不只能管商场——它是任何有设备空间的操作系统。</p>
    </div>
  </div>
</div>

<!--
第一件事，我们用 HA 管了一个商业综合体。
第二件事，结合 AI Agent 把 HA 的交互方式往前推一大步。
第三件事，我们还把 HA 装进了一辆 VAN——你会发现 HA 好像也不只是"智能家居"那点事了。
-->

---
layout: media
---

<div class="mcv-title-row">
  <h1>园区能源管理：真实的商业项目</h1>
  <p>低成本、开放、跨品牌——这是客户的三个核心要求。</p>
</div>

<div class="mcv-media-split">
  <div class="mcv-side-note">
    <div class="mcv-kicker">项目场景</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; margin: 0.6rem 0;">
      <div class="mcv-system-card" style="text-align: center; padding: 0.75rem;"><b>🏬</b><strong>商场</strong></div>
      <div class="mcv-system-card" style="text-align: center; padding: 0.75rem;"><b>🏢</b><strong>办公楼</strong></div>
      <div class="mcv-system-card" style="text-align: center; padding: 0.75rem;"><b>🏠</b><strong>公寓</strong></div>
      <div class="mcv-system-card" style="text-align: center; padding: 0.75rem;"><b>⚡</b><strong>充电桩</strong></div>
    </div>
    <div class="mcv-kicker">核心能力</div>
    <ul>
      <li>跨品牌设备集成 · 能耗数据可视化</li>
      <li>非关键逻辑自动化 · 统一操作界面</li>
    </ul>
    <div class="mcv-kicker" style="margin-top: 0.4rem;">系统边界</div>
    <p style="font-size: 0.95rem;">消防 / 电梯 / 高压配电——仅状态监视，不反控</p>
    <p style="font-size: 0.78rem; color: var(--mcv-muted);">硬件：reComputer R1000 边缘网关 + XIAO Energy Meter 非侵入式用电监测</p>
  </div>
  <div style="display: flex; align-items: center; justify-content: center;">
    <img src="./assets/places.png" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;" alt="园区 3D 鸟瞰图" />
  </div>
</div>

<!--
去年我们支持了一个合作方，做的是一个商业综合体的低成本能源管理。
里面有商场、办公楼、公寓、充电桩——设备品牌多，系统很杂，管理很碎。

我们在里面做的事情，核心不是追求特别炫的功能，而是把跨品牌设备接进来，把能耗数据看清楚，把一些非关键逻辑做成自动化，再给现场一个统一的操作界面。

边界也很重要：像消防、电梯、高压配电这些，只看状态，不做反控。
-->

---
layout: media
---

<div class="mcv-title-row">
  <h1>现场部署实拍</h1>
  <p>真正在现场跑起来的东西，不是 PPT 里的示意图。</p>
</div>

<div style="flex: 1; margin-top: 1rem; min-height: 0;">
  <img src="./assets/Implementation.png" style="width: 100%; height: 100%; object-fit: contain; border-radius: 8px;" alt="现场部署实拍：配电箱改造 · 电表接入 · 监控设备 · 机柜部署 · 网关安装" />
</div>

<!--
快速过一下现场照片，增加可信度。不用每张细讲，让听众感受到"真的做过"就行。
-->

---
layout: media
---

<div class="mcv-title-row">
  <h1>系统跑起来了，但是——</h1>
  <p>能跑不等于好用，这是我们发现的真正瓶颈。</p>
</div>

<div class="mcv-compare">
  <div class="mcv-side-note">
    <div class="mcv-kicker">系统能做的事</div>
    <ul>
      <li>跨品牌设备统一管理</li>
      <li>能耗数据实时可视化</li>
      <li>远程监控，不用到现场</li>
      <li>自动化规则覆盖常见场景</li>
    </ul>
  </div>
  <div class="mcv-side-note">
    <div class="mcv-kicker">真正的瓶颈</div>
    <p>理解「实体」「服务」「自动化触发」这些概念，对初学者来说并不容易。</p>
    <div class="mcv-quote">
      系统跑起来了，<strong>用起来还是有门槛</strong>。
    </div>
    <p style="font-size: 0.9rem; color: var(--mcv-muted);">围绕这个问题，我们做了两件事。</p>
  </div>
</div>

<!--
系统跑起来以后，它已经能做不少事情了。
但问题很快就出来了：系统会做，不等于人会用。

"实体""服务""自动化触发"这些概念，对不天天折腾的人来说是有门槛的。
所以真正的瓶颈可能不在设备接得上接不上，而在于人有没有办法轻松用起来。
-->

---
layout: section
---

# 第一件事：把经验变成课程

<p>很多人不是对这个方向没兴趣，而是一上来就被门槛劝退了。</p>

<!--
因为我们发现，很多人不是不想学，而是第一步迈太大了。
需要一张地图，告诉他怎么开始。
-->

---
layout: media
---

<div class="mcv-title-row">
  <h1>柴火创客学院课程体系</h1>
  <p>把台阶搭出来，而不是让每个人自己摸索。</p>
</div>

<div class="mcv-roles">
  <div class="mcv-role-card">
    <b>L1 展示层</b>
    <strong>单点体验</strong>
    <p>开箱即用、零代码体验，快速建立感性认知。让决策者「看得懂」。</p>
  </div>
  <div class="mcv-role-card">
    <b>L2 顾问层</b>
    <strong>场景联动</strong>
    <p>设备连接与自动化配置，HA / Node-RED 联动。让运维人员「搭得了」。</p>
  </div>
  <div class="mcv-role-card">
    <b>L3 设计层</b>
    <strong>业务集成</strong>
    <p>API 对接、模型训练、私有化部署，商业闭环。让开发者「扩展得动」。</p>
  </div>
</div>

<div class="mcv-center-quote">
  很多人不是学不会，而是第一步迈太大了——所以先把台阶搭出来。
</div>

<!--
我们在柴火创客学院，把这套东西拆成了三层。

第一层是展示层。先别讲复杂的，先让大家体验，先有感觉。
第二层是顾问层。开始讲设备怎么连、自动化怎么配。
第三层才是设计层。API 对接、模型训练、私有化部署。

我自己的感觉是，很多人不是学不会，而是第一步迈太大了。
-->

---
layout: section
---

# 第二件事：AI Agent 这个新变量

<p>它真正有意思的地方，不是"它很火"——而是它可能真的会改掉 HA 一些原来很难用的地方。</p>

<!--
第二件事，就是 AI Agent。
这个东西这两年大家都在聊，但对我来说，它真正有意思的地方，
不是"它很火"，而是它可能真的会改掉 HA 一些原来很难用的地方。
-->

---
layout: media
---

<div class="mcv-title-row">
  <h1>从「写规则」到「说意图」</h1>
  <p>用户体验上最根本的变化。</p>
</div>

<div class="mcv-compare">
  <div class="mcv-side-note">
    <div class="mcv-kicker">以前：配置 HA 自动化</div>
    <ul>
      <li>写触发条件、写判断逻辑</li>
      <li>调延迟定时器、调状态确认</li>
      <li>一个场景一条规则，十个场景十条规则</li>
    </ul>
    <div class="mcv-quote">
      规则越多，越怕改。
    </div>
  </div>
  <div class="mcv-side-note">
    <div class="mcv-kicker">现在：Agent 理解意图</div>
    <ul>
      <li>「准备看电影」→ Agent 判断：关灯、拉窗帘、调电视</li>
      <li>「帮我查今天的异常用电」→ Agent 自己查数据、生成报告</li>
    </ul>
    <div class="mcv-quote">
      不用写规则，说人话就行。
    </div>
  </div>
</div>

<p style="text-align: center; font-size: 0.78rem; color: var(--mcv-muted); margin-top: 0.5rem;">
  已有工具如 OpenClaw、NanoClaw 可通过 WhatsApp / Telegram 直接与家交互
</p>

<!--
以前如果你想把 HA 用顺手，很多时候其实是在"写规则"。
规则越堆越多，你就开始怕改。因为你不知道动这一条，会不会把另外三条带崩。

Agent 带来的变化，核心就是把"写规则"变成"说意图"。
你说"准备看电影"，不用先想清楚到底关哪盏灯、拉哪层窗帘。Agent 自己去理解、自己去拆动作。
-->

---
layout: media
---

<div class="mcv-title-row">
  <h1>从你找设备，到设备找你</h1>
  <p>交互方式的四个演进阶段。</p>
</div>

<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.85rem; height: calc(100% - 6.5rem); padding-top: 1.05rem;">

<v-clicks>

<div class="mcv-agenda-card">
  <div>
    <b>阶段 1</b>
    <strong>Dashboard</strong>
    <p>打开 App，找设备，点按钮。完整但对人有要求——得知道设备在哪。</p>
  </div>
</div>

<div class="mcv-agenda-card">
  <div>
    <b>阶段 2</b>
    <strong>语音助手</strong>
    <p>"小爱，开灯"——比 Dashboard 更自然，但命令要足够明确才能理解。</p>
  </div>
</div>

<div class="mcv-agenda-card">
  <div>
    <b>阶段 3</b>
    <strong>IM + 意图</strong>
    <p>"准备看电影"—— Agent 自己判断：关灯、拉窗帘、切电视模式。</p>
  </div>
</div>

<div class="mcv-agenda-card">
  <div>
    <b>阶段 4</b>
    <strong>主动推送</strong>
    <p>系统定期巡检，发现异常，主动推消息给你。你不用再主动盯着了。</p>
  </div>
</div>

</v-clicks>

</div>

<div class="mcv-center-quote">
  以前得自己盯 Dashboard——以后系统自己盯着，有问题直接推给你。
</div>

<!--
如果把整个交互方式拉开看，它大概经历了几个阶段。

Dashboard → 语音助手 → IM + 意图 → 主动推送

整个方向是从"你去找设备"，走到"设备来找你"。

以前是你自己盯着 Dashboard，看有没有异常。
以后更自然的方式应该是系统自己盯着，发现问题以后直接来找你。
-->

---
layout: media
---

<div class="mcv-title-row">
  <h1>不只在屏幕里：Agent 的眼睛和耳朵</h1>
  <p>配合硬件设备，Agent 能看、能听、能感知现场环境。</p>
</div>

<div class="mcv-compare">
  <div class="mcv-side-note">
    <div class="mcv-kicker">SenseCAP Watcher · Seeed Studio</div>
    <ul>
      <li>摄像头 + 麦克风 + 本地 AI 推理</li>
      <li>感知环境变化，主动触发交互</li>
      <li>通过 MCP 接入 HA，调用设备服务</li>
    </ul>
    <div class="mcv-quote">
      仓管演示：识别人员 → 查库存 → 更新状态，全程自动
    </div>
  </div>
  <div class="mcv-side-note">
    <div class="mcv-kicker">Reachy Mini 等躯体设备</div>
    <ul>
      <li>同样具备视觉和听觉感知</li>
      <li>Agent 在物理世界的另一种形态</li>
      <li>伴随情绪价值交互，不只是指令执行</li>
    </ul>
    <div class="mcv-quote">
      交互终端在扩展——不只是屏幕和音箱
    </div>
  </div>
</div>

<!--
当 Agent 跟硬件结合起来，它就开始有眼睛、有耳朵，甚至某种程度上，有了身体。

SenseCAP Watcher 这种设备，本质上就是摄像头、麦克风，加上本地 AI 推理能力。
它先感知环境变化，再通过 MCP 去接 HA，触发后面的动作。

Reachy Mini 有动作、有反馈，带来情绪价值交互。
以后的交互终端，不会只剩屏幕和音箱。
-->

---
layout: media
---

<div class="mcv-title-row">
  <h1>AI Agent 改变了什么体验</h1>
  <p>三个关键变化，对普通用户最有感知的部分。</p>
</div>

<div class="mcv-roles">

<v-clicks>

<div class="mcv-role-card">
  <b>变化 1</b>
  <strong>从写规则到说意图</strong>
  <p>不用学 YAML、不用调定时器——说人话，Agent 自己拆解成动作。门槛大幅降低。</p>
</div>

<div class="mcv-role-card">
  <b>变化 2</b>
  <strong>从你找设备到设备找你</strong>
  <p>交互入口从 Dashboard 迁移到 IM 和主动推送——设备会主动来找你。</p>
</div>

<div class="mcv-role-card">
  <b>变化 3</b>
  <strong>Agent 不只在屏幕里</strong>
  <p>配合摄像头、麦克风、传感器，Agent 能看懂现场环境，不只是等你发消息。</p>
</div>

</v-clicks>

</div>

<!--
对于普通用户体验的三个核心变化。

第一件事，从写规则变成说意图。门槛一下就低了很多。
第二件事，从你找设备，慢慢变成设备找你。
第三件事，Agent 不只在屏幕里。它开始通过摄像头、麦克风、传感器去理解现场。
-->

---
layout: section
---

# HA 不只能管商场

<p>它更像是一套可以管理任何有设备空间的操作系统。</p>

<!--
说了这么多，回到那个预告。
HA 在我心目中，已经是一个名义上的万物物联网系统，不只是建筑、家居，也是一个空间的天网系统。
-->

---
layout: media
---

<div class="mcv-title-row">
  <h1>柴火基地车：把 HA 装进一辆 VAN</h1>
  <p>商场是一个空间，家是一个空间，一辆开往旷野的 VAN 也是一个空间。</p>
</div>

<div class="mcv-media-split">
  <div class="mcv-side-note">
    <div class="mcv-kicker">车上有什么</div>
    <ul>
      <li>边缘算力 · 传感器 · LoRaWAN 基站</li>
      <li>数字制造设备</li>
      <li>电力、环境、通信——全部接入 HA</li>
    </ul>
    <div class="mcv-kicker" style="margin-top: 0.5rem;">去哪里</div>
    <p>开进没有网络的地方，和当地人一起用技术解决他们遇到的真实问题。</p>
    <div class="mcv-quote">
      和管商场一样——HA 是这辆车在旷野的操作系统。
    </div>
  </div>
  <div style="display: flex; align-items: center; justify-content: center;">
    <img src="./assets/van-car.png" style="max-height: 100%; max-width: 100%; object-fit: contain; border-radius: 8px;" alt="柴火基地车" />
  </div>
</div>

<!--
我们做了一件更有意思的事，就是把 HA 装进一辆 VAN。

商场是一个空间，家是一个空间，一辆开往旷野的 VAN，其实也是一个空间。
车上有边缘算力、传感器、LoRaWAN 基站，还有数字制造设备。
电力、环境、通信这些状态，全部都可以接进 HA。

它会去一些没有网络、没有现成基础设施的地方，跟当地人一起解决他们真正碰到的问题。

从这个角度再回头看，会发现 HA 在这里扮演的角色，跟在商场里没有本质区别——它还是这个空间的操作系统。
-->

---
layout: end
---

# 谢谢大家

<p class="mcv-end-statement">HA 是任何有设备空间的操作系统。</p>

<div class="mcv-end-links">
  了解 Seeed Studio 智慧空间方案：seeedstudio.com.cn/solutions<br>
  柴火创客学院课程：扫码或联系社区经理
</div>

<!--
前面讲了商业项目，讲了课程体系，也讲了 Agent 的交互探索。
表面上看是三件事，其实都在回答同一个问题：
怎么把空间里的这些设备，慢慢变成一个更容易被理解、更容易被使用、也更能主动协作的系统。

谢谢大家。
-->
