
function createCard(data) {

    const userCard = document.createElement('div');
    userCard.className = 'flex flex-col bg-gray-600 rounded-xl items-center gap-8 p-12';

    const userImage = document.createElement('img');
    userImage.setAttribute('src', `${data.avatar_url}`);

    const userName = document.createElement('span');
    userName.innerHTML = `UserName : ${data.name}`;
    userName.className = 'bg-white rounded p-2 font-bold';

    const userFollower = document.createElement('span');
    userFollower.innerHTML = `UserFollowers : ${data.followers}`;
    userFollower.className = 'bg-white rounded p-2 font-bold';

    userCard.appendChild(userImage);
    userCard.appendChild(userName);
    userCard.appendChild(userFollower);

    return userCard;
}

document.querySelector('#github_url_submit')
.addEventListener('click', (evt) => {
    evt.preventDefault();

    const githubURL = document.querySelector('#github_url_input').value;
    console.log(githubURL);
    const xhr = new XMLHttpRequest();
    xhr.open('GET',githubURL);
    xhr.onreadystatechange = function () {    
        if(xhr.readyState === 4){
            const data = JSON.parse(this.responseText);
            document.querySelector('#details').appendChild(createCard(data));
        }
    }
    xhr.send();
});

document.querySelector('#clear_data').addEventListener('click', (evt)=> {
    evt.preventDefault();
    document.querySelector('#details').innerHTML ='';

})