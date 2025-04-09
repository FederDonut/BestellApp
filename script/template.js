
function htmlLayOut(myResturant){
    return`
            <div class="resturant-content">
                <div class="resturantlogo"></div>
                <div class="resturant-info">
                <h1>${myResturant.name}</h1>
                <p>${myResturant.description}</p>
                </div>
                <div class="flex-dishes">
                    <div class="content-dishes" id="content-dishes"></div>
                </div>
            </div>
                <div class="Shoppingcard">
                    <div class="shoppingcard-container">
                    <h1>Warenkorb</h1>
                        
                        <div class="emptyShoppingcard">  
                            <img class="icons" src="/icons/shopping-cart.png" alt="shoppingcard">
                            <h1>Fülle deinen Warenkorb</h1>
                            <span class="centerPosition"><p>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p></span>
                        </div>
                    </div>

                </div>
    `
}

function htmlDishesOutput(i,dishes){
return`     
        
            <div class="dishes" id="menu${i}" onclick="toggleOverlay(${i})">
                <div class="dishes-info">
                    <h3 class="Titel">${dishes.name}</h3>
                    <p class="description">${dishes.description}</p>
                    <h3>${dishes.price}</h3>
                </div>
                <div class="img-container">
                    <button class="Plusbtn" id="Plusbtn${i}">+</button><img class="dishes-img" src="./img/${dishes.picture}" alt="dishespicture">
                </div>
            </div>
        
            
`
};
function htmlOverlay(i){
    return` 
            <div class="overlay-content-flex">
                <div class="overlay-content-render" onclick="preventBubbling(event)">
                    <div class="conten-inner-position">
                            <div class="content-header">
                                <h1>${myDishes[i].name}</h1>
                            </div>
                        <div class="separator"></div>
                        <div class="scroll-content">
                            <h2>${myDishes[i].price}</h2>
                            <h2>Deine extra Zutaten</h2>
                            <div class="ingredients" id="ingredients"></div>
                        </div>
                        <div class="separator"></div>
                        <div class="content-footer">
                            <div class="content-counter">
                                <button></button>
                                <p></p>
                                <button></button>
                            </div>
                            <div class="content-finalbtn">
                                <button></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `
}

function htmlIngredientsOutput(index,itemsArray,extraIngredients){
    return`
            <div class="test">

                <div class="category">
                    <p>${itemsArray.category}</p>
                    <div class="ingredientsItems">
                        <p>${renderIngredientsItems(itemsArray)}</p>
                    </div>
                </div>
                
                
                
            </div>
            
    `
}