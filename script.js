function update(){

const now = new Date();
const hour = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

document.getElementById('hour').innerHTML = hour.toString().padStart(2,0);
document.getElementById('min').innerHTML=min.toString().padStart(2,0);
document.getElementById('sec').innerHTML=sec.toString().padStart(2,0);
}

update()
setInterval(update,1000)