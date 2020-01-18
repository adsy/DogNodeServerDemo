

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.querySelector(".dog-img");
      const info = document.querySelector(".dog");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      img.style.display = "block";
      info.innerText = "";
    });
}

document.querySelector(".request-dog").addEventListener("click", addNewDoggo);