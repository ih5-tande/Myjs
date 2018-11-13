function showPicText(whichPic)
{
    var source = whichPic.getAttribute("href");
    var placeHolder = document.getElementById("placeloader");
    placeHolder.setAttribute("src", source);
    var description=document.getElementById("description");
    var text = whichPic.getAttribute("title");
    //设置p标签内的属性，value为text内容
    document.getElementsByTagName("p")[0].setAttribute("value",text);
    //设置文本的值，要用nodevalue
    description.firstChild.nodeValue=text;
    console.log(description.childNodes[0].nodeValue)

}
/*document.getElementByTagName("p")[0].setAttribute('value',text);*/


/*function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];
    alert(body_element.nodeType)

    console.log(body_element.childNodes);

}
window.onload=countBodyChildren;*/
