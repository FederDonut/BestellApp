let dishesCounter = 1;
let extraIngredentCost = 0;
let checksum; 

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
    
};

function preventBubbling(event){
    event.stopPropagation();
   
};

function renderIngredients(){
    let ingredientsRef = document.getElementById('ingredients');
    ingredientsRef.innerHTML="";
    for(index=0;index<myIngredients.length;index++){
        const itemsArray = myIngredients[index];
        ingredientsRef.innerHTML += htmlIngredientsOutput(itemsArray,index);
    }
   
};

function overlayFooter(i){
    const footer = document.getElementById('content-footer');
    footer.innerHTML += htmlOverlayContentFooter(i,dishesCounter)
     
      
}

function addExtraIngredients(index){
    let checkbox = document.getElementById('checkbox'+index);
    if(checkbox.checked){
        myIngredients[index].selected = true;
        if(myIngredients[index].selected==true){
            choosenIngredients.push(myIngredients[index].price);
            //console.table(choosenIngredients);
            overlayPriceing();
        }    
    }else{
        myIngredients[index].selected=false;
        if(myIngredients[index].selected == false){
            choosenIngredients.pop(myIngredients[index].price);
            //console.table(choosenIngredients);
            overlayPriceing();
        }
    }
       
}
function overlayPriceing(){
    let counter = document.getElementById('counter');
    let dishesPriceRef = document.getElementById('overlayPriceInfo');
    
    let Counter=0;
    let amountIng = 0;
    let actualDishesPrice;
    let dishesPrice
    
    //console.log(counter.innerText);
    for(s=0;s<choosenIngredients.length;s++){
        //console.log(choosenIngredients[s]);
        amountIng += choosenIngredients[s]; // Summe der ausgewälten zutaten
        Counter = amountIng * Number(counter.innerText);
        console.log(Counter);//Summe ausgewälter Zutaten + menge der Gerichte
        console.log(Number(dishesPriceRef.innerText));    
        //actualDishesPrice=Counter*(Number(dishesPriceRef.innerText));
        //console.log(actualDishesPrice);
    }
    
}

function dishesCounterPlus(i){
    const addition = document.getElementById('counter');
    let lockBtn = document.getElementById('minusBtn');
    //let dishesBtn = document.getElementById('addDishesBtn');
    dishesCounter ++;
    addition.innerText = dishesCounter;
    if(dishesCounter>1){
        lockBtn.disabled=false;
    }
    //actualPrice=myDishes[i].price*dishesCounter;
    //dishesBtn.innerText = actualPrice;        
    overlayPriceing();
}

function dishesCounterMinus(i){
    const subtraction = document.getElementById('counter');
    let lockBtn = document.getElementById('minusBtn');
    //let dishesBtn = document.getElementById('addDishesBtn');
    let actualPrice;
    // Hat noch Schwachstellen 
    if(dishesCounter<=2){
        lockBtn.disabled = true;
    }
    dishesCounter --;
    subtraction.innerText = dishesCounter;
    //actualPrice=myDishes[i].price*dishesCounter;
    //dishesBtn.innerText = actualPrice;
    overlayPriceing();
}



//function showSelectedIngredients(){
//    const selectedIngredients = [];
//    let checkbox = document.getElementById('checkbox'+index);
//    myIngredients.forEach((ingredient,index)=> {
//        if(checkbox && checkbox.checked){
//            selectedIngredients.push(ingredient.price);
//        }
//    });
//    console.log('Ausgewählte Zutaten sind',selectedIngredients)
//}