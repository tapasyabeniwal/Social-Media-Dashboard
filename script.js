const apiUrl = 'https://api.example.com';
const token = localStorage.getItem('token');

if (token) {
    fetch(`${apiUrl}/feeds`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const feedContainer = document.getElementById('feed');
        data.forEach(item => {
            const feedItem = document.createElement('div');
            feedItem.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.content}</p>
            `;
            feedContainer.appendChild(feedItem);
        });
    })
    .catch(error => console.error(error));
} else {
    // handle login and authentication
}
