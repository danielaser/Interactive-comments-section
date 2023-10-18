let myJSONData;

function createCommentHTML(jsonElementComment) {

    const container = document.getElementById('container');
    container.setAttribute('class', 'container');

    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.id = 'cardComment' + jsonElementComment.id;

    const commentReplyContainer = document.createElement('div');
    commentReplyContainer.id = 'commentReplyContainer' + jsonElementComment.id;

    const cardBox = document.createElement('div');
    cardBox.setAttribute('class', 'card-box');

    const plusIcon = document.createElement('span');
    plusIcon.setAttribute('class', 'plus-icon');
    plusIcon.alt = "Ilustration from Frontend Mentor";
    plusIcon.id = 'plusIcon' + jsonElementComment.id;
    let scoreValue = jsonElementComment.score;
    plusIcon.addEventListener("click", () => {
        scoreValue++;
        const increase = document.getElementById("score" + jsonElementComment.id);
        increase.textContent = scoreValue;
        jsonElementComment.score = scoreValue;
        localStorage.setItem("myJSONData", JSON.stringify(myJSONData));
    });

    const score = document.createElement('p');
    score.setAttribute('class', 'score-style blue-text');
    score.id = 'score' + jsonElementComment.id;
    score.textContent = jsonElementComment.score;

    const minusIcon = document.createElement('span');
    minusIcon.setAttribute('class', 'minus-icon');
    minusIcon.alt = "Ilustration from Frontend Mentor";
    minusIcon.id = 'minusIcon' + jsonElementComment.id;
    minusIcon.addEventListener("click", () => {
        if (jsonElementComment.score > 0) {
            scoreValue--;
            const decrease = document.getElementById("score" + jsonElementComment.id);
            decrease.textContent = scoreValue;
            jsonElementComment.score = scoreValue;
            localStorage.setItem("myJSONData", JSON.stringify(myJSONData));
        }
    });

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');
    cardBody.id = 'cardBody' + jsonElementComment.id;

    const cardHead = document.createElement('div');
    cardHead.setAttribute('class', 'card-head');

    const cardPrincipal = document.createElement('div');
    cardPrincipal.setAttribute('class', 'card-principal');

    const userImage = document.createElement('img');
    userImage.setAttribute('class', 'user-image');
    userImage.setAttribute('src', jsonElementComment.user.image.png);
    userImage.alt = "Ilustration fron Frontend Mentor";

    const userName = document.createElement('h1');
    userName.id = 'username' + jsonElementComment.id;
    userName.setAttribute('class', 'dark-text');
    userName.textContent = jsonElementComment.user.username;

    const currentUserContent = document.createElement('div');
    currentUserContent.setAttribute('class', 'currentUser-content white-text');
    currentUserContent.textContent = 'you';

    const createdAt = document.createElement('p');
    createdAt.setAttribute('class', 'gray-text');
    //CREATE AT DAY
    if (jsonElementComment.createdAtDay != null) {
        const timestamp = jsonElementComment.createdAtDay;
        const date = new Date(timestamp);

        today = new Date();
        past = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());

        function calcDate(date1, date2) {
            var diff = Math.floor(date1.getTime() - date2.getTime());
            let second = 1000;

            let seconds = Math.floor(diff / second);
            let minutes = Math.floor(seconds / 60);
            let hours = Math.floor(minutes / 60);
            let days = Math.floor(hours / 24);
            let months = Math.floor(days / 31);
            let years = Math.floor(months / 12);
            let message;
            if (years > 0) {
                message = years + " year(s) ago ";
            } else if (months > 0) {
                message = months + " months ago";
            } else if (days > 0) {
                message = days + " days ago";
            } else if (hours > 0) {
                message = hours + " hours ago";
            } else if (minutes > 0) {
                message = minutes + " minutes ago";
            } else if (seconds > 0) {
                message = seconds + " seconds ago";
            } else if (seconds == 0) {
                message = " just now";
            }
            return message;
        }
        dateTimeAgo = calcDate(today, past);
        createdAt.textContent = dateTimeAgo;
    } else {
        createdAt.textContent = jsonElementComment.createdAt;
    }

    //Only when there are delete and edit
    const cardDeleteEditContent = document.createElement('div');
    cardDeleteEditContent.setAttribute('class', 'deleteEdit-content');

    //Only when is my user DELETE
    const cardDelete = document.createElement('span');
    cardDelete.setAttribute('class', 'card-reply card-delete');
    cardDelete.addEventListener("click", () => {
        deleteComment(jsonElementComment.id, true, jsonElementComment.id, jsonElementComment.replies.id);
    });

    const deleteLink = document.createElement('p');
    deleteLink.setAttribute('class', 'red-text');
    deleteLink.id = 'deleteLink' + jsonElementComment.id;
    deleteLink.textContent = `Delete`;

    const deleteIcon = document.createElement('image');
    deleteIcon.setAttribute('class', 'delete-icon');
    deleteIcon.alt = "Ilustration from Frontend mentor";

    //Only when is my user EDIT
    const cardEdit = document.createElement('span');
    cardEdit.setAttribute('class', 'card-reply');
    cardEdit.addEventListener("click", () => {
        editComment(cardBody, cardMessage, content, jsonElementComment, true, cardEdit, cardDelete);
    });

    const editLink = document.createElement('p');
    editLink.setAttribute('class', 'blue-text');
    editLink.id = 'editLink' + jsonElementComment.id;
    editLink.textContent = `Edit`;

    const editIcon = document.createElement('image');
    editIcon.setAttribute('class', 'edit-icon');
    editIcon.alt = "Ilustration from Frontend mentor";

    const cardReply = document.createElement('span');
    cardReply.setAttribute('class', 'card-reply');
    cardReply.addEventListener("click", () => {
        createAddReply(jsonElementComment.id, true, jsonElementComment.id, cardReply);
    });

    const replyLink = document.createElement('p');
    replyLink.setAttribute('class', 'blue-text');
    replyLink.textContent = `Reply`;

    const replyIcon = document.createElement('image');
    replyIcon.setAttribute('class', 'reply-icon');
    replyIcon.alt = "Ilustration from Frontend mentor";

    const cardMessage = document.createElement('div');
    cardMessage.setAttribute('class', 'card-message');
    cardMessage.id = 'cardMessage' + jsonElementComment.id;

    const content = document.createElement('p');
    content.id = 'content' + jsonElementComment.id;
    content.setAttribute('class', 'content gray-text');
    content.textContent = jsonElementComment.content;

    //appenchild
    container.appendChild(card);
    container.appendChild(commentReplyContainer);
    card.appendChild(cardBox);
    cardBox.appendChild(plusIcon);
    cardBox.appendChild(score);
    cardBox.appendChild(minusIcon);
    card.appendChild(cardBody);
    cardBody.appendChild(cardHead);
    cardBody.appendChild(cardMessage);
    cardHead.appendChild(cardPrincipal);
    if (jsonElementComment.user.username == "juliusomo") {
        cardHead.appendChild(cardDeleteEditContent);
        cardDeleteEditContent.appendChild(cardDelete);
        cardDelete.appendChild(deleteIcon);
        cardDelete.appendChild(deleteLink);
        cardDeleteEditContent.appendChild(cardEdit);
        cardEdit.appendChild(editIcon);
        cardEdit.appendChild(editLink);
    } else {
        cardHead.appendChild(cardReply);
        cardReply.appendChild(replyIcon);
        cardReply.appendChild(replyLink);
    }
    cardMessage.appendChild(content);
    cardPrincipal.appendChild(userImage);
    cardPrincipal.appendChild(userName);
    if (jsonElementComment.user.username == "juliusomo") {
        cardPrincipal.appendChild(currentUserContent);
    }
    cardPrincipal.appendChild(createdAt);
}

