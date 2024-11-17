document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.getElementById('user-container');
    const generateUserButton = document.getElementById('generate-user');
  
    // Function to fetch random user from the API
    async function fetchRandomUser() {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];
  
        // Clear previous user data
        userContainer.innerHTML = '';
  
        // Create user elements
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
  
        const userImage = document.createElement('img');
        userImage.src = user.picture.large;
        userImage.alt = 'User Profile Picture';
        userDiv.appendChild(userImage);
  
        const userName = document.createElement('h2');
        userName.textContent = `${user.name.first} ${user.name.last}`;
        userDiv.appendChild(userName);
  
        const userEmail = document.createElement('p');
        userEmail.textContent = `Email: ${user.email}`;
        userDiv.appendChild(userEmail);
  
        const userLocation = document.createElement('p');
        userLocation.textContent = `Location: ${user.location.city}, ${user.location.country}`;
        userDiv.appendChild(userLocation);
  
        // Append user to the container
        userContainer.appendChild(userDiv);
      } catch (error) {
        console.error('Error fetching user:', error);
        userContainer.textContent = 'Failed to load user data.';
      }
    }
  
    // Event listener for the button
    generateUserButton.addEventListener('click', fetchRandomUser);
  
    // Fetch a random user when the page loads
    fetchRandomUser();
  });
  