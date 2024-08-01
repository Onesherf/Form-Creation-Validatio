// Define the asynchronous function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data'); // Data container element

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is OK (status code in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Convert response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element
        const userList = document.createElement('ul');

        // Loop through the users array and create <li> elements
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text content to the user's name
            userList.appendChild(listItem); // Append the <li> to the <ul>
        });

        // Append the <ul> to the dataContainer
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors and display a message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
