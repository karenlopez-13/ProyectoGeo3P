const listaloggedout = document.querySelectorAll('.logged-out');
const listaloggedin = document.querySelectorAll('.logged-in');

const datosdelacuenta = document.querySelector('.datosdelacuenta');

const configurarMenu = (user) => {
    if(user){
        db.collection('usuarios').doc(user.uid).get().then(doc => {
            const html = `
            <p> Nombre: ${doc.data().nombre}</p>
            <p> Correo: ${user.email}</p>
            <p> Telefono: ${doc.data().telefono}</p>
            <p> Direccion: ${doc.data().direccion}</p>
            `;
            datosdelacuenta.innerHTML = html;
        });
        listaloggedin.forEach(item => item.style.display = 'block');
        listaloggedout.forEach(item => item.style.display = 'none');
    }else{
        listaloggedin.forEach(item => item.style.display = 'none');
        listaloggedout.forEach(item => item.style.display = 'block');
    }
};

const listadeniñeras = document.getElementById('listadeniñeras');

const obtieneNiñeras = (data) => {
    if(data.length){
        let html = '';
        data.forEach(doc => {
            const ninera = doc.data();
            const columna = `
            <div class="col-12 col-md-4">
                <img src="${ ninera.imagen }" alt="${ ninera.nombre }">
                <p> ${ ninera.nombre } </p>
                <p class="text-danger"> $ ${ ninera.precio } </p>
                <a href="https://www.paypal.me/karenlopez/${ ninera.precio }" target="_blank">
                    <button class="btn btn-secondary"> Contratarla </button>
                </a>
            </div>
            `;
            html += columna;
        });
        listadeniñeras.innerHTML = html;
    }
    else{
        listadeniñeras.innerHTML = '<div class="container"> <p class="text-center"> Ingrese con sus claves para ver más información </p> </div>'
    }
};