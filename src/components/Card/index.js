import React, { useState, useEffect } from "react";
import CardProximos from "../CardProximos";
import "./style.css";

export default function Card(props) {
  const data = props.data;
  const proximosDias = props.data.forecast.forecastday;
  const [uv, setUV] = useState();

  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const semana = {
    Mon: "seg",
    Tue: "ter",
    Wed: "qua",
    Thu: "qui",
    Fri: "sex",
    Sat: "sab",
    Sun: "dom",
  };

  const date = new Date();
  const hora = new Date().toLocaleTimeString();
  const diaSemana = String(date).substring(0, 3);
  const horaSemSeg = String(hora).substring(0, hora.length - 3);
  const diaHora = `${semana[diaSemana]}, ${date.getDay()} de ${
    meses[date.getMonth()]
  } ${horaSemSeg}`;

  useEffect(() => {
    function setDatas() {
      if (data.current.uv > 2) {
        setUV("Moderado");
      } else if (data.current.uv > 5) {
        setUV("Alto");
      } else if (data.current.uv > 7) {
        setUV("Muito alto");
      } else if (data.current.uv > 10) {
        setUV("Extremo");
      } else {
        setUV("Baixo");
      }
    }
    setDatas();
  });

  return (
    <div className="Card">
      <div className="city-date">
        <h2>{data.location.name}</h2>
        <p>{diaHora}</p>
      </div>
      <div className="clima">
        <div className="temperaturas">
          <div className="temperatura-num">
            <div className="div-imagem">
              <img
                src={data.current.condition.icon}
                alt="clima imagem"
                className="imagem-clima"
              />
            </div>
            <span>{data.current.temp_c.toFixed()}°C</span>
          </div>
          <p className="sensacao">
            Sensação térmica de {data.current.feelslike_c.toFixed()}°C
          </p>
        </div>
        <div className="temperatura-stats">
          <div className="max-min-stats">
            <p className="temp-stats">{data.current.condition.text}</p>
            <p className="temp-max-min">
              {data.forecast.forecastday[0].day.maxtemp_c.toFixed()}°C /{" "}
              {data.forecast.forecastday[0].day.mintemp_c.toFixed()}°C
            </p>
          </div>
          <p>Índice UV {uv}</p>
          <p>Umidade {data.current.humidity}%</p>
        </div>
      </div>
      <div className="proximos-dias">
        {proximosDias.map((proximo, index) => {
          return <CardProximos key={index} proximo={proximo} dia={index + 1} />;
        })}
      </div>
    </div>
  );
}
