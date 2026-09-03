const frictionData = {
  targets: {
    area: "Finanzas · definición de inversión",
    title: "No existe un target compartido",
    summary: "El presupuesto se reparte sin una meta formal de ROI, CPA o conversión por etapa que defina qué significa tener éxito.",
    today: "Finanzas entrega el presupuesto compuesto por canal. No existe una meta transversal que conecte el gasto con MQL, SQL o venta.",
    impact: "Las áreas pueden optimizar hacia indicadores distintos y la discusión se concentra en volumen o CPL.",
    missing: "ROI objetivo, CPA de venta, costo por MQL, costo por SQL y conversiones mínimas aceptables.",
    decision: "Cuánto invertir, cuándo detener y qué resultado considerar suficiente."
  },
  distribution: {
    area: "Paid Media · distribución",
    title: "La inversión mira hacia atrás",
    summary: "René propone la distribución principalmente con el desempeño del mes anterior, sin una lectura actualizada de calidad comercial.",
    today: "La asignación inicial viene de Finanzas y posteriormente se ajusta con base en resultados históricos.",
    impact: "Los cambios llegan tarde y una campaña con leads baratos puede parecer ganadora aunque no genere MQL o SQL.",
    missing: "Pacing de gasto, calidad por campaña y conversión acumulada por cohorte.",
    decision: "Mantener, redistribuir o aumentar presupuesto durante el mes."
  },
  creative: {
    area: "Social Media + Paid",
    title: "Creativo y performance no comparten memoria",
    summary: "No existe una parrilla mensual calificada ni una vista consolidada de qué publicación o creative ID convirtió mejor.",
    today: "Social Media prepara creativos del mes y Paid ejecuta campañas, pero el aprendizaje no regresa de forma estructurada.",
    impact: "Se repiten decisiones por intuición y no se escala consistentemente el mensaje ganador.",
    missing: "Creative ID, post ID, campaña, audiencia y resultado posterior en HubSpot.",
    decision: "Qué producir, iterar, pausar o convertir en nueva campaña."
  },
  monitoring: {
    area: "Paid Media · monitoreo",
    title: "La lectura de campaña llega tarde",
    summary: "Las campañas se dejan vivir al menos tres días y el reporte transversal de Paid se presenta los lunes.",
    today: "La revisión depende de los tableros nativos y de cortes periódicos, sin alertas automáticas.",
    impact: "Se consume presupuesto antes de detectar anomalías o campañas con oportunidad de boost.",
    missing: "Gasto, pacing, CPL y señales de calidad actualizados con frecuencia.",
    decision: "Pausar, mantener, corregir o aumentar inversión."
  },
  abandonment: {
    area: "Captación · formulario",
    title: "No vemos la fuga antes del lead",
    summary: "El sistema identifica formularios enviados, pero no de manera consistente quién inició y no terminó.",
    today: "Los leads completos entran a HubSpot; el tráfico y abandono del sitio no están consolidados.",
    impact: "No se distingue un problema de campaña de uno de experiencia o formulario.",
    missing: "Sesiones, vista de landing, inicio, avance y abandono de formulario.",
    decision: "Optimizar audiencia, landing, campos o experiencia de captación."
  },
  attribution: {
    area: "Ads + HubSpot",
    title: "La historia se rompe al entrar al CRM",
    summary: "No existe una unión confiable entre campaign ID, anuncio, publicación, lead, MQL, SQL y venta.",
    today: "HubSpot recibe los leads, pero la atribución granular por anuncio o creativo no está consolidada entre áreas.",
    impact: "Paid conoce CPL; el negocio no puede comprobar qué inversión generó calidad real.",
    missing: "Campaign ID, ad set, ad ID, creative ID, UTMs, click ID y first/latest touch.",
    decision: "Qué campaña y creativo merecen más presupuesto."
  },
  queue: {
    area: "CXC · entrada",
    title: "La cola no tiene una lectura transversal",
    summary: "CXC aborda el lead inmediatamente, pero no existe una vista compartida de inventario, tiempos y cumplimiento de atención.",
    today: "El lead entra a HubSpot y se comparte con CXC para contacto y calificación manual.",
    impact: "Un lead puede enfriarse sin que otras áreas vean el retraso o la carga operativa.",
    missing: "Entrada a cola, primer intento, responsable, SLA y tiempo sin actividad.",
    decision: "Qué lead priorizar y cómo balancear capacidad de atención."
  },
  qualification: {
    area: "CXC · calificación manual",
    title: "La razón de pérdida no está normalizada",
    summary: "CXC valida los criterios y asigna MQL, pero no existe un top consolidado de por qué los leads no califican.",
    today: "Se revisan nombre, edad, interés y desarrollo. Parte del seguimiento termina en tableros o cortes separados.",
    impact: "Marketing no puede corregir promesa, audiencia o formulario con precisión.",
    missing: "Catálogo obligatorio de motivos y timestamps de cada cambio.",
    decision: "Qué fuente, campaña o criterio está deteriorando la conversión."
  },
  reactivation: {
    area: "Marketing + bots",
    title: "La reactivación vive en otro embudo",
    summary: "Los leads que no responden pasan a secuencias automatizadas de intentos 2 a 5, administradas aparte.",
    today: "CXC hace el primer contacto. Solo los no respondidos entran al flujo de bots por diferentes canales.",
    impact: "Se pierde visibilidad del número de intentos, canal de respuesta y aporte real de la reactivación.",
    missing: "Evento por intento, bot, canal, resultado, fecha de respuesta y costo de recuperación.",
    decision: "Qué secuencia recupera más MQL y cuándo dejar de insistir."
  },
  mqlOrigin: {},
  "mql-origin": {
    area: "HubSpot · etapa MQL",
    title: "Dos rutas llegan al mismo MQL",
    summary: "El MQL puede nacer por calificación directa de CXC o por respuesta en reactivación, pero esa diferencia debe conservarse.",
    today: "CXC convierte a MQL cuando el lead responde y cumple. Si responde en reactivación, entra directamente como MQL y va al facilitador.",
    impact: "Sin el origen del MQL no se puede medir la aportación de CXC frente a bots ni comparar su calidad posterior.",
    missing: "Origen MQL, fecha de conversión, ruta, intento y canal de recuperación.",
    decision: "Dónde invertir capacidad y qué ruta produce mejores SQL y ventas."
  },
  assignment: {
    area: "CXC → Facilitador",
    title: "El handoff enfría al prospecto",
    summary: "Después de convertirse en MQL existe demora para vincularlo con un facilitador de compra.",
    today: "CXC o el flujo de reactivación entrega el MQL para su asignación comercial.",
    impact: "La intención disminuye entre la calificación y el primer contacto del facilitador.",
    missing: "Fecha de MQL, fecha de asignación, regla, carga y SLA de handoff.",
    decision: "A quién asignar y cuándo escalar un MQL sin atención."
  },
  acceptance: {
    area: "Facilitador de compra",
    title: "No hay visibilidad sobre la recepción",
    summary: "La aceptación, disponibilidad y primer contacto del facilitador no se leen en una sola vista.",
    today: "El facilitador recibe los datos del MQL y comienza el desarrollo de interés.",
    impact: "No se distingue demora de asignación, saturación o falta de seguimiento.",
    missing: "Aceptación, primera actividad, intentos, carga y motivo de devolución.",
    decision: "Balancear leads y proteger el SLA comercial."
  },
  feedback: {
    area: "Funnel Intelligence · circuito completo",
    title: "La calidad no vuelve a inversión",
    summary: "La información de CXC y Comercial no regresa automáticamente a campaña, anuncio y creativo.",
    today: "Cada área conoce una parte del recorrido, pero no existe una lectura común de extremo a extremo.",
    impact: "La optimización se queda en CPL y volumen, no en MQL, SQL, venta o velocidad del funnel.",
    missing: "Modelo consolidado, IDs persistentes, historial de eventos y dashboard transversal.",
    decision: "Qué cambiar en inversión, mensaje, operación y seguimiento."
  }
};

