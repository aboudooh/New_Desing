// Check If there Is Storage Color Option
let mainColor = localStorage.getItem("color_option");
console.log(mainColor);

if(mainColor !== null){

    // console.log(`local storage is not Empty `)
    document.documentElement.style.setProperty('--main-color',localStorage.getItem("color_option"))
}


// Background Option 
    let backgroundOption = true;

// Variable To Control The Interval 
    let bakgroundInterval ;




// Toggle Spin Class one Icon
    document.querySelector(".Toggle-settings .cog").onclick = function (){

    // Toggle Class Fa-Spin For Rotation
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");

};


// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop on all list items
colorsLi.forEach(li =>{

    li.addEventListener("click",(e) =>{
        // Click On Every List Items
        console.log(e.target.dataset.color);

        // Set Color on Root
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
        // Set Color In LocalStorage
        localStorage.setItem("color_option",e.target.dataset.color);
        classActive(e)
    });

});
// Switch Background-Option
const randomBackEl = document.querySelectorAll(".Random-background span");

// Loop on all Spans
randomBackEl.forEach(span =>{
    
    // Click On Every List Span
    span.addEventListener("click",(e) =>{


        classActive(e);

        if(e.target.dataset.background === 'yes'){

            backgroundOption = true ;
            randomImage();

        }else{
            backgroundOption = false ;
            clearInterval(bakgroundInterval);
        }
    });

});
// Seclect LandingPage Element
let LandingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let allIamges = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"] ;


// Function Background Image
function randomImage (){

    if(backgroundOption === true){

        bakgroundInterval = setInterval(() => {

            // Get Random Number 
            let randomNumber = Math.floor(Math.random()* allIamges.length);
        
            // Change Background Iamge Url 
            LandingPage.style.backgroundImage = 'url("images/' + allIamges[randomNumber] + '")'; 
        },7000);
        
    }
}


// Select skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function(){

    // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

    // Outer Height
    let skillOuterHeight = ourSkills.offsetHeight;

    // Window Hieght 

    let windowHeight = this.innerHeight;

    // Window ScrollTop 

    let windowScrollTop = this.pageYOffset;
    console.log(skillsOffsetTop + skillOuterHeight - windowHeight)

        if(windowScrollTop >= (skillsOffsetTop + skillOuterHeight - windowHeight)){
            let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
            allSkills.forEach(s =>{
                s.style.width = `${s.dataset.progress}`;
            });
        }

    // this.console.log(windowHeight)

}

// Creat Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach(img =>{

    img.addEventListener('click',(e)=>{

        // Creat Overlay Element 
        let overlay = document.createElement("div");
        overlay.className = "Popup-overlay";
        document.body.appendChild(overlay);
        // Creat Popup
        let popupBox = document.createElement("div");
        popupBox.className = "poup-box";
        // Creat The image
        if(img.alt !== null){

            let imageHeding = document.createElement("h3");
            let text = document.createTextNode(img.alt);
            imageHeding.appendChild(text);
            popupBox.appendChild(imageHeding);

        }

        let popupImage = document.createElement("img");
        popupImage.src = img.src;
        // add Image To popup Box
        popupBox.appendChild(popupImage);
        document.body.appendChild(popupBox);
        
        
        // Creat Close Span
        let close = document.createElement("span");
        let closeText = document.createTextNode("X")

        close.appendChild(closeText);
        close.className = "Close-button" ;
        popupBox.appendChild(close);
    })

});

// Close popup
document.addEventListener('click',function(e){

    if(e.target.className == 'Close-button'){
        e.target.parentNode.remove();
        document.querySelector(".Popup-overlay").remove();
    }

})

// Select all Bullets
    const allBull = document.querySelectorAll(".nav-bullets .bullet");

    allBull.forEach(bullet =>{
        bullet.addEventListener("click",(e) => {

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: 'smooth'
            })

        })
    })

// Active Class
function classActive(ev){

       // Remove Active Class For Childern
        ev.target.parentElement.querySelectorAll(".active").forEach(element =>{
        element.classList.remove("active");
        });
        // Add Active Class On Target
        ev.target.classList.add("active");

}

let bulltesSpan = document.querySelectorAll(".bullet-option span");
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletlocalItem = localStorage.getItem("bulets_option");
if(bulletlocalItem !== null){

}
bulltesSpan.forEach(span =>{
    span.addEventListener("click",(e)=>{
        if(span.dataset.display === "yes"){
            bulletsContainer.style.display = 'block';
            localStorage.setItem("bullets_option", 'block')
        }else{
            bulletsContainer.style.display = 'none';
            localStorage.setItem("bullets_option", 'none')
        }

        classActive(e)
    })
})

// Reset Button

document.querySelector(".settings-box .reset-option").onclick = function (){

    localStorage.removeItem("color_option");
    localStorage.removeItem("bullets_option");
    window.location.reload();
}

// Toggle Menu
let btnToggle = document.querySelector(".toggle-menu");
let theLinks  = document.querySelector(".links");

    btnToggle.onclick = function(e){
        e.stopPropagation();
        this.classList.toggle("menu-active");
        theLinks.classList.toggle("open")

    };

document.addEventListener("click",(e)=>{

    if(e.target !== btnToggle && e.target !== theLinks){
        if(theLinks.classList.contains("open")){
            btnToggle.classList.toggle("menu-active");
            theLinks.classList.toggle("open")
        }
    }

})
theLinks.onclick = function (e){
    e.stopPropagation();
}