// Get the buttons
let buttonYes = document.getElementById('yes');
let buttonNo = document.getElementById('no');
let buttonResult = document.getElementById('result');
// Get the images
let imageYes = document.querySelector('.image-yes');
let imageNo = document.querySelector('.image-no');
// Count the votes
let votesYes = 0;
let votesNo = 0;

buttonYes.addEventListener('click', function () {
    votesYes++;
    document.getElementById('votes-yes').innerHTML = votesYes;
});

buttonNo.addEventListener('click', function () {
    votesNo++;
    document.getElementById('votes-no').innerHTML = votesNo;
});

buttonResult.addEventListener('click', function () {
    verifyWinner(votesYes, votesNo);
});

function verifyWinner(votesYes, votesNo) {
    cleanResult();
    if (votesYes > votesNo) {
      document.querySelector('.image-yes').classList.remove('none');
    } else if (votesNo > votesYes) {
       document.querySelector('.image-no').classList.remove('none');
    } else {
        console.log('empate');
    }
}

function cleanResult() {
  imageYes.classList.add('none');
  imageNo.classList.add('none');
}