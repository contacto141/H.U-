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
setView(viewPanels.some((panel) => panel.dataset.panel === initialView) ? initialView : "funnel", false);
