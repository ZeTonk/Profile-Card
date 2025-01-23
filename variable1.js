// const name = "John Doe";
// const age = 28;
// const occupaiton = "Web Developer";
// const bio = "Passionate about coding and teaching others.";
// const profilePicture = "../profile.png";
const profileContainer = document.getElementById("profile-container");
const profile = 
[
    "John Doe",
    28,
    "Web Developer",
    "Passionate about coding and teaching others.",
    "../profile.png"
];

const profileCard = 
'<div class="card">' +
'<img src="' + profile[4] + '" alt= "Profile Picture">' +
'<h2>' + profile[0] + '</h2>' +
'<p>Age: ' + profile[1] + '</p>' +
'<p>Occupation: ' + profile[2] + '</p>' +
'<p>' + profile[3] + '</p>' +
'</div>';

profileContainer.innerHTML = profileCard;