var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor='green';


//QuerySelector
//Make the 2nd item have green background color
var item = document.querySelector('.list-group-item:nth-child(2)');
item.style.backgroundColor='green';

//Make the 3rd item invisible
var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.visibility='hidden';


//Using QuerySelectorALL change the font color to green for 2nd item in the item list
var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='blue';
}

//Using QuerySelectorALL change the font color to green for 2nd item in the item list

var items=document.querySelectorAll('.list-group-item');
items.style.backgroundColor='red';
items[2].style.backgroundColor='pink';