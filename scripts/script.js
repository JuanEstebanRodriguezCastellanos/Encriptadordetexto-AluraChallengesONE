function encriptar()
{
    let contenedorTexto = document.getElementById('textoEntrada');
    let texto = contenedorTexto.value;

    let nuevoTexto = '';

    texto.split('').forEach(letra => 
        {
            switch(letra)
            {
                case 'a':
                {
                    nuevoTexto += 'ei';
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

    contenedorTexto.value = '';
    document.getElementById('resultado').innerHTML = texto;
    document.getElementById('respuesta').style.display = 'block';
    document.getElementById('vacio').style.display = 'none';
    document.getElementById("botonCopiar").innerText = "Copiar";
}

function desencriptar()
{
    let contenedorTexto = document.getElementById('textoEntrada');
    let texto = contenedorTexto.value;

    texto = texto.replace(/ei/g, 'a');
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');

    contenedorTexto.value = '';
    document.getElementById('resultado').innerText = texto;
    document.getElementById('respuesta').style.display = 'block';
    document.getElementById('vacio').style.display = 'none';
    document.getElementById("botonCopiar").innerText = "Copiar";
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
            document.getElementById("botonCopiar").innerText = "Copiado";
        }, 
        function(err) {
            alert("Error al copiar el texto: " + err);
        }
    );
}