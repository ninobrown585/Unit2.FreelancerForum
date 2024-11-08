// A visitor enters the website and finds a list of available freelancers. 
// Each freelancer has a name, an occupation, and a starting price for their services.

const names = ["Sam", "Chris", "Jay", "Alex", "Morgan"];
const occupations = ["Artist", "Coder", "Engineer", "Designer", "Consultant"];
const start_prices = ["20", "30", "40", "50", "60"];
const avg_array = [];
maxFreelancers = 10;

// They observe an array of freelancers.
const freelancers = [
    {
        name: 'Alice',
        occupation: 'writer',
        start_price: 30
    },
    // {
    //     name: 'Bob',
    //     occupation: 'teacher',
    //     start_price: 50
    // },
    // {
    //     name: 'Carol',
    //     occupation: 'programmer',
    //     start_price: 70
    // },
];

//add random freelancer to the list
function newFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const start_price = start_prices[Math.floor(Math.random() * start_prices.length)];
    freelancers.push({ name, occupation, start_price });

    
}

// console.log(freelancers);

const freelanceList = document.querySelector('#freelance');
    console.log(freelanceList);

    const header = document.createElement('h2');
        header.textContent = "Freelancer Forum";
        freelanceList.appendChild(header);

const avgList = document.querySelector('#avg');
    console.log(avgList);

    const newheader = document.createElement('h2');
        // newheader.textContent = "Freelancer Forum";
        avgList.appendChild(newheader);
    
function theAveragePrice(avg_array) {
    let total = 0;
    if(avg_array.length === 0) {
        return 0;
    }
    for(let i = 0; i < avg_array.length; i++) {
        total += avg_array[i];
        // console.log(total);
    }

    const new_avg = total / avg_array.length;

    const subHeader = document.createElement('p');
        subHeader.textContent = `The Average starting price is  ${new_avg} `;
        avgList.innerHTML = '';
        avgList.appendChild(subHeader);
    return new_avg;

    
}


//displays the Title name, occupation, and starting price of each freelancer
    const nameList = document.querySelector('#name');
        console.log(nameList);

    const title = document.createElement('h2');
        title.textContent = "Name ";
        nameList.appendChild(title);

    const occupationList = document.querySelector('#occupation');
        console.log(occupationList);

    const title2 = document.createElement('h2');
        title2.textContent = "Occupation ";
        occupationList.appendChild(title2);

    const priceList = document.querySelector('#price');
        console.log(priceList);

    const title3 = document.createElement('h2');
        title3.textContent = "Starting Price ";
        priceList.appendChild(title3);
    
    const header2 = document.createElement('h2');
        header2.textContent = "Available Freelancers";
        freelanceList.appendChild(header2);

/** Updates the DOM to reflect the current state. */
function render() {
    
    
    const nameList = document.querySelector('#name');
    const nameElements = freelancers.map((worker) => {
        const title = document.createElement('h2');
        title.textContent = "Name ";
        const nameElement = document.createElement('p');
        nameElement.textContent = worker.name;
        nameElement.classList.add(worker.name);
        return nameElement;
    })
    nameList.replaceChildren(...nameElements);

    const occupationList = document.querySelector('#occupation');
    const occupationElements = freelancers.map((worker) => {
        const title2 = document.createElement('h2');
        title2.textContent = "Name ";
        const occupationElement = document.createElement('p');
        occupationElement.textContent = worker.occupation;
        occupationElement.classList.add(worker.occupation);
        return occupationElement;
    })
    occupationList.replaceChildren(...occupationElements);

    const priceList = document.querySelector('#price');
    const priceElements = freelancers.map((worker) => {
        // const title3 = document.createElement('h2');
        // title3.textContent = "Name ";
        const priceElement = document.createElement('p');
        priceElement.textContent = worker.start_price;
        priceElement.classList.add(worker.start_price);
        
        return priceElement;
    })
    
    priceList.replaceChildren(...priceElements);
    avg_array.push(parseInt(priceElements[priceElements.length - 1].textContent));
    console.log(avg_array);
   






    // freelancers.forEach(freelancer => {
        
    //     const freeLanceName = document.createElement('p');

    //     freeLanceName.textContent = `${freelancer.name}`;
    //     nameList.appendChild(freeLanceName);

    //     const freeLanceOccupation = document.createElement('p');

    //     freeLanceOccupation.textContent = `${freelancer.occupation}`;
    //     occupationList.appendChild(freeLanceOccupation);

    //     const freeLancePrice = document.createElement('p');
    //     freeLancePrice.textContent = `${freelancer.start_price}`;
    //     priceList.appendChild(freeLancePrice);
        
    // });
    
}

const freelanceIntervalId = setInterval(() => {
    
    newFreelancer();
    
    render();
    theAveragePrice(avg_array);
    // TODO: Stop adding freelancers if we've reached the maximum number of shapes
    if (freelancers.length >= maxFreelancers) {
      clearInterval(freelanceIntervalId);
    }
  }, 3000);
  
  render();
  