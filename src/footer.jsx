import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
            <h3>
              All rights reserved &copy;{new Date().getFullYear().toString()}
            </h3>
            <div className="footer-icons">
              <FaFacebook className="mx-2" />
              <FaInstagram className="mx-2" />
              <FaTwitter className="mx-2" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
