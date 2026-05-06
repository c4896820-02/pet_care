const navLinks = [
  { href: "#services", label: "服务项目" },
  { href: "#about", label: "门店环境" },
  { href: "#pricing", label: "价格套餐" },
  { href: "#location", label: "到店地址" },
  { href: "#reviews", label: "顾客评价" },
  { href: "#booking", label: "在线预约" }
];

const serviceCards = [
  {
    icon: "🛁",
    title: "基础洗护",
    text: "适合日常清洁与异味管理，包含沐浴、吹干、梳毛和基础整理。",
    items: ["温和分龄洗护用品", "脚底毛与肛周清理", "耳道基础清洁"]
  },
  {
    icon: "✂️",
    title: "美容造型",
    text: "按品种与主人偏好做面部、四肢和整体轮廓修型，干净利落也更好打理。",
    items: ["比熊、泰迪、博美等常见造型", "修毛前沟通长度与风格", "拍照留档方便下次复做"]
  },
  {
    icon: "🌿",
    title: "专项护理",
    text: "针对掉毛期、敏感肌、泪痕和毛发打结等问题，安排更细的护理流程。",
    items: ["SPA 泡浴与精油舒缓", "深层梳结与顺毛护理", "猫咪安静洗护时段"]
  }
];

const pricingCards = [
  {
    title: "日常清洁",
    text: "适合维持日常干净度与清爽手感。",
    price: "¥128",
    items: [
      ["小型犬基础洗护", "¥128"],
      ["中型犬基础洗护", "¥168"],
      ["猫咪安静洗护", "¥198"]
    ]
  },
  {
    title: "精致护理",
    text: "增加毛发护理与舒缓流程，更适合换毛期和高频拍照的小可爱。",
    price: "¥228",
    featured: true,
    items: [
      ["SPA 泡浴 + 深层护理", "¥228"],
      ["顺毛柔亮护理", "¥258"],
      ["掉毛期护理套餐", "¥288"]
    ]
  },
  {
    title: "美容造型",
    text: "适合需要修型、面部整理和节日焕新。",
    price: "¥298",
    items: [
      ["小型犬全身修型", "¥298"],
      ["中型犬修型套餐", "¥398"],
      ["局部精修 / 面部整理", "¥99"]
    ]
  }
];

const reviews = [
  {
    title: "接走的时候状态很松弛。",
    text: "我家柯基洗澡会紧张，这次店员先陪它熟悉环境，洗完也没有炸毛，毛吹得很蓬松。",
    author: "林女士",
    meta: "柯基主人"
  },
  {
    title: "修得干净，而且会沟通细节。",
    text: "比熊脸型修得特别利落，提前还确认了嘴边要不要留圆一点，出来和我想象的一样。",
    author: "周先生",
    meta: "比熊主人"
  },
  {
    title: "猫咪洗护比想象中平稳很多。",
    text: "预约的是安静时段，整个过程比较轻声，不会把几只宠物都混在一起，对猫家长很友好。",
    author: "许女士",
    meta: "英短主人"
  }
];

const mapPoints = [
  {
    icon: "📍",
    title: "门店地址",
    text: "江苏省盐城市亭湖区双元路102号"
  },
  {
    icon: "🕒",
    title: "建议到店",
    text: "预约时备注宠物体型、是否修型、是否敏感或胆小，我们会安排更合适的时段。"
  },
  {
    icon: "🚗",
    title: "导航说明",
    text: "页面已预留地图入口，后续可继续接百度地图、高德地图或腾讯地图的一键导航。"
  }
];

