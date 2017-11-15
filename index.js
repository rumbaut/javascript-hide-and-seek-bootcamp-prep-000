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
  for (var child in rankedList.children) {
  
      child.innerHTML = parseInt(child.innerHTML) + n;
    
  }
}
