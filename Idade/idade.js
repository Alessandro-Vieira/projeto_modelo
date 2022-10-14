botao = document.querySelector("#btn")
botao.onclick=function(){
    idade=0
	ano = document.form1.data_nasc.value;
	data = new Date();
	ano_atual = data.getFullYear();
	mes = data.getMonth()+1;
	dia = data.getDate();
	mes_nasc = ano.slice(3,5);
	dia_nasc = ano.slice(0,2);
	ano_nasc = ano.slice(6,10);
	if (ano_nasc > ano_atual){
		alert("O Ano de Nascimento é Superior ao Ano Atual");
	}
	else{
		idade = ano_atual - ano_nasc;
		if (mes_nasc == mes){
			if(dia_nasc > dia){
				idade--;
			}
		}
		else{
			if (mes_nasc > mes){
				idade--;
			}
		}	
	}
	if (document.form1.data_nasc.value==""){
		document.form1.idade.value = "";
	}
	else{
		document.form1.idade.value = idade;
	}
}

datanum = document.querySelector("#dataid")
datanum.onkeydown = function(e){
    tecla = (window.event)?event.keyCode:e.which;
    if ((tecla > 47 && tecla < 58)){
        return true;
    }
    else{
        if ((tecla > 95 && tecla < 106)){
            return true;
        }
        else{
            if (tecla == 8 || tecla == 46){
                return true;
            }
            else{
                return false;	
            }
        }	
    }
}

datamasc = document.querySelector("#dataid")
datamasc.onkeypress = function(e){
    v=e.target.value.replace(/\D/g,"");
    v=v.replace(/(\d{2})(\d)/,"$1/$2") 
    v=v.replace(/(\d{2})(\d)/,"$1/$2") 
    e.target.value = v;
}