
    // Function to fetch data from the JSON server
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/characters');
        const data = await response.json();
        displayAnimals(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Function to display animals and handle votes and descriptions
    function displayAnimals(animals) {
      const animalsContainer = document.getElementById("animals-container");

      animals.forEach(animal => {
        const animalDiv = document.createElement("div");
        animalDiv.innerHTML = `
          <img src="${animal.image}" alt="${animal.name}" />
          <p>${animal.name}</p>
          <p>Vote: <span id="votes-${animal.id}">${animal.votes}</span></p>
        `;

        
        animalDiv.addEventListener("click", () => {
          
        });

      
        const voteButton = document.createElement("button");
        voteButton.textContent = "Vote";
        voteButton.addEventListener("click", () => {
          animal.votes++;
          document.getElementById(`votes-${animal.id}`).textContent = animal.votes;
        });
        animalDiv.appendChild(voteButton);

        animalsContainer.appendChild(animalDiv);
      });
    }

    // Fetch data when the page loads
    fetchData();
  