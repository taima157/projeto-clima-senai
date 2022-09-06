import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import api from "./services/api";
import "./App.css";

function App() {
  const [card, setCard] = useState();

  useEffect(() => {
    async function getDatasClima() {
      const dataSP = await api.get(
        `forecast.json?key=e8a403fa630d442d8bf183832220209&q=Sao Paulo&days=4&aqi=no&alerts=no&lang=pt`
      );
      const dataRJ = await api.get(
        `forecast.json?key=e8a403fa630d442d8bf183832220209&q=Rio de Janeiro&days=4&aqi=no&alerts=no&lang=pt`
      );
      const dataBH = await api.get(
        `forecast.json?key=e8a403fa630d442d8bf183832220209&q=Belo Horizonte&days=4&aqi=no&alerts=no&lang=pt`
      );

      setCard(
        <div className="cards">
          <Card data={dataSP.data} />
          <Card data={dataRJ.data} />
          <Card data={dataBH.data} />
        </div>
      );
    }
    getDatasClima();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="background-image"></div>
      <div className="home">{card}</div>
      <Footer />
    </div>
  );
}

export default App;