const drawer = document.getElementById("frictionDrawer");
const backdrop = document.getElementById("drawerBackdrop");
const closeDrawerButton = document.getElementById("closeDrawer");
const fields = {
  area: document.getElementById("drawerArea"), title: document.getElementById("drawerTitle"),
  summary: document.getElementById("drawerSummary"), today: document.getElementById("drawerToday"),
  impact: document.getElementById("drawerImpact"), missing: document.getElementById("drawerMissing"),
  decision: document.getElementById("drawerDecision")
};
let lastTrigger = null;

function openDrawer(key, trigger) {
  const item = frictionData[key];
  if (!item || !item.title) return;
  lastTrigger = trigger;
  Object.keys(fields).forEach((field) => { fields[field].textContent = item[field]; });
  backdrop.hidden = false;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
  closeDrawerButton.focus();
}

function closeDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  backdrop.hidden = true;
  document.body.classList.remove("drawer-open");
  if (lastTrigger) lastTrigger.focus();
}

document.querySelectorAll("[data-friction]").forEach((button) => {
  button.addEventListener("click", () => openDrawer(button.dataset.friction, button));
});
closeDrawerButton.addEventListener("click", closeDrawer);
backdrop.addEventListener("click", closeDrawer);
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && drawer.classList.contains("open")) closeDrawer(); });

