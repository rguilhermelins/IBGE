const URL_REGIOES = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes`

const urlESTADOS = (id) => `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${id}/estados`;

const urlCIDADES = (id) => `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`


    fetch(URL_REGIOES)
        .then(response => response.json())
        .then(data => {
            data.map(cadaResult => {
                regiao.innerHTML += `<option value="${cadaResult.id}">${cadaResult.nome}</option>`
            });
        })


regiao.addEventListener('change', () => {
    estado.innerHTML = '<option> -- selecione --</option>';
    fetch(urlESTADOS(regiao.value))
        .then(response => response.json())
        .then(dados => {
            dados.map(est => {
                estado.innerHTML += `<option value="${est.id}">${est.nome}</option>`
            });
        });
}); 

 
estado.addEventListener('change', () => {
    cidade.innerHTML = '<option> -- selecione --</option>';
    fetch(urlCIDADES(estado.value))
    .then(response => response.json())
    .then(dados => {
        dados.map(cadaCidade => {
            cidade.innerHTML += `<option>${cadaCidade.nome}</option>`
        });
    })

});
