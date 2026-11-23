lucide.createIcons();

// Lógica do Menu Mobile
const btnMenuMobile = document.getElementById("mobile-menu-btn");
const menuMobile = document.getElementById("mobile-menu");
const linksMobile = document.querySelectorAll(".mobile-link");

if (btnMenuMobile && menuMobile) {
  btnMenuMobile.addEventListener("click", () => {
    menuMobile.classList.toggle("hidden");
  });
}

// Fechar o menu ao clicar em algum link
linksMobile.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuMobile) menuMobile.classList.add("hidden");
  });
});

// Dados simulados para os 18 Contratos
const contractsData = [
  {
    id: "CTR-001",
    client: "Empresa Alfa S.A.",
    date: "10/01/2026",
    delay: 25,
    resp: "Ana Silva (Admin)",
    status: "pendente",
  },
  {
    id: "CTR-002",
    client: "Beta Serviços LTDA",
    date: "12/01/2026",
    delay: 23,
    resp: "Carlos Souza (Admin)",
    status: "em_analise",
  },
  {
    id: "CTR-003",
    client: "Gama Logística",
    date: "15/01/2026",
    delay: 20,
    resp: "Ana Silva (Admin)",
    status: "enviado",
  },
  {
    id: "CTR-004",
    client: "Delta Indústria",
    date: "18/01/2026",
    delay: 18,
    resp: "Roberto Lima (Ops)",
    status: "pendente",
  },
  {
    id: "CTR-005",
    client: "Epsilon Tech",
    date: "20/01/2026",
    delay: 16,
    resp: "Carlos Souza (Admin)",
    status: "em_analise",
  },
  {
    id: "CTR-006",
    client: "Zeta Comercio",
    date: "22/01/2026",
    delay: 14,
    resp: "Ana Silva (Admin)",
    status: "enviado",
  },
  {
    id: "CTR-007",
    client: "Eta Varejo",
    date: "25/01/2026",
    delay: 12,
    resp: "Roberto Lima (Ops)",
    status: "pendente",
  },
  {
    id: "CTR-008",
    client: "Theta Alimentos",
    date: "28/01/2026",
    delay: 10,
    resp: "Carlos Souza (Admin)",
    status: "em_analise",
  },
  {
    id: "CTR-009",
    client: "Iota Consultoria",
    date: "02/02/2026",
    delay: 8,
    resp: "Ana Silva (Admin)",
    status: "enviado",
  },
  {
    id: "CTR-010",
    client: "Kappa Mídia",
    date: "05/02/2026",
    delay: 6,
    resp: "Roberto Lima (Ops)",
    status: "pendente",
  },
  {
    id: "CTR-011",
    client: "Lambda Engenharia",
    date: "08/02/2026",
    delay: 5,
    resp: "Carlos Souza (Admin)",
    status: "em_analise",
  },
  {
    id: "CTR-012",
    client: "Mu Transportes",
    date: "10/02/2026",
    delay: 4,
    resp: "Ana Silva (Admin)",
    status: "enviado",
  },
  {
    id: "CTR-013",
    client: "Nu Saúde",
    date: "12/02/2026",
    delay: 3,
    resp: "Roberto Lima (Ops)",
    status: "pendente",
  },
  {
    id: "CTR-014",
    client: "Xi Educação",
    date: "15/02/2026",
    delay: 2,
    resp: "Carlos Souza (Admin)",
    status: "em_analise",
  },
  {
    id: "CTR-015",
    client: "Omicron Farma",
    date: "18/02/2026",
    delay: 1,
    resp: "Ana Silva (Admin)",
    status: "enviado",
  },
  {
    id: "CTR-016",
    client: "Pi Soluções",
    date: "20/02/2026",
    delay: 1,
    resp: "Roberto Lima (Ops)",
    status: "pendente",
  },
  {
    id: "CTR-017",
    client: "Rho Imóveis",
    date: "22/02/2026",
    delay: 1,
    resp: "Carlos Souza (Admin)",
    status: "em_analise",
  },
  {
    id: "CTR-018",
    client: "Sigma Seguros",
    date: "25/02/2026",
    delay: 1,
    resp: "Ana Silva (Admin)",
    status: "enviado",
  },
];

