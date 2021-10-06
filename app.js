// document.getElementById('submit').addEventListener('click', getUsers);
// let avatar = document.getElementById('avatar');
// let credentials = document.getElementById('credentials');
// let bio = document.getElementById('bio');
// let repositories = document.getElementById('repositories');
// let followers = document.getElementById('followers');
// let following = document.getElementById('following');
// let userLocation = document.getElementById('location');
// let company = document.getElementById('company');
// let twitter = document.getElementById('twitter');
// let website = document.getElementById('website');
// let user = document.querySelector('user');

let sun = document.querySelector('.sun');
let moon = document.querySelector('.moon');
let mode = document.querySelector('.mode');

// function getUsers() {
//     let username = document.getElementById('input').value;
//     console.log(username);

//     let gitUrl = `https://api.github.com/users/${username}`;
//     console.log(gitUrl);

//     axios({
//         method: 'get',
//         url: gitUrl,
//     })
//         .then((response) => {
//             showData(response);
//             console.log(response);
//         })
//         .catch((error) => console.log(error));
// }

// function showData(response) {
//     avatar.src = `${response.data.avatar_url}`;
//     credentials.innerText = `${response.data.name}`;
//     bio.innerText = `${response.data.bio}`;
//     repositories.innerText = `${response.data.public_repos}`;
//     followers.innerText = `${response.data.followers}`;
//     following.innerText = `${response.data.following}`;
//     userLocation.innerText = `${response.data.location}`;
//     company.innerText = `${response.data.company}`;
//     twitter.innerText = `${response.data.twitter_username}`;
//     website.innerText = `${response.data.blog}`;
//     user.innerText = `@${response.data.login}`;
//     document.getElementById('res').innerHTML = `
//     <h1>React>Vue: ${response.data.company}</h1>
//     `;
// }

// dark mode/ light mode
mode.onclick = function () {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        sun.style.display = 'none';
        moon.style.display = 'inline-block';
    } else {
        sun.style.display = 'inline-block';
        moon.style.display = 'none';
    }
};
