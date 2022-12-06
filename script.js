let addToDoButton = document.getElementById('addToDo');
let toDoContainer=document.getElementById('toDoContainer'); //pristup elementima iz HTML
let inputField=document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
   
    var paragraph=document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText=inputField.value
    toDoContainer.appendChild(paragraph);
    inputField.value="";            //ostalja prazno polje posle unosa
    paragraph.addEventListener('click', function(){         //na klik kriza text
        paragraph.style.textDecoration='line-through'        // na klik kriza text
    })
    paragraph.addEventListener('dblclick', function(){       //brise uneseno polje
        toDoContainer.removeChild(paragraph)         //brise uneseno polje
    })

})