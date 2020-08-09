let myNodeList = document.querySelectorAll('input'); //összes input type mező

//Több elemet akarunk módosítani? - Tegyük külön függvénnyel! :
// 3 változóval: sel, amit módosítunk, amire
function massModify (selector, attribute, value) {
    let nodeList = document.querySelectorAll(selector);
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i][attribute] = value;
    }
}
massModify('input','placeholder','érték'); //meghívva az input-ra

//Fontos!
// nodeList[i] [attribute] :
//     kb. uaz mint a nodeList.attribute = value - de itt nem fix.attribútum hn 1változóból jön a kulcs
// - hence the  [ ]
massModify ('input', 'title', 'érték') // mód.ható bármi más is