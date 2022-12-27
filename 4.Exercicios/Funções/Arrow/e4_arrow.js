let question = 'yes'

let ask = (question == 'yes') ?
    () => 'you agreed':
    () => 'you rejected';


console.log(ask())



