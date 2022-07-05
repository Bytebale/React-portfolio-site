import React from 'react'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Contacts from "./components/contacts/Contacts";
import Experience from "./components/experience/Experience";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Portfolio/>
        <Experience/>
        <Contacts/>
    </>
  )
}
export default App

