let menu = document.querySelector('#menu'); // #id of the menu icon
let nbar = document.querySelector('.nbar'); // .class of the navbar


menu.onclick = () =>{ // when the menu icon is clicked
    menu.classList.toggle('bx-x'); // toggle the class "bx-x" for the i tag which will change the icon
    nbar.classList.toggle('click'); // toggle the class "click" for the .navbar which will show the navbar
};

let sections = document.querySelectorAll('section'); // select all sections
let navlinks = document.querySelectorAll('header nav a'); // select all links in the navbar

window.onscroll = () => { // when the user scrolls the page
    sections.forEach (sec => { // for each section in sections
        let top = window.scrollY; // get the vertical scroll position of the page
        let offset = sec.offsetTop - 150; // get the top offset of the section from the top of the page
        let height = sec.offsetHeight; // get the height of the section in px
        let id = sec.getAttribute('id');// get the id of the section

        if (top >= offset && top < offset + height) { // if the vertical scroll position is greater than the offset and less than the offset + height
            navlinks.forEach ( links => { // for each link in the navbar
                links.classList.remove('click'); // remove the class "click" from the link
                document.querySelector('head nav a[href*=' + id + ']').classList.add('click');// add the class "click" to the current link

            });
                
        };
    });

    let head = document.querySelector('head'); // select the header
    head.classList.toggle ('sticky', window.scrollY > 100); // toggle the class "sticky" for the header when the scroll is greater than 100px


    menu.classList.remove('bx-x'); /// remove the class "bx-x" from the menu icon
    nbar.classList.remove('click'); // remove the class "click" from the navbar
};

const typed = new Typed('.mul', { // select the class mul
    strings: [ ' Adventurer',' Entrepreneur'], // array strings
    typeSpeed: 100, // typing speed
    backSpeed: 100,
    backDelay: 100,
    loop: true // loop the strings
});


let moon = document.querySelector('#moon'); // #id of the moon icon

moon = document.getElementById('moon');
moon.onclick = function(){
    document.body.classList.toggle('dark-theme');
    moon.style.color = '#e3f3eb';
  
    if(document.body.classList.contains('dark-theme')){
        moon.classList.remove('bx-moon');
        moon.classList.add('bx-sun');
        document.querySelector('.h-img img').src = 'assets/img/upp.png'; // Change h-img source to 'upp.png'
        document.querySelector('.h-img img').style.filter = 'invert(10%)'; // Apply image filter to invert the colors
        document.querySelector('.h-img img').style.filter = 'brightness(1)'; // Apply image filter to reduce brightness
        document.querySelector('button.subnavbtn').style= ''; // Change button background color
    }
    else{
        moon.classList.remove('bx-sun');
        moon.classList.add('bx-moon');
        document.querySelector('.h-img img').src = 'assets/img/homepic (2).png'; // Change h-img source back to 'homepic (2).png'
        document.querySelector('.h-img img').style.filter = 'none'; // Remove image filter
        document.querySelector('button.subnavbtn').style= 'white'; // Change button background color
      
    }
}




