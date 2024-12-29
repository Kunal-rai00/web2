// let initialCouter = 0;

// function counter(){
//     initialCouter += 1;
//     console.log(`counter: ${initialCouter}`);
// }

// setInterval(counter, 1000)

let initialCouter = 0;

function counter(){
    initialCouter += 1;
    console.log(`counter: ${initialCouter}`);
    setTimeout(counter, 1000);
}

counter()