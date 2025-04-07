// Elementos HTML
const periodoDia = document.getElementById("dia");
const periodoSemana = document.getElementById("semana");
const periodoMes = document.getElementById("mes");
const dataHora = document.getElementById("dataHora");
const calendario = document.getElementById("calendario");
const detalhesEvento = document.getElementById("detalhesEvento");
const tituloEvento = document.getElementById("tituloEvento");
const horarioEvento = document.getElementById("horarioEvento");
const localEvento = document.getElementById("localEvento");
const descricaoEvento = document.getElementById("descricaoEvento");
const enderecoEvento = document.getElementById("enderecoEvento");
const fecharModal = document.querySelector(".fechar-modal");
const botaoAcao = document.getElementById("acaoEvento");

// Criar contêiner para botões
const botoesContainer = document.createElement("div");
botoesContainer.style.display = "flex";
botoesContainer.style.justifyContent = "space-between";
botoesContainer.style.marginTop = "10px";

const botaoCheckin = document.createElement("button");
const botaoCheckout = document.createElement("button");
const botaoNovoPedido = document.createElement("button");
const botaoFlutuante = document.createElement("button");

botaoCheckin.textContent = "✔ Check-in";
botaoCheckin.style.backgroundColor = "#084d6e";
botaoCheckin.style.color = "white";
botaoCheckin.style.padding = "10px";
botaoCheckin.style.margin = "5px";
botaoCheckin.style.cursor = "pointer";
botaoCheckin.style.borderRadius = "5px";

botaoCheckout.textContent = "✖ Check-out";
botaoCheckout.style.backgroundColor = "#FF7F50";
botaoCheckout.style.color = "white";
botaoCheckout.style.padding = "10px";
botaoCheckout.style.margin = "5px";
botaoCheckout.style.cursor = "pointer";
botaoCheckout.style.borderRadius = "5px";

botaoNovoPedido.textContent = "Novo Pedido";
botaoNovoPedido.style.backgroundColor = "#28a745";
botaoNovoPedido.style.color = "white";
botaoNovoPedido.style.padding = "10px";
botaoNovoPedido.style.margin = "5px";
botaoNovoPedido.style.cursor = "pointer";
botaoNovoPedido.style.borderRadius = "5px";

botaoFlutuante.textContent = "+";
botaoFlutuante.style.position = "fixed";
botaoFlutuante.style.bottom = "20px";
botaoFlutuante.style.right = "20px";
botaoFlutuante.style.backgroundColor = "#55696c";
botaoFlutuante.style.color = "white";
botaoFlutuante.style.padding = "15px";
botaoFlutuante.style.borderRadius = "50%";
botaoFlutuante.style.cursor = "pointer";
document.body.appendChild(botaoFlutuante);

botaoFlutuante.onclick = () => {
    alert("Aqui será aberto um formulário para adicionar nova visita");
};

document.body.appendChild(botaoFlutuante);

botoesContainer.appendChild(botaoCheckin);
botoesContainer.appendChild(botaoCheckout);

// Centralizar o modal
detalhesEvento.style.position = "fixed";
detalhesEvento.style.top = "50%";
detalhesEvento.style.left = "50%";
detalhesEvento.style.transform = "translate(-50%, -50%)";
detalhesEvento.style.zIndex = "1000";
detalhesEvento.style.backgroundColor = "white";
detalhesEvento.style.padding = "20px";
detalhesEvento.style.borderRadius = "10px";
detalhesEvento.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";

document.body.appendChild(detalhesEvento);

