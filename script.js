let myJSONData;

function createCommentHTML(jsonElementComment) {

    const container = document.getElementById('container');
    container.setAttribute('class', 'container');

    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const cardBox = document.createElement('div');
    cardBox.setAttribute('class', 'card-box');

    const plusIcon = document.createElement('span');
    plusIcon.setAttribute('class', 'plus-icon');
    plusIcon.alt = "Ilustration from Frontend Mentor";

    const score = document.createElement('p');
    score.setAttribute('class', 'score-style blue-text');
    score.textContent = jsonElementComment.score;

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
    userImage.setAttribute('src', jsonElementComment.user.image.png);
    userImage.alt = "Ilustration fron Frontend Mentor";

    const userName = document.createElement('h1');
    userName.id = 'username';
    userName.setAttribute('class', 'dark-text');
    userName.textContent = jsonElementComment.user.username;

    const createdAt = document.createElement('p');
    createdAt.setAttribute('class', 'gray-text');
    createdAt.textContent = jsonElementComment.createdAt;

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
    content.textContent = jsonElementComment.content;

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
}

function createResponseHTML(jsonElementReply) {

    const container = document.getElementById('container');

    const cardReplies = document.createElement('div');
    cardReplies.setAttribute('class', 'card-replies');

    const cardBox = document.createElement('div');
    cardBox.setAttribute('class', 'card-box');

    const plusIcon = document.createElement('span');
    plusIcon.setAttribute('class', 'plus-icon');
    plusIcon.alt = "Ilustration from Frontend Mentor";

    const score = document.createElement('p');
    score.setAttribute('class', 'score-style blue-text');
    score.textContent = jsonElementReply.score;

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
    userImage.setAttribute('src', jsonElementReply.user.image.png);
    userImage.alt = "Ilustration fron Frontend Mentor";

    const userName = document.createElement('h1');
    userName.setAttribute('class', 'dark-text');
    userName.textContent = jsonElementReply.user.username;

    const createdAt = document.createElement('p');
    createdAt.setAttribute('class', 'gray-text');
    createdAt.textContent = jsonElementReply.createdAt;

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
    replyingTo.textContent = `@${jsonElementReply.replyingTo} `;

    const content = document.createElement('p');
    content.setAttribute('class', 'content gray-text');
    content.textContent = jsonElementReply.content;

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
}

function createAddComment() {

    const commentContainer = document.getElementById('commentContainer');

    const cardComment = document.createElement('div');
    cardComment.setAttribute('class', 'card-comment');

    const currentUserImage = document.createElement('img');
    currentUserImage.setAttribute('class', 'user-image');
    currentUserImage.setAttribute('src', myJSONData.currentUser.image.png);
    currentUserImage.alt = "Ilustration fron Frontend Mentor";

    const inputComment = document.createElement('textarea');
    inputComment.id = 'inputComment';
    inputComment.setAttribute('class', 'comment-input gray-text');
    inputComment.placeholder = "Add a comment...";

    const sendButton = document.createElement('button');
    sendButton.setAttribute('class', 'white-text send-button');
    sendButton.textContent = "SEND";
    sendButton.addEventListener("click", () => {
        let maxId = 0;
        for (let i = 0; i < myJSONData.comments.length; i++) {
            if (myJSONData.comments[i].id > maxId) {
                maxId = myJSONData.comments[i].id;
            }
        }

        let id = maxId + 1;
        let initialScore = 0;
        let initialCreatedAt = " 1 minute ago";
        let inputCommentContent = document.getElementById('inputComment').value;
        //document.getElementById('content').innerHTML = inputCommentContent;


        let newObj = {
            "id": id,
            "content": inputCommentContent,
            "createdAt": initialCreatedAt,
            "score": initialScore,
            "user": {
                "image": {
                    "png": myJSONData.currentUser.image.png,
                    "webp": myJSONData.currentUser.image.webp
                },
                "username": myJSONData.currentUser.username
            },
            "replies": []
        };
        myJSONData.comments.push(newObj);
        createCommentHTML(newObj);
    });

    commentContainer.appendChild(cardComment);
    cardComment.appendChild(currentUserImage);
    cardComment.appendChild(inputComment);
    cardComment.appendChild(sendButton);
}

function showData() {

    fetch('./data.json')
        .then(response => response.json())
        .then(data => {

            myJSONData = data;

            data.comments.forEach(comment => {
                createCommentHTML(comment);

                comment.replies.forEach(reply => {
                    createResponseHTML(reply);
                });

            });
            createAddComment();
        });

}
showData();