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
                score.setAttribute('class', 'blue-text');
                score.textContent = comment.score;

                const minusIcon = document.createElement('img');
                minusIcon.setAttribute('class', 'minus-icon');
                minusIcon.alt = "Ilustration from Frontend Mentor";

                //appenchild

                container.appendChild(card);
                card.appendChild(cardBox);
                cardBox.appendChild(plusIcon);
                cardBox.appendChild(score);
                cardBox.appendChild(minusIcon);
            });


        });

}
showData();


