// Write your JavaScript code.
//Comandos de javascript para escolhas.
function trocaFoto() {
    var comando = "";
    var opcao = document.getElementById("fotosEscolha").value;

    switch (opcao) {
        case "1":
            comando = '<img src="img/album1.jpg" width="100%" height="860">';
            alert("Você escolheu as fotos das ruas do Parlamento.");
            document.getElementById("fotoAlbum").innerHTML = comando;
            break;
        case "2":
            comando = '<img src="img/album2.jpg" width="100%" height="860">';
            alert("Você escolheu as fotos do Big Ben.");
            document.getElementById("fotoAlbum").innerHTML = comando;
            break;
        case "3":
            comando = '<img src="img/album3.jpg" width="100%" height="860">';
            alert("Você escolheu as fotos das tradicionais cabines telefônicas de Londres.");
            document.getElementById("fotoAlbum").innerHTML = comando;
            break;
        case "4":
            comando = '<img src="img/album4.jpg" width="100%" height="860">';
            alert("Você escolheu as fotos da rua Baker Street 221B.");
            document.getElementById("fotoAlbum").innerHTML = comando;
            break;
    }
}
//Terminar depois
function validaCadastro() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var apelido = document.getElementById("apelido").value;
    var mail = document.getElementById("mail").value;
    var sexo = document.getElementById("sexo").value;
    var notaDesign = document.getElementById("design").value;
    var notaConteudo = document.getElementById("conteudo").value;
    var notaDicas = document.getElementById("dicas").value;
    var comentario = document.getElementById("comentario").value;
    var dataAtual = document.getElementById("dataAtual").value;
    var media = 0;

    if (nome === "") {
        alert("O nome não foi preenchido!");
    } else if (sobrenome === "") {
        alert("O sobrenome está vazio!");
    } else if (apelido === "") {
        alert("O apelido está vazio!");
    } else if (mail === "") {
        alert("O e-mail está vazio!");
    } else if (sexo === "N") {
        alert("O sexo não foi selecionado");
    }
}
//Resposta do desafio de javascript.
function calcularOp() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var op = document.getElementById("op").value;
    var r = 0;

    switch (op) {
        case "+":
            r = (parseInt(n1) + parseInt(n2));
            alert(n1 + " " + op + " " + n2 + " = " + r);
            break;
        case "-":
            r = (parseInt(n1) - parseInt(n2));
            alert(n1 + " " + op + " " + n2 + " = " + r);
            break;
        case "*":
            r = (parseInt(n1) * parseInt(n2));
            alert(n1 + " " + op + " " + n2 + " = " + r);
            break;
        case "/":
            r = (parseFloat(n1) / parseFloat(n2));
            alert(n1 + " " + op + " " + n2 + " = " + r);
            break;
    }
}
function calcularPasseio() {
    var pacote = document.getElementsByName("opcional[]");
    var total = 1560 + (62 * 7);
    var taxa = 0.06;
    var euro = 4.63;
    var iniciOrcamento = '';
    var fimOrcamento = '';
    var meioOrcamento = '';
    for (var i = 0; i < pacote.length; i++) {
        if (pacote[i].checked) {
            total += parseFloat(pacote[i].value);
        }
    }
    iniciOrcamento = (
        '<table>' +
        '<tr>' +
        '<th>Parcelas</th>' +
        '<th>Valor em Euros</th>' +
        '<th>Taxa de Juros</th>' +
        '<th>Valor em Reais</th>' +
        '<th>Valor da Parcela</th>' +
        '</tr>'
    );
    for (var j = 3; j <= 12; j = (j + 3)) {
        meioOrcamento += (
            '<tr>' +
            '<td>' + j + '</td>' +
            '<td>' + total.toFixed(2) + '</td>' +
            '<td>' + (taxa * 100) + ' %</td>' +
            '<td>R$ ' + (total * euro).toFixed(2) + '</td>' +
            '<td>' + j + 'x R$' + ((total * euro) / j).toFixed(2) + '</td>' +
            '</tr>'
        );
    }
    fimOrcamento = (
        '</table>'
    );
    document.getElementById("orcamento").innerHTML = iniciOrcamento + meioOrcamento + fimOrcamento;
}


