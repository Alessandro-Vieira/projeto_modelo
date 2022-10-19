// Criando a Lista de Compras
var list = [];


//Gerando o Valor Total
function getTotal(list){
	var total = 0;
	for(var key in list){
		total += list[key].valor * list[key].qtd;
	}
	document.getElementById("totalValue").innerHTML = formatValor(total);
}

//Criando a Tabela no Front-End
function setList(list){
	var table = '<thead><tr><td>Descrição</td><td>Quantidade</td><td>Valor</td><td>Ação</td></tr></thead><tbody>';
	for(var key in list){
		table += '<tr><td>'+ formatDesc(list[key].desc) +'</td><td>'+ formatQtd(list[key].qtd) +'</td><td>'+ formatValor(list[key].valor) +'</td><td><button class="btn btn-default" onclick="setUpdate('+key+');">Editar</button> <button class="btn btn-default" onclick="deleteData('+key+');">Apagar</button></td></tr>';
	}
	table += '</tbody>';

	document.getElementById('listTable').innerHTML = table;
	getTotal(list);
	saveListStorage(list);
}

//Formatando o Campo Descrição
function formatDesc(desc){
	var str = desc.toLowerCase();
	str = str.charAt(0).toUpperCase() + str.slice(1);
	return str;
}

//Formatando a Quantidade
function formatQtd(qtd){
	return parseInt(qtd);
}

//Formatando o Valor
function formatValor(valor){
	var str = parseFloat(valor).toFixed(2) + "";
	str = str.replace(".",",");
	str = "R$ " + str;
	return str;
}

//Criando novo produto
function addData(){
	if(!validation()){
		return;
	}
	var desc = document.getElementById("desc").value;
	var qtd = document.getElementById("qtd").value;
	var valor = document.getElementById("valor").value;

	list.unshift({"desc":desc , "qtd":qtd , "valor":valor });
	setList(list);
	resetForm()
}

//Editando os Campos
function setUpdate(id){
	var obj = list[id];
	document.getElementById("desc").value = obj.desc;
	document.getElementById("qtd").value = obj.qtd;
	document.getElementById("valor").value = obj.valor;
	document.getElementById("btnUpdate").style.display = "inline-block";
	document.getElementById("btnAdd").style.display = "none";

	document.getElementById("inputIDUpdate").innerHTML = '<input id="idUpdate" type="hidden" value="'+id+'">';
}

//Limpa os campos do Formulário
function resetForm(){
	document.getElementById("desc").value = "";
	document.getElementById("qtd").value = "";
	document.getElementById("valor").value = "";
	document.getElementById("btnUpdate").style.display = "none";
	document.getElementById("btnAdd").style.display = "inline-block";
	
	document.getElementById("inputIDUpdate").innerHTML = "";
	document.getElementById("errors").style.display = "none";
}

//Editando os Registros
function updateData(){
	if(!validation()){
		return;
	}
	var id = document.getElementById("idUpdate").value;
	var desc = document.getElementById("desc").value;
	var qtd = document.getElementById("qtd").value;
	var valor = document.getElementById("valor").value;

	list[id] = {"desc":desc, "qtd":qtd, "valor":valor};
	resetForm();
	setList(list);
}

//Apagando os Registros
function deleteData(id){
	if(confirm("Confirma Exclusão(S/N)?")){
		if(id === list.length - 1){
			list.pop();
		}else if(id === 0){
			list.shift();
		}else{
			var arrAuxIni = list.slice(0,id);
			var arrAuxEnd = list.slice(id + 1);
			list = arrAuxIni.concat(arrAuxEnd);
		}
		setList(list);
	}
}

//Validando a Entrada de Dados
function validation(){
	var desc = document.getElementById("desc").value;
	var qtd = document.getElementById("qtd").value;
	var valor = document.getElementById("valor").value;
	var errors = "";
	document.getElementById("errors").style.display = "none";

	if(desc === ""){
		errors += '<p>Preencha o Campo Descrição</p>';
	}
	if(qtd === ""){
		errors += '<p>Preencha o Campo Quantidade</p>';
	}else if(qtd != parseInt(qtd)){
		errors += '<p>Preencha Corretamente o Campo Quantidade</p>';
	}
	if(valor === ""){
		errors += '<p>Preencha o Campo Valor</p>';
	}else if(valor != parseFloat(valor)){
		errors += '<p>Preencha Corretamente o Campo Valor</p>';
	}

	if(errors != ""){
		document.getElementById("errors").style.display = "block";
		document.getElementById("errors").innerHTML = "<h3>Erro:</h3>" + errors;
		return 0;
	}else{
		return 1;
	}
}

//Apagando o Carrinho de Compras
function deleteList(){
	if (confirm("Deseja Apagar Toda a Lista(S/N)?")){
		list = [];
		setList(list);
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
	setList(list);
}

initListStorage();