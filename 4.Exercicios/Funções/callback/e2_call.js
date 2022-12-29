let buttonClick = () => {
    document.getElementById('btn').style.cssText = `
        font-size:22px
    `
    console.log('funfou')
}

let btn = document.getElementById('btn').addEventListener("click",buttonClick)