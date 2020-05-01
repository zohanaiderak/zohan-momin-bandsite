let comments = [
    {
        'name': "Michael Lyons",
        'timestamp':"04/30/2020",
        'comment':"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
    },
    {
        'name': "Gary Wong",
        'timestamp':"04/30/2020",
        'comment':"Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
    },
    {
        'name': "Theodore Duncan",
        'timestamp':"04/30/2020",
        'comment':"How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
    }
]

let ul = document.createElement("ul");
ul.setAttribute("class" , "post");
document.getElementById('section').appendChild(ul); 
function displayComment(object1){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = li.innerHTML + object1;
    }

displayComment(comments[0].name)
displayComment(comments[0].timestamp);
displayComment(comments[0].comment);
displayComment(comments[1].name);
displayComment(comments[1].timestamp);
displayComment(comments[1].comment);
displayComment(comments[2].name);
displayComment(comments[2].timestamp);
displayComment(comments[2].comment);




let btn = document.querySelector('.comments__form--submit');
btn.addEventListener('click', e =>{
    e.preventDefault();
    let text = document.getElementById('name');
    let newcomment={};
    let item = comments.unshift(newcomment);
    newcomment.name = text.value;
    comments.push(newcomment);
    
    // document.querySelector('.post').prepend(item);
});

console.log(comments.length);
    

// let btn = document.querySelector('.comments__form--submit');

// btn.addEventListener('click', e =>{
//     e.preventDefault();
//     let comm = document.getElementById('textArea');
//     let item = document.createElement("LI");
//     item.innerHTML=comm.value;
//     document.querySelector('.post').prepend(item);    
// });
// btn.addEventListener('click', e =>{
//     e.preventDefault();
//     let text = document.getElementById('name');
//     let item = document.createElement("LI");
//     item.innerHTML =text.value;
//     document.querySelector('.post').prepend(item);    
// });

let ulComm = document.querySelector(".post");
let allLi = ulComm.querySelectorAll("li");
let l= allLi.length;
for (var i =0 ; i < l-1 ; i=i+3){
    allLi[i].classList.add('post__name');
}
for (var i =l-1 ; i >= 0; i=i-3){
    allLi[i].classList.add('post__comment');
}
for (var i =l-2 ; i >= 0; i=i-3){
    allLi[i].classList.add('post__name');
    allLi[i].classList.add('timestamp');
}