import { makeDiv } from './domUtils.js';

const loadMenuPage = () => {
    const content = document.getElementById('content');
    content.className = "menu-container";
    content.innerHTML = "";
    
    const menuItems = [
        // STARTERS
        { name: "Devilled Kidneys", price: "£9.50", description: "Butter, paprika on toast", category: "starters" },
        { name: "Proper Pint of Prawns", price: "£12", description: "Marie Rose sauce", category: "starters" },
        { name: "Salt and Chilli Squid", price: "£10", description: "Garlic mayonnaise", category: "starters" },
        { name: "Stonewall Game Terrine", price: "£9.50", description: "Bacon jam, toast", category: "starters" },

        // MAINS
        { name: "Larkin’s Battered Cod", price: "£17.50", description: "Chips, samphire, tartar sauce", category: "main" },
        { name: "Pie of the Day", price: "£19", description: "Served with mash and gravy", category: "main" },
        { name: "Game Changer Burger", price: "£18", description: "Venison, bacon, garlic mayonnaise, spinach, blue cheese, grilled jalapeños", category: "main" },
        { name: "Bacon Double Cheese Burger", price: "£19", description: "Double patty, lettuce, gherkin, house sauce, crispy onion, chips", category: "main" },
        { name: "Nashville Dipped Chicken", price: "£19", description: "Chilli dipped fried chicken thigh, lettuce, house sauce, pickles, vinegar slaw", category: "main" },
        { name: "Royale with Cheese Burger", price: "£15", description: "Lettuce, gherkin, crispy onion, chips, house sauce", category: "main" },

        // DESSERTS
        { name: "Basque Cheesecake", price: "£8", description: "Soft fruit compôte", category: "dessert" },
        { name: "Sticky Toffee Pudding", price: "£8", description: "Salted caramel ice cream", category: "dessert" },
        { name: "Bread & Butter Pudding", price: "£8", description: "Marmalade and custard", category: "dessert" },
        { name: "Seasonal Fruit Crumble", price: "£8", description: "Seasonal fruit, cream", category: "dessert" }
    ];


    const createCard = () => {
       const card = makeDiv("card");
       const name = makeDiv("name");
       const price = makeDiv("price");
       const description = makeDiv("description");
       card.append(name, price, description);
       return { card, name, price, description };

    }

    const buildMenuItems = (section) => {
        menuItems.forEach((item) => {

            if (item.category === section) {
                const element = createCard();
                const sectionDiv = document.querySelector(`.${section}`)
                element.card.id = item.name;
                element.name.textContent = item.name;
                element.price.textContent = item.price;
                element.description.textContent = item.description;

                sectionDiv.appendChild(element.card);
            }
            
        })
    }
    
    const makeSections = () => {
        const starters = makeDiv("starters");
        const mains = makeDiv("main");
        const desserts = makeDiv("dessert");

        starters.appendChild(makeDiv("menu-title", "starters"));
        mains.appendChild(makeDiv("menu-title", "mains"))        
        desserts.appendChild(makeDiv("menu-title", "desserts"));
        
        content.append(starters, mains, desserts);
        
        buildMenuItems("starters");
        buildMenuItems('main');
        buildMenuItems('dessert');
    } 

    makeSections();

}


export default loadMenuPage;