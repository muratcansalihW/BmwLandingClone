import "./Footer.css";
import React from "react";
import Youtube from "../assets/youtube.png";
import X from "../assets/x.png";
import Linkedin from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";

export default function Footer() {
  return (
    <>
      <div className="container-fluid containerBorder">
        <div className="row firstRow">
          <div className="col-md-12 footerLineFirst">
            <p className="lineFirstText">BMW Modelleri'ni Keşfedin</p>
            <a href="/" className="lnkFirstLine">
              Modeller
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid footerContainer">
        <div className="footerParent">
          <div className="row secondBlock">
            <div className="col-md-4 footerBlock">
              <p className="blockTitle">İLETİŞİM & DESTEK</p>
              <a className="lnkBlock" href="/">
                BMW Canlı Destek
              </a>
              <a className="lnkBlock" href="/">
                BMW Acil Yol Yardım Hattı
              </a>
              <a className="lnkBlock" href="/">
                İletişim
              </a>
              <a className="lnkBlock" href="/">
                Geri Dönüşüm
              </a>
              <a className="lnkBlock" href="/">
                Gönüllü Geri Çağırma
              </a>
              <a className="lnkBlock" href="/">
                BMW E-Bülteni
              </a>
            </div>
            <div className="col-md-4 footerBlock">
              <p className="blockTitle">HIZLI ERİŞİM</p>
              <a className="lnkBlock" href="/">
                Fiyat Listesi
              </a>
              <a className="lnkBlock" href="/">
                Ayın Özel Teklifleri
              </a>
              <a className="lnkBlock" href="/">
                BMW’nizi Online Rezerve Edin
              </a>
              <a className="lnkBlock" href="/">
                BMW Türkiye Mobil Uygulaması
              </a>
              <a className="lnkBlock" href="/">
                Test Sürüşü
              </a>
              <a className="lnkBlock" href="/">
                Kataloglar
              </a>
              <a className="lnkBlock" href="/">
                Site Haritası
              </a>
            </div>
            <div className="col-md-4 footerBlock">
              <p className="blockTitle">BMW DÜNYASI</p>
              <a className="lnkBlock" href="/">
                BMW Türkiye Mobil Uygulaması
              </a>
              <a className="lnkBlock" href="/">
                BMW Dilediğiniz Yerde
              </a>
              <a className="lnkBlock" href="/">
                BMW Lifestyle Shop
              </a>
              <a className="lnkBlock" href="/">
                İkinci El BMW modelleri Borusan Next’te
              </a>
              <a className="lnkBlock" href="/">
                BMW Motorrad Türkiye
              </a>
              <a className="lnkBlock" href="/">
                BOM Akademi
              </a>
              <a className="lnkBlock" href="/">
                Borusan Otomotiv
              </a>
            </div>
          </div>
          <div className="row footerIcon">
            <img src={Youtube} className="ftIcon" />
            <img src={Facebook} className="ftIcon" />
            <img src={Instagram} className="ftIcon" />
            <img src={X} className="ftIcon" />
            <img src={Linkedin} className="ftIcon" />
          </div>
        </div>
      </div>
      <div className="container-fluid footerContainerLast">
        <div className="footerParentLast">
          <div className="row">
            <div className="col-md-12 col-lg-3 lastLeft">
              <p className="bmwCode">© BMW AG 2024</p>
            </div>
            <div className="col-md-12 col-lg-9 lastRight">
              <a className="lastBlank" href="">
                Yakıt Ekonomisi ve Emisyon Bilgileri
              </a>
              <a className="lastBlank" href="">
                Tanımlama Bilgileri (Çerezler)
              </a>
              <a className="lastBlank" href="">
                Yasal Notlar
              </a>
              <a className="lastBlank" href="">
                Kişisel Verilerin Korunması
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
