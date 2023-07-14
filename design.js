function ChangeImage(){
    var pic =document.getElementById("bulb");
    if(pic.src.match("ON")){
        console.log("ON");
        pic.src="bulb_OFF (1).jpeg";
    }
    else{
        console.log("OFF");
        pic.src="bulb_ON (1).jpeg";
    }
}