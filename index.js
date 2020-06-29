function getFirstSelector(z){
  return document.querySelector(z)
}

function nestedTarget(){
  return document.querySelector('#nested.target')
}

function increaseRankBy(n){
  const lis = document
  .getElementById('app')
  .getElementByTagName('ul li');
  for (let i=0;i<list.length;i++){
    lis[i].innerHTML = (lis[i].innerHTML+n).toString()
  }
}