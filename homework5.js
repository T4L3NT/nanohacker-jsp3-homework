
const funct = () => {
    $.ajax({
        url: "https://data.cityofnewyork.us/resource/a2h9-9z38.json",
        type: "GET",
        data: {
          "$limit" : 5000,
          "$$app_token" : "AT84Ef4jRm3V6kFvci1flIjJ5"

        },
        success: (data) =>{
            console.log(data);
            for(i = 0; i <= data.length; i++){
                let y = data[i].longitude;
                let x = data[i].latitude;
                console.log(x);
                console.log(y);
                const marker = new mapboxgl.Marker()
                .setLngLat([x, y])
                .addTo(map);
                }
                }

            })
        }

funct();