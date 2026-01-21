import { makeDiv } from "./domUtils";



const loadAboutPage = () => {
    const container = document.getElementById('content')
    container.className = 'about-container';
    container.textContent = "";


    const content = [
        {
            title: "Access Statement: The Rock Inn",
            description: "Built in 1520, this Grade II listed building features 500-year-old wooden beams. Due to its historic nature, the structure presents some physical barriers to accessibility."
        },
        {
            title: "Mobility & Wheelchair Access",
            description: "We can easily accommodate guests with limited mobility. Wheelchair users encounter one step at the entrance; assistance is available on request. Please contact us before booking so we can meet your specific needs."
        },
        {
            title: "Pre-arrival Services",
            description: "We welcome contact via phone, letter, or email. Menus and documents can be provided in large print. We also offer a private hire vehicle service for collection from homes or local stations."
        },
        {
            title: "Arrival & Entrance",
            description: "The main entrance is accessed from the car park via one step. Reserved spaces near the building can be arranged in advance for guests with limited mobility."
        },
        {
            title: "Inclusive Environment",
            description: "We operate an 'Ask Clive' policy: everyone is welcome. We have a zero-tolerance policy toward discrimination to ensure a safe, welcoming space for all guests."
        },
        {
            title: "Car Park & Garden Access",
            description: "On-site parking is available with an overflow area for larger vehicles. The rear garden entrance is 900mm wide and easily accessible for wheelchairs without steps."
        },
        {
            title: "The Bar Area",
            description: "Located on the ground floor with stepped access. Staff are always available to assist visually impaired guests or those with limited mobility. Accessible tables can be reserved in advance."
        },
        {
            title: "Dietary & Sensory Needs",
            description: "Most diets can be catered for with prior notice. We are dog-friendly (on leads). Please inform us of any requirements regarding autism or quiet spaces so we can accommodate you."
        },
        {
            title: "The Restaurant",
            description: "Features bright lighting and freestanding furniture with armless chairs. Table service is standard. While we occasionally host candle-lit dinners, additional lighting is available on request."
        },
        {
            title: "Toilet Facilities",
            description: "Standard toilets are located near the bar via a half-step. A gender-neutral toilet is available in the restaurant area, featuring easier access and a support area."
        },
        {
            title: "Contact Details",
            description: "Address: Hoath Corner, Chiddingstone Hoath, TN8 7BS. Phone: 01892 870296. Email: manager@therockchiddingstone.com."
        }
    ];

    const makeCard = () => {
        const card = makeDiv('card');
        const title = makeDiv('title');
        const description = makeDiv('description')
        card.append(title, description);

        return {card, title, description};
    }

    content.forEach((item) => {
        const element = makeCard();
        element.title.textContent = item.title;
        element.description.textContent = item.description;
        container.appendChild(element.card);
    })




};

export default loadAboutPage;