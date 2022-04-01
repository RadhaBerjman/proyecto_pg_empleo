const cards = document.getElementById("cards"); 


fetch("https://6243ad813da3ac772b053c05.mockapi.io/trabajo")
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);
  
    const infoCards = data;
    let varAux = "";
    for (const info of infoCards) {
      varAux += `
        <div class="col">
            <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${info.Puesto}</h5>
                        <p class="card-text">${info.Empresa}</p>
                        <p class="card-text">${info.Fecha}</p>
                        <p class="card-text">${info.Tag1}</p>

                        <button img src="https://s3-alpha-sig.figma.com/img/b07c/c187/777d5cb5039fac40876a5adf2689846a?Expires=1649635200&Signature=C4V-sDbHOn1VQKgOrFMS5HSzLnpI2CNuuQDka1oQE-m5OlP1SkySpAOz~5Y7h4OqYbrfJ8UyYE4VE4MRrxzvvjb4R2ad5Dk6Q~TPUKeUgYDmU2F3JuEqA5uC~JyIplr9lBPaNKBPq7oX-9Q0J3zf~JiwdaUOZlLHp6AA2QFrPX--XFJ9WPhzlrcFLUPEokxYcsg3x9l-u09KWOoGOQWjIJoz-RmBAQTCxvhxQUroIT5rqsJNo8OQiFha3zS6D0v-K6jJOUyNYe4J-e54WgKjIehc1K4z8PiG4bL4ozijBM60RohjREf9qUxb4~48tJjC7cLAhgZoH9d0NT8rh~Z6-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" id="tachito"<button/>
                        <button img src="https://s3-alpha-sig.figma.com/img/0632/12dc/3626e9c80db62b23ab89a857c0c45e7a?Expires=1649635200&Signature=MKysCO4WGpFPX3aMnbigA7PBsaY2gAfVZWZ~TK9RUhCsom8sy31R-A5Wb8Pc2dzOGJHHoTtaDKMtaF1a0903EDIXNd1CzYnpXTHWslf~ELC-i-yy2r1XX07ZEolr1A6BqtVnd7SDcpnXqNuhq8zxfi2imFIa6aMC3RBtCCQzy0vWmNMOuMQFdQwo6znfktomrgj-TKsveazYXBr6BVdqmHD01885BtX1kbEfgzdF90YXjtt7UccwfxdaFA-iKCG4m-tEXNX0Bfo3shF2yCFVPz5B2LwUVCGFenpu0mTZo08xEss3CaGMPaRlDUnTQ~UA1Z6y0lcDqIALJ6l5wadViA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" id="lapiz"<button/>


                    </div>
            </div>
        </div>`;
    }
    cards.innerHTML=varAux
    
    const lapiz = document.getElementById("lapiz")
    const tachito = document.getElementById("tachito")
    
    console.log(lapiz)
    console.log(tachito)

    lapiz.onclick = ()=>{
      console.log("apreteboton")
    }
    tachito.onclick = ()=>{
      console.log("apreteboton")
    }

    tachito.addEventListener("click", () => {
      div_eliminar.classList.toggle("modal-none");
    });
    
  
  });

 