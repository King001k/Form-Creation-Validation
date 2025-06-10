// Step 1: Define the asynchronous function to fetch user data
async function fetchUserData() {
        // Step 2: Set the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        // Step 3: Select the container element where the data will be displayed
    const dataContainer = document.getElementById('api-data');
    // Step 4: Use a try-catch block for error handling
    try {
        // Step 5: Fetch data from the API
        const response = await fetch(apiUrl);
        // Step 6: Convert the response to JSON
        const users = await response.json();
        // Step 7: Clear the "Loading..." message
        dataContainer.innerHTML = '';
        // Step 8: Create a <ul> element to hold the list of users
        const userList = document.createElement('ul');
        // Step 9: Loop through each user and create <li> elements
        users.forEach(user => {
            const listItem = document.createElement('li');  // create <li>
            listItem.textContent = user.name;               // set its text
            userList.appendChild(listItem);                 // add to the <ul>
        });
        // Step 10: Append the full list to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Step 11: Clear and show error message
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}
// Step 12: Run the function once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);

