const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"]
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"]
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ]
};

const loadData = (person) => {
  const personDetails = person.result;
  const found = document.getElementById('found');
  found.innerHTML = `
  <h5 class=" text-2xl my-6 font-bold text-gray-900">${person.found} person People found</h5>
  
  `

  personDetails.forEach(element => {
    
    const container = document.getElementById('output-container');

  
  const div = document.createElement('div');
  div.innerHTML = `
    
  
      <a href="#" class="block  p-6 w-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Person name: &nbsp ${element.name.common}</h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">age: ${element.age}</p>
      <p class="font-normal text-gray-700 dark:text-gray-400">Address: ${element.address.street} ${element.address.house}</p>
      </a>


    
    `

  container.appendChild(div);
  });
  
}

loadData(person)