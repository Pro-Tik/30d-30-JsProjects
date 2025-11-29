let toastbox = document.querySelector("#toastbox")
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>  Sorry The Submission Failed';
let invalidMssg= '<i class="fa-solid fa-circle-exclamation"></i> Sorry The response was invalid';

function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastbox.appendChild(toast);


    if(msg.includes('Failed')){
        toast.classList.add('error');
    }
    if(msg.includes('invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },6000);
}