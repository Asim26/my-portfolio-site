import React from 'react';
import './App.css';

function App() {
  return (
    <div>
  <div className="KW_progressContainer">
    <div className="KW_progressBar">
    </div>
  </div>
  <div className="page">
    <nav id="colorlib-main-nav" role="navigation">
      <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i /></a>
      <div className="js-fullheight colorlib-table">
        <div className="img" style={{backgroundImage: 'url(images/Asim.jpg)'}} />
        <div className="colorlib-table-cell js-fullheight">
          <div className="row no-gutters">
            <div className="col-md-12 text-center">
              <h1 className="mb-4"><a href="index.html" className="logo">Asim Mehmood</a></h1>
              {/* <ul>
                <li className="active"><a href="index.html"><span><small>01</small>Home</span></a></li>
                <li><a href="#"><span><small>02</small>Resume</span></a></li>
                <li><a href="#"><span><small>03</small>Services</span></a></li>
                <li><a href="#"><span><small>04</small>Portfolio</span></a></li>
                <li><a href="#"><span><small>05</small>Blog</span></a></li>
                <li><a href="#"><span><small>06</small>Contact</span></a></li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div id="colorlib-page">
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="colorlib-navbar-brand">
                <a className="colorlib-logo" href="index.html"><span className="logo-img" style={{backgroundImage: 'url(images/Asim.jpg)'}} />Asim Mehmood</a>
              </div>
              <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a>
            </div>
          </div>
        </div>
      </header>
      <section className="home-slider owl-carousel js-fullheight">
        <div className="slider-item js-fullheight">
          <div className="overlay" />
          <div className="container">
            <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
              <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                <p><a href="#" className="scroll">Hello! I'm</a></p>
                <h1 className="mb-3" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Asim Mehmood</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item js-fullheight">
          <div className="overlay" />
          <div className="container">
            <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
              <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                <p><a href="#" className="scroll">I'm from Pakistan</a></p>
                <h1 className="mb-3" data-scrollax="properties: {translateY: '30%', opacity: 1.6}">A Web Developer</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END slider */}
      <section className="ftco-section about-section">
        <div className="container">
          <div className="row d-flex my-5" data-scrollax-parent="true">
            <div className="col-md-4 author-img" style={{backgroundImage: 'url(images/Asim.jpg)'}} data-scrollax=" properties: { translateY: '-70%'}" />
            <div className="col-md-2" />
            <div className="col-md-6 wrap ftco-animate">
              <div className="about-desc">
                <h1 className="bold-text">About</h1>
                <div className="p-5">
                  <h2 className="mb-5">Hi! I'm Asim Mehmood</h2>
                  <p>I have completed my graduation (BSCS) from the Lahore Garrison University. Apart from during previous experience, I have developed efficiently many projects mentioned below. Besides these, I want to mention I have very well experience with React Js, JavaScript, PHP, wordpress and Laravel. I am language independent and can switch the technology very quicky.</p>
                  {/* <p><a href="https://drive.google.com/file/d/1F70-65gF_oKrPwqRUDVIZKXiomWtd8aa/view?usp=sharing"><span>Checkout my resume</span></a></p> */}
                  
                  <ul className="ftco-footer-social list-unstyled mt-4">
                    <li><a href=""><span className="icon-twitter" /></a></li>
                    <li><a href="#"><span className="icon-facebook" /></a></li>
                    <li><a href="#"><span className="icon-instagram" /></a></li>
                  </ul>
                  <h5>Contact me here!</h5>
                  <p>Email: <a href="mohammadasimmehmood@gmail.com">mohammadasimmehmood@gmail.com</a></p>
                  <p>Phone: <a href="(+92)-323-72 25 238">(+92)-323-72 25 238</a></p>
                </div>
              </div>
            </div>
            <p><a href="https://drive.google.com/file/d/1F70-65gF_oKrPwqRUDVIZKXiomWtd8aa/view?usp=sharing" class="btn btn-primary btn-lg" role="button">Checkout my resume</a></p>
          </div>
          
          <div className="row d-flex justify-content-end mt-5">
            <div className="col-md-10">
              <div className="profile ftco-animate">
                <h2 className="mb-4">Profile</h2>
                {/* <h4 class="mb-4">I'm a UI/UX Designer &amp; Frontend Developer from London, UK. I aim to make a difference through my creative solution.</h4>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> */}
                <div className="row my-5">
                  <div className="col-md-6">
                    <p><strong>Name:</strong> <span>Asim Mehmood</span></p>
                    <p><strong>Address:</strong> <span>Lahore, Pakistan</span></p>
                    <p><strong>Phone:</strong> <span>(+92)-323-72 25 238</span></p>
                  </div>
                  {/* <div class="col-md-6">
              <p><strong>Name:</strong> <span>Asim Mehmood</span></p>
              <p><strong>Address:</strong> <span>Lahore</span></p>
              <p><strong>Phone:</strong> <span>(+92)-323-72 25 238</span></p>
            </div> */}
                </div>
              </div>
              <div className="exp mt-5 ftco-animate">
                <h2 className="mb-4">Experience</h2>
                {/* <div class="exp-wrap py-4">
            <div class="desc">
              <h4>UX &amp; Interaction Designer <span> - Google Company</span> </h4>
              <p class="location">Germany - Berlin</p>
            </div>
            <div class="year">
              <p>2017 - Present</p>
            </div>
          </div> */}
                {/* <div class="exp-wrap py-4">
            <div class="desc">
              <h4>UX &amp; UI Designer <span> - QBootstrap.com</span> </h4>
              <p class="location">Germany - Berlin</p>
            </div>
            <div class="year">
              <p>2015 - 2017</p>
            </div>
          </div> */}
                {/* <div class="exp-wrap py-4">
            <div class="desc">
              <h4>Designer &amp; Developer <span> - Themeforest.net</span> </h4>
              <p class="location">Germany - Berlin</p>
            </div>
            <div class="year">
              <p>2014 - 2015</p>
            </div>
          </div> */}
                <div className="exp-wrap py-4">
                  <div className="desc">
                    <h4>W Group Tech <span> </span> </h4>
                    <p className="location">Lahore, Pakistan</p>
                  </div>
                  <div className="year">
                    <p>Nov - Feb</p>
                    <p>2019 - 2020</p>
                  </div>
                </div>
              </div>
              <div className="exp mt-5 ftco-animate">
                <h2 className="mb-4">Education</h2>
                <div className="exp-wrap py-4">
                  <div className="desc">
                    <h4>Graphic Designing Certification<span> - DigiSkills by Virtual University</span> </h4>
                    <p className="location" />
                  </div>
                  <div className="year">
                    <p />
                    <p />
                  </div>
                </div>
                <div className="exp-wrap py-4">
                  <div className="desc">
                    <h4>Wordpress Certification<span> - DigiSkills by Virtual University</span> </h4>
                    <p className="location" />
                  </div>
                  <div className="year">
                    <p />
                    <p />
                  </div>
                </div>
                <div className="exp-wrap py-4">
                  <div className="desc">
                    <h4>SEO Certification<span> - DigiSkills by Virtual University</span> </h4>
                    <p className="location" />
                  </div>
                  <div className="year">
                    <p />
                    <p />
                  </div>
                </div>
                <div className="exp-wrap py-4">
                  <div className="desc">
                    <h4>E Rozgaar Tech Certification<span> - Punjab University</span> </h4>
                    <p className="location">Lahore, Pakistan</p>
                  </div>
                  <div className="year">
                    <p>Nov - Feb</p>
                    <p>2018 - 2019</p>
                  </div>
                </div>
                <div className="exp-wrap py-4">
                  <div className="desc">
                    <h4>Bachelor of Science in Computer Science<span> - Lahore Garrison University</span> </h4>
                    <p className="location">Lahore, Pakistan</p>
                  </div>
                  <div className="year">
                    <p>2014 - 2018</p>
                  </div>
                </div>
                <div className="exp-wrap py-4">
                  <div className="desc">
                    <h4>Intermediate in Computer Science<span> - Punjab Group of Colleges</span> </h4>
                    <p className="location">Lahore, Pakistan</p>
                  </div>
                  <div className="year">
                    <p>2012 - 2014</p>
                  </div>
                </div>
                <div className="exp-wrap py-4">
                  <div className="desc">
                    <h4>Matriculation <span> - District Public School Kasur</span> </h4>
                    <p className="location">Kasur</p>
                  </div>
                  <div className="year">
                    <p>2010 - 2012</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 flex-column ftco-animate">
            <div className="col-md-8">
              <h2 className="mb-4">My Skills</h2>
            </div>
            <div className="col-md-6 animate-box">
              <div className="progress-wrap">
                <h4>Illustrator</h4>
                <div className="progress">
                  <div className="progress-bar color-1" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>
                    <span>75%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box">
              <div className="progress-wrap">
                <h4>React Js</h4>
                <div className="progress">
                  <div className="progress-bar color-1" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>
                    <span>80%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box">
              <div className="progress-wrap">
                <h4>JavaScript</h4>
                <div className="progress">
                  <div className="progress-bar color-1" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>
                    <span>80%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h4>jQuery</h4>
                <div className="progress">
                  <div className="progress-bar color-1" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                    <span>60%</span>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-md-6 animate-box">
              <div className="progress-wrap">
                <h4>HTML5</h4>
                <div className="progress">
                  <div className="progress-bar color-1" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '85%'}}>
                    <span>85%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h4>CSS3</h4>
                <div className="progress">
                  <div className="progress-bar color-1" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                    <span>90%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box">
              <div className="progress-wrap">
                <h4>WordPress</h4>
                <div className="progress">
                  <div className="progress-bar color-1" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                    <span>70%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h4>SEO</h4>
                <div className="progress">
                  <div className="progress-bar color-1" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                    <span>70%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <span>What i do</span>
              <h2>My services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services p-3 py-4 d-block text-center">
                <div className="icon mb-3"><span className="icon-layers" /></div>
                <div className="media-body">
                  <h3 className="heading">REACT JS</h3>
                  <h3 className="heading" />
                  <h3 className="heading" />
                </div>
              </div>      
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services p-3 py-4 d-block text-center">
                <div className="icon mb-3"><span className="icon-gears" /></div>
                <div className="media-body">
                  <h3 className="heading">JAVASCRIPT</h3>
                  <h3 className="heading" />
                  <h3 className="heading" />
                </div>
              </div>      
            </div>
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services p-3 py-4 d-block text-center">
                <div className="icon mb-3"><span className="icon-code" /></div>
                <div className="media-body">
                  <h3 className="heading">WORDPRESS</h3>
                  <h3 className="heading" />
                  <h3 className="heading" />
                </div>
              </div>    
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <span>Portfolio</span>
              {/* <h2>Checkout a few of my works</h2> */}
              <h2>A complete list of projects will be provided on request</h2>
            </div>
          </div>
          {/* <div class="row no-gutters">
    <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
      <a href="portfolio-single.html" class="image d-flex justify-content-center align-items-center" style="background-image: url('images/work-1.jpg'); " data-scrollax=" properties: { translateY: '-30%'}">
        <div class="icon d-flex text-center justify-content-center align-items-center">
          <span class="icon-search"></span>
        </div>
      </a>
      <div class="text">
        <h4 class="subheading">Illustration</h4>
        <h2 class="heading"><a href="portfolio-single.html">Even the all-powerful Pointing has no control</a></h2>
        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.</p>
        <p><a href="#">View Project</a></p>
      </div>
    </div>
    <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
      <a href="portfolio-single.html" class="image order-2 d-flex justify-content-center align-items-center" style="background-image: url('images/work-2.jpg'); " data-scrollax=" properties: { translateY: '-30%'}">
        <div class="icon d-flex text-center justify-content-center align-items-center">
          <span class="icon-search"></span>
        </div>
      </a>
      <div class="text order-1">
        <h4 class="subheading">Application</h4>
        <h2 class="heading"><a href="portfoli-singleo.html">Even the all-powerful Pointing has no control</a></h2>
        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.</p>
        <p><a href="#">View Project</a></p>
      </div>
    </div>
    <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
      <a href="portfolio-single.html" class="image d-flex justify-content-center align-items-center" style="background-image: url('images/work-3.jpg'); " data-scrollax=" properties: { translateY: '-30%'}">
        <div class="icon d-flex text-center justify-content-center align-items-center">
          <span class="icon-search"></span>
        </div>
      </a>
      <div class="text">
        <h4 class="subheading">Web Design</h4>
        <h2 class="heading"><a href="portfolio-single.html">Even the all-powerful Pointing has no control</a></h2>
        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.</p>
        <p><a href="#">View Project</a></p>
      </div>
    </div>
    <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
      <a href="portfolio-single.html" class="image order-2 d-flex justify-content-center align-items-center" style="background-image: url('images/work-4.jpg'); " data-scrollax=" properties: { translateY: '-30%'}">
        <div class="icon d-flex text-center justify-content-center align-items-center">
          <span class="icon-search"></span>
        </div>
      </a>
      <div class="text order-1">
        <h4 class="subheading">Application</h4>
        <h2 class="heading"><a href="portfoli-singleo.html">Even the all-powerful Pointing has no control</a></h2>
        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.</p>
        <p><a href="#">View Project</a></p>
      </div>
    </div>
    <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
      <a href="portfolio-single.html" class="image d-flex justify-content-center align-items-center" style="background-image: url('images/work-5.jpg'); " data-scrollax=" properties: { translateY: '-30%'}">
        <div class="icon d-flex text-center justify-content-center align-items-center">
          <span class="icon-search"></span>
        </div>
      </a>
      <div class="text">
        <h4 class="subheading">Animation</h4>
        <h2 class="heading"><a href="portfoli-singleo.html">Even the all-powerful Pointing has no control</a></h2>
        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.</p>
        <p><a href="#">View Project</a></p>
      </div>
    </div>
    <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
      <a href="portfolio-single.html" class="image order-2 d-flex justify-content-center align-items-center" style="background-image: url('images/work-6.jpg'); " data-scrollax=" properties: { translateY: '-30%'}">
        <div class="icon d-flex text-center justify-content-center align-items-center">
          <span class="icon-search"></span>
        </div>
      </a>
      <div class="text order-1">
        <h4 class="subheading">Branding</h4>
        <h2 class="heading"><a href="portfoli-singleo.html">Even the all-powerful Pointing has no control</a></h2>
        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text.</p>
        <p><a href="#">View Project</a></p>
      </div>
    </div>
  </div>
  </div> */}
        </div></section>
      <section className="ftco-section ftco-counter" id="section-counter">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <span>Portfolio</span>
              <h2>I love to share my achievements</h2>
            </div>
          </div>
          <div className="row d-flex justify-content-start">
            <div className="col-md-5 col-sm-5 counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <span className="ftco-label">Clients</span>
                  <strong className="number" data-number={440}>0</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-5 col-sm-5 counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <span className="ftco-label">Project done</span>
                  <strong className="number" data-number={630}>0</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-end">
            <div className="col-md-5 counter-wrap ftco-animate">
              <div className="block-18">
                <div className="text">
                  <span className="ftco-label">Cups of coffee</span>
                  <strong className="number" data-number={1000}>0</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section contact-section">
        <div className="container mt-5">
          <div className="row d-flex mb-5 contact-info">
            <div className="col-md-12 mb-4">
              <h2 className="h4">Contact Information</h2>
            </div>
            <div className="w-100" />
            <div className="col-md-3">
              <p><span>Address:</span> Lahore, Pakistan</p>
            </div>
            <div className="col-md-3">
              <p><span>Phone:</span> <a href="tel://+92 323 72 25 238">+92 323 72 25 238</a></p>
            </div>
            <div className="col-md-6">
              <p><span>Email:</span> <a href="mailto:mohammadasimmehmood@gmail.com">mohammadasimmehmood@gmail.com</a></p>
            </div>
            {/* <div class="col-md-3">
        <p><span>Website:</span> <a href="#"></a></p>
      </div> */}
          </div>
          <div className="row block-9">
            <div className="col-md-6 pr-md-5">
              <form action="#">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea name id cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
                </div>
                <div className="form-group">
                  <input type="submit" defaultValue="Send Message" className="btn btn-primary py-3 px-5" />
                </div>
              </form>
            </div>
            {/* <div class="col-md-6" id="map"></div> */}
          </div>
        </div>
      </section>
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-5 text-center">
              <div className="ftco-footer-widget mb-5">
                <ul className="ftco-footer-social list-unstyled">
                  <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                </ul>
              </div>
              <div className="ftco-footer-widget">
                <h2 className="mb-3">Contact Us</h2>
                <p className="h3 email"><a href="mohammadasimmehmood@gmail.com">mohammadasimmehmood@gmail.com</a></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
            </div>
          </div>
        </div>
      </footer>
      {/* loader */}
      <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div>
    </div>
  </div>
</div>

  );
}

export default App;
