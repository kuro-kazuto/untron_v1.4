import React, { Component } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
export default class About extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div class="justify-content-center">
          <h1>HALAMAN TENTANG SAYA</h1>
          <a href="/">Kembali Ke Beranda</a>
          
        </div>
        <Footer></Footer>
      </>
    );
  }
}