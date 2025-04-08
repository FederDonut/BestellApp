
function htmlLayOut(){
    return`
            <div class="resturant-content">
                <div class="resturantlogo"></div>
                <div class="resturant-info"></div>
                <div class="flex-dishes">
                    <div class="content-dishes" id="content-dishes"></div>
                </div>
            </div>
                <div class="Shoppingcard"></div>
    `
}

function htmlOutput(i,dishes){
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