const person = document.getElementById("person");
const bttn = document.getElementById("button");
const cleareBttn = document.getElementById("cleare")


bttn.addEventListener('click', () => {
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
        const randomPerson =data.results[0];

        person.innerHTML = `
        <div class="card">
            <p class="text">name: <a class="text-color">${randomPerson.name.title} ${randomPerson.name.first} ${randomPerson.name.last}</a></p>
            <p class="text">gender: <a class="text-color">${randomPerson.gender}</a></p>
            <p class="text">age: <a class="text-color">${randomPerson.dob.age}</a></p>
            <p class="text">email: <a class="text-color">${randomPerson.email}</a></p>
            <p class="text">phone: <a class="text-color">${randomPerson.phone}</a></p>

            <p class="text">country: <a class="text-color">${randomPerson.location.country}</a></p>
            <p class="text">street name: <a class="text-color">${randomPerson.location.street.name}</a></p>
            <p class="text">street number: <a class="text-color">${randomPerson.location.street.number}</a></p>
        </div>
        `
    })
    .catch(function(e){
        console.log("error: ", e)
    })
})

cleareBttn.addEventListener('click', () => {
    person.innerHTML = ''
})
