const contactores = [
    {
        id: 0,
        marca: 'chint',
        img: 'imagenes/chint2.jpg',
        tension: [12,24,110,220,380],
        corriente: [10,12,18,22,32,40,50,80,10]
    },
    {
        id: 1,
        marca: 'abb',
        img: 'imagenes/abb2.jpg',
        tension: [12,24,110,220,380],
        corriente: [10,12,18,22,32,40,50,80,10]
    },
    {
        id: 2,
        marca: 'schneider',
        img: 'imagenes/schneider2.jpg',
        tension: [12,24,110,220,380],
        corriente: [10,12,18,22,32,40,50,80,10]
    },
    {
        id: 3,
        marca: 'montero',
        img: 'imagenes/montero2.jpg',
        tension: [12,24,110,220,380],
        corriente: [10,12,18,22,32,40,50,80,10]
    },
]



const contenedor = document.querySelector('.contenedor');  


contactores.forEach(element => {
    let template = `
    <div class="d-flex justify-content-evenly carddd" id="${element.id}">
    <div class="card-cont-img"><img class="img-fluid" src="${element.img}"></div>
    <div class="card-body">
    <h1>${element.marca}</h1>
            <button type="button" class="btn btn-primary btn-card">
            abrir
            </button>
        </div>    
        </div>
    </div>

    `
    contenedor.innerHTML += template
})

contenedor.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn-card')){
        const id = e.target.parentElement.parentElement.id;
        switch (id) {
            case '0':
                Swal.fire({
                    title: 'Sweet!',
                    title: `${contactores[id].marca}`,
                    imageUrl: `${contactores[id].img}`,
                    imageWidth: 300,
                    imageAlt: 'Custom image',
                  })
                break;
            case '1':
                Swal.fire({
                    title: 'Sweet!',
                    title: `${contactores[id].marca}`,
                    imageUrl: `${contactores[id].img}`,
                    imageWidth: 300,
                    imageAlt: 'Custom image',
                  })
                break;
            case '2':
                Swal.fire({
                    title: `${contactores[id].marca}`,
                    imageUrl: `${contactores[id].img}`,
                    imageWidth: 300,
                    imageAlt: 'Custom image',
                  })
                break;
            case '3':
                Swal.fire({
                    title: 'Sweet!',
                    title: `${contactores[id].marca}`,
                    imageUrl: `${contactores[id].img}`,
                    imageWidth: 300,
                    imageAlt: 'Custom image',
                  })
                break;
        
            default:
                break;
        }
    }
})

