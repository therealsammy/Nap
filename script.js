let detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {

    event.preventDefault();

    // Collect information from the form

    let destName = event.target.elements['name'].value;
    let destLocation = event.target.elements['location'].value;
    let destPhoto = event.target.elements['photo'].value;
    let destDesc = event.target.elements['description'].value;

    // Clear the form

    for (let i = 0; i < detailsForm.length; i++) {

        detailsForm.elements[i].value = "";
    }

    // Create card here

    let destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

    let wishListContainer = document.getElementById('destination_container');

    if (wishListContainer.children.length === 0) {
        document.getElementById('title').innerHTML = "My Wish List"
    }

    // Add the card

    document.querySelector('#destination_container').appendChild(destCard);



}


function createDestinationCard(name, location, photoURL, description) {

    let card = document.createElement('div');
    card.className = 'card';

    let img = document.createElement('img');
    img.setAttribute('alt', name);

    let constantPhotoUrl = "images/signpost.jpg";

    if (photoURL.length === 0) {
        img.setAttribute('src', constantPhotoUrl);
    } else {
        img.setAttribute('src', photoURL);
    }

    card.appendChild(img);

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    let cardSubTitle = document.createElement('h4');
    cardSubTitle.innerText = location;
    cardBody.appendChild(cardSubTitle);

    if (description !== 0) {
        let cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    let cardRemoveBtn = document.createElement('button');
    cardRemoveBtn.innerText = 'Remove';

    cardRemoveBtn.addEventListener('click', removeDestination);
    cardBody.appendChild(cardRemoveBtn);

    card.appendChild(cardBody);

    return card;
}

function removeDestination(event) {
    let card = event.target.parentElement.parentElement;
    card.remove();
}