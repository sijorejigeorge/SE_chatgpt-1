document.addEventListener('DOMContentLoaded', function () {
    // Sample data for aquarium types
    const aquariumTypes = ['Freshwater Aquarium', 'Saltwater Aquarium', 'Planted Aquarium'];
  
    // Function to populate the list of aquarium types
    function populateAquariumList() {
      const aquariumList = document.getElementById('aquarium-list');
      aquariumList.innerHTML = '';
  
      aquariumTypes.forEach(type => {
        const listItem = document.createElement('li');
        listItem.textContent = type;
        aquariumList.appendChild(listItem);
      });
    }
  
    // Event listener for the form submission
    const addAquariumForm = document.getElementById('add-aquarium-form');
    addAquariumForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const aquariumNameInput = document.getElementById('aquarium-name');
      const newAquariumName = aquariumNameInput.value.trim();
  
      if (newAquariumName !== '') {
        aquariumTypes.push(newAquariumName);
        populateAquariumList();
        aquariumNameInput.value = ''; // Clear the input field
      }
    });
  
    // Initial population of the aquarium list
    populateAquariumList();
  });
  