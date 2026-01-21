const loadHomePage = () => {
    const content = document.getElementById('content')
    
    const htmlLayout = `
           <div class="hero-section">
            <div class="hero-content">
                <div class="title">THE ROCK INN</div>
                <div class="sub-title">AT CHIDDINGSTONE</div>
            </div>
            
        </div>
        <div class="content-section">
            <div class="description-content">
                <span>
                    Welcome to The Rock, a timeless country pub nestled in the heart of Chiddingstone.
                Steeped in history and surrounded by rolling Kentish countryside, it is a place where good food and warm hospitality come together.
                </span>
                <span>
                    ur kitchen celebrates the seasons, transforming locally sourced produce into comforting dishes full of flavour and heart.
                </span>
                <span>
                    Settle in by the fire, raise a glass, and savour the charm of a true English inn. Every visit feels like coming home.
                </span>      
    `;
    
    content.innerHTML = htmlLayout;
    console.log("content cleared and function fired!");
}

export default loadHomePage;