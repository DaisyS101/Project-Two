const data = [
  {
    name: 'Del La Rosa Inc',
    
    description: 'Trust Us with your Security!'
  },
  {
    name: 'Mist Flower Security Inc',
   
    description: 'On the Clock 24/7 for your Security!'
  },
  {
    name: 'Guardian Security Corp',
    
    description: 'Guarding your Privacy!'
  }
];

const container = document.querySelector('.container');

data.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <h2>${item.name}</h2>
    
    <p>${item.description}</p>
    <button>Choose Plan</button>
  `;

  container.appendChild(card);
});
