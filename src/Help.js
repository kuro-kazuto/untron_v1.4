import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
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