
let thisPage = 1;


let limit = 6;


let list = document.querySelectorAll('.list .item');

function loadItem(){
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((iem, key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none'
        }
    })
    listPage();
}


loadItem();
function listPage(){
    let count = Math.ceil(list.length / limit);
    document.querySelectorAll('.listpage').innerHTML = '';
    for (i = 1 ;  1 <= count; i++){
        let newPage = document.createElement('li')
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")")
        document.querySelector('.listpage').appendChild(newPage);
    }
}

function changePage(i)