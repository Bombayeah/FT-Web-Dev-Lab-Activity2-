const btns = document.getElementsByClassName("plan-button");
const pricingPlan = document.getElementsByClassName("pricing-plan");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('mouseover', ()=> {
   
        btns[i].style.cursor ="pointer";
        btns[i].style.backgroundColor ="#E4B1F0";
        btns[i].style.color ="#433878";
        pricingPlan[i].style.backgroundImage = "linear-gradient(to top left, #7E60BF, #6353B1, #433878 )";
        pricingPlan[i].style.boxShadow = "20px 10px 100px #E4B1F0, -20px 10px 100px #7E60BF";
        pricingPlan[i].style.transform = "scale(1,110%)";
        pricingPlan[i].style.transistion = "scale 2s"
    
    });
   
}

for (let x = 0; x < btns.length; x++) {
btns[x].addEventListener('mouseout', ()=> {
      
    btns[x].style.cursor ="none";
    btns[x].style.backgroundImage = "none"
    pricingPlan[x].style.backgroundImage = "none";
    pricingPlan[x].style.boxShadow = "none";
    btns[x].style.backgroundColor ="rgba(255, 225, 255, 0.6)";
    btns[x].style.color ="#FFE1FF";
    pricingPlan[x].style.transform = "scale(1,1)";
});
}