import React, { Component } from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import logo from "../UNTRON.png";
import bgn from "../background.jpg";
import bgn1 from "../background1.jpg";
export default class LandingPages extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <body>
          <div class="jumbotron text-center" style={{ backgroundImage: `url(${bgn})` }} >
         
            <img src={logo} className="App-logo-background" alt="logo" />
            <h1 className="Text-bgn">UNTRON Technology</h1>
            <p className="Text-bgn">Menerapkan Teknologi Untuk Kehidupan Masa Depan</p>
          </div>

          <div class="container">
              <div class="row">
                  <div class="col-sm-3">
                      <div class="thumbnail">
                          <div class="caption">
                              <img src={logo} className="picture-logo" alt="logo" />
                              <h3>What's UNTRON?</h3>
                              <p>
                              UNTRON adalah sebuah localweb sederhana yang dibuat sebagai syarat ujian tengah semester
                              Mata Kuliah Pemrograman Web. Web ini dibuat oleh Galih Aji Pambudi Mahasiswa Teknik 
                              Elektro 2018 FT UNTIRTA. 
                              </p>
                              <p><a href="#" class="btn btn-outline-primary btn-block" role="button">Selengkapnya</a></p>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="thumbnail">
                          <div class="caption">
                              <img src={logo} className="picture-logo" alt="logo" />
                              <h3>What's UNTRON?</h3>
                              <p>
                              UNTRON adalah sebuah localweb sederhana yang dibuat sebagai syarat ujian tengah semester
                              Mata Kuliah Pemrograman Web. Web ini dibuat oleh Galih Aji Pambudi Mahasiswa Teknik 
                              Elektro 2018 FT UNTIRTA. 
                              </p>
                              <p><a href="#" class="btn btn-outline-primary btn-block" role="button">Selengkapnya</a></p>
                          </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="thumbnail">
                          <div class="caption">
                              <img src={logo} className="picture-logo" alt="logo" />
                              <h3>What's UNTRON?</h3>
                              <p>
                              UNTRON adalah sebuah localweb sederhana yang dibuat sebagai syarat ujian tengah semester
                              Mata Kuliah Pemrograman Web. Web ini dibuat oleh Galih Aji Pambudi Mahasiswa Teknik 
                              Elektro 2018 FT UNTIRTA. 
                              </p>
                              <p><a href="#" class="btn btn-outline-primary btn-block" role="button">Selengkapnya</a></p>
                          </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="thumbnail">
                          <div class="caption">
                              <img src={logo} className="picture-logo" alt="logo" />
                              <h3>What's UNTRON?</h3>
                              <p>
                              UNTRON adalah sebuah localweb sederhana yang dibuat sebagai syarat ujian tengah semester
                              Mata Kuliah Pemrograman Web. Web ini dibuat oleh Galih Aji Pambudi Mahasiswa Teknik 
                              Elektro 2018 FT UNTIRTA. 
                              </p>
                              <p><a href="#" class="btn btn-outline-primary btn-block" role="button">Selengkapnya</a></p>
                          </div>
                    </div>
                  </div>
              </div>
          </div>
        </body>
        <Footer></Footer>
      </>
    );
  }
}