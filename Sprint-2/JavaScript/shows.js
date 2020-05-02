let showTime = [
    {
        'date': "DATE",
        'datetext': "Mon Dec 17 2020",
        'venue':"VENUE",
        'venueadd':"Ronald Lane",
        'Location' : "LOCATION",
        'Locationadd': "San Francisco, CA"
    },
    {
        'date': "DATE",
        'datetext': "Tue Jul 18 2019",
        'venue':"VENUE",
        'venueadd':"Pier 3 East",
        'Location' : "LOCATION",
        'Locationadd': "San Francisco, CA"
    },
    {
        'date': "DATE",
        'datetext': "Fri Jul 22 2019",
        'venue':"VENUE",
        'venueadd':"View Loungue",
        'Location' : "LOCATION",
        'Locationadd': "San Francisco, CA"
    },
    {
        'date': "DATE",
        'datetext': "Sat Aug 11 2020",
        'venue':"VENUE",
        'venueadd':"Hyatt Agency",
        'Location' : "LOCATION",
        'Locationadd': "San Francisco, CA"
    },
    {
        'date': "DATE",
        'datetext': "Fri Sep 05 2019",
        'venue':"VENUE",
        'venueadd':"Moscow Center",
        'Location' : "LOCATION",
        'Locationadd': "San Francisco, CA"
    },
    {
        'date': "DATE",
        'datetext': "Wed Aug 11 2019",
        'venue':"VENUE",
        'venueadd':"Press Club",
        'Location' : "LOCATION",
        'Locationadd': "San Francisco, CA"
    }
];

let divwrap = document.createElement("div");
divwrap.setAttribute('class','mainDiv');
let sec = document.querySelector(".shows");
sec.appendChild(divwrap);

    
function displayComment(el1 , el2 , el3, el4 , el5, el6){
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
    let pel2 = document.createElement('p');
    let pel3 = document.createElement('p');
    let pel4 = document.createElement('p');
    let pel5 = document.createElement('p');
    let pel6 = document.createElement('p');
//     let pComm = document.createElement('p');
//     ul.appendChild(li);
       divstyl.appendChild(pel1);
       pel1.innerHTML = pel1.innerHTML + el1;
       divstyl.appendChild(pel2);
       pel2.innerHTML = pel2.innerHTML + el2;
       divstyl2.appendChild(pel3);
       pel3.innerHTML = pel3.innerHTML + el3;
       divstyl2.appendChild(pel4);
       pel4.innerHTML = pel4.innerHTML + el4;
       divstyl3.appendChild(pel5);
       pel5.innerHTML = pel5.innerHTML + el5;
       divstyl3.appendChild(pel6);
       pel6.innerHTML = pel6.innerHTML + el6;
//     li.appendChild(pTime);
//     pComm.innerHTML = pComm.innerHTML + comment;
//     li.appendChild(pComm);
       divcol.innerHTML = divcol.innerHTML
       divcol.appendChild(divstyl);
       divcol.appendChild(divstyl2);
       divcol.appendChild(divstyl3);
//     li.innerHTML = li.innerHTML ;
//     let ulComm = document.querySelector(".post");
//     let allLi = ulComm.querySelectorAll("li");
//     let l= allLi.length;
//     for (var i =0 ; i < l; i++){
//         allLi[i].classList.add('post__comment');
//     }
//     let divf = document.querySelector('.div__form')
//     let allp = divf.querySelectorAll("p");
//     let le= allp.length;
//     for (var i =0 ; i < le-1 ; i=i+3){
//         allp[i].classList.add('post__comment--name');
//     }
//     for (var i =le-1 ; i >= 0; i=i-3){
//         allp[i].classList.add('post__comment--text');
//     }
//     for (var i =le-2 ; i >= 0; i=i-3){
//         allp[i].classList.add('post__comment--name');
//         allp[i].classList.add('timestamp');
//     }
}

for(var i = 0;i<showTime.length;i++){
    displayComment(showTime[i].date ,showTime[i].datetext ,showTime[i].venue ,showTime[i].venueadd ,showTime[i].Location ,showTime[i].Locationadd);

}

// for(var i=0 ; i<comments.length ; i++ ){
//     let ulsel = document.querySelectorAll('.post');
//     let secli = document.createElement('li');
//     secli.setAttribute('class', 'post__dp')
//     let faceimg = document.createElement('img');
//     faceimg.setAttribute('class', 'post__dp-grey');
//     secli.appendChild(faceimg);
//     ulsel[i].prepend(secli); 
//     // divUl.prepend(faceimg);
//     // ulsel[i].parentNode.insertBefore(faceimg , ulsel[i]);
// }