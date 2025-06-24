import { useEffect, useState } from "react";
import "./Home.css";
import Timer from "./Timer";
import Redes from "./Redes";

export default function Home() {
  const nDias = 14;
  const [dias, setDias] = useState(nDias);
  const [strDias, setStrDias] = useState(nDias);

  const nHoras = 0;
  const [horas, setHoras] = useState(nHoras);
  const [strHoras, setStrHoras] = useState(nHoras);

  const nMinutos = 0;
  const [minutos, setMinutos] = useState(nMinutos);
  const [strMinutos, setStrMinutos] = useState(nMinutos);

  const nSegundos = 11;
  const [segundos, setSegundos] = useState(nSegundos);
  const [strSegundos, setStrSegundos] = useState(nSegundos);

  useEffect(() => {
    setStrSegundos(segundos);
    setStrMinutos(minutos);
    setStrHoras(horas);
    setStrDias(dias);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSegundos(() => {
        if (segundos) {
          return segundos - 1;
        } else {
          setMinutos(() => {
            if (minutos) {
              return minutos - 1;
            } else {
              setHoras(() => {
                if (horas) {
                  return horas - 1;
                } else {
                  setDias(() => {
                    if (dias) {
                      return dias - 1;
                    } else {
                      return 364;
                    }
                  });
                  return 23;
                }
              });
              return 59;
            }
          });
          return 59;
        }
      });
      setStrSegundos(segundos);
      setStrMinutos(minutos);
      setStrHoras(horas);
      setStrDias(dias);
    }, 1000);
  }, [segundos]);

  return (
    <>
      <h1>WE'RE LAUNCHING SOON</h1>
      <div className="allTimerCont">
        <Timer tipo="DAYS" tempo={[strDias]} />
        <Timer tipo="HOURS" tempo={[strHoras]} />
        <Timer tipo="MINUTES" tempo={[strMinutos]} />
        <Timer tipo="SECONDS" tempo={[strSegundos]} />
      </div>
      <div className="redes">
        <Redes logo="logo-facebook" />
        <Redes logo="logo-pinterest" />
        <Redes logo="logo-instagram" />
      </div>
    </>
  );
}
