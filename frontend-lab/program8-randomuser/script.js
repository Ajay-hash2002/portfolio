var photo = document.getElementById("photo");
var nameText = document.getElementById("name");
var emailText = document.getElementById("email");
var button = document.getElementById("newUser");

function getUser() {
    nameText.textContent = "Loading...";
    emailText.textContent = "";

    fetch("https://randomuser.me/api/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var user = data.results[0];

            photo.src = user.picture.large;
            nameText.textContent = user.name.first + " " + user.name.last;
            emailText.textContent = user.email;
        })
        .catch(function (error) {
            nameText.textContent = "Could not load data";
            console.log(error);
        });
}

button.addEventListener("click", getUser);

// load one user when page opens
getUser();
