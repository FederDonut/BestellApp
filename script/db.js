
let myDishes = [
    {
        "name": "Pizza Magarita",
        "price": 8.00,
        "description": "Eine klassische Pizza mit Tomatensauce, Mozzarella und frischem Basilikum.",
        "picture": "pizza-2530169_1280.jpg"
    },
    {
        "name": "Poke Bowl",
        "price": 4.00,
        "description": "Eine erfrischende Schüssel mit mariniertem Fisch, Reis und verschiedenen Toppings.",
        "picture": "tuna-poke-3963936_1280.jpg"
    },
    {
        "name": "Tandori Chicken",
        "price": 14.50,
        "description": "Saftiges Hähnchen, mariniert in Joghurt und aromatischen Gewürzen, traditionell im Tandoor gegrillt.",
        "picture":"bbq-4683963_1280.jpg"
    },
    {
        "name": "Ramen",
        "price": 12.50,
        "description": "Eine reichhaltige japanische Nudelsuppe mit Brühe, Fleisch oder Fisch, Gemüse und Ei.",
        "picture":"food-715542_1280.jpg"
    },
    {
        "name": "Spaghetti Carbonara",
        "price": 9.50,
        "description": "Spaghetti mit einer cremigen Sauce aus Ei, Speck und Parmesan.",
        "picture":"pasta-3805772_1280.jpg"
    },
    {
        "name": "Kürbissuppe",
        "price": 10.50,
        "description": "Eine cremige und wärmende Suppe aus frischem Kürbis, verfeinert mit Gewürzen.",
        "picture":"pumpkin-soup-3645375_1280.jpg"
    },
    {
        "name": "Lasagne",
        "price": 12.50,
        "description": "Klassische Lasagne mit Hackfleisch, Béchamelsauce und viel Käse.",
        "picture":"food-5981242_1280.jpg"
    },
    {
        "name": "Thai Curry Chicken",
        "price": 14.50,
        "description": "Hähnchen in einer cremigen Curry-Sauce mit Kokosmilch und frischem Gemüse.",
        "picture":"curry-7249247_1280.jpg"
    },
   
];

const myResturant = {name:"SchlemmerPalast", 
    küche: "indisch, Orientalisch & italienisch", 
    description: "Unser Restaurant vereint die Aromen Indiens und des Orients mit den klassischen Genüssen Italiens. Entdecken Sie eine vielfältige Speisekarte, die von würzigen Currys über duftende Mezze bis hin zu knusprigen Pizzen und cremigen Pastagerichten reicht. Ein kulinarisches Erlebnis, das Tradition und Innovation auf einzigartige Weise verbindet.",
    adress : "abcd"
};

const myIngredients = [
    { name: "Mozzarella", price: 1.50, selected: false },
    { name: "Salami", price: 1.80, selected: false },
    { name: "Champignons", price: 1.00, selected: false },
    { name: "Paprika", price: 1.10, selected: false },
    { name: "Oliven", price: 1.00, selected: false },
    { name: "Ananas", price: 1.20, selected: false },
    { name: "Rucola (nach Backen)", price: 1.30, selected: false },
    { name: "Knoblauchöl", price: 0.80, selected: false },
    { name: "Chiliöl", price: 0.90, selected: false },
    { name: "Ei", price: 1.20, selected: false },
    { name: "Schinkenwürfel", price: 1.60, selected: false },
    { name: "Gorgonzola", price: 2.00, selected: false },
    { name: "Thunfisch", price: 1.70, selected: false },
    { name: "Mais", price: 0.70, selected: false },
    { name: "Artischockenherzen", price: 1.40, selected: false },
    { name: "Basilikum (nach Backen)", price: 0.60, selected: false },
    { name: "Jalapeños", price: 0.90, selected: false },
    { name: "Cherrytomaten", price: 1.10, selected: false },
    { name: "Pesto (nach Backen)", price: 1.50, selected: false },
    { name: "Veganes Hackfleisch", price: 2.20, selected: false }
  ];
let choosenIngredients =[];

let myShoppingCard =[
];
let checkouPrice = [];