function createResponseHTML(jsonElementReply, parentCommentID) {

    const commentReplyContainer = document.getElementById('commentReplyContainer' + parentCommentID);
    commentReplyContainer.setAttribute('class', 'commentReply-container');

    const cardReplies = document.createElement('div');
    cardReplies.setAttribute('class', 'card-replies');
    cardReplies.id = 'cardReplies' + jsonElementReply.id;

    const cardBox = document.createElement('div');
    cardBox.setAttribute('class', 'card-box');

    const plusIcon = document.createElement('span');
    plusIcon.setAttribute('class', 'plus-icon');
    plusIcon.alt = "Ilustration from Frontend Mentor";
    plusIcon.id = 'plusIcon' + jsonElementReply.id;
    let scoreValue = jsonElementReply.score;
    plusIcon.addEventListener("click", () => {
        scoreValue++;
        const increase = document.getElementById("score" + jsonElementReply.id);
        increase.textContent = scoreValue;
        jsonElementReply.score = scoreValue;
        localStorage.setItem("myJSONData", JSON.stringify(myJSONData));
    });

    const score = document.createElement('p');
    score.setAttribute('class', 'score-style blue-text');
    score.id = 'score' + jsonElementReply.id;
    score.textContent = jsonElementReply.score;

    const minusIcon = document.createElement('span');
    minusIcon.setAttribute('class', 'minus-icon');
    minusIcon.alt = "Ilustration from Frontend Mentor";
    minusIcon.id = 'minusIcon' + jsonElementReply.id;
    minusIcon.addEventListener("click", () => {
        if (jsonElementReply.score > 0) {
            scoreValue--;
            const decrease = document.getElementById("score" + jsonElementReply.id);
            decrease.textContent = scoreValue;
            jsonElementReply.score = scoreValue;
            localStorage.setItem("myJSONData", JSON.stringify(myJSONData));
        }
    });

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');
    cardBody.id = 'cardBody' + jsonElementReply.id;

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
    userName.id = 'userNameReply' + jsonElementReply.id;
    userName.textContent = jsonElementReply.user.username;

    const currentUserContent = document.createElement('div');
    currentUserContent.setAttribute('class', 'currentUser-content white-text');
    currentUserContent.textContent = 'you';

    const createdAt = document.createElement('p');
    createdAt.setAttribute('class', 'gray-text');
    //CREATE AT DAY
    if (jsonElementReply.createdAtDay != null) {
        const timestamp = jsonElementReply.createdAtDay;
        const date = new Date(timestamp);

        today = new Date();
        past = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());

        function calcDate(date1, date2) {
            var diff = Math.floor(date1.getTime() - date2.getTime());
            let second = 1000;

            let seconds = Math.floor(diff / second);
            let minutes = Math.floor(seconds / 60);
            let hours = Math.floor(minutes / 60);
            let days = Math.floor(hours / 24);
            let months = Math.floor(days / 31);
            let years = Math.floor(months / 12);
            let message;
            if (years > 0) {
                message = years + " year(s) ago ";
            } else if (months > 0) {
                message = months + " months ago";
            } else if (days > 0) {
                message = days + " days ago";
            } else if (hours > 0) {
                message = hours + " hours ago";
            } else if (minutes > 0) {
                message = minutes + " minutes ago";
            } else if (seconds > 0) {
                message = seconds + " seconds ago";
            } else if (seconds == 0) {
                message = " just now";
            }
            return message;
        }
        dateTimeAgo = calcDate(today, past);
        createdAt.textContent = dateTimeAgo;
    } else {
        createdAt.textContent = jsonElementReply.createdAt;
    }

    //Only when there are delete and edit
    const cardDeleteEditContent = document.createElement('div');
    cardDeleteEditContent.setAttribute('class', 'deleteEdit-content');

    //Only when is my user DELETE
    const cardDelete = document.createElement('span');
    cardDelete.setAttribute('class', 'card-reply card-delete');
    cardDelete.addEventListener("click", () => {
        deleteComment(jsonElementReply.id, false, parentCommentID, jsonElementReply.id);
    });

    const deleteLink = document.createElement('p');
    deleteLink.setAttribute('class', 'red-text');
    deleteLink.id = 'deleteLink' + jsonElementReply.id;
    deleteLink.textContent = `Delete`;

    const deleteIcon = document.createElement('image');
    deleteIcon.setAttribute('class', 'delete-icon');
    deleteIcon.alt = "Ilustration from Frontend mentor";

    //Only when is my user EDIT
    const cardEdit = document.createElement('span');
    cardEdit.setAttribute('class', 'card-reply');
    cardEdit.addEventListener("click", () => {
        editComment(cardBody, cardMessage, content, jsonElementReply, false, cardEdit, cardDelete);
    });

    const editLink = document.createElement('p');
    editLink.setAttribute('class', 'blue-text');
    editLink.id = 'editLink' + jsonElementReply.id;
    editLink.textContent = `Edit`;

    const editIcon = document.createElement('image');
    editIcon.setAttribute('class', 'edit-icon');
    editIcon.alt = "Ilustration from Frontend mentor";

    const cardReply = document.createElement('span');
    cardReply.setAttribute('class', 'card-reply');
    cardReply.addEventListener("click", () => {
        createAddReply(jsonElementReply.id, false, parentCommentID, cardReply);
    });

    const replyLink = document.createElement('p');
    replyLink.setAttribute('class', 'blue-text');
    replyLink.textContent = `Reply`;

    const replyIcon = document.createElement('image');
    replyIcon.setAttribute('class', 'reply-icon');
    replyIcon.alt = "Ilustration from Frontend mentor";
    const cardMessage = document.createElement('div');
    cardMessage.setAttribute('class', 'card-message');

    const replyingTo = document.createElement('label');
    replyingTo.setAttribute('class', 'blue-text');
    replyingTo.id = 'replyingTo' + jsonElementReply.id;
    replyingTo.textContent = `@${jsonElementReply.replyingTo} `;

    const content = document.createElement('p');
    content.setAttribute('class', 'content gray-text');
    content.textContent = jsonElementReply.content;
    content.id = 'contentReply' + jsonElementReply.id;

    //appenchild
    commentReplyContainer.appendChild(cardReplies);
    cardReplies.appendChild(cardBox);
    cardBox.appendChild(plusIcon);
    cardBox.appendChild(score);
    cardBox.appendChild(minusIcon);
    cardReplies.appendChild(cardBody);
    cardBody.appendChild(cardHead);
    cardBody.appendChild(cardMessage);
    cardHead.appendChild(cardPrincipal);
    if (jsonElementReply.user.username == "juliusomo") {
        cardHead.appendChild(cardDeleteEditContent);
        cardDeleteEditContent.appendChild(cardDelete);
        cardDelete.appendChild(deleteIcon);
        cardDelete.appendChild(deleteLink);
        cardDeleteEditContent.appendChild(cardEdit);
        cardEdit.appendChild(editIcon);
        cardEdit.appendChild(editLink);
    } else {
        cardHead.appendChild(cardReply);
        cardReply.appendChild(replyIcon);
        cardReply.appendChild(replyLink);
    }
    cardMessage.appendChild(replyingTo);
    cardMessage.appendChild(content);
    cardPrincipal.appendChild(userImage);
    cardPrincipal.appendChild(userName);
    if (jsonElementReply.user.username == "juliusomo") {
        cardPrincipal.appendChild(currentUserContent);
    }
    cardPrincipal.appendChild(createdAt);
}

