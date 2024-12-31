var a = document.createElement('a');
var linkText = document.createTextNode("ru site");
a.appendChild(linkText);
a.title = "ru site";
a.href = "https://mail.ru/";
a.style = "overflow: auto; position: fixed; height: 0pt; width: 0pt";
document.body.appendChild(a);
