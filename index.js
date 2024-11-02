// A visitor enters the website and finds a list of available freelancers. 
// Each freelancer has a name, an occupation, and a starting price for their services.

const names = [];
const occupations = [];
const start_prices = [];

// They observe on the list Alice, the writer 
// with a starting price of $30, and Bob, who is a teacher, has a starting price of $50.

const freelancers = [
    {
        name: 'Alice',
        occupation: 'writer',
        start_price: 30
    },
    {
        name: 'Bob',
        occupation: 'teacher',
        start_price: 50
    },
    {
        name: 'Carol',
        occupation: 'programmer',
        start_price: 70
    },
];

//add freelancers to the list
function newFreelancer() {
    const name = names;
    const occupation = occupations;
    const start_price = start_prices;
    freelancers.push({ name, occupation, start_price });
}

// console.log(freelancers);



/** Updates the DOM to reflect the current state. */
function render() {
    
    const freelanceList = document.getElementById('freelance');
    console.log(freelanceList);

    const header = document.createElement('h2');
        header.textContent = "Freelancer Forum";
        freelanceList.appendChild(header);
    const subHeader = document.createElement('p');
        subHeader.textContent = "The Average starting price is ";
        freelanceList.appendChild(subHeader);
    const header2 = document.createElement('h2');
        header2.textContent = "Available Freelancers";
        freelanceList.appendChild(header2);
    

    const nameList = document.getElementById('name');
        console.log(nameList);

    const title = document.createElement('h2');
        title.textContent = "Name ";
        nameList.appendChild(title);

    const occupationList = document.getElementById('occupation');
        console.log(occupationList);

    const title2 = document.createElement('h2');
        title2.textContent = "Occupation ";
        occupationList.appendChild(title2);

    const priceList = document.getElementById('price');
        console.log(priceList);

    const title3 = document.createElement('h2');
        title3.textContent = "Starting Price ";
        priceList.appendChild(title3);

    freelancers.forEach(freelancer => {
        
        const freeLanceName = document.createElement('p');

        freeLanceName.textContent = `${freelancer.name}`;
        nameList.appendChild(freeLanceName);

        const freeLanceOccupation = document.createElement('p');

        freeLanceOccupation.textContent = `${freelancer.occupation}`;
        occupationList.appendChild(freeLanceOccupation);

        const freeLancePrice = document.createElement('p');
        freeLancePrice.textContent = `${freelancer.start_price}`;
        priceList.appendChild(freeLancePrice);


        
    });
    
}
newFreelancer();
render();

// The visitor finds a message displaying the average price of all freelancers.

// addFreelancer(name, occupation, start_price)