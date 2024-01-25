
function popup(id) {
  const popupbox = document.getElementById(id);
  console.log(popupbox);
  popupbox.style.display = "block";
  event.stopPropagation(); 
}

window.addEventListener('click', function(event){
  const popups = document.querySelectorAll('.popup');
  popups.forEach(popup => {
    if (popup.contains(event.target)) {
     
    } else {
      popup.style.display = 'none';
    }
  });
});






