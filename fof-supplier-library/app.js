const products = [
  {
    id: "p1",
    manager: "澄岳私募基金管理有限公司",
    name: "澄岳稳健成长一号",
    strategy: "股票多头",
    capital: 3200,
    start: "2023-03-31",
    end: "2027-03-31",
    status: "存续中",
    rating: "A",
    memo: "核心持仓集中在高股息与消费龙头，回撤控制稳定。下次访谈重点关注规模扩张后的交易容量。",
    navs: [
      ["2023-03-31", 1.0, "建仓期"],
      ["2023-06-30", 1.026, "建仓完成"],
      ["2023-09-30", 1.018, "市场震荡"],
      ["2023-12-29", 1.052, "分红再投"],
      ["2024-03-29", 1.088, "业绩修复"],
      ["2024-06-28", 1.103, "正常"],
      ["2024-09-30", 1.142, "权益反弹"],
      ["2024-12-31", 1.168, "正常"],
      ["2025-03-31", 1.197, "正常"],
      ["2025-06-30", 1.214, "正常"],
      ["2025-09-30", 1.238, "正常"],
      ["2025-12-31", 1.263, "正常"]
    ]
  },
  {
    id: "p2",
    manager: "澄岳私募基金管理有限公司",
    name: "澄岳精选FOF专享",
    strategy: "债券策略",
    capital: 1800,
    start: "2024-01-15",
    end: "季度开放",
    status: "存续中",
    rating: "A-",
    memo: "票息底仓贡献稳定，组合久期偏中短。需持续跟踪信用敞口及持仓集中度。",
    navs: [
      ["2024-01-15", 1.0, "申购"],
      ["2024-03-29", 1.012, "正常"],
      ["2024-06-28", 1.024, "正常"],
      ["2024-09-30", 1.035, "正常"],
      ["2024-12-31", 1.047, "正常"],
      ["2025-03-31", 1.059, "正常"],
      ["2025-06-30", 1.071, "正常"],
      ["2025-09-30", 1.084, "正常"],
      ["2025-12-31", 1.095, "正常"]
    ]
  },
  {
    id: "p3",
    manager: "北辰量化投资管理有限公司",
    name: "北辰市场中性增强A",
    strategy: "量化中性",
    capital: 2600,
    start: "2022-11-30",
    end: "月度开放",
    status: "观察期",
    rating: "B+",
    memo: "近期超额波动扩大，模型换手率上升。建议列入观察，复核风控阈值与交易成本测算。",
    navs: [
      ["2022-11-30", 1.0, "申购"],
      ["2023-03-31", 1.021, "正常"],
      ["2023-06-30", 1.034, "正常"],
      ["2023-09-30", 1.029, "超额回撤"],
      ["2023-12-29", 1.051, "恢复"],
      ["2024-03-29", 1.066, "正常"],
      ["2024-06-28", 1.058, "波动扩大"],
      ["2024-09-30", 1.073, "正常"],
      ["2024-12-31", 1.081, "正常"],
      ["2025-03-31", 1.077, "观察"],
      ["2025-06-30", 1.092, "观察"],
      ["2025-09-30", 1.086, "观察"],
      ["2025-12-31", 1.103, "观察"]
    ]
  },
  {
    id: "p4",
    manager: "越岭资产管理有限公司",
    name: "越岭宏观CTA三号",
    strategy: "CTA",
    capital: 2200,
    start: "2023-08-18",
    end: "2026-08-18",
    status: "存续中",
    rating: "A-",
    memo: "中长周期趋势模型为主，与权益类产品相关性低。重点关注商品波动率降低后的收益效率。",
    navs: [
      ["2023-08-18", 1.0, "申购"],
      ["2023-09-30", 1.017, "正常"],
      ["2023-12-29", 1.064, "趋势行情"],
      ["2024-03-29", 1.046, "回撤"],
      ["2024-06-28", 1.089, "恢复"],
      ["2024-09-30", 1.117, "正常"],
      ["2024-12-31", 1.098, "震荡"],
      ["2025-03-31", 1.151, "趋势行情"],
      ["2025-06-30", 1.169, "正常"],
      ["2025-09-30", 1.188, "正常"],
      ["2025-12-31", 1.206, "正常"]
    ]
  },
  {
    id: "p5",
    manager: "青禾资本管理有限公司",
    name: "青禾价值精选二期",
    strategy: "股票多头",
    capital: 1500,
    start: "2021-06-30",
    end: "已赎回",
    status: "已赎回",
    rating: "B",
    memo: "产品已完成赎回。复盘显示风格暴露偏成长，组合在行业轮动中回撤较深。",
    navs: [
      ["2021-06-30", 1.0, "申购"],
      ["2021-12-31", 1.083, "正常"],
      ["2022-06-30", 0.978, "回撤"],
      ["2022-12-30", 1.012, "恢复"],
      ["2023-06-30", 1.047, "正常"],
      ["2023-12-29", 1.031, "波动"],
      ["2024-06-28", 1.069, "正常"],
      ["2024-12-31", 1.094, "准备赎回"],
      ["2025-03-31", 1.087, "赎回"]
    ]
  }
];

