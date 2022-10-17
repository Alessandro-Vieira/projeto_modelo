// Criando a Lista de Compras
var list = [];

//Criando a Tabela no Front-End
function Lista(list){
	var table = '<thead><tr><td>Nome</td><td>Senha</td><td>Status</td><td>Ação</td></tr></thead><tbody>';
	for(var key in list){
		table += '<tr><td>'+ FormatarNome(list[key].nome) +'</td><td>'+ FormatarSenha(list[key].senha) +'</td><td>'+ FormatarStatus(list[key].status) +'</td><td><button class="btn btn-default" onclick="ApagarRegistro('+key+');">Apagar</button></td></tr>';
	}
	table += '</tbody>';

	document.getElementById('listTable').innerHTML = table;
	saveListStorage(list);
}

//Formatando o Campo Nome
function FormatarNome(nome){
	var str = nome.toLowerCase();
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

//Formatando o Campo Senha
function FormatarSenha(senha){
	return parseInt(senha);
}

//Formatando o Campo Status
function FormatarStatus(status){
	var s = status.toLowerCase();
	s = s.charAt(0).toUpperCase() + s.slice(1);
	return s;
}

//Criando novo produto
function Cadastrar(){
    if (document.getElementById("senha").value != document.getElementById("c_senha").value){
        alert("As Senhas não Conferem")
    }
    else{
        var nome = document.getElementById("nome").value;
        var senha = document.getElementById("senha").value;
        var status = document.getElementById("status").value;
        list.unshift({"nome":nome , "senha":senha , "status":status });
        Lista(list);
        LimparForm()
    }
}

//Limpa os campos do Formulário
function LimparForm(){
	document.getElementById("nome").value = "";
	document.getElementById("senha").value = "";
    document.getElementById("c_senha").value = "";
	document.getElementById("status").value = "";
}

//Apagando os Registros
function ApagarRegistro(id){
	if(confirm("Confirma Exclusão?")){
		if(id === list.length - 1){
			list.pop();
		}else if(id === 0){
			list.shift();
		}else{
			var arrAuxIni = list.slice(0,id);
			var arrAuxEnd = list.slice(id + 1);
			list = arrAuxIni.concat(arrAuxEnd);
		}
		Lista(list);
	}
}

//Salvando em JSON
function saveListStorage(list){
	var jsonStr = JSON.stringify(list);
	localStorage.setItem("list",jsonStr);
}

//Identifica um Registro Salvo
function initListStorage(){
	var testList = localStorage.getItem("list");
	if(testList){
		list = JSON.parse(testList);
	}
	Lista(list);
}

initListStorage();