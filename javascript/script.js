

// hamburger menu voor het openen en sluiten van de menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenuButton = document.getElementById('close-menu');
    const hammenu = document.querySelector('.ham-menu');

    menuToggle.addEventListener('click', function() {
        hammenu.classList.add('active'); 
    });

    closeMenuButton.addEventListener('click', function() {
        hammenu.classList.remove('active'); 
    });
});




/* Pauze/play knop
Voor deze functionaliteit heb ik de html video element een id gegeven en ook de svg met een anker element heb ik een id gegeven.
Deze fungeren als de knop. Doormiddel van de id’s kan ik deze html elementen benaderen en manipuleren in javascript. 
Voor de knop heb ik in javascript een “click” eventlistener gedefinieerd die moet waarnemen als er op de knop wordt gedrukt. 

Vervolgens heb ik een if-statement gemaakt met daarin ingebouwde javascript methods. Video.paused geeft een boolean aan.
Dit geeft aan of de video gepauseerd is. Ja of nee.

Is de video gepauseerd: ja
dan gaat het knopje bij klikken video op play zetten.
Is de video gepauseerd: nee
Dan gaat het rechtstreeks naar de else en veranderd het de knop naar een pauze knop.
*/

//  testen van video contols
const video = document.getElementById('video-1');
const playPauseButton = document.getElementById('pauze-play-button');

playPauseButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});