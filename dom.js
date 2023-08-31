var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor='green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}

//getElementByTagName

var li=document.getElementsByTagName('li');
for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor='#f4f4f4';
}