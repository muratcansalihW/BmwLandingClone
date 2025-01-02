import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Reserved from "./components/Reserved";
import Model from "./components/Model";
import BmwExperience from "./components/BmwExperience";
import Footer from "./components/Footer";
import carIcon from "./assets/icon-1.png";
import listIcon from "./assets/icon-2.png";
import offerIcon from "./assets/icon-3.png";
import chatIcon from "./assets/icon-4.png";
import bmw1 from "./assets/bmw1.png";
import bmw5 from "./assets/bmw5.png";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <>
        <div className="container">
          <h1 className="reservedTitle">BMW'nizi Rezerve Edin.</h1>
          <div className="cards">
            <Reserved
              title="Online rezerve edin"
              button="BMW'ni Bul'a Gidin"
              image={carIcon}
            />
            <Reserved
              title="Fiyat Listesi"
              button="İnceleyin"
              image={listIcon}
            />
            <Reserved
              title="Ayın Özel Teklifleri"
              button="Keşfedin"
              image={offerIcon}
            />
            <Reserved
              title="BMW Canlı Destek"
              button="Görüşmeyi başlatın"
              image={chatIcon}
            />
          </div>
        </div>
      </>
      <>
        <div className="container-fluid modelContainer">
          <Model
            model="THE 1"
            title="Yeni BMW 120."
            span="Yaşamla Bir."
            button="Şimdi keşfedin"
            backgroundImage={bmw1}
          />
          <Model
            model="THE 5"
            title="THE 5 Yeni BMW 5 Serisi Sedan."
            span="Şimdi yeni mild-hybrid motoru ile."
            button="Şimdi keşfedin"
            backgroundImage={bmw5}
          />
        </div>
      </>
      <BmwExperience />
      <Footer />
    </>
  );
}

export default App;
