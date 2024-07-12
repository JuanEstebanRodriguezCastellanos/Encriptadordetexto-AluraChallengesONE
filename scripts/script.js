function encriptar(texto)
{
    let nuevoTexto = '';

    texto.split('').forEach(letra => 
        {
            switch(letra)
            {
                case 'a':
                {
                    nuevoTexto += 'ai';
                    break;
                }
                case 'e':
                {
                    nuevoTexto += 'enter';
                    break;
                }
                case 'i':
                {
                    nuevoTexto += 'imes';
                    break;
                }
                case 'o':
                {
                    nuevoTexto += 'ober';
                    break;
                }
                case 'u':
                {
                    nuevoTexto += 'ufat';
                    break;
                }
                default:
                {
                    nuevoTexto += letra;
                    break;
                }
            }

        }
    );

    return nuevoTexto;
}

function desencriptar(texto)
{
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');

    return texto;
}

function verificarLetras(tipo)
{
    let contenedorTexto = document.getElementById('textoEntrada');
    let texto = contenedorTexto.value;

    abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', ',', '.', '¡', '!', '¿', '?', ';'];

    let correcto = true;

    correcto = texto.split('').every((letra) => abecedario.includes(letra)) && texto!='';

    if(correcto)
    {
        let nuevoTexto= '';

        switch(tipo)
        {
            case 'encriptar':
            {
                nuevoTexto = encriptar(texto);
                break;
            }
            case 'desencriptar':
            {
                nuevoTexto = desencriptar(texto);
                break;
            }
        }

        document.getElementById('resultado').innerHTML = nuevoTexto;
        document.getElementById('respuesta').style.display = 'inline-flex';
        document.getElementById('vacio').style.display = 'none';
        document.getElementById("botonCopiar").innerText = "Copiar";
        document.getElementById('advertencia').classList.remove('advertencia');
    }
    else
    {
        document.getElementById('textoEntrada').focus();
        document.getElementById('advertencia').className = 'advertencia';
        document.getElementById('respuesta').style.display = 'none';
        document.getElementById('vacio').style.display = 'inline-flex';
    }

    contenedorTexto.value = '';
}

function configuracionInicial()
{
    document.getElementById('respuesta').style.display = 'none';
}

function copiar()
{
    let resultado = document.getElementById("resultado");
    navigator.clipboard.writeText(resultado.innerText).then(
        function() {
            document.getElementById("botonCopiar").innerText = "Hecho";
        }, 
        function() {
            alert("No se pudo copiar el texto");
        }
    );
}