function showPic (whichPic)
{
    var source = whichPic.getAttribute("href");
    var placeHolder = document.getElementById("placeloader");
    placeHolder.setAttribute("src", source);

};

function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];
    /alert(body_element.nodeType);/
    console.log(body_element.childNodes[7].nodeType);
    console.log(body_element.childNodes);

}
window.onload=countBodyChildren;