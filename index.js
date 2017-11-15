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
  var rankedList = document.querySelectorAll('.ranked-list');
  for (var childList in rankedList) {
    var children = childList.children;
    for (var i = 0; i < children.length; i++) {
    //  childList.children[i].innerHTML = n;
    }
  }
}
