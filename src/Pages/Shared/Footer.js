import React from "react";
import { Link } from "react-router-dom";
import footer from "../../Assets/images/footer.png";

const Footer = () => {
  return (
    <section className="px-12 py-16 ">
      <footer
        className="footer  p-10"
        style={{
          background: `url(${footer})`,
          backgroundSize: "cover",
        }}
      >
        <div>
          <span className="footer-title">Services</span>
          <Link to="" className="link link-hover">
            Branding
          </Link>
          <Link to="" className="link link-hover">
            Design
          </Link>
          <Link to="" className="link link-hover">
            Marketing
          </Link>
          <Link to="" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="" className="link link-hover">
            About us
          </Link>
          <Link to="" className="link link-hover">
            Contact
          </Link>
          <Link to="" className="link link-hover">
            Jobs
          </Link>
          <Link to="" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="" className="link link-hover">
            Terms of use
          </Link>
          <Link to="" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
      <footer className="footer footer-center p-4 ">
        <div>
          <p>Copyright &copy; <span>{new Date().getFullYear()}</span> - All right reserved by Doctors Portal</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
