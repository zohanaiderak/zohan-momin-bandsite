var currentdate = new Date(); 
var datetime = (currentdate.getMonth()+1)+"/"+currentdate.getDate()+"/"+currentdate.getFullYear();

let commentsAPIKey = "7395cb0b-0998-4427-adcc-f980b769873e";
let getcomments = () => {
    axios
    .get(`https://project-1-api.herokuapp.com/comments?api_key=${commentsAPIKey}`)
    .then((results)=>{
        Commenting(results);
    })
    .catch((err) => ('error',err));
}
getcomments();

    
//+1 is added as month is an array starting january as 0.

let divUl = document.createElement("div");
divUl.setAttribute('id', 'div__form');
divUl.setAttribute('class', 'div__form');
document.getElementById('section').appendChild(divUl);

Commenting = (res) =>{
    comments =  res.data;
    console.log(comments);
    let btn = document.querySelector('.comments');
    btn.addEventListener('submit', e =>{
    e.preventDefault();
    document.getElementById('div__form').innerHTML = "";   //to clear the comments section upon click and then the code runs and re enters all comments.
    let newcomment={};
    let text = document.getElementById('name');
    let textArea = document.getElementById('textArea');
    newcomment.name = text.value;
    newcomment.timestamp = datetime ;
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
        // setInterval((e) => {
        //     let ptime = document.querySelectorAll('.timestamp');
        //     timestamp = timestamp + 1 ;
        //     for(i=0;i<comments.length;i++){
        //         if(timestamp<59){
        //             ptime[i].innerHTML = " ";
        //             ptime[i].innerHTML = timestamp + ' m ago';
        //         }
        //         if(timestamp>59){
        //             ptime[i].innerHTML = " ";
        //             ptime[i].innerHTML = timestamp + ' h ago';
        //         }
        //         ;
        //     }
        // }, 60000);   
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
)

    
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
    
    // setInterval((e) => {
    //     let ptime = document.querySelectorAll('.timestamp');
    //     timestamp = timestamp + 1 ;
    //     for(i=0;i<comments.length;i++){
    //         if(timestamp<59){
    //             ptime[i].innerHTML = " ";
    //             ptime[i].innerHTML = timestamp + ' m ago';
    //         }
    //     }
    // }, 60000);
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




