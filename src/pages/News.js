import React, { Component } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import ReactDOM from "react-dom";
import Clock from "../parts/Clock";
import logo from "../UNTRON.png";
import bgn from "../background.jpg";
export default class News extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <body>
        <div class="jumbotron text-center" style={{ backgroundImage: `url(${bgn})` }} >
            
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="Text-bgn">ADA BERITA APA HARI INI ?</h1>
            <p className="Text-bgn">Berita Seputar Teknologi dan Informasi</p>
        </div>
        <div className="News">
            <h1 className="Text-black">JAM DUNIA</h1>
            <p className="Text-black">Sekarang Jam Berapa?, Cek Sekarang !</p>
            <div class="row" style={{ marginLeft : "90px", marginRight : "30px", marginTop :"30px", marginBottom :"30px" }}>
                  <div>
                      <div class="thumbnail" >
                        <Clock title="Jakarta" datediff={0} />
                        <Clock title="GMT" datediff={-7} />
                        <Clock title="New York" datediff={-13} />
                      </div>
                  </div>
                  <div>
                      <div class="thumbnail" >
                        <Clock title="Jakarta" datediff={0} />
                        <Clock title="GMT" datediff={-7} />
                        <Clock title="New York" datediff={-13} />
                      </div>
                  </div>
                  <div>
                      <div class="thumbnail" >
                        <Clock title="Jakarta" datediff={0} />
                        <Clock title="GMT" datediff={-7} />
                        <Clock title="New York" datediff={-13} />
                      </div>
                  </div>
                  <div>
                      <div class="thumbnail" >
                        <Clock title="Jakarta" datediff={0} />
                        <Clock title="GMT" datediff={-7} />
                        <Clock title="New York" datediff={-13} />
                      </div>
                  </div>
                  <div>
                      <div class="thumbnail" >
                        <Clock title="Jakarta" datediff={0} />
                        <Clock title="GMT" datediff={-7} />
                        <Clock title="New York" datediff={-13} />
                      </div>
                  </div>
                  <div>
                      <div class="thumbnail" >
                        <Clock title="Jakarta" datediff={0} />
                        <Clock title="GMT" datediff={-7} />
                        <Clock title="New York" datediff={-13} />
                      </div>
                  </div>
                  <div>
                      <div class="thumbnail" >
                        <Clock title="Jakarta" datediff={0} />
                        <Clock title="GMT" datediff={-7} />
                        <Clock title="New York" datediff={-13} />
                      </div>
                  </div>
                  <div>
                      <div class="thumbnail" >
                        <Clock title="Jakarta" datediff={0} />
                        <Clock title="GMT" datediff={-7} />
                        <Clock title="New York" datediff={-13} />
                      </div>
                  </div>
                  <div>
                      <div class="thumbnail" >
                        <Clock title="Jakarta" datediff={0} />
                        <Clock title="GMT" datediff={-7} />
                        <Clock title="New York" datediff={-13} />
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


