let container = document.getElementById('container');
let array = [];
for (let i = 0; i < 10; i++) {
    let r = Tools.getRandom(0, 255);
    let g = Tools.getRandom(0, 255);
    let b = Tools.getRandom(0, 255);
  let box = new Box(container, {
      backgroundColor: 'rgb('+ r +','+ g +','+ b +')'
  })
  array.push(box);
}

setInterval(randomBox, 500);

randomBox();

function randomBox() {
    for(let i = 0; i < array.length; i++) {
        let box = array[i];
        box.random();
    }
  
  }