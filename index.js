function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target');
}
function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}
function increaseRankBy(n){
  var rankedList = document.querySelector('.ranked-list');
  for (var i = 0; i < rankedList.children.length; i++) {
    rankedList.children[i].innerHTML = n //+ parseInt(rankedList.children[i].innerHTML);
  }
}
