

const container = document.getElementById('listIt');

// save data upon refresh
function keepData(){
    localStorage.setItem("data", container.innerHTML);
}

function setdata(){
    container.innerHTML = localStorage.getItem('data');
}
setdata();


const iconDark = document.getElementById('use');
function darkTheme(){
    var change = document.body;
    var moon = document.querySelector('fa-moon');
change.classList.toggle('dark');
keepData();
}





const add = document.getElementById('add');
const input = document.getElementById('inputt');
// const container = document.getElementById('listIt');

add.addEventListener('click', function(){
    console.log('clicked');
if(input.value === ''){
alert('Enter your task');
}
else{
    const li = document.createElement('li');
    li.classList.add('multiline');
    li.innerHTML = input.value;
    container.appendChild(li);
    const span = document.createElement('span');
    span.attribute = "spanIt";
    span.innerHTML = '&#x2717;';
    li.appendChild(span);
}
input.value="";
keepData();

});


container.addEventListener('click',function(e){
    console.log('meee');

    if(e.target.tagName === "LI"){
e.target.classList.toggle("checked");
keepData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
    keepData();
},false);