const expandButton = document.getElementById("expandAll");
let highlighting = false;
expandButton.addEventListener("click", () => {
  highlighting = !highlighting;
  document.querySelectorAll(".friction").forEach((node) => node.classList.toggle("highlight", highlighting));
  expandButton.textContent = highlighting ? "Ocultar énfasis" : "Mostrar fricciones";
  if (highlighting) document.querySelector(".map-section").scrollIntoView({ behavior: "smooth", block: "start" });
});

const viewTabs = Array.from(document.querySelectorAll("[data-view]"));
const viewPanels = Array.from(document.querySelectorAll("[data-panel]"));

function setView(view, updateHash = true) {
  const nextTab = viewTabs.find((tab) => tab.dataset.view === view) || viewTabs[0];
  viewTabs.forEach((tab) => {
    const selected = tab === nextTab;
    tab.classList.toggle("active", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  viewPanels.forEach((panel) => {
    const selected = panel.dataset.panel === nextTab.dataset.view;
    panel.hidden = !selected;
    panel.classList.toggle("active", selected);
  });
  expandButton.hidden = nextTab.dataset.view !== "funnel";
  if (updateHash) history.replaceState(null, "", `#${nextTab.dataset.view}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

viewTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => setView(tab.dataset.view));
  tab.addEventListener("keydown", (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const next = viewTabs[(index + direction + viewTabs.length) % viewTabs.length];
    setView(next.dataset.view);
    next.focus();
  });
});

document.querySelectorAll("[data-go-view]").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.goView));
});

const initialView = location.hash.replace("#", "");
setView(viewPanels.some((panel) => panel.dataset.panel === initialView) ? initialView : "dashboard", false);

const dashboardRows = [
  { id: "av-meta-preventa", development: "Altavista Residencial", channel: "Meta", campaign: "Preventa Altavista · Formularios", investment: 38200, impressions: 540000, clicks: 14700, leads: 412, mql: 96, sql: 31 },
  { id: "av-google-search", development: "Altavista Residencial", channel: "Google", campaign: "Search · Casas en Querétaro", investment: 29700, impressions: 124000, clicks: 9200, leads: 298, mql: 74, sql: 28 },
  { id: "av-youtube-tour", development: "Altavista Residencial", channel: "YouTube", campaign: "Video · Tour de amenidades", investment: 9800, impressions: 310000, clicks: 4100, leads: 82, mql: 17, sql: 4 },
  { id: "le-meta-showroom", development: "Los Encinos", channel: "Meta", campaign: "Remarketing · Visita showroom", investment: 26500, impressions: 390000, clicks: 9800, leads: 274, mql: 62, sql: 19 },
  { id: "le-tiktok-familias", development: "Los Encinos", channel: "TikTok", campaign: "Video · Tu primera casa", investment: 18900, impressions: 610000, clicks: 7200, leads: 216, mql: 38, sql: 8 },
  { id: "le-google-marca", development: "Los Encinos", channel: "Google", campaign: "Search · Los Encinos marca", investment: 15400, impressions: 87000, clicks: 4800, leads: 143, mql: 41, sql: 13 },
  { id: "vs-meta-infonavit", development: "Villa Serena", channel: "Meta", campaign: "Crédito Infonavit · Leads", investment: 22100, impressions: 355000, clicks: 8900, leads: 231, mql: 45, sql: 11 },
  { id: "vs-tiktok-recorrido", development: "Villa Serena", channel: "TikTok", campaign: "Recorrido vertical · Modelo A", investment: 16600, impressions: 505000, clicks: 6100, leads: 155, mql: 24, sql: 5 },
  { id: "vs-google-vivienda", development: "Villa Serena", channel: "Google", campaign: "Search · Vivienda Aguascalientes", investment: 13200, impressions: 79000, clicks: 3900, leads: 121, mql: 32, sql: 9 },
  { id: "pn-meta-inversion", development: "Paseo Norte", channel: "Meta", campaign: "Inversión patrimonial · Carrusel", investment: 24300, impressions: 370000, clicks: 9000, leads: 246, mql: 58, sql: 17 },
  { id: "pn-youtube-zona", development: "Paseo Norte", channel: "YouTube", campaign: "Video · Conoce la zona", investment: 11200, impressions: 330000, clicks: 4500, leads: 91, mql: 19, sql: 5 },
  { id: "pn-google-premium", development: "Paseo Norte", channel: "Google", campaign: "Search · Residencial premium", investment: 17700, impressions: 96000, clicks: 5200, leads: 162, mql: 47, sql: 16 }
];

const dashState = { section: "general", development: "all", channel: "all", campaign: "all", period: "always", customDays: 15 };
const developmentFilter = document.getElementById("developmentFilter");
const channelFilter = document.getElementById("channelFilter");
const campaignFilter = document.getElementById("campaignFilter");
const customDates = document.getElementById("customDates");

function unique(values) { return [...new Set(values)].sort(); }
function option(value, label) { return `<option value="${value}">${label}</option>`; }
function money(value) { return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(value); }
function number(value) { return new Intl.NumberFormat("es-MX").format(Math.round(value)); }
function pct(value) { return `${value.toFixed(1)}%`; }
function periodMultiplier() {
  if (dashState.period === "always") return 1;
  if (dashState.period === "custom") return Math.max(.05, Math.min(1.2, dashState.customDays / 30));
  return Number(dashState.period) / 30;
}
function scaled(value) { return Math.max(value > 0 ? 1 : 0, Math.round(value * periodMultiplier())); }

function availableRows(ignoreCampaign = false) {
  return dashboardRows.filter((row) => {
    if (dashState.development !== "all" && row.development !== dashState.development) return false;
    if (dashState.channel !== "all" && row.channel !== dashState.channel) return false;
    if (!ignoreCampaign && dashState.campaign !== "all" && row.id !== dashState.campaign) return false;
    return true;
  });
}

function aggregate(rows) {
  return rows.reduce((sum, row) => {
    ["investment", "impressions", "clicks", "leads", "mql", "sql"].forEach((key) => { sum[key] += scaled(row[key]); });
    return sum;
  }, { investment: 0, impressions: 0, clicks: 0, leads: 0, mql: 0, sql: 0 });
}

function rebuildCampaigns() {
  const rows = availableRows(true);
  const valid = rows.some((row) => row.id === dashState.campaign);
  if (!valid) dashState.campaign = "all";
  campaignFilter.innerHTML = option("all", "Todas las campañas") + rows.map((row) => option(row.id, row.campaign)).join("");
  campaignFilter.value = dashState.campaign;
}

function kpi(label, value, meta, tone = "") {
  return `<article class="dashboard-kpi ${tone}"><span>${label}</span><strong>${value}</strong><small>${meta}</small></article>`;
}

function renderKpis(target, items) { document.getElementById(target).innerHTML = items.map((item) => kpi(...item)).join(""); }

function drawTrend(target, totals, variant = "general") {
  const svg = document.getElementById(target);
  const points = variant === "paid" ? [0.56,.63,.58,.72,.69,.82,.78,.9,.86,1] : [.52,.58,.64,.61,.73,.76,.71,.84,.89,1];
  const second = [.38,.46,.43,.57,.55,.68,.66,.79,.77,1];
  const third = [.25,.31,.29,.42,.39,.52,.49,.62,.68,1];
  const toPolyline = (series, height) => series.map((value, index) => `${35 + index * 72},${220 - value * height}`).join(" ");
  svg.innerHTML = `
    <defs><linearGradient id="orangeFill-${target}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF6900" stop-opacity=".20"/><stop offset="1" stop-color="#FF6900" stop-opacity="0"/></linearGradient></defs>
    ${[40,85,130,175,220].map((y) => `<line x1="28" x2="700" y1="${y}" y2="${y}" stroke="#DDD7CB" stroke-width="1"/>`).join("")}
    <polygon points="35,220 ${toPolyline(points,165)} 683,220" fill="url(#orangeFill-${target})"/>
    <polyline points="${toPolyline(points,165)}" fill="none" stroke="#FF6900" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="${toPolyline(second,125)}" fill="none" stroke="#363837" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="${toPolyline(third,92)}" fill="none" stroke="#10363E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="683" cy="55" r="5" fill="#FF6900"/><circle cx="683" cy="95" r="5" fill="#363837"/><circle cx="683" cy="128" r="5" fill="#10363E"/>
    <text x="35" y="244" fill="#71717A" font-size="11">Inicio</text><text x="648" y="244" fill="#71717A" font-size="11">Hoy</text>`;
  svg.setAttribute("aria-label", `Tendencia para ${money(totals.investment)} de inversión, ${number(totals.mql)} MQL y ${number(totals.sql)} SQL`);
}

function funnelMarkup(steps) {
  const max = Math.max(...steps.map((step) => step.value), 1);
  return steps.map((step, index) => `<div class="funnel-row"><div><span>${step.label}</span><strong>${number(step.value)}</strong></div><div class="funnel-track"><i style="width:${Math.max(7, step.value / max * 100)}%"></i></div><small>${index === 0 ? "Base" : pct(step.value / Math.max(steps[index - 1].value, 1) * 100)}</small></div>`).join("");
}

function groupBy(rows, key) {
  return unique(rows.map((row) => row[key])).map((name) => ({ name, totals: aggregate(rows.filter((row) => row[key] === name)) }));
}

function renderGeneral(rows, totals) {
  const cpl = totals.leads ? totals.investment / totals.leads : 0;
  const cpmql = totals.mql ? totals.investment / totals.mql : 0;
  renderKpis("generalKpis", [
    ["Inversión", money(totals.investment), "Presupuesto consumido", "accent"],
    ["Leads", number(totals.leads), `${money(cpl)} por lead`],
    ["MQL", number(totals.mql), `${money(cpmql)} por MQL`],
    ["SQL", number(totals.sql), `${pct(totals.sql / Math.max(totals.mql, 1) * 100)} desde MQL`, "dark"],
    ["Lead → SQL", pct(totals.sql / Math.max(totals.leads, 1) * 100), "Conversión total"]
  ]);
  drawTrend("generalTrend", totals);
  document.getElementById("generalFunnel").innerHTML = funnelMarkup([
    { label: "Clics", value: totals.clicks }, { label: "Leads", value: totals.leads }, { label: "MQL", value: totals.mql }, { label: "SQL", value: totals.sql }
  ]);
  document.getElementById("funnelRate").textContent = `${pct(totals.sql / Math.max(totals.leads, 1) * 100)} Lead → SQL`;
  const channels = groupBy(rows, "channel");
  const channelMax = Math.max(...channels.map((item) => item.totals.mql), 1);
  document.getElementById("channelPerformance").innerHTML = channels.map((item) => `<div><span><b>${item.name}</b><small>${number(item.totals.mql)} MQL · ${number(item.totals.sql)} SQL</small></span><i><b style="width:${item.totals.mql / channelMax * 100}%"></b></i><strong>${money(item.totals.investment)}</strong></div>`).join("") || '<p class="empty-data">Sin datos para estos filtros.</p>';
  const developments = groupBy(rows, "development").sort((a,b) => b.totals.mql - a.totals.mql);
  document.getElementById("developmentRanking").innerHTML = developments.map((item, index) => `<div><span>${String(index + 1).padStart(2,"0")}</span><b>${item.name}</b><small>${number(item.totals.leads)} leads</small><strong>${number(item.totals.mql)} MQL</strong><em>${money(item.totals.mql ? item.totals.investment / item.totals.mql : 0)}</em></div>`).join("") || '<p class="empty-data">Sin datos para estos filtros.</p>';
}

function renderPaid(rows, totals) {
  const cpl = totals.leads ? totals.investment / totals.leads : 0;
  const cpmql = totals.mql ? totals.investment / totals.mql : 0;
  renderKpis("paidKpis", [
    ["Inversión", money(totals.investment), "Desde API de canales", "accent"],
    ["Impresiones", number(totals.impressions), "Entrega total"],
    ["Clics", number(totals.clicks), `${pct(totals.clicks / Math.max(totals.impressions,1) * 100)} CTR`],
    ["Leads", number(totals.leads), `${money(cpl)} CPL`],
    ["MQL logrados", number(totals.mql), `${money(cpmql)} por MQL`],
    ["SQL logrados", number(totals.sql), `${pct(totals.sql / Math.max(totals.mql,1) * 100)} desde MQL`, "dark"]
  ]);
  drawTrend("paidTrend", totals, "paid");
  document.getElementById("paidFunnel").innerHTML = funnelMarkup([
    { label: "Impresiones", value: totals.impressions }, { label: "Clics", value: totals.clicks }, { label: "Leads", value: totals.leads }, { label: "MQL", value: totals.mql }, { label: "SQL", value: totals.sql }
  ]);
  document.getElementById("campaignCount").textContent = `${rows.length} ${rows.length === 1 ? "campaña" : "campañas"}`;
  document.getElementById("paidCampaignTable").innerHTML = rows.map((row) => {
    const values = aggregate([row]);
    return `<tr><td><b>${row.campaign}</b><small>${row.development}</small></td><td><span class="channel-badge ${row.channel.toLowerCase()}">${row.channel}</span></td><td>${money(values.investment)}</td><td>${number(values.leads)}</td><td>${number(values.mql)}</td><td>${number(values.sql)}</td><td>${money(values.leads ? values.investment / values.leads : 0)}</td><td>${pct(values.clicks / Math.max(values.impressions,1) * 100)}</td></tr>`;
  }).join("") || '<tr><td colspan="8">Sin campañas para estos filtros.</td></tr>';
}

function renderCrm(rows, totals) {
  const unqualified = Math.max(0, totals.leads - totals.mql);
  renderKpis("crmKpis", [
    ["Leads totales", number(totals.leads), "Ingresados a HubSpot"],
    ["Sin calificar", number(unqualified), "Pool potencial de remarketing", "accent"],
    ["MQL totales", number(totals.mql), `${pct(totals.mql / Math.max(totals.leads,1) * 100)} de los leads`],
    ["SQL totales", number(totals.sql), `${pct(totals.sql / Math.max(totals.mql,1) * 100)} de los MQL`, "dark"],
    ["Conversión final", pct(totals.sql / Math.max(totals.leads,1) * 100), "Lead → SQL"]
  ]);
  document.getElementById("crmConversion").textContent = `${pct(totals.mql / Math.max(totals.leads,1) * 100)} Lead → MQL`;
  const pipeline = [
    { label: "Leads recibidos", value: totals.leads, tone: "" },
    { label: "Sin calificar", value: unqualified, tone: "orange" },
    { label: "MQL", value: totals.mql, tone: "teal" },
    { label: "SQL", value: totals.sql, tone: "dark" }
  ];
  document.getElementById("crmPipeline").innerHTML = pipeline.map((item) => `<div class="pipeline-row ${item.tone}"><span>${item.label}</span><div><i style="width:${Math.max(4,item.value / Math.max(totals.leads,1) * 100)}%"></i></div><strong>${number(item.value)}</strong><small>${pct(item.value / Math.max(totals.leads,1) * 100)}</small></div>`).join("");
  document.getElementById("remarketingTotal").textContent = number(unqualified);
  document.getElementById("remarketingBreakdown").innerHTML = `<span><b>${number(Math.round(unqualified * .46))}</b> sin respuesta</span><span><b>${number(Math.round(unqualified * .34))}</b> validación pendiente</span><span><b>${number(Math.round(unqualified * .20))}</b> datos incompletos</span>`;
  const sources = groupBy(rows, "channel");
  document.getElementById("crmSourceTable").innerHTML = sources.map((item) => `<tr><td><b>${item.name}</b></td><td>${number(item.totals.leads)}</td><td>${number(item.totals.leads - item.totals.mql)}</td><td>${number(item.totals.mql)}</td><td>${number(item.totals.sql)}</td><td><span class="conversion-cell"><i style="width:${item.totals.mql / Math.max(item.totals.leads,1) * 100}%"></i>${pct(item.totals.mql / Math.max(item.totals.leads,1) * 100)}</span></td></tr>`).join("") || '<tr><td colspan="6">Sin datos para estos filtros.</td></tr>';
}

function periodLabel() {
  if (dashState.period === "always") return "Always on";
  if (dashState.period === "custom") return `${dashState.customDays} días personalizados`;
  return `Últimos ${dashState.period} días`;
}

function renderDashboard() {
  const rows = availableRows();
  const totals = aggregate(rows);
  renderGeneral(rows, totals);
  renderPaid(rows, totals);
  renderCrm(rows, totals);
  document.getElementById("generalTrendLabel").textContent = periodLabel();
  document.getElementById("paidTrendLabel").textContent = periodLabel();
}

function setDashboardSection(section) {
  dashState.section = section;
  const labels = {
    general: ["General", "Panorama general", "Una lectura compartida de inversión, adquisición y avance comercial."],
    paid: ["Paid", "Rendimiento de Paid Media", "Performance por desarrollo, canal y campaña conectado con MQL y SQL."],
    crm: ["CRM", "Calidad y seguimiento", "Inventario comercial, calificación y oportunidad de remarketing."],
    contenido: ["Contenido", "Contenido", "Narrativas y formatos conectados con resultados de negocio."],
    growth: ["Growth", "Growth", "Experimentos y oportunidades para acelerar el funnel."]
  };
  document.querySelectorAll("[data-dashboard-section]").forEach((button) => button.classList.toggle("active", button.dataset.dashboardSection === section && button.classList.contains("dash-nav-item")));
  document.querySelectorAll("[data-dash-view]").forEach((view) => { const active = view.dataset.dashView === section; view.hidden = !active; view.classList.toggle("active", active); });
  const copy = labels[section];
  document.getElementById("dashboardBreadcrumb").textContent = copy[0];
  document.getElementById("dashboardTitle").textContent = copy[1];
  document.getElementById("dashboardSubtitle").textContent = copy[2];
}

unique(dashboardRows.map((row) => row.development)).forEach((name) => developmentFilter.insertAdjacentHTML("beforeend", option(name, name)));
unique(dashboardRows.map((row) => row.channel)).forEach((name) => channelFilter.insertAdjacentHTML("beforeend", option(name, name === "Google" ? "Google · GA4" : name)));
rebuildCampaigns();

developmentFilter.addEventListener("change", () => { dashState.development = developmentFilter.value; rebuildCampaigns(); renderDashboard(); });
channelFilter.addEventListener("change", () => { dashState.channel = channelFilter.value; rebuildCampaigns(); renderDashboard(); });
campaignFilter.addEventListener("change", () => { dashState.campaign = campaignFilter.value; renderDashboard(); });
document.querySelectorAll("[data-period]").forEach((button) => button.addEventListener("click", () => {
  dashState.period = button.dataset.period;
  document.querySelectorAll("[data-period]").forEach((item) => item.classList.toggle("active", item === button));
  customDates.hidden = dashState.period !== "custom";
  renderDashboard();
}));
document.querySelectorAll("#customDates input").forEach((input) => input.addEventListener("change", () => {
  const from = new Date(document.getElementById("dateFrom").value);
  const to = new Date(document.getElementById("dateTo").value);
  dashState.customDays = Math.max(1, Math.round((to - from) / 86400000) + 1);
  renderDashboard();
}));
document.querySelectorAll("[data-dashboard-section]").forEach((button) => button.addEventListener("click", () => setDashboardSection(button.dataset.dashboardSection)));

setDashboardSection("general");
renderDashboard();
