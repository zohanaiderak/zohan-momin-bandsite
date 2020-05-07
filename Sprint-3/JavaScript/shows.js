let commentsAPIKey = "7395cb0b-0998-4427-adcc-f980b769873e";
let divwrap = document.createElement("div");
divwrap.setAttribute('class','mainDiv');
let sec = document.querySelector(".shows");
sec.appendChild(divwrap);

let promise = axios.get(`https://project-1-api.herokuapp.com/showdates?api_key=${commentsAPIKey}`);
promise.then(res =>{
    let showdates =  res.data;
    console.log(showdates);   
function displayComment(el2 , el4 ,el6){
    let divrow = document.createElement("div");
    divrow.setAttribute('class', "row");
    divwrap.appendChild(divrow);
    let divcol = document.createElement("div");
    divcol.setAttribute('class', "row__column");
    divrow.appendChild(divcol);
    let divstyl = document.createElement("div");
    divstyl.setAttribute('class', "row__column--styling");
    let divstyl2 = document.createElement("div");
    divstyl2.setAttribute('class', "row__column--styling2");
    let divstyl3 = document.createElement("div");
    divstyl3.setAttribute('class', "row__column--styling3");
    let pel1 = document.createElement('p');
    pel1.setAttribute('class', 'row-head');
    let pel2 = document.createElement('p');
    pel2.setAttribute('class', 'row-child');
    let pel3 = document.createElement('p');
    pel3.setAttribute('class', 'row-head');
    let pel4 = document.createElement('p');
    pel4.setAttribute('class', 'row-child');
    let pel5 = document.createElement('p');
    pel5.setAttribute('class', 'row-head');
    let pel6 = document.createElement('p');
    pel6.setAttribute('class', 'row-child');
    divstyl.appendChild(pel1);
    pel1.innerHTML = pel1.innerHTML + "DATE";
    divstyl2.appendChild(pel3);
    pel2.innerHTML = pel2.innerHTML + el2;
    divstyl2.appendChild(pel4);
    pel3.innerHTML = pel3.innerHTML + "VENUE";
    divstyl3.appendChild(pel5);
    pel4.innerHTML = pel4.innerHTML + el4;
    divstyl3.appendChild(pel6);
    pel5.innerHTML = pel5.innerHTML + "LOCATION";
    divstyl.appendChild(pel2);
    pel6.innerHTML = pel6.innerHTML + el6;
    divcol.innerHTML = divcol.innerHTML+""
    divcol.appendChild(divstyl);
    divcol.appendChild(divstyl2);
    divcol.appendChild(divstyl3);
}

for(var i = 0;i<showdates.length;i++){
    displayComment(showdates[i].date ,showdates[i].place ,showdates[i].location);
}

for(var i=1 ; i<showdates.length+1 ; i++ ){
    let divparent = document.querySelectorAll('.row__column');
    let divbtn = document.createElement('div');
    divbtn.setAttribute('class', 'row__column--styling4')
    let btn = document.createElement('button');
    btn.setAttribute('class', 'shows-button');
    btn.innerHTML= 'BUY TICKETS'
    divbtn.appendChild(btn);
    divparent[i].appendChild(divbtn);
}

for(var i=0;i<showdates.length;i++){
    let sechd = document.querySelectorAll(".row");
    let rowhd = sechd[i].querySelector('.row-child');
    rowhd.classList.add('row-child--date');
}
});
promise.catch(err => console.log('error',err));

let mainhd = document.createElement('div');
mainhd.setAttribute('class', 'row');
mainhd.classList.add('row__headShow');
let colhd = document.createElement('div');
colhd.setAttribute('class', 'row__column');
colhd.classList.add('col-height');
let hd1 = document.createElement('p');
hd1.setAttribute('class' , 'row__column--styling');
hd1.classList.add('row__head');
hd1.innerHTML = "DATE";
colhd.appendChild(hd1);
let hd2 = document.createElement('p');
hd2.setAttribute('class' , 'row__column--styling2');
hd2.classList.add('row__head');
hd2.innerHTML = "VENUE";
colhd.appendChild(hd2);
let hd3 = document.createElement('p');
hd3.setAttribute('class' , 'row__column--styling3');
hd3.classList.add('row__head');
hd3.innerHTML = "LOCATION";
colhd.appendChild(hd3);
let hd4 = document.createElement('button');
hd4.setAttribute('class' , 'btn-hidden');
mainhd.classList.add('row__headShow');
hd4.innerHTML = "         ";
colhd.appendChild(hd4);
let maindv = document.querySelector('.mainDiv');
mainhd.appendChild(colhd);
maindv.prepend(mainhd);

