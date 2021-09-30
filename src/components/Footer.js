import React from 'react';
import "./Footer.css";
import image1 from "./../images/FooterLogo.jpg";
const Footer = () => {
    return (
<footer class="webintern-footer footer">



<div class="webintern-footer-inner">
<div class="container">
<div class="row">
<div class="col-sm-4 col-md-3 ">

<img class="Footer__image" src={image1} style={{width:"100px"}} alt="Simply Go Green" />

{/* <div class="simple-text dark padding-sm">
    <img className = "Footer__logo" src = {image1} alt = "Footer-Logo"/>
<p>Totam rem aperiam, eaque ipsa quae ab illo inv ent ore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab.</p>
</div> */}
<div class="empty-space xs-25 sm-25"></div>
</div>
<div class="col-sm-4 col-md-2 footer-2">
<h4 class="webintern_footer_title h5"><small>Quick Links</small></h4>
<ul class="webintern-footer-list offices">
<li><a href="#">Home</a></li>
<li><a href="#">About Us</a></li>
<li><a href="#"> Products </a></li>
<li><a href="#">Contact Us</a></li>
</ul>
<br />
<h4 class="webintern_footer_title h5"><small>Offices</small></h4>
<ul class="webintern-footer-list">
<li>Mumbai   Kolkata</li>
<li>Bangalore    Tirupur</li>
<li>Bhadohi</li>
</ul>
<div class="empty-space xs-25 sm-25"></div>
</div>
<div class="col-sm-4 col-md-3 footer-3">
<h4 class="webintern_footer_title h5"><small> Address </small></h4>
<h5 id="Address_footer_h5">Ludhiana, Punjab</h5>
<div className = "Address__full">
<span>57A,Street NoR3</span><br />
<span>Primier Industrial</span><br />
<span>Complex,Near Bonn</span><br />
<span>Bread, CHD Road, Nichi</span><br />
<span>Mangli, Ludhiana, Punjab</span><br />
<span>(India)141010</span>
</div>
<br />
<h4 class="webintern_footer_title h5"><small> Email </small></h4>
<div className = "Address__full">
<span>info@neweraglobalpvtltd.com</span><br />
</div>
<br />
<h4 class="webintern_footer_title h5"><small> Telephone </small></h4>
<div className = "Address__full">
<span>+91 161 291 3021</span><br />
</div>
{/* <ul class="webintern-footer-list" style={{lineHeight:"0.1rem"}}>
<li><a href="#">Accounting</a></li>
<li><a href="#">Dyeing Industry</a></li>
<li><a href="#">Hosiery Industry</a></li>
<li><a href="#">Production Management</a></li>
<li><a href="#">Retail Management</a></li>
<li><a href="#">Or Any customize software</a></li>
</ul> */}

<div class="empty-space xs-25"></div>
</div>
<div class="col-xs-12 col-md-4 col-sm-6">
<div class="marg-sm-b30"></div>
<h4 class="webintern_footer_title h5"><small>Locate Us</small></h4>
<div class="empty-space marg-lg-b20"></div>
<div class="empty-space marg-lg-b15"></div>

<form method="post">
<div class="tt-subscribe">
<input type="text" required="" placeholder="Enter your email" />
<div class="tt-subscribe-submit">
<i class="fa fa-envelope" aria-hidden="true"></i>
<input type="submit" value="" />
</div>
</div>
</form>
<div class="empty-space marg-lg-b30"></div>

<ul class="tt-socail">
<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
<li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
<li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
</div>
</div>
</footer>
    )
};

export default Footer;
