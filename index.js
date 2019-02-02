function getFirstSelector(selector){function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(nested, target){
  return document.querySelector('#nested .target');
}
function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list li');
  console.log(lis.toString);
  for(let i = 0; i < lis.length; i++){
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
  }
}
/*
function deepestChild(){
  const grandNode = document.querySelector('div#grand-node');
  //list of children elements organized by depth
  const listByDepth = [[grandNode,0]];
  //list of next elements to search for children
  const depth = 0
  const next = [[grandNode,0];
  while(next.length>1){
    depth = next[0][1] + 1;
    const children = next[0][0].childNodes;
    for (var child in children) {
      listByDepth.push([child,depth]);
      next.push([child,depth]);
    }
    next.shift();
  }
}
*/
function deepestChild(){
  const grandNode = document.querySelector('div#grand-node');
  let nextNode = grandNode;
  while(next.length > 0){
    if(nextNode.hasChildNodes()){
      let nextNode = nextNode.firstChild;
    }else{
      return nextNode;
    }
  }
}