const state = {
  selectedManager: "all",
  selectedStrategy: "all",
  status: "all",
  search: "",
  selectedProductId: products[0].id
};

const managerList = document.querySelector("#managerList");
const productTable = document.querySelector("#productTable");
const navTable = document.querySelector("#navTable");
const searchInput = document.querySelector("#searchInput");
const statusSelect = document.querySelector("#statusSelect");
const managerTitle = document.querySelector("#managerTitle");
const canvas = document.querySelector("#navChart");
const ctx = canvas.getContext("2d");

function currency(value) {
  return `${value.toLocaleString("zh-CN")}万`;
}

function latestNav(product) {
  return product.navs[product.navs.length - 1][1];
}

function statusClass(status) {
  if (status === "观察期") return "watch";
  if (status === "已赎回") return "done";
  return "";
}

function filteredProducts() {
  return products.filter((product) => {
    const keyword = state.search.trim().toLowerCase();
    const text = `${product.manager} ${product.name} ${product.strategy}`.toLowerCase();
    const managerMatch = state.selectedManager === "all" || product.manager === state.selectedManager;
    const strategyMatch = state.selectedStrategy === "all" || product.strategy === state.selectedStrategy;
    const statusMatch = state.status === "all" || product.status === state.status;
    const searchMatch = !keyword || text.includes(keyword);
    return managerMatch && strategyMatch && statusMatch && searchMatch;
  });
}

function renderMetrics(list) {
  const managers = new Set(list.map((item) => item.manager)).size;
  const capital = list.reduce((sum, item) => sum + item.capital, 0);
  const avgNav = list.length ? list.reduce((sum, item) => sum + latestNav(item), 0) / list.length : 0;
  document.querySelector("#metricManagers").textContent = managers;
  document.querySelector("#metricProducts").textContent = list.length;
  document.querySelector("#metricCapital").textContent = currency(capital);
  document.querySelector("#metricNav").textContent = avgNav.toFixed(3);
}

function renderManagers() {
  const grouped = products.reduce((map, product) => {
    if (!map.has(product.manager)) map.set(product.manager, { count: 0, capital: 0 });
    const value = map.get(product.manager);
    value.count += 1;
    value.capital += product.capital;
    return map;
  }, new Map());

  const allButton = `
    <button class="manager-item ${state.selectedManager === "all" ? "active" : ""}" data-manager="all">
      <strong>全部供应商</strong>
      <span>${products.length}只产品 · ${currency(products.reduce((sum, item) => sum + item.capital, 0))}</span>
    </button>`;

  managerList.innerHTML =
    allButton +
    [...grouped.entries()]
      .map(([name, value]) => `
        <button class="manager-item ${state.selectedManager === name ? "active" : ""}" data-manager="${name}">
          <strong>${name}</strong>
          <span>${value.count}只产品 · ${currency(value.capital)}</span>
        </button>
      `)
      .join("");
}

function renderProducts(list) {
  managerTitle.textContent = state.selectedManager === "all" ? "全部供应商" : state.selectedManager;
  productTable.innerHTML = list
    .map((product) => `
      <tr class="${state.selectedProductId === product.id ? "active" : ""}" data-id="${product.id}">
        <td><strong>${product.name}</strong></td>
        <td>${product.manager}</td>
        <td>${product.strategy}</td>
        <td>${currency(product.capital)}</td>
        <td>${latestNav(product).toFixed(3)}</td>
        <td><span class="status-pill ${statusClass(product.status)}">${product.status}</span></td>
      </tr>
    `)
    .join("");
}

function renderDetail(product) {
  if (!product) {
    document.querySelector("#detailManager").textContent = "暂无产品";
    document.querySelector("#detailProduct").textContent = "产品详情";
    navTable.innerHTML = "";
    drawChart([]);
    return;
  }

  const firstNav = product.navs[0][1];
  const lastNav = latestNav(product);
  const totalReturn = ((lastNav / firstNav - 1) * 100).toFixed(2);
  const statusPill = document.querySelector("#detailStatus");

  document.querySelector("#detailManager").textContent = product.manager;
  document.querySelector("#detailProduct").textContent = product.name;
  document.querySelector("#detailStart").textContent = product.start;
  document.querySelector("#detailEnd").textContent = product.end;
  document.querySelector("#detailRating").textContent = product.rating;
  document.querySelector("#detailNav").textContent = lastNav.toFixed(3);
  document.querySelector("#chartReturn").textContent = `累计收益 ${totalReturn}%`;
  document.querySelector("#detailMemo").textContent = product.memo;
  statusPill.textContent = product.status;
  statusPill.className = `status-pill ${statusClass(product.status)}`;

  navTable.innerHTML = product.navs
    .map((nav, index) => {
      const previous = index === 0 ? nav[1] : product.navs[index - 1][1];
      const change = index === 0 ? "-" : `${(((nav[1] / previous) - 1) * 100).toFixed(2)}%`;
      return `
        <tr>
          <td>${nav[0]}</td>
          <td>${nav[1].toFixed(3)}</td>
          <td>${change}</td>
          <td>${nav[2]}</td>
        </tr>
      `;
    })
    .join("");

  drawChart(product.navs);
}

