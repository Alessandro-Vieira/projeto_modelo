letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
mensagem=prompt("Escreva a Mensagem: ").toLowerCase()
chave=prompt("Informe a Chave: ")
x = parseInt(chave)
crip=[]
for(i=0 ; i<mensagem.length ; i++){
    if(mensagem[i] != ' '){
        for(j=0 ; j<letras.length ; j++){
            if (mensagem[i]==letras[j]){
                crip[i]=letras[(j+x)%letras.length]
                break
            }
        }
    }
    else{
        crip[i]=' '
    }
}
alert(crip.join(""))