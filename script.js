let dishesCounter = 1;
let extraIngredentCost = 0;

function info(){
    alert('Button Function ist nicht in Version 1.0 enthalten. Diese kommt früstens in Version 1.1')
}
function renderLayOut(){
    let layoutRef =document.getElementById('content');
    layoutRef.innerHTML = htmlLayOut(myResturant);
    renderContent();
    responsivBtn();
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
        removeShoppinCardOnIngredients();
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
            overlayPriceing();
        }    
    }else{
        myIngredients[index].selected=false;
        if(myIngredients[index].selected == false){
            choosenIngredients.pop(extraZutat);
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
    let summary = document.getElementById('summary');
    dishesToShoppingcard();  
    emptyShoppingcard.classList.add('d_none');
    fullShoppingcard.innerHTML="";
    summary.classList.remove('d_none');
    for(id=0;id<myShoppingCard.length;id++){
        fullShoppingcard.innerHTML += htmlShoppingcardOutput(id);
        renderIngredientsToShoppingCard(id); 
        renderSummary(id);
    }
    toggleOverlay(i);
}

function renderSummary(id){
    let summary = document.getElementById('summary');
    summary.innerHTML="";
    summary.innerHTML += htmlSummaryOutput(id);
    finalPrice(id);
    responsivBtn();
}

function finalPrice(id){
    let totalPrice=0;
    for($=0;$<myShoppingCard.length;$++){
        totalPrice += Number(myShoppingCard[$].dishesTotal)
    }
    return totalPrice.toFixed(2);
}

function renderIngredientsToShoppingCard(id){
    const ingredients = myShoppingCard[id].ingredients;
    let ingInput = document.getElementById('shoppingcard-ingredients'+id);
    ingInput.innerHTML="";
    for(d=0; d<myShoppingCard[id].ingredients.length;d++){
        ingInput.innerHTML += htmlExtraIngredients(ingredients,d);
    }
}

function deleteDishes(idToClear){
    let clear = document.getElementById('order-container'+idToClear); 
    let fullShoppingcard= document.getElementById('fullShoppingcard');
    myShoppingCard.splice(idToClear,1);
    clear.classList.add('d_none');
    clear.innerHTML=""; 
    fullShoppingcard.innerHTML="";  
    for(id=0;id< myShoppingCard.length;id++){
        fullShoppingcard.innerHTML += htmlShoppingcardOutput(id);
        renderIngredientsToShoppingCard(id);
    }
    if(myShoppingCard.length===0){
        emptyShoppingcard();      
    }
    finalPrice();
    renderSummary();
}

function emptyShoppingcard(){
    let emptyCard = document.getElementById('emptyShoppingcard');
    let summary = document.getElementById('summary');
    emptyCard.classList.toggle('d_none');  
    summary.classList.add('d_none');
}

function shoppingCardMinusBtn(id){ 
    let subtotal = document.getElementById('subTotal'+id);
    let newCounter = document.getElementById('shoppingCardCount'+id);
    let counter = Number(newCounter.innerText)-1;
    let ingredientsSum =0; 
    if(counter < 1){ 
       alert('mindesbestellmenge 1')
       counter = 1;
    }
    newCounter.innerText=counter;
    myShoppingCard[id].count = counter;
    for(t=0;t<myShoppingCard[id].ingredients.length;t++){
        ingredientsSum += Number(myShoppingCard[id].ingredients[t].price)
    } 
    let finalPriceRef = (Number(myShoppingCard[id].basicPrice) + Number(ingredientsSum.toFixed(2))) * Number(counter);
    subtotal.innerText=finalPriceRef.toFixed(2);
    myShoppingCard[id].dishesTotal = finalPriceRef.toFixed(2);
    finalPrice();
    renderSummary();
}
    
function shoppingCardPlusBtn(id){
    let subtotal = document.getElementById('subTotal'+id);
    let newCounter = document.getElementById('shoppingCardCount'+id);
    let counterPlus = Number(newCounter.innerText)+1; 
    let ingredientsSum =0; 
    newCounter.innerText = counterPlus  
    myShoppingCard[id].count = counterPlus 
    for(t=0;t<myShoppingCard[id].ingredients.length;t++){
        ingredientsSum += Number(myShoppingCard[id].ingredients[t].price)
    } 
    let finalPriceRef = (Number(myShoppingCard[id].basicPrice) + Number(ingredientsSum.toFixed(2))) * Number(counterPlus);
    subtotal.innerText=finalPriceRef.toFixed(2);
    myShoppingCard[id].dishesTotal = finalPriceRef.toFixed(2);
    finalPrice();
    renderSummary();
    
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
    if(dishesCounter<=2){
        lockBtn.disabled = true;
    }
    dishesCounter --;
    subtraction.innerText = dishesCounter;
    overlayPriceing();
}

function exitBtn(){
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.add('d_none');
}

function responsivBtn(){
    let hiddenBtn = document.getElementById('showShoppingCard');
    let footer = document.getElementById('footer');
    let checksum = 1256;
    hiddenBtn.innerHTML=""
    if(window.innerWidth<=checksum){
        hiddenBtn.innerHTML= htmlResponsivBtn();
        footer.classList.add('new-footer');
        hiddenBtn.classList.add('showShoppingCard');
    }else{
        hiddenBtn.innerHTML="";
        hiddenBtn.classList.remove('showShoppingCard');
        footer.classList.remove('new-footer');
    }
}

window.addEventListener('resize',responsivBtn);

function toggleResponsivShoppingCard(){
    let contentRef = document.getElementById('resturant-content');
    let shoppingcardRef = document.getElementById('Shoppingcard');
    let vertSepRef= document.getElementById('seperator');
    let checksum = 1256;
    if(window.innerWidth<=checksum ){
        contentRef.classList.toggle('d_none');
        vertSepRef.classList.toggle('d_none');
        shoppingcardRef.classList.toggle('show-shoppingcard');
    }else{
        shoppingcardRef.classList.remove('show-shoppingcard');
        contentRef.classList.remove('d_none');
        vertSepRef.classList.remove('d_none');
    }
}

function testOrder(){
    let trash =document.getElementById('fullShoppingcard');
    myShoppingCard=[];
    trash.innerHTML="";
    if(myShoppingCard.length==0){
        emptyShoppingcard();
        renderTestOrder();
    }
}

function renderTestOrder(){
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.toggle('d_none');
    overlayRef.innerHTML = htmlTestOrderOutput();
}

function removeShoppinCardOnIngredients(){
    let checksum = 450;
    let shoppingcard = document.getElementById('showShoppingCard');
    let ingredients = document.getElementById('overlay-content-render');
    if(window.innerWidth<= checksum && ingredients){
        console.log(true);
        shoppingcard.classList.add('d_none');
    }else{
        console.log(false);
    }
}