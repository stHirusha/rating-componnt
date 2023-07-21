let selectedDiv = null;
let rate = null;
const button = document.getElementById('btn');

function changeColor(div) {
  if (selectedDiv) {
    // Reset the color of the previously selected div
    selectedDiv.style.backgroundColor = "";
    // Reset the color of the child elements inside the previously selected div
    const textElements = selectedDiv.querySelectorAll("p");
    textElements.forEach(function(p) {
      p.style.color = "";
    });
  }

  // Apply the color change to the newly selected div
  div.style.backgroundColor = 'hsl(25, 97%, 53%)';
  const textElements = div.querySelectorAll("p");
  textElements.forEach(function(p) {
    p.style.color = '#fff';
    rate = p.textContent;
  });

  // Update the selectedDiv variable to the newly selected div
  selectedDiv = div;
  document.getElementById('rating-result').innerHTML = rate;
}

btn.addEventListener('click',function(){
   window.location.href = "thankyou.html"
})


