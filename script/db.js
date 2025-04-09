
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
        "description": "",
        "picture": "tuna-poke-3963936_1280.jpg"
    },
    {
        "name": "Tandori Chicken",
        "price": 14.50,
        "description": ".",
        "picture":"bbq-4683963_1280.jpg"
    },
    {
        "name": "Ramen",
        "price": 12.50,
        "description": "",
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
        "description": "",
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
    {
      category: "Käse",
      items: [
        { name: "Mozzarella", price: 1.00 },
        { name: "Geriebener Käse (Mischung)", price: 0.80 },
        { name: "Gorgonzola", price: 1.50 },
        { name: "Feta", price: 1.20 },
        { name: "Parmesan", price: 1.30 },
        { name: "Ricotta", price: 0.90 },
        { name: "Cheddar", price: 1.10 },
        { name: "Burrata (nach dem Backen)", price: 2.00 },
        { name: "Veganer Käse", price: 1.80 }
      ]
    },
    {
      category: "Fleisch & Fisch",
      items: [
        { name: "Salami", price: 1.30 },
        { name: "Peperoni-Salami", price: 1.40 },
        { name: "Schinken", price: 1.20 },
        { name: "Kochschinken", price: 1.10 },
        { name: "Hähnchenbruststreifen", price: 1.60 },
        { name: "Rinderhackfleisch", price: 1.70 },
        { name: "Thunfisch", price: 1.50 },
        { name: "Sardellen", price: 1.00 },
        { name: "Meeresfrüchte-Mix", price: 2.00 },
        { name: "Speckwürfel", price: 1.40 },
        { name: "Pancetta", price: 1.80 },
        { name: "Dönerfleisch", price: 1.60 }
      ]
    },
    {
      category: "Gemüse",
      items: [
        { name: "Champignons", price: 0.70 },
        { name: "Frische Tomaten", price: 0.60 },
        { name: "Zwiebeln", price: 0.50 },
        { name: "Paprika (rot, grün, gelb)", price: 0.80 },
        { name: "Oliven (schwarz, grün)", price: 0.70 },
        { name: "Mais", price: 0.60 },
        { name: "Ananas", price: 0.90 },
        { name: "Artischockenherzen", price: 1.10 },
        { name: "Brokkoli", price: 0.90 },
        { name: "Spinat", price: 0.70 },
        { name: "Rucola (nach dem Backen)", price: 1.00 },
        { name: "Kirschtomaten", price: 0.80 },
        { name: "Peperoni (mild, scharf)", price: 0.60 },
        { name: "Knoblauch (frisch, geröstet)", price: 0.50 },
        { name: "Auberginen (gegrillt)", price: 0.90 },
        { name: "Zucchini (gegrillt)", price: 0.80 },
        { name: "Karotten (gegrillt)", price: 0.70 }
      ]
    },
    {
      category: "Saucen & Öle (oft zusätzlich)",
      items: [
        { name: "Knoblauchöl", price: 0.60 },
        { name: "Chiliöl", price: 0.70 },
        { name: "Trüffelöl (nach dem Backen)", price: 2.00 },
        { name: "BBQ-Sauce", price: 0.80 },
        { name: "Hollandaise-Sauce", price: 1.20 },
        { name: "Pesto (nach dem Backen)", price: 1.50 }
      ]
    },
    {
      category: "Kräuter & Gewürze (oft nach dem Backen)",
      items: [
        { name: "Basilikum (frisch)", price: 0.70 },
        { name: "Oregano (frisch, getrocknet)", price: 0.50 },
        { name: "Rosmarin (frisch)", price: 0.60 },
        { name: "Thymian (frisch)", price: 0.60 },
        { name: "Petersilie (frisch)", price: 0.50 },
        { name: "Chiliflocken", price: 0.50 }
      ]
    },
    {
      category: "Extras",
      items: [
        { name: "Ei", price: 0.90 },
        { name: "Kapern", price: 0.70 },
        { name: "Parmesanraspeln (nach dem Backen)", price: 1.00 }
      ]
    }
  ];

let myShoppingCard =[
];