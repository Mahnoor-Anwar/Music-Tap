window.addEventListener("load" , () =>{
    const sounds = document.querySelectorAll(".sound"); 
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const color = [
        "violet" ,
        "tomato",
        "#4682b4" ,
        "#2e8b57",
        "purple" ,
        "orange" ,
        '#ffa07a',

    ];
    pads.forEach((pad , index)=>{
        pad.addEventListener('click' , function(){
            sounds[index].currentTime = 1;
            sounds[index].play();

            createBubbles(index);
        });
    });

const createBubbles =(index) =>{
    const bubbles = document.createElement("div");
    visual.appendChild(bubbles);
    bubbles.style.backgroundColor = color[index];
    bubbles.style.animation = 'jump 2s ease';
    bubbles.addEventListener('animationend' , function() {
        visual.removeChild(this);
    })
}

});
    

    


   

        
   
