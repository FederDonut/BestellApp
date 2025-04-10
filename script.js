let dishesCounter = 1;

function renderLayOut(){
    let layoutRef =document.getElementById('content');
    layoutRef.innerHTML = htmlLayOut(myResturant);
    renderContent();
    
}

function renderContent(){
    let contentRef = document.getElementById('content-dishes');
    contentRef.innerHTML="";
    for(i=0; i<myDishes.length;i++){
        const dishes = myDishes[i];
        contentRef.innerHTML += htmlDishesOutput(i,dishes);
        
    }
    
};

function toggleOverlay(i){
    let overlayRef = document.getElementById('overlay');
    let checksum; 
    overlayRef.classList.toggle('d_none');
    if(overlayRef.classList.contains('d_none')){
        checksum = false;
        overlayRef.innerHTML="";
        dishesCounter =1;
    }else{
        checksum = true;
        overlayRef.innerHTML = htmlOverlay(i);
        renderIngredients();
        overlayFooter(i);

        
    }
    return checksum;
};

function preventBubbling(event){
    event.stopPropagation();
   
};

function renderIngredients(){
    
    let ingredientsRef = document.getElementById('ingredients');
    ingredientsRef.innerHTML="";
    for(index=0;index<myIngredients.length;index++){
        const itemsArray = myIngredients[index];
        ingredientsRef.innerHTML += htmlIngredientsOutput(itemsArray);
    }
    
};

function overlayFooter(i){
    const footer = document.getElementById('content-footer');
    footer.innerHTML += htmlOverlayContentFooter(i,dishesCounter)
     
      
}

function dishesCounterPlus(i){
    const addition = document.getElementById('counter');
    let lockBtn = document.getElementById('minusBtn');
    let dishesBtn = document.getElementById('addDishesBtn');
    dishesCounter ++;
    addition.innerText = dishesCounter;
    if(dishesCounter>1){
        lockBtn.disabled=false;
    }
    actualPricePlus=myDishes[i].price*dishesCounter;
    dishesBtn.innerText = actualPricePlus;  
}
function dishesCounterMinus(i){
    const addition = document.getElementById('counter');
    let lockBtn = document.getElementById('minusBtn');
    let dishesBtn = document.getElementById('addDishesBtn');
    let actualPriceMinus;
    // Hat noch Schwachstellen 
    if(dishesCounter<=2){
        lockBtn.disabled = true;
    }
    dishesCounter --;
    addition.innerText = dishesCounter;
    actualPriceMinus=myDishes[i].price*dishesCounter;
    dishesBtn.innerText = actualPriceMinus;  
}


