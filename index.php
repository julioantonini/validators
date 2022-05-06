<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fórmulas</title>
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/styles.css" rel="stylesheet">
</head>

<body>

    <div class="nav">
        <div class="container">
            <div class="row">
                <div class="col"><img src="assets/img/logo.svg" height="40" /></div>
                <div class="col justify-content-right">
                    <ul class="menu">
                        <li><a href="/">Fórmulas</a></li>
                        <li><a href="masks.html">Máscaras</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <h1>Fórmulas</h1>
        <p class="subtitle">Exemplo de validação de fatura</p>
    </div>



    <form>
        <div class="container">
            <div class="row">
                <div class="col">
                    <p>Dados da fatura</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="n0" value="78.28" placeholder="" />
                        <label for="floatingInput">COSIP</label>
                    </div>
                </div>

                <div class="col">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="n1" value="0" placeholder="" />
                        <label for="floatingInput">Multas</label>
                    </div>
                </div>

                <div class="col">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="n2" value="0" placeholder="" />
                        <label for="floatingInput">Juros</label>
                    </div>
                </div>

                <div class="col">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="n3" value="0" placeholder="" />
                        <label for="floatingInput">Outras Cobranças</label>
                    </div>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="n4" value="0" placeholder="" />
                        <label for="floatingInput">Encargos</label>
                    </div>
                </div>

                <div class="col">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="n5" value="0" placeholder="" />
                        <label for="floatingInput">Descontos</label>
                    </div>
                </div>

                <div class="col">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="n6" value="988.48" placeholder="" />
                        <label for="floatingInput">Custo Consumo Ùnico Faturado [R$]</label>
                    </div>
                </div>

                <div class="col">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="n7" value="0" placeholder="" />
                        <label for="floatingInput"> Compensação violação indic [R$]</label>
                    </div>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="n8" value="0" placeholder="" />
                        <label for="floatingInput">Valor Desconto TUSD HFP [R$] </label>
                    </div>
                </div>

                <div class="col">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="n9" value="0" placeholder="" />
                        <label for="floatingInput">Custo Consumo Compensado [R$]</label>
                    </div>
                </div>

                <div class="col">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="n10" value="1066.76" placeholder="" />
                        <label for="floatingInput">Valor</label>
                    </div>
                </div>

                <div class="col"></div>

            </div>
            <br />


            <div class="row">
                <div class="col ">
                    <div class="col-formula">
                        COSIP + Multas + Juros + Outras Cobranças + Encargos - Descontos + Custo Consumo Ùnico Faturado
                        [R$] +
                        Compensação
                        violação indicadores [R$] - Valor Desconto TUSD HFP [R$] + Custo Consumo Compensado [R$] - Valor
                    </div>

                </div>
            </div>



            <br />
            <div class="row">
                <div class="col d-flex flex-row-reverse">
                    <button type="button" onclick="validate()" class="btn btn-success">Validar</button>
                </div>
            </div>
        </div>



    </form>
    <br />





    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/jquery/jquery.min.js"></script>
    <script src="assets/vendor/sweetalert2/dist/sweetalert2.all.min.js"></script>
    <script src="assets/js/scripts.js"></script>
</body>

</html>