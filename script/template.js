
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
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
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
        
            <div class="dishes" id="menu${i}">
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
function htmlShoppingcardOutput(){
    return`
            d
    `
}