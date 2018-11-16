function showPicText(whichPic)
{
    var source = whichPic.getAttribute("href");
    var text = whichPic.getAttribute("title");
    var placeHolder = document.getElementById("placeloader");
    placeHolder.setAttribute("src", source);
    var description=document.getElementById("description");
    document.getElementsByTagName("p")[0].setAttribute("title",text);//额外设置<p title="xxxx">
    description.firstChild.nodeValue=text; //设置<p>choose an image</p>的文本节点，用nodevalue
    console.log(description.childNodes[0].nodeValue)

}



/*function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];
    alert(body_element.nodeType)

    console.log(body_element.childNodes);

}
window.onload=countBodyChildren;*/
