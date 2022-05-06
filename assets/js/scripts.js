
async function validate() {
    showLoading()
    await delay()


    const values = getValues()
    if (!allValuesIsNumbers(values)) {
        // alert("invalido")
        return;
    }
    const result = calculate(values)
    if (result === 0) {
        showSuccess()
    } else {
        showError()
    }

}

function getValues() {
    const fields = Array.from(Array(11).keys())
    const values = fields.map(field => Number($(`#n${field}`).val()));
    return values;
}

function allValuesIsNumbers(values) {
    const results = values.map(value => (isNaN(value) || value === ""))
    return !results.includes(true);
}

function calculate(values) {
    const [n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10] = values;
    const result = n0 + n1 + n2 + n3 + n4 - n5 + n6 + n7 - n8 + n9 - n10;
    return result;
}

function showLoading() {
    new swal({
        title: "Validando fatura",
        text: "Aguarde...",
        imageUrl: './assets/img/loading.gif',
        showConfirmButton: false
    });
}

function showSuccess() {
    Swal.fire({
        icon: 'success',
        title: 'Fatura válidada com sucesso !',
        showConfirmButton: false,
    })
}

function showError() {
    Swal.fire({
        icon: 'error',
        title: 'Fatura inválida',
        showConfirmButton: false,
    })
}


async function delay() {
    await new Promise(resolve => setTimeout(resolve, 1000));
}






