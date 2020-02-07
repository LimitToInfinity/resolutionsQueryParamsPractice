fetch("http://localhost:3000/resolutions")
    .then(response => response.json())
    .then(resolutions => {
        
        resolutions.forEach(resolution => {
            console.log(resolution);
            const title = document.createElement("h2");
    
            title.innerHTML = `<a href="whatever.html?id=${resolution.id}">${resolution.title}</a>`;
    
            document.body.appendChild(title);
        })
    })