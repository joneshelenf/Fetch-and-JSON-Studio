window.addEventListener('load', function (){

    let container = document.getElementById('container');


fetch ('https://handlers.education.launchcode.org/static/astronauts.json').then
    (function (response) {
        response.json().then(function (json) {
            console.log(json)

        
        .then(function(json)) {
        let astronautProfiles ="";
    for (let i=0; i<1; i++) {
        let astronaut=json[i];
        astronautProfiles += `
        <div class="astronaut">
        <div class="bio">
            <h3>${astronaut.firstName}, ${astronaut.lastName}</h3>
        <ul>
            <li>Hours in space: ${astronaut.hoursInSpace}</li>
            <li>Active: ${astronaut.active}</li>
            <li>Skills: ${astronaut.skills.join(",")}</li>
        </ul>
        </div>
        <img class="avatar" src=${astronaut.picture}/>
        </div>
        `
        container.innerHTML = astronautProfiles;
    }

 
});
});
});
