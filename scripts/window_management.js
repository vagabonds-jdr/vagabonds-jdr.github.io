function displayWindowEvent(evObj)
{
    let window = document.getElementById("window");
    window.style.display = 'block';
    document.getElementById("windowTitle").innerHTML = evObj['nom'];
    document.getElementById("windowSub").innerHTML = "Par " + evObj['auteur'];
    document.getElementById("windowBody").innerHTML = evObj['text'];
    document.getElementById("windowHeader").style.backgroundImage  = "url('images/events/" + evObj['image'] +"')";

}

function closeWindow()
{
    let window = document.getElementById("window");
    window.style.display = 'none';
}