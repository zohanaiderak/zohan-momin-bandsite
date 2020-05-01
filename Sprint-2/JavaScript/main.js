let comments = [
    {
        'name': "michael lyons",
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

    