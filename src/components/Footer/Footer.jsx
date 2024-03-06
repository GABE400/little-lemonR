// Footer.jsx
import Logo from "../../assets/Logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-columns container'>
        <div className='footer-logo'>
          <img src={Logo} alt='Logo' />
        </div>
        <div className='footer-column'>
          <h3>Doormat Navigation</h3>
          <ul className='footer-links'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Menu</a>
            </li>
            <li>
              <a href='/booking'>Reservations</a>
            </li>
            <li>
              <a href='/'>Order Online</a>
            </li>
            <li>
              <a href='/'>Login</a>
            </li>
          </ul>
        </div>
        <div className='footer-column'>
          <h3>Contact</h3>
          <ul className='footer-links'>
            <li>
              <a href='/'>Address</a>
            </li>
            <li>
              <a href='/'>Phone Number</a>
            </li>
            <li>
              <a href='/'>Email</a>
            </li>
          </ul>
        </div>
        <div className='footer-column'>
          <h3>Social Media Links</h3>
          <ul className='footer-links'>
            <li>
              <a href='/'>Address</a>
            </li>
            <li>
              <a href='/'>Phone Number</a>
            </li>
            <li>
              <a href='/'>Email</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
