function clock(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return console.log(`${hour}:${minute}:${second}`)
}


setInterval(clock,1000)