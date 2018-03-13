
var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var towns = request.response;
    fillTowns(towns);
}
function fillTowns(JsonObj){
    var coso = JsonObj['towns'];

    for(var i = 0; i < coso.length; i++) {
        if (i != 2){
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myList = document.createElement('p');

            myH2.textContent = coso[i].name;
            myPara1.textContent = 'Motto: ' + coso[i].motto;
            myPara2.textContent = 'Year Founded: ' + coso[i].yearFounded;
            myPara3.textContent = 'Average Rain Fall:' + coso[i].averageRainfall;
            myPara4.textContent = 'Events:';

            var eventos = coso[i].events;
            for(var j = 0; j < eventos.length; j++) {
                var listItem = document.createElement('p');
                listItem.textContent = eventos[j];
                myList.appendChild(listItem);
            }
            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myList);
            section.appendChild(myArticle);
        }
    }
}
