let proximoId = 1;

const tarefas = [];

// Classe responsável por representar uma tarefa
class Tarefa {
    constructor(titulo, descricao, prioridade, tags) {
        const data = new Date();

        const dataFormatada = `${String(data.getDate()).padStart(2, "0")}-${String(data.getMonth() + 1).padStart(2, "0")}-${data.getFullYear()}`;

        // O ID é incrementado sempre que houver uma tarefa nova
        this.id = proximoId++;

        this.titulo = titulo;
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.tags = tags;

        // Toda tarefa começa com o estado pendente
        this.estado = "pendente";

        this.criadaEm = dataFormatada;

        // Enquanto não for concluida, o valor será null
        this.concluidaEm = null;
    }
}

// Adiciona uma nova tarefa ao array de tarefas
function adicionarTarefa(titulo, descricao, prioridade, tags) {
    const novaTarefa = new Tarefa(titulo, descricao, prioridade, tags);

    tarefas.push(novaTarefa);

    console.log("Nova tarefa adicionada:");
    console.log(novaTarefa);
}

// Procura uma tarefa através do ID e marca como concluída
function concluirTarefa(id) {
    const tarefaEncontrada = tarefas.find((tarefa) => tarefa.id === id);

    if (!tarefaEncontrada) {
        console.log("Tarefa com id: " + id + " não existe");
    } else {
        const data = new Date();

        const dataFormatada = `${String(data.getDate()).padStart(2, "0")}-${String(data.getMonth() + 1).padStart(2, "0")}-${data.getFullYear()}`;

        tarefaEncontrada.estado = "concluida";
        tarefaEncontrada.concluidaEm = dataFormatada;

        console.log("Tarefa concluída:");

        console.log(tarefaEncontrada);
    }
}

// Procura uma tarefa através do ID
function procurarTarefaPorId(id) {
    const tarefaEncontrada = tarefas.find((tarefa) => tarefa.id === id);

    if (!tarefaEncontrada) {
        console.log("Tarefa com id: " + id + " não existe");
    } else {
        console.log("Tarefa encontrada:");

        console.log(tarefaEncontrada);
    }
}

// Altera os dados de uma tarefa através do ID
function alterarTarefaPorId(id, dadosNovos) {
    const tarefaEncontrada = tarefas.find((tarefa) => tarefa.id === id);

    if (!tarefaEncontrada) {
        console.log("Tarefa com id: " + id + " não existe");
    } else {
        // Object.assign atualiza apenas os dados recebidos
        Object.assign(tarefaEncontrada, dadosNovos);

        console.log("Tarefa alterada com sucesso:");

        console.log(tarefaEncontrada);
    }
}

// Remove uma tarefa através do ID
function eliminarTarefaPorId(id) {
    const indiceTarefa = tarefas.findIndex((tarefa) => tarefa.id === id);

    if (indiceTarefa === -1) {
        console.log("Tarefa com id: " + id + " não existe");
    } else {
        tarefas.splice(indiceTarefa, 1);

        console.log("Tarefa eliminada com sucesso!");

        console.log(tarefas);
    }
}

// Cancela uma tarefa através do ID
function cancelarTarefa(id) {
    const tarefaEncontrada = tarefas.find((tarefa) => tarefa.id === id);

    if (!tarefaEncontrada) {
        console.log("Tarefa com id: " + id + " não existe");
    } else {
        tarefaEncontrada.estado = "cancelada";

        console.log("Tarefa cancelada:");

        console.log(tarefaEncontrada);
    }
}

// Lista tarefas aplicando os filtros recebidos
function listarTarefas(estado = null, prioridade = null, tag = null) {
    const tarefasEncontradas = tarefas.filter((tarefa) => {
        // Se o estado for informado, só aceita tarefas com esse estado
        if (estado && tarefa.estado !== estado) {
            return false;
        }

        // Se a prioridade for informada, só aceita tarefas com essa prioridade
        if (prioridade && tarefa.prioridade !== prioridade) {
            return false;
        }

        // Se a tag for informada, verifica se a tarefa possui essa tag
        if (tag && !tarefa.tags.includes(tag)) {
            return false;
        }

        return true;
    });

    console.log("Tarefas encontradas:");

    console.log(tarefasEncontradas);
}

// Testes
const testeAdicionarTarefa = adicionarTarefa(
    "tarefa1",
    "testeTarefa1",
    "alta",
    ["dev", "urgente"],
);

const testeAdicionarTarefa2 = adicionarTarefa("estudar", "java", "media", [
    "estudo",
    "spring-boot",
]);

// Exemplos de testes:
// alterarTarefaPorId(2, { titulo: "estudar java" });
// eliminarTarefaPorId(2);
// procurarTarefaPorId(5);
// concluirTarefa(1);
// cancelarTarefa(2);
// listarTarefas(null, "alta");
