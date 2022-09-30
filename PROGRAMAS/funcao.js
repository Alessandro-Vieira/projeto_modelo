function verifica_IMC(){
        imc=parseFloat(document.form1.peso.value)/(parseFloat(document.form1.altura.value)*parseFloat(document.form1.altura.value))
        if (imc<18.5){
                alert("Sr(a) " + document.form1.nome.value + ", você está abaixo do peso.")
        }
        else if (imc<24.9){
                alert("Sr(a) " + document.form1.nome.value + ", você está com peso Normal.")
        } 
        else if (imc<29.9){
                alert("Sr(a) " + document.form1.nome.value + ", você está com excesso de peso.")
        } 
        else if (imc<34.9){
                alert("Sr(a) " + document.form1.nome.value + ", você está com obesidade classe I.")
        } 
        else if (imc<39.9){
                alert("Sr(a) " + document.form1.nome.value + ", você está com obesidade classe II.")
        } 
        else{
                alert("Sr(a) " + document.form1.nome.value + ", você está com obesidade classe III.")
        }
}





function mascara_data (objeto){
	if(objeto.value.length == 2){
		objeto.value = objeto.value + '/';
	}
	if(objeto.value.length == 5){
		objeto.value = objeto.value + '/';
	}
}






