function Kreni(id){
    let on = document.getElementById(id);
    on.play();
    console.log("Pusti");
}

function Prekini(id){
    let off = document.getElementById(id);
    off.pause();
    off.currentTime = 0;
    console.log("Prekini");
}
  
  function showDescription(title, description) {
    document.getElementById("animal-title").textContent = title;
    document.getElementById("animal-description").textContent = description;
    document.getElementById("description-modal").style.display = "block";
  }
  
  function closeDescriptionModal() {
    document.getElementById("description-modal").style.display = "none";
  }