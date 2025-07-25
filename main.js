function message(){
    let name = document.getElementById("validate").value;
    let msg = document.getElementById("name2");

    if (name == ""){
        msg.innerText = "Please type in your name.";
        msg.style.color = "red";
    }

    else{
        msg.innerText = "Welcome " + name +"!";
        msg.style.color = "green";
    }
}

function numGen(){
    let random_number=Math.random()*10;

    document.getElementById("resultNum").innerText=Math.floor(random_number);
}