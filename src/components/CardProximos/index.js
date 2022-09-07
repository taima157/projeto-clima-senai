import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./style.css";

export default function CardProximos(props) {
  const proximoDia = props.proximo;
  const diaNum = props.dia;
  const [dia, setDia] = useState();
  const [diaSemana, setDiaSemana] = useState();
  const semana = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const semanaPT = ["seg", "ter", "qua", "qui", "sex", "sab", "dom"];
  const data = new Date();

  useEffect(() => {
    function update() {
      semana.forEach((valor, index) => {
        if (valor === String(data).substring(0, 3)) {
          setDia(index);
        }
      });
      if (dia + diaNum === 7) {
        setDiaSemana(semanaPT[0]);
      } else if (dia + diaNum === 8) {
        setDiaSemana(semanaPT[dia - 1]);
      } else {
        setDiaSemana(semanaPT[dia + diaNum]);
      }
    }
    update();
  });

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
