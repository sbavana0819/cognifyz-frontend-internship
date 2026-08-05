let display = document.getElementById("users")
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    data.forEach(user => {
        display.innerHTML += `
        <div>
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>Phone Number: ${user.phone}</p>
        </div>`
    })
})
.catch(error=>{
    console.log(error);
});