let dishesCounter = 1;
let extraIngredentCost = 0;
let cardBasicPrice; //function simpleMath

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
        overlayRef.innerHTML="";
        dishesCounter =1;
    }else{
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
    footer.innerHTML += htmlOverlayContentFooter(i,dishesCounter); 
}

function addExtraIngredients(index){
    let checkbox = document.getElementById('checkbox'+index);
    let extraZutat = {name: myIngredients[index].name, price: myIngredients[index].price}
    if(checkbox.checked){
        myIngredients[index].selected = true;
        if(myIngredients[index].selected==true){
            choosenIngredients.push(extraZutat);
            //console.table(choosenIngredients);
            overlayPriceing();
        }    
    }else{
        myIngredients[index].selected=false;
        if(myIngredients[index].selected == false){
            choosenIngredients.pop(extraZutat);
            //console.table(choosenIngredients);
            overlayPriceing();
        }
    }
}

function overlayPriceing(){
    let counter = document.getElementById('counter');
    let dishesPriceRef = document.getElementById('overlayPriceInfo');
    let dishesBtn = document.getElementById('addDishesBtn');
    let menu = dishesPriceRef.innerText
    let Counter=0;
    let amountIng = 0;
    for(s=0;s<choosenIngredients.length;s++){
        amountIng += choosenIngredients[s].price; // Summe der ausgewälten zutaten
        Counter = amountIng * Number(counter.innerText);    
    }
    let dishesPrice=menu*Number(counter.innerText);
    let actualDishesPrice = dishesPrice+Counter;
    dishesBtn.innerText = actualDishesPrice.toFixed(2);   
}

function dishesToShoppingcard(){
    // Alle notwendigen Daten in einem Order-Menü aufbereitet. 
    let dishesNameRef = document.getElementById('dishes-name');
    let dishesPriceRef = document.getElementById('overlayPriceInfo');
    let counter = document.getElementById('counter');
    let orderBtn = document.getElementById('addDishesBtn');
    let order = {name: dishesNameRef.innerText, basicPrice: Number(dishesPriceRef.innerText), count: Number(counter.innerText), ingredients: choosenIngredients, dishesTotal: Number(orderBtn.innerText)};
    myShoppingCard.push(order);
    choosenIngredients =[];   
}

function renderShoppingCard(){
    let emptyShoppingcard = document.getElementById('emptyShoppingcard');
    let fullShoppingcard = document.getElementById('fullShoppingcard');
    dishesToShoppingcard();
    emptyShoppingcard.classList.add('d_none');
    fullShoppingcard.innerHTML="";
    for(id=0;id<myShoppingCard.length;id++){
        fullShoppingcard.innerHTML += htmlShoppingcardOutput(id);
        renderIngredientsToShoppingCard(id);
        simpleMath(id);
        
    }
    toggleOverlay(i);
    
}


function renderIngredientsToShoppingCard(id){
    const ingredients = myShoppingCard[id].ingredients;
    let ingInput = document.getElementById('shoppingcard-ingredients'+id);
    ingInput.innerHTML="";
    for(d=0; d<myShoppingCard[id].ingredients.length;d++){
        ingInput.innerHTML += htmlExtraIngredients(ingredients,d);
    }
}

function deleteDishes(id){
    let clear = document.getElementById('order-container'+id);
    let fullShoppingcard= document.getElementById('fullShoppingcard');
    let emptyCard = document.getElementById('emptyShoppingcard');
    myShoppingCard.splice(clear,1);
    clear.classList.add('d_none');
    clear.innerHTML="";
    if(myShoppingCard.length==0){
        fullShoppingcard.innerHTML="";
        emptyCard.classList.toggle('d_none');    
    }
}   

function simpleMath(id){
    let number1 = myShoppingCard[id].count;
    let number2 =myShoppingCard[id].dishesTotal;
    cardBasicPrice =number2/number1;
    
}

function shoppingCardMinusBtn(id){ 
    let subtotal = document.getElementById('subTotal'+id);
    let newCounter = document.getElementById('shoppingCardCount'+id);
    let counter = Number(newCounter.innerText)-1;
    if(Number(newCounter.innerText<=1)){
       alert('Fehler Minsestbestellmenge ist 1');
       counter ++;
    }
    newCounter.innerText=counter;
    myShoppingCard[id].count = counter;
    let dishesPrice = cardBasicPrice*counter;
    myShoppingCard[id].dishesTotal = dishesPrice;
    subtotal.innerText=dishesPrice.toFixed(2);
}

function shoppingCardPlusBtn(id){
    let subtotal = document.getElementById('subTotal'+id);
    let newCounter = document.getElementById('shoppingCardCount'+id);
    let counter = Number(newCounter.innerText)+1;
    newCounter.innerText = counter
    myShoppingCard[id].count = counter
    let dishesPrice = cardBasicPrice*counter;
    myShoppingCard[id].dishesTotal = dishesPrice;
    subtotal.innerText=dishesPrice.toFixed(2);
}


function dishesCounterPlus(){
    const addition = document.getElementById('counter');
    let lockBtn = document.getElementById('minusBtn');
    dishesCounter ++;
    addition.innerText = dishesCounter;
    if(dishesCounter>1){
        lockBtn.disabled=false;
    }      
    overlayPriceing();
}

function dishesCounterMinus(){
    const subtraction = document.getElementById('counter');
    let lockBtn = document.getElementById('minusBtn');
    // Hat noch Schwachstellen 
    if(dishesCounter<=2){
        lockBtn.disabled = true;
    }
    dishesCounter --;
    subtraction.innerText = dishesCounter;
    overlayPriceing();
}



