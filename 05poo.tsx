class Produto{
    // Atributos
    private nome:string;
    private valor:number;

    // Constructor: método/função que executa quando vc instancia um objeto daquela classe.
    public constructor(nome:string, valor:number) {
        this.nome = nome;
        this.valor = valor;
    }

    // Método para exibir uma mensagem
    private mensagem() {
        console.log(`O produto ${this.nome} custa R$ ${this.valor}.`);
    }

}

// Instanciar/Criar objeto da classe Produto

const p = new Produto("iPhone 15", 7000);

console.log(p);

