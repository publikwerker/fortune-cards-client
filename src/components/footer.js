import React from 'react';

export default function Footer(){
return (
  <footer className="footer">
    <p className="footer__copy-info">Thank you for using this site!</p>
    <p className="footer__copy-info">You can translate the contents of this page using the Google Translate button below.</p>
    <div id='google_translate_element'></div>
    <p className="footer__copy-info">All images and text &copy; 2019 Publikwerks, LLC.</p>
  </footer>
)};