let itemUm;

function selecionaItemUm(num) {
    
    
    const seletorIconeMostrar  = ".frango " + num + " #icone ";
    const iconeMostrar = document.querySelector(seletorIconeMostrar);
    console.log(iconeMostrar);

    const outroNum = document.querySelector(num);
    const selecionaBotao = document.querySelector(".frango .selecionado ");
   
    
    if(selecionaBotao !== null){ 
        selecionaBotao.classList.remove("selecionado");
        
    }
    outroNum.classList.add("selecionado");
    
    
    
    if(document.querySelector(".frango .icone")  !== null)
    {
        document.querySelector(" .frango" + " .preco" + " .icone").classList.add("esconde");
        document.querySelector(" .frango" + " .preco" + " .icone").classList.remove("icone");
    } 

        iconeMostrar.classList.add("icone");
        iconeMostrar.classList.remove("esconde");
    
    
    itemUm = outroNum.innerHTML;
    fecharPedido();
}

let itemDois;
function selecionaItemDois(num) {
    
    const seletorIconeMostrar  = ".bebida " + num + " #icone ";
    const iconeMostrar = document.querySelector(seletorIconeMostrar);
    console.log(iconeMostrar);

    const outroNum = document.querySelector(num);
    const selecionaBotao = document.querySelector(".bebida .selecionado ");
   
    
    if(selecionaBotao !== null){ 
        selecionaBotao.classList.remove("selecionado");
        
    }
    outroNum.classList.add("selecionado");
    
    
    
    if(document.querySelector(".bebida .icone")  !== null)
    {
        document.querySelector(" .bebida" + " .preco" + " .icone").classList.add("esconde");
        document.querySelector(" .bebida" + " .preco" + " .icone").classList.remove("icone");
    } 

        iconeMostrar.classList.add("icone");
        iconeMostrar.classList.remove("esconde");
    
    
    itemDois = outroNum.innerHTML;
    fecharPedido();
}

let itemTres;
function selecionaItemTres(num) {
    
    const seletorIconeMostrar  = ".sobremesa " + num + " #icone ";
    const iconeMostrar = document.querySelector(seletorIconeMostrar);
    console.log(iconeMostrar);

    const outroNum = document.querySelector(num);
    const selecionaBotao = document.querySelector(".sobremesa .selecionado ");
   
    
    if(selecionaBotao !== null){ 
        selecionaBotao.classList.remove("selecionado");
        
    }
    outroNum.classList.add("selecionado");
    
    
    
    if(document.querySelector(".sobremesa .icone")  !== null)
    {
        document.querySelector(" .sobremesa" + " .preco" + " .icone").classList.add("esconde");
        document.querySelector(" .sobremesa" + " .preco" + " .icone").classList.remove("icone");
    } 

        iconeMostrar.classList.add("icone");
        iconeMostrar.classList.remove("esconde");
    
    
    
    itemTres = outroNum.innerHTML;
    
    fecharPedido();
}

function fecharPedido(){
    
    if(itemUm !== undefined && itemDois !== undefined && itemTres !== undefined){
        const barraPedido = document.querySelector(".botao-pedido");
        barraPedido.classList.add("pedido-pronto");
        const texto = document.querySelector(".botao-pedido a");
        texto.innerHTML='Fechar Pedido';
    }
    

}
function habilitarBotao(){


    if(document.querySelector(".botao-pedido").classList.contains("pedido-pronto")){
        abrirWpp();
    }
    
}

function abrirWpp(){

    let pratoApp = document.querySelector('.opcao1 .nome-prato h4').innerText;

    let bebidaApp = document.querySelector('.opcao4 .nome-prato h4').innerText;

    let pudimApp = document.querySelector('.opcao7 .nome-prato h4').innerText;

    let precoPratoApp = document.querySelector('.opcao1 .preco p').innerText;

    let precobebidaApp = document.querySelector('.opcao4 .preco p').innerText;

    let precopudimApp = document.querySelector('.opcao7 .preco p').innerText;


    const total = Number(precoPratoApp) + Number(precobebidaApp) + Number(precopudimApp);  

    const mensagem = `Olá, gostaria de fazer o pedido: \n
    - Prato: ${pratoApp} \n
    - Bebida: ${bebidaApp} \n
    - Sobremesa: ${pudimApp} \n
    Total: R$${total.toFixed(2).toString().replace(".", ",")}`;

    const encode = encodeURIComponent(mensagem);

    window.open(`https://wa.me/998252663?text=${encode}`);

}
