import React, { Component } from "react";
import Header from "../parts/Header.js";
import Footer from "../parts/Footer.js";
export default class Help extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div class="justify-content-center">
          <h1>HALAMAN BANTUAN</h1>
          <a href="/">Kembali ke Beranda</a>
        </div>
        <Footer></Footer>
      </>
    );
  }
}