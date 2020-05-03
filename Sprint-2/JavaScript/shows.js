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
    divcol.innerHTML = divcol.innerHTML+""
    divcol.appendChild(divstyl);
    divcol.appendChild(divstyl2);
    divcol.appendChild(divstyl3);
}

for(var i = 0;i<showTime.length;i++){
    displayComment(showTime[i].date ,showTime[i].datetext ,showTime[i].venue ,showTime[i].venueadd ,showTime[i].Location ,showTime[i].Locationadd);

}

for(var i=0 ; i<showTime.length ; i++ ){
    let divparent = document.querySelectorAll('.row__column');
    let divbtn = document.createElement('div');
    divbtn.setAttribute('class', 'row__column--styling4')
    let btn = document.createElement('button');
    btn.setAttribute('class', 'shows-button');
    btn.innerHTML= 'BUY TICKETS'
    divbtn.appendChild(btn);
    divparent[i].appendChild(divbtn);
}

// for(var i=1;i<showTime.length;i++){
//     let sechd = document.querySelectorAll(".row");
//     let rowhd = sechd[i].querySelector('.row-head');
//     rowhd.setAttribute('class', 'row-head2');
// }
// for(var i=1;i<showTime.length;i++){
//     let sechd = document.querySelectorAll(".row div:nth-child(2)");
//     let rowhd = sechd[i].querySelector('.row-head');
//     rowhd.setAttribute('class', 'row-head2');
// }
// for(var i=1;i<showTime.length;i++){
//     let sechd = document.querySelectorAll(".row div:nth-child(3)");
//     let rowhd = sechd[i].querySelector('.row-head');
//     rowhd.setAttribute('class', 'row-head2');
// }

if (window.innerWidth > 767){
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
}