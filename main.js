const myBtn = document.getElementById('click');
    
        
        const getWeatherCondition = () => {
            
            const userInput = document.getElementById('userInput').value;
            const myKey = 'aa8767d5b6f2ebd1684c6b1e5d4f24da';
            const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=met
            ric&appid=${myKey}` ;
            const imageUrl = ' http://openweathermap.org/img/wn/';
            const imgOutput = document.getElementById('display-weather')
            const weatherName = document.getElementById('weatherName')
            const country = document.querySelector('.country-output')
            // const myBackground = document.querySelector('body')
            // const myInputValue = document.querySelector('input')
            
            
            fetch(endpoint)
            .then(response => response.json())
            .then(json => {   
                const imgView = imageUrl + json.weather[0].icon +'.png';
                const value = json.main.temp;
                const degree = Math.floor(value)

                // Diplay Output
                imgOutput.style.display ='flex';
                imgOutput.innerHTML = `<img src='${imgView}'> <h1>${degree}°C</h1> `;
                country.innerText = `${userInput}: ${json.weather[0].main}`;
                country.style.color = 'white'
                weatherName.innerHTML = `<p>Lon: ${Math.floor(json.coord.lon)}º</p> - <p> Lat: ${Math.floor(json.coord.lat)}º</p>`;
                weatherName.style.color ='white';
                
            
                
            })
            .catch((err) => alert("Please enter a correct Country name or City"));
        }
        
        