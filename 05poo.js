var Produto = /** @class */ (function () {
    // Constructor: método/função que executa quando vc instancia um objeto daquela classe.
    function Produto(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
    // Método para exibir uma mensagem
    Produto.prototype.mensagem = function () {
        console.log("O produto ".concat(this.nome, " custa R$ ").concat(this.valor, "."));
    };
    return Produto;
}());
// Instanciar/Criar objeto da classe Produto
var p = new Produto("iPhone 15", 7000);
console.log(p);
