import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="sticky-bottom bg-dark text-light text-center">
      <footer className="py-5">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
          <div className="col-11 col-md-2 mb-3 py-4 bg-light bg-opacity-10 rounded">
            <h5>Ürünler</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Araç Kiralama
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Uzun Dönem Kiralama
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Transfer Hizmetleri
                </a>
              </li>
            </ul>
          </div>

          <div className="col-11 col-md-2 mb-3  py-4 bg-light bg-opacity-10 rounded">
            <h5>Hakkımızda</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Şirket Profili
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Misyonumuz ve Vizyonumuz
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  Ekibimiz
                </a>
              </li>
            </ul>
          </div>

          <div className="col-11 col-md-2 mb-3  py-4 bg-light bg-opacity-10 rounded">
            <h5>İletişim</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  İletişim Bilgileri
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">
                  İletişim Formu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center py-4 my-4 border-top">
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <FaTwitter color="white" />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <FaInstagram color="white" />
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <FaFacebook color="white" />
              </a>
            </li>
          </ul>
          <div>
            <a
              className="text-light"
              href="https://www.flaticon.com/free-icons/minivan"
              title="minivan icons"
            >
              Minivan icons created by kerismaker - Flaticon
            </a>
            <p>&copy; 2024 Şirket, Inc. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
