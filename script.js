
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

            const container = document.getElementById('container');
            container.setAttribute('class', 'container');

            data.comments.forEach(comment => {

                //card creation with header and body

                const card = document.createElement('div');
                card.setAttribute('class', 'card');

                const id = document.getElementById('id');

                const cardBox = document.createElement('div');
                cardBox.setAttribute('class', 'card-box');

                const plusIcon = document.createElement('span');
                plusIcon.setAttribute('class', 'plus-icon');
                plusIcon.alt = "Ilustration from Frontend Mentor";

                const score = document.createElement('p');
                score.id = 'score';
                score.setAttribute('class', 'score-style blue-text');
                score.textContent = comment.score;

                const minusIcon = document.createElement('span');
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
                userName.id = 'username';
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

                const replyIcon = document.createElement('span');
                replyIcon.setAttribute('class', 'reply-icon');
                replyIcon.alt = "Ilustration from Frontend mentor";

                const cardMessage = document.createElement('div');
                cardMessage.setAttribute('class', 'card-message');

                const content = document.createElement('p');
                content.id = 'content';
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

                //reply

                comment.replies.forEach(reply => {

                    //card creation with header and body

                    const cardReplies = document.createElement('div');
                    cardReplies.setAttribute('class', 'card-replies');

                    const cardBox = document.createElement('div');
                    cardBox.setAttribute('class', 'card-box');

                    const plusIcon = document.createElement('span');
                    plusIcon.setAttribute('class', 'plus-icon');
                    plusIcon.alt = "Ilustration from Frontend Mentor";

                    const score = document.createElement('p');
                    score.setAttribute('class', 'score-style blue-text');
                    score.textContent = reply.score;

                    const minusIcon = document.createElement('span');
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
                    userImage.setAttribute('src', reply.user.image.png);
                    userImage.alt = "Ilustration fron Frontend Mentor";

                    const userName = document.createElement('h1');
                    userName.setAttribute('class', 'dark-text');
                    userName.textContent = reply.user.username;

                    const createdAt = document.createElement('p');
                    createdAt.setAttribute('class', 'gray-text');
                    createdAt.textContent = reply.createdAt;

                    const cardReply = document.createElement('div');
                    cardReply.setAttribute('class', 'card-reply');

                    const editLink = document.createElement('span');
                    editLink.setAttribute('class', 'blue-text');
                    editLink.textContent = `Edit`;

                    const editIcon = document.createElement('span');
                    editIcon.setAttribute('class', 'edit-icon');
                    editIcon.alt = "Ilustration from Frontend mentor";

                    const cardMessage = document.createElement('div');
                    cardMessage.setAttribute('class', 'card-message');

                    const replyingTo = document.createElement('span');
                    replyingTo.setAttribute('class', 'blue-text');
                    replyingTo.textContent = `@${reply.replyingTo} `;

                    const content = document.createElement('p');
                    content.setAttribute('class', 'content gray-text');
                    content.textContent = reply.content;

                    //appenchild

                    container.appendChild(cardReplies);
                    cardReplies.appendChild(cardBox);
                    cardBox.appendChild(plusIcon);
                    cardBox.appendChild(score);
                    cardBox.appendChild(minusIcon);
                    cardReplies.appendChild(cardBody);
                    cardBody.appendChild(cardHead);
                    cardBody.appendChild(cardMessage);
                    cardHead.appendChild(cardPrincipal);
                    cardHead.appendChild(cardReply);
                    cardReply.appendChild(editIcon);
                    cardReply.appendChild(editLink);
                    cardMessage.appendChild(replyingTo);
                    cardMessage.appendChild(content);
                    cardPrincipal.appendChild(userImage);
                    cardPrincipal.appendChild(userName);
                    cardPrincipal.appendChild(createdAt);

                });

            });

            //Card comment from current user

            const cardComment = document.createElement('div');
            cardComment.setAttribute('class', 'card-comment');

            const currentUserImage = document.createElement('img');
            currentUserImage.setAttribute('class', 'user-image');
            currentUserImage.setAttribute('src', data.currentUser.image.png);
            currentUserImage.alt = "Ilustration fron Frontend Mentor";

            const inputComment = document.createElement('textarea');
            inputComment.id = 'inputComment';
            inputComment.setAttribute('class', 'comment-input gray-text');
            inputComment.placeholder = "Add a comment...";

            const userName = document.getElementById('username');

            const sendButton = document.createElement('button');
            sendButton.setAttribute('class', 'white-text send-button');
            sendButton.textContent = "SEND";
            sendButton.addEventListener("click", addComment);

            container.appendChild(cardComment);
            cardComment.appendChild(currentUserImage);
            cardComment.appendChild(inputComment);
            cardComment.appendChild(sendButton);

        });

}
showData();

function addComment() {
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            //get text from textarea
            let lth = data.comments.length; //Obtenemos de data el length, y lo metemos en la variable lth
            let id = lth + 1;

            let inputComment = document.getElementById('inputComment').value;
            document.getElementById('content').innerHTML = inputComment;

            let username = document.getElementById('username');
            username.textContent = data.currentUser.username;

            let newObj = {
                "id": id,
                "content": inputComment,
                "createdAt": "1 month ago",
                "score": 40,
                "user": {
                    "image": {
                        "png": data.currentUser.image.png,
                        "webp": data.currentUser.image.webp
                    },
                    "username": username
                },
                "replies": []
            };

            data.comments.push(newObj);
            console.log(data.comments);

        });
}


