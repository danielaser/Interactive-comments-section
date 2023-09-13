//fetch('./data.json')
//  .then(response => response.json())
//.then(data => console.log(data));
//.catch(error => console.log(error));


function showData() {
    //let comments;
    //if (localStorage.getItem("comments") == null) {
    //   comments = [];
    //} else {
    //  comments = JSON.parse(localStorage.getItem("comments"));
    // }

    fetch('./data.json')
        .then(response => response.json())
        .then(data => {

            data.comments.forEach(comment => {
                console.log(data);
                const container = document.getElementById('container');
                container.setAttribute('class', 'container');

                //card creation with header and body

                const card = document.createElement('div');
                card.setAttribute('class', 'card');

                const cardBox = document.createElement('div');
                cardBox.setAttribute('class', 'card-box');

                const plusIcon = document.createElement('img');
                plusIcon.setAttribute('class', 'plus-icon');
                plusIcon.alt = "Ilustration from Frontend Mentor";

                const score = document.createElement('p');
                score.setAttribute('class', 'score-style blue-text');
                score.textContent = comment.score;

                const minusIcon = document.createElement('img');
                minusIcon.setAttribute('class', 'minus-icon');
                minusIcon.alt = "Ilustration from Frontend Mentor";

                const cardBody = document.createElement('div');
                cardBody.setAttribute('class', 'card-body');

                const cardHead = document.createElement('div');
                cardHead.setAttribute('class', 'card-head');

                const cardPrincipal = document.createElement('div');
                cardPrincipal.setAttribute('class', 'card-principal');

                const userImage = document.createElement('img');
                userImage.setAttribute('class', 'user-image');
                userImage.setAttribute('src', comment.user.image.png);
                userImage.alt = "Ilustration fron Frontend Mentor";

                const userName = document.createElement('h1');
                userName.setAttribute('class', 'dark-text');
                userName.textContent = comment.user.username;

                const createdAt = document.createElement('p');
                createdAt.setAttribute('class', 'gray-text');
                createdAt.textContent = comment.createdAt;

                const cardReply = document.createElement('div');
                cardReply.setAttribute('class', 'card-reply');

                const replyLink = document.createElement('span');
                replyLink.setAttribute('class', 'blue-text');
                replyLink.textContent = `Reply`;

                const replyIcon = document.createElement('img');
                replyIcon.setAttribute('class', 'reply-icon');
                replyIcon.alt = "Ilustration from Frontend mentor";

                const cardMessage = document.createElement('div');
                cardMessage.setAttribute('class', 'card-message');

                const content = document.createElement('p');
                content.setAttribute('class', 'content gray-text');
                content.textContent = comment.content;

                //appenchild

                container.appendChild(card);
                card.appendChild(cardBox);
                cardBox.appendChild(plusIcon);
                cardBox.appendChild(score);
                cardBox.appendChild(minusIcon);
                card.appendChild(cardBody);
                cardBody.appendChild(cardHead);
                cardBody.appendChild(cardMessage);
                cardHead.appendChild(cardPrincipal);
                cardHead.appendChild(cardReply);
                cardReply.appendChild(replyIcon);
                cardReply.appendChild(replyLink);
                cardMessage.appendChild(content);
                cardPrincipal.appendChild(userImage);
                cardPrincipal.appendChild(userName);
                cardPrincipal.appendChild(createdAt);

            });


        });

}
showData();


