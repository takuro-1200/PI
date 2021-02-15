document.getElementById('pi').textContent = Math.PI
document.getElementById('floor').textContent = Math.floor(Math.PI);

function point(num,digit){
  const mover = 10 ** digit
  return point = Math.floor(Math.PI * mover) / mover
}
document.getElementById('pi2').textContent = point(Math.PI,2);