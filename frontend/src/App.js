import "./App.css";
import { AiFillAudio } from "react-icons/ai";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import React, {useState} from "react";
import SpeechRecognition, { useSpeechRecognition} from "react-speech-recognition";

import { LoginForm } from "./components/LoginForm";
import { RegistroForm } from "./components/RegistroForm";
import { HomeWithoutLogin } from "./components/HomeWithoutLogin";
import { HomePage } from "./components/HomePage";
import { MyBooks } from "./components/MyBooks";
import { MyNotes } from "./components/MyNotes";
import NotFound from "./containers/NotFound";

function App() {
  const commands = [
    {
      command: ["Ir a página *", "Ir a *", "Abrir página *", "Abrir *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];
  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState("");
  const pages = ["inicio", "login", "registro","libros","notas"];
  const urls = {
    inicio: "/",
    login: "/login",
    registro: "/register",
    libros: "/books",
    notas: "/notes",
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  let redirect = "";

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Redirect to={urls[redirectUrl]} />;
    } else {
      redirect = <p>Could not find page: {redirectUrl}</p>;
    }
  }
  

  return (
    <div className="App">
      <p class="transcript">Transcript: {transcript}</p>
      <p class="transcript">Transcript: {transcript}</p>

      <div class="micro" align="left" >
      <button onClick={SpeechRecognition.startListening}><AiFillAudio  size='30px'/></button>
      </div>

        <BrowserRouter>
          <Route exact path="/" component={HomeWithoutLogin} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegistroForm} />
          <Route exact path="/books" component={MyBooks} />
          <Route exact path="/notes" component={MyNotes} />
          <Route
            exact
            path="/home"
            component={() => <HomePage component="HOME" />}
          />
          <Route
            path="/books/:bookID"
            children={<HomePage component="BOOK" />}
          />
          <Route
            path="/read/:bookID/:bookIDMongo"
            children={<HomePage component="READ" />}
          />
          <Route
            exact
            path="/account"
            component={() => <HomePage component="ACCOUNT" />}
          />
          
          {redirect}
        </BrowserRouter>
      

    </div>
  );
}

export default App;
