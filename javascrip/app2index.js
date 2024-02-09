let row  = document.getElementById('row')
let  respuesta = fetch("http://localhost:3000/news")
.then(r => {
    return r.json();
})
.then(d =>{

    d.forEach(elementos => {

        let col =  document.createElement('div')
        col.classList.add("col-md-12","mt-5");
        row.appendChild(col);

        let card =  document.createElement('div');
        card.classList.add("card");
        col.appendChild(card);

        let card_body = document.createElement('div');
        card_body.classList.add("card-body");
        card.appendChild(card_body);

        let p = document.createElement('p');
        card_body.appendChild(p);
        p.innerText = elementos.anunciado;

    
    console.table(elementos)

    });
    })