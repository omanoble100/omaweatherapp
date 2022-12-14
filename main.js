const btn = document.getElementById('submit');
       
        
        const getWeatherCondition = () => {
            
            const userInput = document.getElementById('userInput').value;
            const myKey = 'aa8767d5b6f2ebd1684c6b1e5d4f24da';
            const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${myKey}` ;
            const imageUrl = ' http://openweathermap.org/img/wn/';
            const imgOutput = document.getElementById('display-weather')
            const weatherName = document.getElementById('weatherName')

            fetch(endpoint)
            .then(response => response.json())
            .then(json => {        
                
                const imgView = imageUrl + json.weather[0].icon +'.png';
                const value = json.main.temp;
                const degree = Math.floor(value)
                imgOutput.innerHTML = `<img src='${imgView}'> <h1>${degree}°</h1>`;
                weatherName.innerText = `${userInput}: ${json.weather[0].main}`;
            })
        }
        
        btn.onclick = () => getWeatherCondition()