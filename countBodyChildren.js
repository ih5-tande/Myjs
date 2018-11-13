function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];

    console.log(body_element.childNodes);

}
window.onload=countBodyChildren;