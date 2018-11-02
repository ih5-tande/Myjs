function showPicText(whichPic)
{
    var source = whichPic.getAttribute("href");
    var placeHolder = document.getElementById("placeloader");
    placeHolder.setAttribute("src", source);
    var description=document.getElementById("description");
    var text=whichPic.getAttribute("title");
    console.log(description.childNodes[0].nodeValue);
};

function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];
    /alert(body_element.nodeType)/;

    /console.log(body_element.childNodes)/;

}
/window.onload=countBodyChildren;/