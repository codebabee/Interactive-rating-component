 //display the selected rating
 const displayRating = document.getElementById("rating");
 const selectedRating = localStorage.getItem('selectedRating');
 const totalRating = localStorage.getItem('totalRating');
 const message = localStorage.getItem('message');
 if (selectedRating && totalRating && message) {
     displayRating.innerHTML = message;
 } 