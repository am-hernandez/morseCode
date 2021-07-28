// get span element for encode tab
let tabEncode = document.getElementById("tab_encode");
// get span element for decode tab
let tabDecode = document.getElementById("tab_decode");
// get div container id for encoding
let toMorse = document.getElementById("toMorse");
// get div container id for decoding
let fromMorse = document.getElementById("fromMorse");

// when encode tab is clicked, decode div container will be hidden
tabEncode.addEventListener("click", function(){
    fromMorse.classList.add("hidden");
    tabDecode.classList.remove("pressed");
    ////and encode div container will no longer be hidden
    toMorse.classList.remove("hidden");
    tabEncode.classList.add("pressed");
});


// when decode tab is clicked, encode div container will be hidden
tabDecode.addEventListener("click", function(){
    toMorse.classList.add("hidden");
    tabEncode.classList.remove("pressed");
    ////and decode div container will no longer be hidden
    fromMorse.classList.remove("hidden");
    tabDecode.classList.add("pressed");
});
