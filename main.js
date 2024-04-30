$(document).ready(function(){

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })
})

$(document).ready(function(){
    // Adiciona um evento de clique aos botões "Comprar"
    $('button[type="button"]').click(function(){
        // Obtém o nome do produto
        var productName = $(this).siblings('h3').text();
        // Exibe um alerta com uma mensagem informando que o produto foi adicionado ao carrinho
        alert(productName + " foi adicionado ao carrinho!");
    });
});