//<![CDATA[
function iniciarGMTMenosSeis()
{
  const ahora = new Date();
  let ano = ahora.getUTCFullYear();
  let mes = ahora.getUTCMonth();
  let diaDelMes = ahora.getUTCDate();
  let diaDeLaSemana = ahora.getUTCDay();
  let hora = ahora.getUTCHours();
  let minuto = ahora.getUTCMinutes();
  let segundo = ahora.getUTCSeconds();
  hora -= 6;
  if (hora < 0)
  {
    hora += 24;
    diaDeLaSemana -= 1;
    diaDelMes -= 1;
  }
  if (diaDeLaSemana < 0)
  {
    diaDeLaSemana += 7;
  }
  if (diaDelMes < 0)
  {
    switch (mes)
    {
      case 0:
        diaDelMes += 31;
        break;
      case 1:
        diaDelMes += 31;
        break;
      case 2:
        if ((ano - 2025) % 4 == 0) diaDelMes += 28;
        else diaDelMes += 29;
        break;
      case 3:
        diaDelMes += 31;
        break;
      case 4:
        diaDelMes += 30;
        break;
      case 5:
        diaDelMes += 31;
        break;
      case 6:
        diaDelMes += 30;
        break;
      case 7:
        diaDelMes += 31;
        break;
      case 8:
        diaDelMes += 31;
        break;
      case 9:
        diaDelMes += 30;
        break;
      case 10:
        diaDelMes += 31;
        break;
      case 11:
        diaDelMes += 30;
    }
    mes -= 1;
  }
  if (mes < 0)
  {
    mes += 12;
    ano -= 1;
  }
  if (diaDelMes == 1) diaDelMes = "1.º";
  if (hora < 12) antesDespuesDelMediodia = "AM";
  else antesDespuesDelMediodia = "PM";
  hora %= 12;
  if (hora == 0) hora = 12;
  if (minuto < 10) minuto = "0" + minuto;
  if (segundo < 10) segundo = "0" + segundo;
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  const diasDeLaSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  document.getElementById("pGMTMenosSeis").innerHTML = "<span style='font-weight: bold;'>Tiempo del Centro de la Hora de México:</span> En la Cd. de México, ent. de la Cd. Mx., México, es " + diasDeLaSemana[diaDeLaSemana] + " " + diaDelMes + " de " + meses[mes] + " de " + ano + ", " + hora + ":" + minuto + ":" + segundo + " " + antesDespuesDelMediodia + " GMT−6 (90°W).";
  window.setTimeout(iniciarGMTMenosSeis, 1000);
}
//]]>
