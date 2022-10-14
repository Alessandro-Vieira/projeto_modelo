botao = document.querySelector("#btn")
botao.onclick=function(){
    letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    opcao1 = document.querySelector("#flexRadioDefault1")
    opcao2 = document.querySelector("#flexRadioDefault2")
    mensagem = (document.form1.msg.value).toLowerCase()
    chave = document.form1.chave.value
    x = parseInt(chave);
    crip = [];
    // Criptografia de Cesar
    if (opcao1.checked==true && document.form1.tipo.value==2){
        for (i = 0; i < mensagem.length; i++){
            if(mensagem[i] != ' '){
                for (j = 0; j < letras.length; j++){
                    if (mensagem[i] == letras[j]){
                        crip[i] = letras[(j + x) % letras.length];
                        break;
                    }
                }
            }
            else{
                crip[i] = ' ';
            }
        }
        document.form1.result.value=crip.join("")
    }
    // Descriptografia de Cesar
    else if(opcao2.checked==true && document.form1.tipo.value==2){
        for (i = 0; i < mensagem.length; i++){
            if(mensagem[i] != ' '){
                for (j = 0; j < letras.length; j++){
                    if (mensagem[i] == letras[j]){
                        crip[i] = letras[(j - x) % letras.length];
                        break;
                    }
                }
            }
            else{
                crip[i] = ' ';
            }
        }
        document.form1.result.value=crip.join("")
    }
    // Criptografia Base 64
    else if (opcao1.checked==true && document.form1.tipo.value==1){
        document.form1.result.value = btoa(document.form1.msg.value)
    }
    // Descriptografia Base 64
    else if (opcao2.checked==true && document.form1.tipo.value==1){
        document.form1.result.value = atob(document.form1.msg.value)
    }
}