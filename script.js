function getcnydata()
{
    fetch('https://restcountries.eu/rest/v2/all').then(function(resp){
    return resp.json()
    }).then(function(data){ 
        foo(data)})
}

getcnydata();

function foo(data)
{
    let container = document.createElement("div")
    container.setAttribute('class','container')

    let row = document.createElement("div")
    row.setAttribute('class','row')

    data.forEach(element => {
        let col = document.createElement("div")
        col.setAttribute('class','col-4 mb-3')

        let card = document.createElement("div")
        card.setAttribute('class','card h-100')

        let imgcard = document.createElement("img")
        imgcard.setAttribute('class','card-img-top')
        imgcard.setAttribute('src',element.flag)

        let cardbody = document.createElement("div")
        cardbody.setAttribute('class','card-body')

        let cardtitle = document.createElement("h4")
        cardtitle.setAttribute('class','card-title')
        cardtitle.innerHTML = element.name
        let cardtext = document.createElement("div")
        cardtext.setAttribute('class',"card-text")
        cardtext.innerHTML = element.capital + "-" + element.region + "-" + element.population + "-" + element.area; 
        cardbody.append(cardtitle,cardtext)
        card.append(imgcard,cardbody)
        col.append(card)
        row.append(col)
    });
    container.append(row)
    document.body.append(container)
}
