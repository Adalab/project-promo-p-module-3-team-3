import "../styles/main.scss";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import dataApi from "../services/fetch";
import Card from "./card/Card";
import Header from "./card/Header";
import Footer from "./Footer";
import Landing from "./landing/Landing";

function App() {
  const [apiData, setApiData] = useState({});

  const [dataCard, setDataCard] = useState({
    palette: 1,
    name: "",
    job: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    photo: "",
  });

  // ESTADO PARA AÑADIR IMAGEN
  const [avatar, setAvatar] = useState("");

  // función actualizar valores de los inputs
  const handleInput = (data) => {
    const inputValue = data.value;
    const inputChanged = data.name;

    if (inputChanged === "name") {
      setDataCard({
        ...dataCard,
        name: inputValue,
      });
    } else if (inputChanged === "job") {
      setDataCard({
        ...dataCard,
        job: inputValue,
      });
    } else if (inputChanged === "phone") {
      setDataCard({
        ...dataCard,
        phone: inputValue,
      });
    } else if (inputChanged === "email") {
      setDataCard({
        ...dataCard,
        email: inputValue,
      });
    } else if (inputChanged === "linkedin") {
      setDataCard({
        ...dataCard,
        linkedin: inputValue,
      });
    } else if (inputChanged === "github") {
      setDataCard({
        ...dataCard,
        github: inputValue,
      });
    } else if (inputChanged === "palette") {
      setDataCard({
        ...dataCard,
        palette: parseInt(inputValue),
      });
    }
  };

  // función reset
  const handleResetButton = () => {
    setDataCard({
      palette: 1,
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "",
    });
  };

  const handleClickCreateCard = () => {
    dataApi(dataCard).then((info) => {
      setApiData(info);
    });
  };

  // FUNCIÓN PARA AÑADIR IMAGEN A EL ESTADO
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
    setDataCard({
      ...dataCard,
      photo: avatar,
    });
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />

        <Route
          path='/create-card'
          element={
            <>
              <Header />

              <Card
                dataCard={dataCard}
                handleInput={handleInput}
                handleClickCreateCard={handleClickCreateCard}
                apiData={apiData}
                handleResetButton={handleResetButton}
                avatar={avatar}
                updateAvatar={updateAvatar}
              />

              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
