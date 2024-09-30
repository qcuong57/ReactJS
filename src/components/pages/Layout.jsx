import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "../common/Header";
import { Home } from "../home/Home";
import { About } from "./About";
import { Services } from "./Services";
import { Portfolio } from "./Portfolio";
import { Testimonials } from "./Testimonials";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { Footer } from "../common/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/testimonials' component={Testimonials} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </>
  );
};

export default Layout;