(function (Drupal, $){
    "use strict";
    
    const $burger = document.querySelector('.burger');
    const menu = document.querySelector('#block-iotheme-main-menu');
    const $menu = document.querySelector('.block.block-menu.navigation');
    const hero = document.querySelector('#block-hero');
    const hero_banner = document.querySelector('.container_hero_banner'); 
    const menuAnchor = document.querySelectorAll('.menu-item a');
    
    const tl = new TimelineMax();

    tl.fromTo(
        hero,
        1,
        { opacity: 0},
        { opacity: 1},
    ).fromTo(
        hero_banner,
        1.2,
        { opacity: 0, x:50},
        { opacity: 1, x:0},
        "-=0.5"
    );
        
    function clickMenu(e){
        $burger.classList.toggle('toggle');
        $menu.classList.toggle('open');
        tl.fromTo(
            $menu,
            1.2,
            { opacity: 0, x:50},
            { opacity: 1, x:0},
            "-=0.5"
        );
    }
    /* Burger behavior */
    $burger.addEventListener('click', clickMenu);

    /* Appearing text */
    function scrollAppearing(){
        // Get element
        var block1 = document.querySelector('.tool-container');
        console.log(block1);
        // Get his current position
        var block1Position = block1.getBoundingClientRect().top;
        // Get current top windows position
        var screenPosition = window.innerHeight;
        // Compare them
        if(block1Position < screenPosition / 1.5){
            block1.classList.add('appear');
        }
    }
    // Add event Listener to scroll in the front page
    window.addEventListener('scroll', scrollAppearing);

    function smoothMove(e){
        //console.log('this: ' + this.hash);
        if(this.hash !== ""){
            e.preventDefault();
            
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    }
    //Smooth even to menu items
    menuAnchor.forEach(anchor => anchor.addEventListener('click', smoothMove));
    
}) (Drupal, jQuery);