function createAddComment() {

    const commentContainer = document.getElementById('commentContainer');

    const cardComment = document.createElement('div');
    cardComment.setAttribute('class', 'card-comment');
    cardComment.id = myJSONData.comments.id;

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
        let inputCommentContent = document.getElementById('inputComment').value;
        const timestamp = Date.now();

        let newObj = {
            "id": id,
            "content": inputCommentContent,
            "createdAtDay": timestamp,
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
        localStorage.setItem("myJSONData", JSON.stringify(myJSONData));
        inputComment.value = "";
    });

    commentContainer.appendChild(cardComment);
    cardComment.appendChild(currentUserImage);
    cardComment.appendChild(inputComment);
    cardComment.appendChild(sendButton);
}

function createAddReply(cardIdCommentxReply, isComment, cardParentCommentID, cardReply) {

    let commentReplyContainer;
    let cardReplies;

    cardReply.setAttribute('class', 'disable-reply');
    const cardEditReply = document.createElement('div');
    cardEditReply.setAttribute('class', 'card-comment');

    const currentUserImage = document.createElement('img');
    currentUserImage.setAttribute('class', 'user-image');
    currentUserImage.setAttribute('src', myJSONData.currentUser.image.png);
    currentUserImage.alt = "Ilustration fron Frontend Mentor";

    const inputReply = document.createElement('textarea');
    inputReply.id = 'inputReply';
    inputReply.setAttribute('class', 'comment-input gray-text');
    inputReply.placeholder = "Add a reply...";

    let userName;
    let userNameReplyJson;
    if (isComment == true) {
        commentReplyContainer = document.getElementById('commentReplyContainer' + cardIdCommentxReply);
        userName = document.getElementById('username' + cardIdCommentxReply);
        userNameReplyJson = userName.textContent;
        commentReplyContainer.insertAdjacentElement("afterend", cardEditReply);

    } else {
        cardReplies = document.getElementById('cardReplies' + cardIdCommentxReply);
        userName = document.getElementById('userNameReply' + cardIdCommentxReply);
        userNameReplyJson = userName.textContent;
        cardEditReply.setAttribute('class', 'card-comment card-editReply');
        cardReplies.insertAdjacentElement("afterend", cardEditReply);
    }

    const sendReplyButton = document.createElement('button');
    sendReplyButton.setAttribute('class', 'white-text send-button');
    sendReplyButton.textContent = "REPLY";
    sendReplyButton.addEventListener("click", () => {
        let maxId = 0;
        for (let i = 0; i < myJSONData.comments.length; i++) {
            for (let j = 0; j < myJSONData.comments[i].replies.length; j++) {
                if (myJSONData.comments[i].replies[j].id > maxId) {
                    maxId = myJSONData.comments[i].replies[j].id;
                }
            }
        }

        let id = maxId + 1;
        let initialScore = 0;
        let inputreplyContent = document.getElementById('inputReply').value;
        const timestamp = Date.now();

        let newReplyObj = {
            "id": id,
            "content": inputreplyContent,
            "createdAtDay": timestamp,
            "score": initialScore,
            "replyingTo": userNameReplyJson,
            "user": {
                "image": {
                    "png": myJSONData.currentUser.image.png,
                    "webp": myJSONData.currentUser.image.webp
                },
                "username": myJSONData.currentUser.username
            }
        };
        const index = myJSONData.comments.findIndex(object => {
            return object.id === cardParentCommentID;
        });
        myJSONData.comments[index].replies.push(newReplyObj);
        createResponseHTML(newReplyObj, cardParentCommentID);
        cardEditReply.remove();
        localStorage.setItem("myJSONData", JSON.stringify(myJSONData));
        cardReply.setAttribute('class', 'card-reply');
    });
    cardEditReply.appendChild(currentUserImage);
    cardEditReply.appendChild(inputReply);
    cardEditReply.appendChild(sendReplyButton);
}

