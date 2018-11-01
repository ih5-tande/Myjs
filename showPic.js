function showPic (whichPic)
{
    var source = whichPic.getAttribute("href");
    var placeHolder = document.getElementById("placeloader");
    placeHolder.setAttribute("src", source);
    var body_element = document.getElementsByTagName("body")[0];
    console.log(body_element.childNodes);
}