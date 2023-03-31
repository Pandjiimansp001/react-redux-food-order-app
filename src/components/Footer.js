import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <span>
          Copyright &copy;{" "}
          <script>document.write(new Date().getFullYear())</script> Pandji Iman
          Syach Putra All Rights Reserved
        </span>
      </div>
    </>
  );
};

export default Footer;