export default function HomePage() {
  return (
    <>
      <header className="topbar">
        <div className="container nav">
          <a className="brand" href="#top">
            <span className="brandMark">🐾</span>
            <span>爪爪泡泡 Pet Spa</span>
          </a>
          <nav className="navLinks">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="cta" href="#booking">
            立即预约
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="container heroGrid">
            <div className="heroCopy">
              <span className="eyebrow">城市宠物洗护与精致护理</span>
              <h1>让毛孩子干净、放松，也被温柔对待。</h1>
              <p>
                爪爪泡泡专注犬猫洗护、美容造型、皮毛护理和敏感肌舒缓服务。我们把流程做细，把环境做安静，把每次到店都做成宠物和主人的轻松体验。
              </p>
              <div className="heroActions">
                <a className="cta" href="#booking">
                  预约今天的时段
                </a>
                <a className="secondaryBtn" href="#services">
                  看看服务内容
                </a>
              </div>
              <div className="heroStats">
                <div className="stat">
                  <strong>3000+</strong>
                  <span>累计服务宠物，含幼宠、老年宠与敏感肌护理</span>
                </div>
                <div className="stat">
                  <strong>4.9</strong>
                  <span>大众口碑评分，洗护流程和沟通体验稳定在线</span>
                </div>
                <div className="stat">
                  <strong>12h</strong>
                  <span>营业时段覆盖工作日晚间，方便下班后送洗</span>
                </div>
              </div>
            </div>

            <div className="heroCard">
              <div className="heroPhoto" aria-label="宠物洗护门店展示" role="img" />
              <div className="heroInfo">
                <div className="infoRow">
                  <div>
                    <strong>新客体验洗护</strong>
                    <span>基础洗护 + 耳部清洁 + 指甲修整</span>
                  </div>
                  <strong>¥128 起</strong>
                </div>
                <div className="infoRow">
                  <div>
                    <strong>门店营业时间</strong>
                    <span>周一至周日 10:00 - 22:00</span>
                  </div>
                  <strong>全年接待</strong>
                </div>
                <div className="infoRow">
                  <div>
                    <strong>预约方式</strong>
                    <span>电话、微信、网页留言均可安排</span>
                  </div>
                  <strong>30 分钟内回复</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="sectionHead">
              <div>
                <span className="eyebrow">服务项目</span>
                <h2>从清洁到护理，把常用服务配齐。</h2>
              </div>
              <p>
                我们按宠物体型、毛量、皮肤状态和性格安排洗护流程，尽量减少等待与紧张反应，也会在接待时和主人先确认重点需求。
              </p>
            </div>

            <div className="services">
              {serviceCards.map((card) => (
                <article className="serviceCard" key={card.title}>
                  <div className="icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <ul>
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container storyGrid">
            <div className="photoPanel" aria-label="宠物门店环境展示" role="img" />
            <div className="panel">
              <span className="eyebrow">门店环境</span>
              <h2>明亮、安静、流程分区清楚。</h2>
              <p className="topGap">
                洗护区、美容区和等候区分开设置，减少互相干扰。对于胆小、年纪偏大或者第一次到店的宠物，我们会预留更宽松的节奏，先建立熟悉感，再开始正式洗护。
              </p>
              <div className="tags">
                {["独立烘干位", "一宠一消毒", "敏感肌洗护线", "轻声安抚接待", "可视化护理建议"].map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="schedule">
                <li>接待咨询：根据毛量、体型和状态预估服务时间。</li>
                <li>洗护过程：如发现皮肤异常、打结严重等情况，会先和主人确认。</li>
                <li>离店提醒：提供居家梳毛、洗后保养和下次到店建议。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="container">
            <div className="sectionHead">
              <div>
                <span className="eyebrow">价格套餐</span>
                <h2>价格透明，按需求选就好。</h2>
              </div>
              <p>
                以下为常见参考价，实际费用会根据体型、毛量、打结程度与服务内容微调。你也可以先预约，到店后再确认最终项目。
              </p>
            </div>

            <div className="pricing">
              {pricingCards.map((card) => (
                <article className={`priceCard${card.featured ? " featured" : ""}`} key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <div className="price">
                    {card.price} <small>/ 起</small>
                  </div>
                  <div className="priceList">
                    {card.items.map(([label, value]) => (
                      <div className="priceItem" key={label}>
                        <span>{label}</span>
                        <strong>{value}</strong>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="location">
          <div className="container">
            <div className="sectionHead">
              <div>
                <span className="eyebrow">到店地址</span>
                <h2>江苏省盐城市亭湖区双元路102号</h2>
              </div>
              <p>
                页面里已经预留了独立到店版块，同时接入了定制地图视觉。后续如果要换成真实地图组件或导航 SDK，这一块可以继续无缝往下接。
              </p>
            </div>

            <div className="mapGrid">
              <div className="mapVisual" aria-label="盐城市亭湖区双元路102号地图插画展示" role="img">
                <div className="mapBadge">
                  <strong>爪爪泡泡 Pet Spa</strong>
                  <span>江苏省盐城市亭湖区双元路102号</span>
                </div>
              </div>

              <div className="panel">
                <span className="eyebrow">到店信息</span>
                <h3>来店前可以先预约，避免高峰等待。</h3>
                <p className="topGap">
                  这一区把门店地址、到店建议和导航入口放在一起，用户扫一眼就知道怎么来、来之前要准备什么。
                </p>

                <div className="mapPoints">
                  {mapPoints.map((point) => (
                    <div className="mapPoint" key={point.title}>
                      <div className="icon compact">{point.icon}</div>
                      <div>
                        <strong>{point.title}</strong>
                        <p>{point.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mapActions">
                  <a className="cta" href="#booking">
                    先预约再到店
                  </a>
                  <a
                    className="secondaryBtn"
                    href="https://uri.amap.com/search?keyword=%E6%B1%9F%E8%8B%8F%E7%9C%81%E7%9B%90%E5%9F%8E%E5%B8%82%E4%BA%AD%E6%B9%96%E5%8C%BA%E5%8F%8C%E5%85%83%E8%B7%AF102%E5%8F%B7"
                    rel="noreferrer"
                    target="_blank"
                  >
                    打开地图搜索
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="reviews">
          <div className="container">
            <div className="sectionHead">
              <div>
                <span className="eyebrow">顾客评价</span>
                <h2>回头客多，通常是因为放心。</h2>
              </div>
              <p>我们很在意每只宠物的情绪变化，所以评价里出现最多的词，往往不是“洗得香”，而是“愿意再来”。</p>
            </div>

            <div className="reviewGrid">
              {reviews.map((review) => (
                <article className="reviewCard" key={review.title}>
                  <h3>{review.title}</h3>
                  <p>{review.text}</p>
                  <p>
                    <strong>{review.author}</strong> · {review.meta}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="booking">
          <div className="container bookingGrid">
            <div className="panel">
              <span className="eyebrow">在线预约</span>
              <h2>先把需求发来，我们尽快给你排时段。</h2>
              <p className="topGap">
                留下宠物品种、体型、是否需要修型，以及你方便的时间段。页面表单目前是展示版，适合后续接入企业微信、短信或者门店后台预约系统。
              </p>
              <ul className="contactList">
                <li>门店地址：江苏省盐城市亭湖区双元路102号</li>
                <li>联系电话：400-888-2026</li>
                <li>客服微信：ZHAOZHAO-PETSPA</li>
              </ul>
            </div>

            <div className="panel">
              <form className="bookingForm">
                <div className="formRow">
                  <input placeholder="你的称呼" type="text" />
                  <input placeholder="联系电话" type="tel" />
                </div>
                <div className="formRow">
                  <input placeholder="宠物品种 / 名字" type="text" />
                  <select defaultValue="选择服务项目">
                    <option disabled>选择服务项目</option>
                    <option>基础洗护</option>
                    <option>美容造型</option>
                    <option>SPA 护理</option>
                    <option>猫咪洗护</option>
                  </select>
                </div>
                <input placeholder="希望到店时间，例如：周六下午 3 点" type="text" />
                <textarea placeholder="补充说明，例如体型、毛量、是否胆小、是否有皮肤敏感等" />
                <button className="submitBtn" type="button">
                  提交预约信息
                </button>
                <div className="submitNote">演示页面未接入真实提交功能，后续可以继续帮你接表单收集或微信联系入口。</div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <div>© 2026 爪爪泡泡 Pet Spa. 宠物洗护、美容造型与温和护理。</div>
          <div>营业时间 10:00 - 22:00 · 周一至周日</div>
        </div>
      </footer>
    </>
  );
}
