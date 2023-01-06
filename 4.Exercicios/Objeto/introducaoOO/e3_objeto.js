let obj = {}
function isEmpty (obj){
    if (obj == undefined){
        console.log("Empty")
    } else {console.log('is not empty')}
}

/* tentativa acima errada, resposta certa abaixo*/

function isEmpty(obj) {
    for (let key in obj) {
      // if the loop has started, there is a property
      return false;
    }
    return true;
  }

console.log(isEmpty(obj))