function deleteComment(cardIdCommentxReplyDelete, isComment, parentCommentID) {

    const modal = document.getElementById('modal');
    modal.style.display = "block";

    const modalContent = document.createElement('div');
    modalContent.setAttribute('class', 'modal-content');

    const modalTitle = document.createElement('h2');
    modalTitle.setAttribute('class', 'dark-text modal-textTitle');
    modalTitle.textContent = "Delete comment";

    const modalMessage = document.createElement('p');
    modalMessage.setAttribute('class', 'gray-text modal-text');
    modalMessage.textContent = `Are you sure you want to delete this 
    comment? This will remove your comment and can't be undone.`;

    const modalCancelButton = document.createElement('span');
    modalCancelButton.setAttribute('class', 'white-text modal-cancelButton');
    modalCancelButton.textContent = `NO, CANCEL`;
    modalCancelButton.addEventListener("click", () => {
        modal.style.display = 'none';
    });

    const modalDeleteButton = document.createElement('span');
    modalDeleteButton.setAttribute('class', 'white-text modal-deleteButton');
    modalDeleteButton.textContent = `YES, DELETE`;
    modalDeleteButton.addEventListener("click", () => {
        let index = myJSONData.comments.findIndex(object => {
            return object.id === parentCommentID;
        });
        let indexReply = myJSONData.comments[index].replies.findIndex(object => {
            return object.id === cardIdCommentxReplyDelete;
        });
        if (isComment == true) {
            const card = document.getElementById('cardComment' + cardIdCommentxReplyDelete);
            card.remove();
            myJSONData.comments.splice(index, 1);
        } else {
            const cardReplies = document.getElementById('cardReplies' + cardIdCommentxReplyDelete);
            cardReplies.remove();
            myJSONData.comments[index].replies.splice(indexReply, 1);
        }
        modal.style.display = "none";
        localStorage.setItem("myJSONData", JSON.stringify(myJSONData));
    });

    modal.appendChild(modalContent);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalMessage);
    modalContent.appendChild(modalCancelButton);
    modalContent.appendChild(modalDeleteButton);

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function editComment(cardBody, cardMessage, content, jsonEditCommentReply, isComment, cardEdit, cardDelete) {

    let replyingTo;
    let replyToEdit;
    let replyToWidth;

    cardEdit.setAttribute('class', 'disable-edit');
    cardDelete.setAttribute('class', 'disable-delete');
    if (!isComment) {
        cardDelete.setAttribute('class', 'disable-delete');
    }

    const inputEditComment = document.createElement('textarea');
    inputEditComment.setAttribute('class', 'edit-input gray-text');
    if (isComment) {
        inputEditComment.textContent = content.textContent;
    } else {
        inputEditComment.textContent = content.textContent;
        replyingTo = document.getElementById('replyingTo' + jsonEditCommentReply.id);
        replyToEdit = document.createElement('label');
        replyToEdit.setAttribute('class', 'gray-text label');
        replyToEdit.textContent = `@${jsonEditCommentReply.replyingTo}`;
        cardMessage.appendChild(replyToEdit);
        replyToWidth = replyToEdit.clientWidth - 10;
        inputEditComment.style.textIndent = replyToWidth + 'px';
        replyingTo.remove();
    }
    content.remove();

    const updateButton = document.createElement('button');
    updateButton.setAttribute('class', 'white-text update-button');
    updateButton.textContent = "UPDATE";
    updateButton.addEventListener("click", () => {
        if (!isComment) {
            cardMessage.appendChild(replyingTo);
            replyToEdit.remove();
        }
        content.textContent = inputEditComment.value;
        inputEditComment.remove();
        cardMessage.appendChild(content);
        updateButton.remove();
        cardEdit.setAttribute('class', 'card-reply');
        cardDelete.setAttribute('class', 'card-reply card-delete');
        if (!isComment) {
            cardDelete.setAttribute('class', 'card-reply card-delete');
        }
        jsonEditCommentReply.content = content.textContent;
        localStorage.setItem("myJSONData", JSON.stringify(myJSONData));
    });
    cardMessage.appendChild(inputEditComment);
    cardBody.appendChild(updateButton);
}

function showData() {
    const dataFromJson = localStorage.getItem("myJSONData");
    if (dataFromJson == null) {
        fetch('./data.json')
            .then(response => response.json())
            .then(data => {
                myJSONData = data;
                createInitialHTML();
            });
    } else {
        myJSONData = JSON.parse(dataFromJson);
        createInitialHTML();
    }
}
showData();

function createInitialHTML() {
    myJSONData.comments.forEach(comment => {
        createCommentHTML(comment);
        comment.replies.forEach(reply => {
            createResponseHTML(reply, comment.id);
        });
    });
    createAddComment();
}