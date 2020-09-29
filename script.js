class Item{
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    adicionarItem(adicionarEstoque){
        this.estoque += adicionarEstoque;
    }

    removerItem(removerEstoque){
        this.estoque-= removerEstoque;
    }

    verItem(){
        document.write('Item : ' + this.nome + '<br>preço: ' + this.preco + '<br>Quantidade no estoque: ' + this.estoque + '<br>----------------<br>');
    }


}

Item.prototype.estoque = 0;
let tv = new Item('TV', 899.90);
tv.adicionarItem(15);


let cama = new Item('cama', 2250.90);
cama.adicionarItem(25);


let geladeira = new Item('geladeira', 3999.90);
geladeira.adicionarItem(11);



//CLASSE DO DOS ITENS DE PEDIDO

class ItemPedido{
    constructor(item, quantidade) {
        this.item = item;
        this.quantidade = quantidade;
    }
}

let itemPedido = new ItemPedido(tv, 3);

let itemPedido2 = new ItemPedido(cama, 2);

let itemPedido3 = new ItemPedido(geladeira, 6);

//CLASSE DE ITEM DE PEDIDOS DO CARRINHO E-COMMERCE


class SacolaDeCompras{
    constructor(itemPedido) {
        this.adicionarItemNaSacola(itemPedido);
    }
    adicionarItemNaSacola(itemPedido){
        this.sacolaDeItens.push(itemPedido);
    }
    subtotal(){
        let somarItens = 0;
        for(let i=0; i<this.sacolaDeItens.length; i++){
            somarItens += this.sacolaDeItens[i].item.preco * this.sacolaDeItens[i].quantidade;
        }
        this.total += somarItens;
    }

    finalizarPedido(){
        document.write('TOTAL DO PEDIDO<BR>')

        for(let i=0; i<this.sacolaDeItens.length; i++) {
            document.write('ITEM ' +  (i + 1) + '<BR>' +
                'NOME: ' + this.sacolaDeItens[i].item.nome + '<br>' +
                'PREÇO: ' + this.sacolaDeItens[i].item.preco + '<br>' +
                'QUANTIDADE: ' + this.sacolaDeItens[i].quantidade + '<br>' + '<hr><br>');

        }
                document.write('TOTAL: ' + this.total.toFixed(2));

    }

}
SacolaDeCompras.prototype.total = 0;

SacolaDeCompras.prototype.sacolaDeItens = [];


let sacolaDeCompras = new SacolaDeCompras(itemPedido);

sacolaDeCompras.adicionarItemNaSacola(itemPedido2);
sacolaDeCompras.adicionarItemNaSacola(itemPedido3);

sacolaDeCompras.subtotal();

sacolaDeCompras.finalizarPedido();

































