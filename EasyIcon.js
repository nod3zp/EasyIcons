/*
    Module for Insert Icons in Header shop on Moscow OVH
    Author: nod3zp
    Special for https://darkplugins.ru/
*/
class EasyIcons {
    constructor(iconsArray)
    {
        iconsArray.forEach((icon)=>{
            document.querySelectorAll(icon.tag).forEach((currentObject)=>{
                if(currentObject.innerHTML == icon.where)
                {
                    currentObject.innerHTML = `<i class='${icon.icon}'></i>`;
                }
            });
        });
    }
}