function renderContracts(filter = "todos") {
  const tbody = document.getElementById("contractsTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";
  const filtered =
    filter === "todos"
      ? contractsData
      : contractsData.filter((c) => c.status === filter);

  filtered.forEach((item) => {
    let statusBadge = "";
    if (item.status === "pendente") {
      statusBadge =
        '<span class="bg-red-100 text-red-700 font-semibold px-2 py-0.5 rounded text-xs">Pendente</span>';
    } else if (item.status === "em_analise") {
      statusBadge =
        '<span class="bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded text-xs">Em Análise</span>';
    } else {
      statusBadge =
        '<span class="bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded text-xs">Enviado</span>';
    }

    const tr = document.createElement("tr");
    tr.className = "hover:bg-slate-50 transition-colors duration-150";
    tr.innerHTML = `
              <td class="p-3 font-mono font-bold text-slate-700">${item.id}</td>
              <td class="p-3 font-medium text-slate-800">${item.client}</td>
              <td class="p-3 text-slate-600">${item.date}</td>
              <td class="p-3 font-bold text-red-600">${item.delay} dias</td>
              <td class="p-3 text-slate-600">${item.resp}</td>
              <td class="p-3">${statusBadge}</td>
              <td class="p-3 text-right">
                  <button onclick="toggleStatus('${item.id}')" class="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded transition-all hover:scale-105 active:scale-95 shadow-sm">
                      Avançar Status
                  </button>
              </td>
          `;
    tbody.appendChild(tr);
  });
}

function toggleStatus(id) {
  const item = contractsData.find((c) => c.id === id);
  if (item) {
    if (item.status === "pendente") item.status = "em_analise";
    else if (item.status === "em_analise") item.status = "enviado";
    else item.status = "pendente";
    renderContracts();
  }
}

function filterContracts(status) {
  renderContracts(status);
}

// Sistema de Planilhas da Equipe
let sheetsList = [
  {
    id: 1,
    nome: "Fernanda Lima",
    cpf: "123.456.789-00",
    endereco: "Av. Paulista, 1000 - São Paulo/SP",
    telefone: "(11) 98765-4321",
    email: "fernanda@exemplo.com",
    pv: "PV-01",
  },
  {
    id: 2,
    nome: "Juliana Costa",
    cpf: "987.654.321-11",
    endereco: "Rua das Flores, 250 - Rio de Janeiro/RJ",
    telefone: "(21) 97654-3210",
    email: "juliana@exemplo.com",
    pv: "PV-03",
  },
];

function renderSheets(listToRender = sheetsList) {
  const tbody = document.getElementById("sheetsTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (listToRender.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="p-4 text-center text-slate-400 italic">Nenhum registro encontrado.</td></tr>`;
    return;
  }

  listToRender.forEach((item) => {
    const tr = document.createElement("tr");
    tr.className = "hover:bg-slate-50 transition-colors duration-150";
    tr.innerHTML = `
              <td class="p-3 font-semibold text-slate-800">${item.nome}</td>
              <td class="p-3 font-mono text-slate-700">${item.cpf}</td>
              <td class="p-3 text-slate-600">
                  <div>${item.telefone}</div>
                  <div class="text-[10px] text-slate-400">${item.email}</div>
              </td>
              <td class="p-3 text-slate-600">${item.endereco}</td>
              <td class="p-3 font-bold text-brand-600">${item.pv}</td>
              <td class="p-3 text-right">
                  <button onclick="deleteSheetItem(${item.id})" class="text-xs text-red-600 hover:text-red-800 font-semibold p-1 hover:scale-110 transition-transform">Excluir</button>
              </td>
          `;
    tbody.appendChild(tr);
  });
}

function saveSheetData(event) {
  event.preventDefault();
  const newItem = {
    id: Date.now(),
    nome: document.getElementById("inputNome").value,
    cpf: document.getElementById("inputCPF").value,
    endereco: document.getElementById("inputEndereco").value,
    telefone: document.getElementById("inputTelefone").value,
    pv: document.getElementById("inputPV").value,
    email: document.getElementById("inputEmail").value,
  };

  sheetsList.unshift(newItem);
  renderSheets();
  document.getElementById("sheetForm").reset();

  showNotification("Dados salvos na planilha com sucesso!", "success");
}

function filterSheetData() {
  const term = document
    .getElementById("searchSheet")
    .value.toLowerCase()
    .trim();
  const filtered = sheetsList.filter(
    (item) =>
      item.nome.toLowerCase().includes(term) ||
      item.cpf.toLowerCase().includes(term)
  );
  renderSheets(filtered);
}

function deleteSheetItem(id) {
  if (confirm("Deseja realmente remover este registro da planilha?")) {
    sheetsList = sheetsList.filter((item) => item.id !== id);
    renderSheets();

    showNotification("Dados excluídos", "error");
  }
}

// Sistema de Notificações Customizadas (Toasts)
function createNotificationContainer() {
  const container = document.createElement("div");
  container.id = "notification-container";
  container.className =
    "fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none";
  document.body.appendChild(container);
  return container;
}

function showNotification(message, type = "success") {
  const container =
    document.getElementById("notification-container") ||
    createNotificationContainer();
  const notif = document.createElement("div");

  const bgColor = type === "success" ? "bg-emerald-500" : "bg-red-500";
  const icon = type === "success" ? "check-circle" : "trash-2";

  notif.className = `flex items-center gap-2 text-white px-4 py-3 rounded-lg shadow-lg transform transition-all duration-300 translate-y-10 opacity-0 ${bgColor}`;
  notif.innerHTML = `
          <i data-lucide="${icon}" class="w-5 h-5"></i> 
          <span class="text-sm font-semibold">${message}</span>
      `;

  container.appendChild(notif);
  lucide.createIcons({ root: notif });

  setTimeout(() => {
    notif.classList.remove("translate-y-10", "opacity-0");
    notif.classList.add("translate-y-0", "opacity-100");
  }, 10);

  setTimeout(() => {
    notif.classList.remove("translate-y-0", "opacity-100");
    notif.classList.add("translate-y-10", "opacity-0");
    setTimeout(() => notif.remove(), 300);
  }, 3000);
}

window.onload = function () {
  renderContracts();
  renderSheets();
};