
const ratingButtons = document.querySelectorAll(".rating-button");
const submitButton = document.getElementById('submit');

    
    

 function selectRating(ratingButton) {
  const selectedRating = document.querySelector('.selected-rating     ')
    // remove selected rating from other buttons
   if (selectedRating) {
      selectedRating.classList.remove('selected-rating');
    }

    // mark this button as selected
    ratingButton.classList.add('selected-rating');
  }

        submitButton.addEventListener('click', function storeRating() {
        const selectedRating = document.querySelector(".selected-rating");
       if (selectedRating) {
         // store the selected rating and total rating in 'localStorage
         const totalRating = ratingButtons.length;
         const message = `You've selected ${selectedRating.innerHTML } out of ${totalRating}`;
         localStorage.setItem('selectedRating', selectedRating.innerHTML);
         localStorage.setItem('totalRating', totalRating);
         localStorage.setItem('message', message);
 
         // redirect the user to the thank you page
         window.location.href = 'thank-you.html';
       }
    })
    
    
       


