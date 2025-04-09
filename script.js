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
    }else{
        checksum = true;
        overlayRef.innerHTML = htmlOverlay(i);
        renderIngredients();
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
        //console.log(itemsArray.category);
        //console.log(innerItems);
        ingredientsRef.innerHTML+=htmlIngredientsOutput(index,itemsArray);
        
    }
    
};
function renderIngredientsItems(itemsArray){
    const innerItems = itemsArray.items;
    for(j=0; j<innerItems.length;j++){
        const extraIngredients = innerItems[j];
        console.log(extraIngredients.name);
        
    };
}