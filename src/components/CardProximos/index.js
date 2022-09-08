import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./style.css";

export default function CardProximos(props) {
  const proximoDia = props.proximo;
  const [diaSemana, setDiaSemana] = useState();

  useEffect(() => {
    const semanas = {
      Mon: "seg",
      Tue: "ter",
      Wed: "qua",
      Thu: "qui",
      Fri: "sex",
      Sat: "sab",
      Sun: "dom",
    };
    const date = new Date(`${proximoDia.date} 00:00`);
    setDiaSemana(semanas[String(date).substring(0, 3)]);
  }, []); // eslint-disable-line

  return (
    <div className="CardProximos">
      <p className="dia-semana">{diaSemana}</p>
      <div className="div-imagem-proximo">
        <img
          src={proximoDia.day.condition.icon}
          alt="Imagem clima"
          className="icon-clima"
        />
      </div>
      <div className="temperaturas-proximo">
        <p>
          <span>{proximoDia.day.maxtemp_c.toFixed()}°C</span>
          <span>{proximoDia.day.mintemp_c.toFixed()}°C</span>
        </p>
      </div>
    </div>
  );
}
