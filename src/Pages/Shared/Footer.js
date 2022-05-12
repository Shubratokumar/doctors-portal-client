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
          <span className="footer-title">SERVICES</span>
          <Link to="" className="link link-hover">
          Emergency Checkup
          </Link>
          <Link to="" className="link link-hover">
          Monthly Checkup
          </Link>
          <Link to="" className="link link-hover">
          Weekly Checkup
          </Link>
          <Link to="" className="link link-hover">
          Deep Checkup
          </Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link to="" className="link link-hover">
          Fluoride Treatment
          </Link>
          <Link to="" className="link link-hover">
          Cavity Filling
          </Link>
          <Link to="" className="link link-hover">
          Teath Whitening
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="" className="link link-hover">
            Terms of Treatment
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