function drawChart(navs) {
  const pixelRatio = window.devicePixelRatio || 1;
  const box = canvas.getBoundingClientRect();
  canvas.width = box.width * pixelRatio;
  canvas.height = box.height * pixelRatio;
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  ctx.clearRect(0, 0, box.width, box.height);

  const padding = { top: 24, right: 24, bottom: 34, left: 50 };
  const width = box.width - padding.left - padding.right;
  const height = box.height - padding.top - padding.bottom;

  ctx.strokeStyle = "#dce3ea";
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let i = 0; i <= 4; i += 1) {
    const y = padding.top + (height / 4) * i;
    ctx.moveTo(padding.left, y);
    ctx.lineTo(padding.left + width, y);
  }
  ctx.stroke();

  if (!navs.length) return;

  const values = navs.map((item) => item[1]);
  const min = Math.min(...values) * 0.985;
  const max = Math.max(...values) * 1.015;
  const point = (nav, index) => {
    const x = padding.left + (width / Math.max(navs.length - 1, 1)) * index;
    const y = padding.top + height - ((nav[1] - min) / (max - min || 1)) * height;
    return [x, y];
  };

  const gradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + height);
  gradient.addColorStop(0, "rgba(23, 107, 95, 0.22)");
  gradient.addColorStop(1, "rgba(23, 107, 95, 0)");

  ctx.beginPath();
  navs.forEach((nav, index) => {
    const [x, y] = point(nav, index);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.lineTo(padding.left + width, padding.top + height);
  ctx.lineTo(padding.left, padding.top + height);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  navs.forEach((nav, index) => {
    const [x, y] = point(nav, index);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = "#176b5f";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = "#176b5f";
  navs.forEach((nav, index) => {
    const [x, y] = point(nav, index);
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = "#667789";
  ctx.font = "12px Microsoft YaHei, sans-serif";
  ctx.textAlign = "right";
  [min, (min + max) / 2, max].forEach((value) => {
    const y = padding.top + height - ((value - min) / (max - min || 1)) * height;
    ctx.fillText(value.toFixed(3), padding.left - 9, y + 4);
  });

  ctx.textAlign = "center";
  ctx.fillText(navs[0][0].slice(0, 7), padding.left, padding.top + height + 24);
  ctx.fillText(navs[navs.length - 1][0].slice(0, 7), padding.left + width, padding.top + height + 24);
}

function render() {
  const list = filteredProducts();
  if (!list.some((product) => product.id === state.selectedProductId)) {
    state.selectedProductId = list[0]?.id || null;
  }
  renderManagers();
  renderMetrics(list);
  renderProducts(list);
  renderDetail(products.find((product) => product.id === state.selectedProductId));
}

managerList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-manager]");
  if (!button) return;
  state.selectedManager = button.dataset.manager;
  render();
});

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-chip").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.selectedStrategy = button.dataset.filter;
    render();
  });
});

productTable.addEventListener("click", (event) => {
  const row = event.target.closest("[data-id]");
  if (!row) return;
  state.selectedProductId = row.dataset.id;
  render();
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});

statusSelect.addEventListener("change", (event) => {
  state.status = event.target.value;
  render();
});

document.querySelector("#addProductBtn").addEventListener("click", () => {
  document.querySelector("#productDialog").showModal();
});

document.querySelector("#productForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const capital = Number(form.get("capital") || 0);
  const base = 1 + Math.random() * 0.03;
  const product = {
    id: `p${Date.now()}`,
    manager: form.get("manager").trim(),
    name: form.get("name").trim(),
    strategy: form.get("strategy"),
    capital,
    start: form.get("start"),
    end: form.get("end") || "待维护",
    status: form.get("status"),
    rating: form.get("rating"),
    memo: form.get("memo") || "新产品已入库，后续可补充尽调纪要、合同条款、开放日安排和联系人。",
    navs: [
      [form.get("start"), 1, "申购"],
      ["2025-06-30", Number(base.toFixed(3)), "待更新"],
      ["2025-12-31", Number((base + 0.025).toFixed(3)), "待更新"]
    ]
  };
  products.push(product);
  state.selectedManager = "all";
  state.selectedProductId = product.id;
  event.currentTarget.reset();
  document.querySelector("#productDialog").close();
  render();
});

document.querySelector("#exportBtn").addEventListener("click", () => {
  const rows = [["管理人", "产品名称", "策略", "投资金额万元", "成立日", "到期开放期", "状态", "评级", "最新净值"]];
  filteredProducts().forEach((product) => {
    rows.push([product.manager, product.name, product.strategy, product.capital, product.start, product.end, product.status, product.rating, latestNav(product).toFixed(3)]);
  });
  const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "FOF供应商产品库.csv";
  link.click();
  URL.revokeObjectURL(url);
});

window.addEventListener("resize", () => {
  renderDetail(products.find((product) => product.id === state.selectedProductId));
});

render();
