let mascaras = {
    cnpj: [{
        exemplo: '00.000.000/0000-00',
        base: ['00.000.000/0000-00'],
        mascara: '\\d{2}(\\.\\d{3}){2}\\/\\d{4}\\-\\d{2}',
    },
    {
        exemplo: '00.***.***/****-00',
        base: ['00.000.000/0000-00'],
        mascara: '[0-9\\*]{2}(\\.[0-9\\*]{3}){2}\\/[0-9\\*]{4}\\-[0-9\\*]{2}',
    },
    {
        exemplo: '00000000000000',
        base: ['00000000000000'],
        mascara: '\\d{14}',
    }],
    data: [{
        exemplo: '30/05/2022',
        base: ['00/00/0000'],
        mascara: '\\d{2}\\/\\d{2}\\/\\d{4}',
    },
    {
        exemplo: '30/05/22',
        base: ['00/00/00'],
        mascara: '\\d{2}(\\/\\d{2}){2}',
    },
    {
        exemplo: '30/05/2022 ou 30/05/22',
        base: ['00/00/0000', '00/00/00'],
        mascara: '\\d{2}\\/\\d{2}\\/(\\d{4}|\\d{2})',
    },
    {
        exemplo: 'JAN/2022 ou JAN/22',
        base: ['xxx/0000', 'xxx/00'],
        mascara: '\\D{3}\\/(\\d{4}|\\d{2})',
    }],
    monetario: [{
        exemplo: '32.123.120,12',
        base: null,
        mascara: '\\d*((\\.\\d{3})*)?\\,\\d{2}',
    },
    {
        exemplo: '****23.120,12',
        base: null,
        mascara: '\**\\d*((\\.\\d{3})*)?\\,\\d{2}',
    },
    {
        exemplo: '32123120,12',
        base: null,
        mascara: '\\d*\\,\\d{2}',
    },
    {
        exemplo: '32123120.12',
        base: null,
        mascara: '\\d*\\.\\d{2}',
    }],
    cep: [{
        exemplo: '11060-001',
        base: ['00000-000'],
        mascara: '\\d{5}\\-\\d{3}',
    },
    {
        exemplo: '11060001',
        base: ['00000000'],
        mascara: '\\d{8}',
    }],
    uc: [{
        exemplo: '0000...n (apenas numérico)',
        base: null,
        mascara: '\\d*',
    },
    {
        exemplo: '1/2280550-1',
        base: ['0/0000000-0'],
        mascara: '\\d*\\/\\d*\\-\\d{1}',
    }],
    hashcode: [{
        exemplo: 'F7D1...XXXX...41C6',
        base: null,
        mascara: '[A-F0-9]*',
    },
    {
        exemplo: 'F7D1.1D70.XXXX...XXXX.41C6',
        base: null,
        mascara: '([A-F0-9]*){4}((\\.|\\s)([A-F0-9]*){4})*',
    }],
    codigobarras: [{
        exemplo: '836500002875 737500060006 001012022438 180116133141',
        base: ['836500002875 737500060006 001012022438 180116133141'],
        mascara: '\\d{12}(\\s\\d{12}){3}',
    },
    {
        exemplo: '1234.1234.2345.5432',
        base: ['0000.0000.0000.0000'],
        mascara: '\\d{4}(\\.\\d{4}){3}',
    }]
};

//Lista as categorias de máscara
function getMascaras() {
    return Object.keys(mascaras);
}

//lista os detalhes da mascara das categorias
function getInfoMascara(key) {
    return mascaras[key];
}

//lista todos os exemplos das mascaras
function getExemplos() {
    return getMascaras().map(m => mascaras[m].map(x => x.exemplo)).flat();
}

//faz a validação da máscara escolhida
function validaValor(v, m) {
    return !!(v.match(m.mascara) && (m.base.find(x => x.length == v.length) || m.base == null));
}


//EXEMPLOS:
//Função para listar tipos de mascaras disponíveis: getMascaras();
//Função para capturar detalhes de sub mascaras: getInfoMascara(descrição da mascara);
//Função para validar as mascaras: validaValor(valor input, getInfoMascara()[index selecionado]);

//EXEMPLOS PRÁTICOS
//O usuário digita o valor 12.***.***/****-90
//Carreganda lista de máscaras no input 1 com getMascaras();
//Usuário seleciona 'cnpj'
//Input 2 para seleção é carregado com getInfoMascara('cnpj');
//os inputs são carregados com a "key" exemplo retornado do getInfoMascara.
//o usuário seleciona o exemplo 1, habilita o botão
//ao clicar no botão é chamada a função: validaValor('12.***.***/****-90', getInfoMascara('cnpj')[1]);
//Exibe se o campo foi validado com sucesso ou não.


function populateMaskCategory() {
    $.each(getMascaras(), function (_, value) {
        $('<option>').val(value).text(value).appendTo($('#mask-category'));
    });
}

function populateMask() {
    $("#mask-category").on('change', function () {
        const key = $("#mask-category").val()
        const masks = getInfoMascara(key)
        $('#mask').find('option').remove();
        $('<option>').val("").text("Máscara").appendTo($('#mask'));
        let index = 0;
        $.each(masks, function (_, value) {
            $('<option>').val(index).text(value.exemplo).appendTo($('#mask'));
            index++;
        });
    });

}




async function delay() {
    await new Promise(resolve => setTimeout(resolve, 500));
}

async function validateMask() {
    const value = $("#value").val()
    const mask = $("#mask-category").val()
    const key = $("#mask").val()

    if (!value || !mask || !key) return

    showLoading();
    const infoMask = getInfoMascara(mask);
    const result = validaValor(value, infoMask[key]);

    await delay();

    if (result) { showSuccess() } else { showError() }
}

function showLoading() {
    new swal({
        title: "Validando",
        text: "Aguarde...",
        imageUrl: './assets/img/loading.gif',
        showConfirmButton: false
    });
}


function showSuccess() {
    Swal.fire({
        icon: 'success',
        title: 'O valor é válido!',
        showConfirmButton: false,
    })
}

function showError() {
    Swal.fire({
        icon: 'error',
        title: 'O valor é inválido!',
        showConfirmButton: false,
    })
}

$(document).ready(function () {
    populateMaskCategory()
    populateMask();
});






