const keyApi = '2RkicnUHCaJ6Jlhyd0tKt6fu6CLQj8nI8lhXYT0k3kIE0zuY1RuRpawg';

    function cercaFoto(element) {
       let chiamata = fetch(`https://api.pexels.com/v1/search?query=${element}`, 
        {headers: {Authorization: keyApi}});

        chiamata.then((risposta) => risposta.json()).then((rispostaElaborata) => {
           document.getElementById('album').innerHTML = rispostaElaborata.photos.map((image) =>
        `<div class="col-12 col-md-6 col-lg-4 col-xl-2 ">
                      <div class="card shadow-sm">
                        <img src="${image.src.large}">
                        <div class="card-body">
                          <p class="card-text text-light">Name:
                            ${image.alt}
                          </p>
                          <p class="card-text text-light">
                            Author: ${image.photographer}
                          </p>
                          <div class="d-flex justify-content-center align-items-center mt-3">
                            <div class="btn-group">
                              <button type="button" class="btn btn-sm btn-outline-light"><i class="bi bi-bookmark"></i></button>
                              <button type="button" class="btn btn-sm btn-outline-light">Download</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
        `) 
        })  
    }