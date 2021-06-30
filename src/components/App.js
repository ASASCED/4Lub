import React from "react";
import { Header } from "./header/Header";
import { Home } from "./home/Home";
import { Productos } from "./productos/Productos";

import MessengerCustomerChat from "react-messenger-customer-chat";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Testimonios } from "./testimonios/Testimonios";

export const App = () => {
  return (
    <>
      <Router>
        <div className="app-root">
          <Header />

          <Switch>
            <Route exact path="/inicio" component={Home} />
            <Route exact path="/productos" component={Productos} />
            <Route exact path="/blog" component={Testimonios} />
            <Redirect to="/inicio" />
          </Switch>
        </div>
      </Router>

      <WhatsAppWidget phoneNumber="+5215620192588" />
      <MessengerCustomerChat
        pageId="107889634770488"
        appId="544514809929470"
        language="es_ES"
      />
    </>
  );
};
