// Criando a Lista de Compras
var list = [];

//Criando a Tabela no Front-End
function Lista(list){
	var table = '<thead><tr><td>Nome</td><td>Senha</td><td>E-mail</td><td>Status</td><td>Ação</td></tr></thead><tbody>';
	for(var key in list){
		table += '<tr><td>'+ FormatarNome(list[key].nome) +'</td><td>'+ FormatarSenha(list[key].senha) +'</td><td>'+ FormatarEmail(list[key].email) +'</td><td>'+ FormatarStatus(list[key].status) +'</td><td><button class="btn btn-default" onclick="ApagarRegistro('+key+');">Apagar</button></td></tr>';
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

//Formatando o Campo E-mail
function FormatarEmail(email){
	var s = email.toLowerCase();
	return s;
}

//Formatando o Campo Status
function FormatarStatus(status){
	var st = status.toLowerCase();
	st = st.charAt(0).toUpperCase() + st.slice(1);
	return st;
}

//Criando novo produto
function Cadastrar(){
    if (document.getElementById("senha").value != document.getElementById("c_senha").value){
        alert("As Senhas não Conferem")
    }
    else{
        var nome = document.getElementById("nome").value;
        var senha = document.getElementById("senha").value;
        var email = document.getElementById("email").value;
		var status = document.getElementById("status").value;
        list.unshift({"nome":nome , "senha":senha , "email":email , "status":status });
        Lista(list);
        LimparForm()
    }
}

//Limpa os campos do Formulário
function LimparForm(){
	document.getElementById("nome").value = "";
	document.getElementById("senha").value = "";
    document.getElementById("c_senha").value = "";
	document.getElementById("email").value = "";
	document.getElementById("status").value = "";
}

//Apagando os Registros
function ApagarRegistro(id){
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



function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
};