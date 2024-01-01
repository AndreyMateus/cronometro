//Crônometro Dois
//! Refazendo o script normal de uma forma MAIS OTIMIZADA E QUE ECONOMIZA RECURSOS.
// OBS: utilizar muitos OUVINTES/LISTERNES consome BASTANTE RECURSOS, então ao invés disso USAREMOS SOMENTE "UM" e ele alterará sua função com base no elemento clicado.

//! Vamos proteger todas as variáveis para quem NÃO FIQUEM EM ESCOPO GLOBAL, então criaremos uma função.
function cronometro() {
  const displayTime = document.querySelector("#display");
  const botaoIniciar = document.querySelector("#botao-iniciar");
  const botaoPausar = document.querySelector("#botao-pausar");
  const botaoZerar = document.querySelector("#botao-zerar");

  function retornaTempo(milisegundos) {
    const data = new Date(milisegundos);

    // retornando SOMENTE o TEMPO da DATA
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  //! automaticamente zerando o TEMPO
  let milisegundos = 0;

  let funcaoContarTempo;

  document.addEventListener("click", (event) => {
    if (event.target === botaoIniciar) {
      displayTime.classList.remove("pausado");
      //! limpando a executação da função anterior, caso contrário ele somará as EXECUÇÕES e terá a mesma função executando várias vezes.
      clearInterval(funcaoContarTempo);
      funcaoContarTempo = setInterval(() => {
        milisegundos++;
        //! milisegundos * 1000  TRANSFORMARÁ OS MILESEGUNDOS EM SEGUNDOS.
        displayTime.innerHTML = retornaTempo(milisegundos * 1000);
      }, 1000);
    } else if (event.target === botaoPausar) {
      clearInterval(funcaoContarTempo);
      displayTime.classList.add("pausado");
    } else if (event.target === botaoZerar) {
      clearInterval(funcaoContarTempo);
      displayTime.classList.remove("pausado");
      milisegundos = 0;
      displayTime.textContent = "00:00:00";
    }
  });
}
cronometro();
