/* Funções sincronicas */

let number = [1, 2, 4, 7, 3, 5, 6];

number.sort((a, b) => a - b);

console.log(number);

/* funções assicronicas */

function download(url, callback) {
  setTimeout(() => {
    //script download...
    console.log(` download file in ${url}`);
    //script de processamento da foto

    callback(url);
  }, 3000);
}

function process(picture) {
  console.log(` process file... ${picture}`);
}

let url = "http://localhost:3030";
download(url, process);
