$(document).ready(function(){
    $('.lightbox').click(function(){
        $('.background, .box').animate({'opacity':'.60'}, 500, 'linear' );
        $('.box').animate({'opacity': '1.00'}, 500, 'linear');
        $('.background, .box').css('display', 'block');
    });

    $('.close').click(function(){
        $('.background, .box').animate({'opacity':'0'}, 500, 'linear', function(){
            $('.background, .box').css('display', 'none');     
        });
    }); 

    $('.background').click(function(){
        $('.background, .box').animate({'opacity':'0'}, 500, 'linear', function(){
            $('.background, .box').css('display', 'none');     
        });
    }); 
});

/*Função que executa um slide de imagens na página 'Sobre nós'*/
$(function(){
    $("#slides ul").cycle ({
        fx: 'fade',
        speed: 1500,
        timeout: 3750,
        prev: '#previous',
        next: '#next',
    });
});


