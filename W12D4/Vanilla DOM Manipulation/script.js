document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!


  const handleSubmit = (e) => {
        
        e.preventDefault();

      const placeNameInput = document.querySelector(".favorite-input");
      const placeName = placeNameInput.value;
      placeNameInput.value = "";

      const ul = document.getElementById("sf-places");
      const li = document.createElement("li");

      li.textContent = placeName;
      ul.appendChild(li);
  };

  const submitButton = document.querySelector(".favorite-submit");
  submitButton.addEventListener("click", handleSubmit);


  // adding new photos

  // --- your code here!


  const showPhoto = (e) => {
    const photoForm = document.querySelector(".photo-form-container");
    if (photoForm.className === ".photo-form-container") {
      photoForm.className = "photo-form-container hidden";
    } else {
      photoForm.className = "photo-form-container";
    }
  };

  const togglebutton = document.querySelector(".photo-show-button");
  togglebutton.addEventListener("click", showPhoto);

  const handlePhotoSubmit = (e) => {

      e.preventDefault();

      const urlInput = document.querySelector(".photo-url-input");
      const url = urlInput.value;
      urlInput.value = "";

      const newImg = document.createElement("img");
      newImg.src = url;

      const li = document.createElement("li");
      li.appendChild(newImg);

      const ul = document.querySelector(".dog-photos");
      ul.appendChild(li);
  };

  const photoSubmitButton = document.querySelector(".photo-url-submit");
  photoSubmitButton.addEventListener("click", handlePhotoSubmit);



});
