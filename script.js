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