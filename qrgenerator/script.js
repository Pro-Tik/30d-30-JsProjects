const URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const btn =document.querySelector("#generate");
const text = document.querySelector("#input-field");
;


function showQr(){
    const send= text.value.trim();
    if (!send) {
    // Clear the image when there is no text
    document.querySelector("#qr-img").removeAttribute("src");
    return;
  }
   const ourURL = `${URL}${encodeURIComponent(send)}`;
   document.querySelector("#qr-img").src = ourURL;
}

btn.addEventListener("click", showQr);


