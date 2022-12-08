let loader = document.querySelector('.loader');

window.addEventListener('load', ()=>{
    loader.style.opacity = '0';
    loader.style.zIndex = '0';

    // declaration de variables
    const menuBtn = document.querySelector('.menuBtn');
    const menuContent  = document.querySelector('.menuContent');
    const couvertureMenu  = document.querySelector('.couvertureMenu');
    const btnFerm  = document.querySelector('.btnFerm');
    const nbrCompteur  = document.querySelectorAll('.nbrCompteur');
    const compteurs  = document.querySelector('.compteurs');
    const goTop  = document.querySelector('.goTop');

    // GESTION MENU
    menuBtn.addEventListener('click', ()=>{
        menuContent.style.transform = 'translateX(0%)';
        couvertureMenu.style.display = 'block';
        couvertureMenu.addEventListener('click', ()=>{
           menuContent.style.transform = 'translateX(100%)';
        }) 
    });
    
    btnFerm.addEventListener('click', ()=>{
        menuContent.style.transform = 'translateX(100%)';  
        
    });

    // aNIMATIONS AU Scroll
    window.addEventListener('scroll', ()=>{
        const {scrollTop, clientHeight} = document.documentElement;
     
         if( scrollTop > 300) {
             menuBtn.style.background = 'BLACK';
         }else{
             menuBtn.style.background = 'transparent';
         }
     
         if( scrollTop > 500) {
             goTop.style.opacity = '1';
         }else{
             goTop.style.opacity = '0';
         }
     
         nbrs= [127, 200, 109, 102];
         if (scrollTop >= compteurs.scrollHeight - 50) {
             for (let i = 0; i < 4; i++) {
                 if (nbrCompteur[i].textContent < 102) {
                     let j = 0;
                     setInterval(() => {
                         if (j <= nbrs[i]) {
                             nbrCompteur[i].textContent = j;
                             j+=2;  
                         }
                     }, 5);
                 }
                
             }
         }
     
         let scrollAnims = document.querySelectorAll('.scrollAnim');
     
         for (let i = 0; i < scrollAnims.length; i++) {
             if (scrollAnims[i].getBoundingClientRect().top-150< window.innerHeight) {
                 scrollAnims[i].classList.add('scrollActive');
             }
     
             
         }
            
     
     })


     // DIAPORAMA

    let partners = document.querySelectorAll('.partnerI');
    let partnersBtns = document.querySelectorAll('.partnerBtns');
    // let profilFlex = document.querySelectorAll('.profilsFlex');
    let profils = document.querySelectorAll('.profil');

    let  profilsButtons= document.querySelectorAll('.profilsButtons');

    function diaporama(noms, boutons, nbrBtn, nbrElt, largueur) {
        let w = -largueur * noms[0].clientWidth;

        for (let i = 0; i < nbrBtn; i++){
            boutons[i].addEventListener('click', ()=>{
                w = w*i;
                for (let j = 0; j < nbrElt; j++) {
                noms[j].style.transform= 'translateX(' + w +'px)';
                if (j<nbrBtn) {
                    boutons[j].style.background = "gray";
                    boutons[i].style.background = "#39B54A"
                }
                }
                if ( i==4) {
                    i = 1;
                }
            w = -largueur * noms[0].clientWidth ;
            });
        }
    }

    let widthRelatif = 1.15;
    if (window.innerWidth > 500){
        widthRelatif = 1;
    }
    diaporama(partners, partnersBtns, 4, 8, 2);
    diaporama(profils, profilsButtons, 3, 3, widthRelatif);

})






