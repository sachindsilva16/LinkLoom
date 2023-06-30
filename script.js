var input = document.getElementById("input-form");
var linkForm = document.getElementById("link-form");

var errorMessage = document.getElementById("error-form");


linkForm.addEventListener('submit',submitForm);


function isValidUrl(str) {
    const pattern = new RegExp(
      '^([a-zA-Z]+:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
      'i'
    );
    return pattern.test(str);
  }



function submitForm(event){
    event.preventDefault();

    if(input.value === ""){
        errorMessage.innerHTML = "Please type something!";
        input.classList.add("border-red");
    } else if(isValidUrl(input.value) === true){
        alert("Success!");
    } else {
        errorMessage.innerHTML = "Please enter valid URL";
        input.classList.add("border-red");
    }
}