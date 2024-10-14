document.getElementById('findLocationBtn').addEventListener('click', function () {
    const ip = document.getElementById('ipInput').value;
    const resultDiv = document.getElementById('result');

    // Use ipinfo.io API to get location details
    fetch(`https://ipinfo.io/${ip}/json?token=YOUR_API_TOKEN`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Displaying the result
            resultDiv.innerHTML = `
                <h3>Location Information</h3>
                <p>IP: ${data.ip}</p>
                <p>City: ${data.city}</p>
                <p>Region: ${data.region}</p>
                <p>Country: ${data.country}</p>
                <p>Location: ${data.loc}</p>
                <p>Organization: ${data.org}</p>
            `;
        })
        .catch(error => {
            resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        });
});