// Dados de exemplo
const eventos = [
    { titulo: "PECUARIA PINTO LTDA (107657)", horario: "10:00 - 11:00", descricao: "Visita Periódica", endereco: "RUA SAO PEDRO, 243, SAPIRANGA - RS", data: "2025-04-03", status: "pendente" },
    { titulo: "NOVA AGROPEC LTDA (90087)", horario: "12:00 - 13:00", descricao: "Visita Periódica", endereco: "RUA MEXICO, 319, SANTO AFONSO, NOVO HAMBURGO - RS", data: "2025-04-03", status: "pendente" },
    { titulo: "COMERCIO DE PRODUTOS AGRO FERRABRAZ EIRELI (184616)", horario: "10:00 - 11:00", descricao: "Atendimento de Reclamação", endereco: "RUA LUIZ ROBERTO PREZZI, 53 , SALA 01, AMARAL RIBEIRO, SAPIRANGA - RS", data: "2025-04-04", status: "pendente" },
    { titulo: "AGROPECUARIA SJ LTDA (243113)", horario: "12:00 - 13:00", descricao: "Visita Periódica", endereco: "RUA FREDERICO MICHAELSEN, 129 , SALA 02, CENTRO, NOVA PETROPOLIS - RS", data: "2025-04-04", status: "pendente" },
    { titulo: "BICHOS COMERCIO DE PRODUTOS AGROPECUARIOS LTDA (134397)", horario: "08:00 - 10:00", descricao: "Visita Periódica", endereco: "RUA FREDERICO MICHAELSEN, 129 , SALA 02, CENTRO, NOVA PETROPOLIS - RS", data: "2025-04-05", status: "pendente" },
    { titulo: "AR MERCADO PECUARIO LTDA (135704)", horario: "11:00 - 12:00", descricao: "Visita Periódica", endereco: "RUA FREDERICO MICHAELSEN, 129 , SALA 02, CENTRO, NOVA PETROPOLIS - RS", data: "2025-04-05", status: "pendente" },
    { titulo: "HUPPES AGROPECUARIA E FERRAGEM LTDA (156543)", horario: "14:00 - 15:00", descricao: "Visita Periódica", endereco: "RUA FREDERICO MICHAELSEN, 129 , SALA 02, CENTRO, NOVA PETROPOLIS - RS", data: "2025-04-05", status: "pendente" },
    { titulo: "WALKRUPP COM.DE PROD.AGROPECUARIOS LTDA (110122)", horario: "08:00 - 10:00", descricao: "Visita Periódica", endereco: "RUA FREDERICO MICHAELSEN, 129 , SALA 02, CENTRO, NOVA PETROPOLIS - RS", data: "2025-04-07", status: "pendente" }
];

// Função para exibir eventos
function exibirEventos(periodo) {
    calendario.innerHTML = "";
    let eventosFiltrados = [];
    const hoje = new Date().toISOString().slice(0, 10);

    if (periodo === "dia") {
        eventosFiltrados = eventos.filter(e => e.data === hoje);
    } else if (periodo === "semana") {
        const inicioSemana = new Date();
        inicioSemana.setDate(inicioSemana.getDate() - inicioSemana.getDay());
        const fimSemana = new Date(inicioSemana);
        fimSemana.setDate(inicioSemana.getDate() + 6);
        eventosFiltrados = eventos.filter(e => new Date(e.data) >= inicioSemana && new Date(e.data) <= fimSemana);
    } else if (periodo === "mes") {
        eventosFiltrados = [...eventos];
    }

    let ultimoDia = "";
    eventosFiltrados.forEach(evento => {
        if (evento.data !== ultimoDia) {
            const header = document.createElement("h3");
            header.textContent = evento.data;
            calendario.appendChild(header);
            ultimoDia = evento.data;
        }
        
        const eventoElemento = document.createElement("div");
        eventoElemento.textContent = `${evento.horario} - ${evento.titulo}`;
        eventoElemento.style.backgroundColor = evento.status === "checkin" ? "#b0e0e6" : evento.status === "checkout" ? "#FF7F50" : "white";
        eventoElemento.addEventListener("click", () => mostrarDetalhesEvento(evento, eventoElemento));
        calendario.appendChild(eventoElemento);
    });
}

// Função para mostrar detalhes do evento
function mostrarDetalhesEvento(evento, elemento) {
    tituloEvento.textContent = evento.titulo;
    horarioEvento.textContent = evento.horario;
    localEvento.textContent = evento.local;
    descricaoEvento.textContent = evento.descricao;
    enderecoEvento.textContent = `Endereço: ${evento.endereco}`;

    botaoAcao.textContent = "Ver no Mapa";
    botaoAcao.onclick = () => {
        window.open(`https://www.google.com/maps/search/?q=${encodeURIComponent(evento.endereco)}`, '_blank');
    };

    botaoCheckin.onclick = () => {
        if (confirm("Deseja fazer o check-in?")) {
            evento.status = "checkin";
            elemento.style.backgroundColor = "#084d6e";
            fecharModalDetalhes();
        }
    };

    botaoCheckout.onclick = () => {
        if (confirm("Deseja fazer o checkout?")) {
            evento.status = "checkout";
            elemento.style.backgroundColor = "#FF7F50";
            fecharModalDetalhes();
        }
    };
    
    botaoNovoPedido.onclick = () => {
        alert("Abrindo tela para criar novo pedido...");
    };

    detalhesEvento.appendChild(botoesContainer);
    detalhesEvento.appendChild(botaoCheckin);
    detalhesEvento.appendChild(botaoCheckout);
    detalhesEvento.appendChild(botaoNovoPedido);
    detalhesEvento.style.display = "block";
}

function fecharModalDetalhes() {
    detalhesEvento.style.display = "none";
}

periodoDia.addEventListener("click", () => exibirEventos("dia"));
periodoSemana.addEventListener("click", () => exibirEventos("semana"));
periodoMes.addEventListener("click", () => exibirEventos("mes"));
fecharModal.addEventListener("click", fecharModalDetalhes);

detalhesEvento.style.display = "none";
exibirEventos("dia");