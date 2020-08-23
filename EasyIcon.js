/*
    Module for Insert Icons in Header shop on Moscow OVH
    Author: nod3zp
    Special for https://darkplugins.ru/
*/
let $ = document;
let style = $.createElement('style');
style.appendChild($.createTextNode("@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css');"));
$.getElementsByTagName('head')[0].appendChild(style);
class EasyIcons {
    constructor(iconsArray)
    {
        iconsArray.forEach((icon)=>{
            document.querySelectorAll(icon.tag).forEach((currentObject)=>{
                if(currentObject.innerHTML == icon.where)
                {
                    if(icon.add)
                    {
                        currentObject.innerHTML =  `<i class='${icon.icon}'></i> ` + currentObject.innerHTML;
                    }
                    else
                    {
                        currentObject.innerHTML = `<i class='${icon.icon}'></i>`;
                    }
                }
            });
        });
    }
}   