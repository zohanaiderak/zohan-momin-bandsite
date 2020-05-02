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
let divrow = document.createElement("div");
divrow.setAttribute('class', "row");
divwrap.appendChild(divrow);
function displayComment(el1 , el2){
    let divcol = document.createElement("div");
    divcol.setAttribute('class', "row__column");
    divrow.appendChild(divcol);
    let divstyl = document.createElement("div");
    divstyl.setAttribute('class', "row__column--styling");
    divcol.appendChild(divstyl);

    let pel1 = document.createElement('p');
    let pel2 = document.createElement('p');
//     let pComm = document.createElement('p');
//     ul.appendChild(li);
       divstyl.appendChild(pel1);
       pel1.innerHTML = pel1.innerHTML + el1;
       divstyl.appendChild(pel2);
       pel2.innerHTML = pel2.innerHTML + el2;
//     li.appendChild(pTime);
//     pComm.innerHTML = pComm.innerHTML + comment;
//     li.appendChild(pComm);
       divcol.innerHTML = divcol.innerHTML
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
    displayComment(showTime[i].date ,showTime[i].datetext);
    displayComment(showTime[i].venue ,showTime[i].venueadd);
    displayComment(showTime[i].Location ,showTime[i].Locationadd);
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