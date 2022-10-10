//Criando a Classe Calculadora
class Calculadora{
    //Instanciar as Características
    constructor(num1,num2){
        this.num1=num1
        this.num2=num2
    }
    //Criando o Método Soma
    soma(){
        return parseInt(this.num1)+parseInt(this.num2)
    }
    subtracao(){
        return parseInt(this.num1)-parseInt(this.num2)
    }
    multiplicacao(){
        return parseInt(this.num1)*parseInt(this.num2)
    }
    divisao(){
        return parseInt(this.num1)/parseInt(this.num2)
    }
    //Criando a Requisição GET
    get resultado(){
        alert("O valor da Soma é: "+this.soma()+"\nO valor da Subtracao é: "+this.subtracao()+"\nO valor da Multiplicação é: "+this.multiplicacao()+"\nO valor da Divisão é: "+this.divisao())
    }
}
//Coleta os Dados
botao=document.querySelector("#btn")
botao.onclick = function(){
    valores=new Calculadora(document.form1.n1.value,document.form1.n2.value)
    valores.resultado
}