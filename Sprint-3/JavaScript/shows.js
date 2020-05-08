let commentsAPIKey = "7395cb0b-0998-4427-adcc-f980b769873e";
let getshows = () =>{ 
            axios
            .get(`https://project-1-api.herokuapp.com/showdates?api_key=${commentsAPIKey}`)
            .then((results) =>{
                showTime(results);
            })
            .catch((err) => ('error',err));
}
getshows();

let divwrap = document.createElement("div");
divwrap.setAttribute('class','mainDiv');
let sec = document.querySelector(".shows");
sec.appendChild(divwrap);

showTime = (res) =>{
    showdates =  res.data;
    console.log(showdates);
    function displayShows(object){
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
        pel1.innerText = pel1.innerText + "DATE";
        divstyl2.appendChild(pel3);
        pel2.innerText = pel2.innerText + object.date;
        divstyl2.appendChild(pel4);
        pel3.innerText = pel3.innerText + "VENUE";
        divstyl3.appendChild(pel5);
        pel4.innerText = pel4.innerText + object.place;
        divstyl3.appendChild(pel6);
        pel5.innerText = pel5.innerText + "LOCATION";
        divstyl.appendChild(pel2);
        pel6.innerText = pel6.innerText + object.location;
        divcol.innerText = divcol.innerText + ""
        divcol.appendChild(divstyl);
        divcol.appendChild(divstyl2);
        divcol.appendChild(divstyl3);
    }

    for(var i = 0;i<showdates.length;i++){
        displayShows(showdates[i]);
    }
    for(var i=0 ; i<showdates.length; i++ ){
        let divparent = document.querySelectorAll('.row__column');
        let divbtn = document.createElement('div');
        divbtn.setAttribute('class', 'row__column--styling4')
        let btn = document.createElement('button');
        btn.setAttribute('class', 'shows-button');
        btn.innerText= 'BUY TICKETS'
        divbtn.appendChild(btn);
        divparent[i].appendChild(divbtn);
    }
    for(var i=0;i<showdates.length;i++){
        let sechd = document.querySelectorAll(".row");
        let rowhd = sechd[i].querySelector('.row-child');
        rowhd.classList.add('row-child--date');
    }
    
    let mainhd = document.createElement('div');
    mainhd.setAttribute('class', 'row');
    mainhd.classList.add('row__headShow');
    let colhd = document.createElement('div');
    colhd.setAttribute('class', 'row__column');
    colhd.classList.add('col-height');
    let hd1 = document.createElement('p');
    hd1.setAttribute('class' , 'row__column--styling');
    hd1.classList.add('row__head');
    hd1.innerText = "DATE";
    colhd.appendChild(hd1);
    let hd2 = document.createElement('p');
    hd2.setAttribute('class' , 'row__column--styling2');
    hd2.classList.add('row__head');
    hd2.innerText = "VENUE";
    colhd.appendChild(hd2);
    let hd3 = document.createElement('p');
    hd3.setAttribute('class' , 'row__column--styling3');
    hd3.classList.add('row__head');
    hd3.innerText = "LOCATION";
    colhd.appendChild(hd3);
    let hd4 = document.createElement('button');
    hd4.setAttribute('class' , 'btn-hidden');
    mainhd.classList.add('row__headShow');
    hd4.innerText = "         ";
    colhd.appendChild(hd4);
    let maindv = document.querySelector('.mainDiv');
    mainhd.appendChild(colhd);
    maindv.prepend(mainhd);
}