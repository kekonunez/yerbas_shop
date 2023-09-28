const yerbas = [
    {
      nombre: "Canarias 1kg",
      precio: 3763,
      descripcion: "Se compone principalmente de polvo con hojas muy pequeñas y cortadas, sin palo. Su sabor es fuerte y amargo, y su textura casi cremosa.",
      imgUrl: "https://estilorganico.com/3585-full_default/yerba-mate-x-500-gr-canarias.jpg"
    },
    {
        nombre: "Kurupi Menta y Boldo 500g",
        precio: 1749,
        descripcion: "La mezcla efectiva de las hierbas medicinales que la componen ofrece una acción antiácida, principal beneficio de este producto 100% natural.",
        imgUrl: "https://grupomaterojo.com.ar/wp-content/uploads/Productos-Grupo-Mate-Rojo-YM-Kurupi-Menta-y-boldo-02.jpg"
    },
    {
        nombre: "Kurupi Con Anis 500g",
        precio: 1856,
        descripcion: "Su suave aroma y sabor proporcionan al consumidor la combinación exacta a la hora de consumir un delicioso mate.",
        imgUrl: "https://dpapagayo.com/wp-content/uploads/2020/02/YERBA-KURUPI-ANIS-500Gr.png",
        stock: false
    },
    {
        nombre: "Playadito 1kg",
        precio: 1909,
        descripcion: "Está considerada óptima para obtener un producto único que permita una infusión o mate de rico sabor, suave y rendidor.",
        imgUrl: "https://jumboargentina.vtexassets.com/arquivos/ids/711224/Yerba-Mate-Playadito-Suave-X1kg-1-854539.jpg?v=637938633804770000"
    },
    {
        nombre: "La Merced Barbacua 500g",
        precio: 1308.72,
        descripcion: "Se elabora con un proceso de secado artesanal al calor del fuego de leña, similar al utilizado por los indios guaraníes.",
        imgUrl: "https://jumboargentina.vtexassets.com/arquivos/ids/621310/Yerba-Mate-La-Merced-Barcbacua-O-c-500g-1-857360.jpg?v=637473138291000000",
        stock: false
    },
    {
        nombre: "Mañanita 500g",
        precio: 849,
        descripcion: "Esta yerba mate de marca reconocida y calidad garantizada te ofrece un sabor suave y equilibrado, ideal para compartir con amigos y familiares en cualquier momento del día.",
        imgUrl: "https://arjosimarprod.vteximg.com.br/arquivos/ids/159155-1000-1000/Yerba-Flex-Ma-anita-500-gr-1-7867.jpg?v=637414761963170000"
    },
    {
      nombre: "Taragui 1kg",
      precio: 1610,
      descripcion: "Está hecha a partir de hojas deshidratadas y trituradas, permitiéndonos preparar una infusión con el mate amargo, mate dulce o con mate cocido.",
      imgUrl: "https://hiperlibertad.vtexassets.com/arquivos/ids/170436/YERBA-TARAGUI-1-KG-1-11259.jpg?v=637414176186570000"
    },
    {
      nombre: "Union Suave 1kg",
      precio: 1740,
      descripcion: "Es una yerba de perfil ligero y rendidora al cebar. Disfrutarás de mates con amargor leve y sabor definido.",
      imgUrl: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/1136/3175/7790387014310_02_1__51026.1654263133.jpg?c=2"
    },
    {
        nombre: "Aguantadora 1kg",
        precio: 1405,
        descripcion: "Esta yerba mate de sabor tradicional suave es perfecta para compartir con amigos y familiares en cualquier momento del día",
        imgUrl: "https://tienda.montecarlo.com.ar/wp-content/uploads/2020/11/aguantadora-tradicional-1kg_iZ943373701XvZgrandeXpZ1XfZ174912900-33514654663-1XsZ174912900xIM.jpg"
    },
    {
        nombre: "Amanda 1kg",
        precio: 1565,
        descripcion: "No es muy ácida y está lejos de ser intensa, hachas paraguayas que dan una patada enérgica después de los primeros sorbos.",
        imgUrl: "https://www.rimoldimayorista.com.ar/datos/uploads/mod_catalogo/31308/amanda-yerba-1kg-603e32162285d.jpg"
    },
    {
        nombre: "Cachamate Clásica 500g ",
        precio: 882,
        descripcion: "Una yerba mate tradicional, sin agregado de hierbas. Con 12 meses de estacionamiento natural, brinda un sabor suave y duradero.",
        imgUrl: "https://images.rappi.com.ar/products/274640776264_ymsogjxxeqhb_377832626372_ruxnjozvkpvp_424725_1.jpeg",
        stock: false
    },
    {
        nombre: "Cahamate con Hierbas 1kg",
        precio: 895,
        descripcion: "Una cuidada combinacion de yerba mate y hierbas de las sierras. Su sabor fresco y mentolado en equilibrio con su aroma suave y citrico ofrecen una experiencia unica.",
        imgUrl: "https://tangofoodsusa.com/cdn/shop/products/Cachamate_mezcla_de_hierbas_1kg_1200x1200.jpg?v=1554744170"
    },
];

const yerbasRow = document.getElementById("yerbas-row");

yerbas.forEach((yerba, index) => {
    var stockBadge = ""
    if(yerba.stock == false){
        stockBadge = `<span class="badge text-bg-danger position-absolute end-0 mt-2 me-2">Sin Stock</span>`
    }
    const card = `
    <div class="col-3 mb-4 d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                    ${stockBadge}
                    <img src="${yerba.imgUrl}" class="card-img-top" alt="${yerba.nombre}">
                    <div class="card-body">
                      <h5 class="card-title">${yerba.nombre}</h5>
                      <h6>$${yerba.precio}</h6>
                      <p class="card-text">${yerba.descripcion}</p>
                    </div>
                  </div>
            </div>`;
    
    yerbasRow.innerHTML += card;
});






   
