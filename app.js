//Profile
const avatar = document.getElementById('avatar');
const credentials = document.getElementById('credentials');
const user = document.querySelector('.user');
const date = document.querySelector('.date');
// Bio
const bio = document.getElementById('bio');
// Stats
const repositories = document.getElementById('repositories');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
// Socials
const userLocation = document.getElementById('location');
const company = document.getElementById('company');
const twitter = document.getElementById('twitter');
const website = document.getElementById('website');
// dark mode/ light mode
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const mode = document.querySelector('.mode');

document.getElementById('submit').addEventListener('click', getUsers);

// Fetch
function getUsers() {
    let username = document.getElementById('input').value;
    console.log(username);

    let gitUrl = `https://api.github.com/users/${username}`;
    console.log(gitUrl);

    axios({
        method: 'get',
        url: gitUrl,
    })
        .then((response) => {
            showData(response);
            console.log(response);
        })
        .catch((error) => console.log(error));
}

// On load
const loadOctocat = async () => {
    try {
        await axios
            .get('https://api.github.com/users/octocat')
            .then((response) => {
                showData(response);
                console.log(response);
            });
    } catch (error) {
        console.log(error);
    }
};

loadOctocat();

// Show response.data
function showData(response) {
    //Profile
    avatar.src = `${response.data.avatar_url}`;
    credentials.innerText = `${response.data.name}`;
    user.innerHTML = `@${response.data.login}`;

    //Date
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    let createdAt = new Date(`${response.data.created_at}`);
    console.log(createdAt);
    const year = createdAt.getFullYear().toString();
    const month = createdAt.getMonth().toString();
    const day = createdAt.getUTCDate();
    date.innerText = `Joined ${day} ${months[month]} ${year}`;

    // Bio
    if (response.data.bio === null) {
        bio.innerText = 'This profile has no bio';
    } else {
        bio.innerText = `${response.data.bio}`;
    }

    // Stats
    repositories.innerText = `${response.data.public_repos}`;
    followers.innerText = `${response.data.followers}`;
    following.innerText = `${response.data.following}`;

    // Socials
    if (response.data.location === null) {
        userLocation.innerText = 'Not available';
    } else {
        userLocation.innerText = `${response.data.location}`;
    }

    if (response.data.company === null) {
        company.innerText = 'Not available';
    } else {
        company.innerText = `${response.data.company}`;
    }

    if (response.data.twitter_username === null) {
        twitter.innerText = 'Not available';
    } else {
        twitter.innerText = `${response.data.twitter_username}`;
    }

    if (response.data.blog === null) {
        website.innerText = 'Not available';
    } else {
        website.innerText = `${response.data.blog}`;
    }
}

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
