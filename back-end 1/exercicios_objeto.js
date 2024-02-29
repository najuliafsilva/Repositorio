let apartamento = {
    quartos: "2 quartos",
    tipo: "apartamento",
    endereco: "Avenida Principal, 456 - Centro",
    andar: "7",
    casa: function () {
console.log(`${this.tipo} com ${this.quartos} localizado ${this.endereco} ${this.andar}`)
 },
};    

apartamento.casa();

let produtoEmbalado = {
    nome: "Laptop HP",
    categoria: "Eletrônicos",
    peso: "1.5",
    preco: "3500.00",
    produto: function (){
        console.log(`O ${this.nome}`)
    },

};