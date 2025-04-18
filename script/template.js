
function htmlLayOut(myResturant){
    return`
            <div class="resturant-content">
                <div class="resturantlogo"></div>
                <div class="resturant-info">
                <h1>${myResturant.name}</h1>
                <p class="standart-font">${myResturant.description}</p>
                </div>
                <div class="flex-dishes">
                    <div class="content-dishes" id="content-dishes"></div>
                </div>
            </div>
           <div class="vertical-seperator"></div>
            <div class="Shoppingcard"> 
                <div class="shoppingcard-container">
                    <h1>Warenkorb</h1>
                    <div class="ShoppingcardStatus" id="emptyShoppingcard">
                        <div class="emptyShoppingcard">  
                            <img class="icons" src="/icons/shopping-cart.png" alt="shoppingcard">
                            <h1>Fülle deinen Warenkorb</h1>
                            <span class="centerPosition"><p>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p></span>
                        </div>
                    </div>
                    <div class="fullShoppingcard" id="fullShoppingcard"></div>
                </div>
                <div class="summary" id="summary"></div>
            </div>
            
    `
}

function htmlDishesOutput(i,dishes){
return`     
        
            <div class="dishes" id="menu${i}" onclick="toggleOverlay(${i})">
                <div class="dishes-info">
                    <h3 class="Titel">${dishes.name}</h3>
                    <p class="description">${dishes.description}</p>
                    <h3>${dishes.price.toFixed(2)} €</h3>
                </div>
                <div class="img-container">
                    <button class="Plusbtn" id="Plusbtn${i}">+</button><img class="dishes-img" src="./img/${dishes.picture}" alt="dishespicture">
                </div>
            </div>
        
            
`
}
function htmlOverlay(i){
    return` 
            <div class="overlay-content-flex">
                <div class="overlay-content-render" onclick="preventBubbling(event)">
                    <div class="conten-inner-position">
                            <div class="content-header">
                                <h1 id="dishes-name">${myDishes[i].name}</h1>
                            </div>
                        <div class="separator"></div>
                        <div class="scroll-content">
                            <h2 id="overlayPriceInfo">${myDishes[i].price.toFixed(2)}</h2>                                                                                                                ">${myDishes[i].price}</h2>
                            <h2>Deine extra Zutaten</h2>
                            <div class="ingredients" id="ingredients"></div>
                        </div>
                        <div class="separator"></div>
                        <div class="content-footer" id="content-footer"></div>
                    </div>
                </div>
            </div>
    `
}

function htmlIngredientsOutput(itemsArray,index){
    return`
            <div class="extra-ingredients">
                <label class="checkbox-container">
                    <input type="checkbox" id="checkbox${index}" onclick="addExtraIngredients(${index})" >
                    <span class="checkmark" ></span>
                </label>
                <div class="category">
                    <p>${itemsArray.name}</p>
                </div>
                <div class="ingredients-price" id="ingredients-price${index}">
                        <p>${itemsArray.price.toFixed(2)}</p>
                </div>  
            </div>
            <div class="price-with-extras" id="price-with-extras"><p></p></div>
            
    `
}
function htmlOverlayContentFooter(i,dishesCounter){
    return `
            <div class="content-info"><h3>Anzahl</h3><h3>Summe(€)</h3></div>
            <div class="contentOverlay-flex">
                <div class="content-counter">
                    <button id="minusBtn"class="counterbtn" onclick="dishesCounterMinus(${dishesCounter})">-</button>
                    <div class="counter" id="counter">
                        <span><p>${dishesCounter}</p></span>
                    </div>
                    <button class="counterbtn" onclick="dishesCounterPlus(${dishesCounter})">+</button> 
                </div>    
                <div class="content-finalbtn">
                    <button class="add-dishes-btn" id="addDishesBtn" onclick="renderShoppingCard()">${myDishes[i].price.toFixed(2)}</button>
                </div>
            </div>    
    `
}

function htmlShoppingcardOutput(id){
    return` 
            <div class="order-container" id="order-container${id}">
                <div class="choosenDishes" id="choosenDishes">
                    <div class="shoppingcard-head">
                        <h3>${myShoppingCard[id].name}</h3>
                        <h3>${myShoppingCard[id].basicPrice.toFixed(2)} €</h3>
                    </div>
                    <div class="shoppingcard-flex">
                        <div class="shoppingcardBtn">
                            <button class="counterbtn" id="shoppingCardMinusBtn${id}" onclick="shoppingCardMinusBtn(${id})">-</button>
                            <h3 id="shoppingCardCount${id}">${myShoppingCard[id].count}</h3>
                            <button class="counterbtn" id="shoppingCardPlusBtn${id}" onclick="shoppingCardPlusBtn(${id})">+</button>
                        </div>
                    </div>
                </div>
                <div class="ingredients-info">
                    <div class="shoppingcard-ingredients" id="shoppingcard-ingredients${id}"></div>
                </div>
                <div class="separator"></div>
                <div class="pay-information">
                    <button id="deleteBtn${id}" onclick="deleteDishes(${id})">entfernen</button>
                    <span><p id="subTotal${id}">${myShoppingCard[id].dishesTotal.toFixed(2)}</p>€</span>
                </div>
            </div> 
    `
}

function htmlExtraIngredients(ingredients,d){
    return`
                  
            <div class="extraIngredient-section">
                <div><span class="extraIngredient-name">${ingredients[d].name}</span></div>
                <div><span class="extraIngredient-price">${ingredients[d].price}€</span></div>
            </div>
            
    `
}

function htmlSummaryOutput(id){
    return`
            <div class="separator"></div>
                <div class="summary-info">
                <p>Gesamt</p><p id="totalPrice"></p>
            </div>
    `
}
