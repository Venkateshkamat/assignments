setInterval(() => {
   let dt = new Date;
    let hr = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();
    let ms =dt.getMilliseconds();
    let flag = "AM"
    if(hr>12) flag = "PM"
    console.clear()
    console.log(`${hr}:${min}:${sec}\t${hr%12}:${min}:${sec} ${flag}`);
}, 1000);