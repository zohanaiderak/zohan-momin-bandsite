var currentdate = new Date(); 
var datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear();
//+1 is added as month is an array starting january as 0.
let comments = [
    {
        'name': "Theodore Duncan",
        'timestamp': datetime,
        'comment':"How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
    },
    {
        'name': "Gary Wong",
        'timestamp': datetime,
        'comment':"Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
    },
    {
        'name': "Michael Lyons",
        'timestamp': datetime,
        'comment':"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
    }
];

let divUl = document.createElement("div");
divUl.setAttribute('id', 'div__form');
divUl.setAttribute('class', 'div__form');
document.getElementById('section').appendChild(divUl);

let btn = document.querySelector('.comments__form--submit');
btn.addEventListener('click', e =>{
    e.preventDefault();
    document.getElementById('div__form').innerHTML = "";
    let newcomment={};
    let text = document.getElementById('name');
    let textArea = document.getElementById('textArea');
    newcomment.name = text.value;
    newcomment.timestamp = datetime;
    newcomment.comment = textArea.value;
    comments.push(newcomment);
    function displayComment(name , timestamp, comment){
        let ul = document.createElement("ul");
        ul.setAttribute('class', "post");
        divUl.prepend(ul);
        let li = document.createElement('li');
        let pName = document.createElement('p');
        let pTime = document.createElement('p');
        let pComm = document.createElement('p');
        ul.appendChild(li);
        li.appendChild(pName);
        pName.innerHTML = pName.innerHTML + name;
        li.appendChild(pTime);
        pTime.innerHTML = pTime.innerHTML + timestamp;
        li.appendChild(pTime);
        pComm.innerHTML = pComm.innerHTML + comment;
        li.appendChild(pComm);
        li.innerHTML = li.innerHTML ;
        let ulComm = document.querySelector(".post");
        let allLi = ulComm.querySelectorAll("li");
        let l= allLi.length;
        let clrinput = document.querySelector(".comments");
        clrinput.reset();
        for (var i =0 ; i < l; i++){
            allLi[i].classList.add('post__comment');
        }
        let divf = document.querySelector('.div__form')
        let allp = divf.querySelectorAll("p");
        let le= allp.length;
        for (var i =0 ; i < le-1 ; i=i+3){
            allp[i].classList.add('post__comment--name');
        }
        for (var i =le-1 ; i >= 0; i=i-3){
            allp[i].classList.add('post__comment--text');
        }
        for (var i =le-2 ; i >= 0; i=i-3){
            allp[i].classList.add('post__comment--name');
            allp[i].classList.add('timestamp');
        }
    }
    
    for(var i = 0;i<comments.length;i++){
        displayComment(comments[i].name ,comments[i].timestamp ,comments[i].comment );
    } 
    for(var i=0 ; i<comments.length ; i++ ){
        let ulsel = document.querySelectorAll('.post');
        let secli = document.createElement('li');
        secli.setAttribute('class', 'post__dp')
        let faceimg = document.createElement('img');
        faceimg.setAttribute('class', 'post__dp-grey');
        secli.appendChild(faceimg);
        ulsel[i].prepend(secli);
        }
    }
);
    
function displayComment(name , timestamp, comment){
    let ul = document.createElement("ul");
    ul.setAttribute('class', "post");
    divUl.prepend(ul);
    let li = document.createElement('li');
    let pName = document.createElement('p');
    let pTime = document.createElement('p');
    let pComm = document.createElement('p');
    ul.appendChild(li);
    li.appendChild(pName);
    pName.innerHTML = pName.innerHTML + name;
    li.appendChild(pTime);
    pTime.innerHTML = pTime.innerHTML + timestamp;
    li.appendChild(pTime);
    pComm.innerHTML = pComm.innerHTML + comment;
    li.appendChild(pComm);
    li.innerHTML = li.innerHTML ;
    let ulComm = document.querySelector(".post");
    let allLi = ulComm.querySelectorAll("li");
    let l= allLi.length;
    for (var i =0 ; i < l; i++){
        allLi[i].classList.add('post__comment');
    }
    let divf = document.querySelector('.div__form')
    let allp = divf.querySelectorAll("p");
    let le= allp.length;
    for (var i =0 ; i < le-1 ; i=i+3){
        allp[i].classList.add('post__comment--name');
    }
    for (var i =le-1 ; i >= 0; i=i-3){
        allp[i].classList.add('post__comment--text');
    }
    for (var i =le-2 ; i >= 0; i=i-3){
        allp[i].classList.add('post__comment--name');
        allp[i].classList.add('timestamp');
    }
}

for(var i = 0;i<comments.length;i++){
    displayComment(comments[i].name ,comments[i].timestamp ,comments[i].comment );
}

for(var i=0 ; i<comments.length ; i++ ){
    let ulsel = document.querySelectorAll('.post');
    let secli = document.createElement('li');
    secli.setAttribute('class', 'post__dp')
    let faceimg = document.createElement('img');
    faceimg.setAttribute('class', 'post__dp-grey');
    secli.appendChild(faceimg);
    ulsel[i].prepend(secli); 
}
