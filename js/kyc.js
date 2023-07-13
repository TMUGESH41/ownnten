function submitComment() {
    var commentText = document.getElementById("comment").value;
    var commentNode = document.createTextNode(commentText);
    var commentElement = document.createElement("p");
    commentElement.appendChild(commentNode);
    document.getElementById("comments").appendChild(commentElement);
    document.getElementById("comment").value = "";
    console.log(commentNode);
}

function showModal() {
    var fileInput = document.getElementById('images').click();
    var results = document.getElementById("pic").innerHTML = fileInput;
    console.log(results);
}



