console.log(`Hello`)

let count = 0;
let counter = document.getElementById('counter')


function increase(){
    count++;
    counter.innerText = count;
    // console.log(count)
}

function decrease(){
    count--;
    counter.innerText = count;
    // console.log(count)
}

function reset(){
    count = 0;
    counter.innerText = count;
    // console.log(count)
    counter.innerHTML = "<mark>" + count + "</mark>"
}

function selectTheme(theme){

    let body =  document.getElementsByTagName("body")
    body[0].className = theme;

    let main = document.querySelector(`main`);
    main.className = theme;

    let buttons = document.getElementsByTagName(`button`)
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme;
        
    }
    // buttons.forEach(element => {});
}

