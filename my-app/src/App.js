import './App.css';
import './css/siteground.css'

function App() {
  return (
    <div id="content" className="clearfix">
      <header id="header">
        <div className="row">
          <div className="col-12">
            <a id="logo" className="logo" href="/">Vishal Sheth</a>
              <nav>
                <ul id="nav">
                  <li className="page_item page-item-2"><a href="https://www.adhamdannaway.com/about">about</a></li>
                  <li className="page_item page-item-1552"><a href="https://www.adhamdannaway.com/learn-ui-design">learn</a></li>
                  <li className="page_item page-item-7"><a href="../portfolio/portfolio.html">portfolio</a></li>
                  <li className="page_item page-item-9"><a href="https://www.adhamdannaway.com/blog">blog</a></li>
                  <li className="page_item page-item-11"><a href="../contact/contact.html">contact</a></li>
                  <li>
                    <ul className="social">
                      <li className="email"><span id="email-tooltip" tooltip="Click to copy my email address to your clipboard"> <a id="email" data-clipboard-text="vishalsheth4@gmail.com">email</a></span></li>
                      <li className="twitter"><a href="https://www.twitter.com/AdhamDannaway" title="Follow me on Twitter" >twitter</a></li>
                      <li className="linkedin"><a href="https://au.linkedin.com/in/adhamdannaway" title="Connect with me on Linkedin" >linkedin</a></li>
                      <li className="facebook"><a href="https://www.facebook.com/ilikeadham" title="Like me on Facebook" >facebook</a></li>
                      <li className="instagram"><a href="https://www.instagram.com/adham.dannaway" title="Follow me on Instagram" >instagram</a></li>
                      <li className="dribbble"><a href="https://www.dribbble.com/adhamdannaway" title="See my Dribbble shots" >dribbble</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
          </div>
        </div>
      </header>

      <div id="content" className="content clearfix home">
        <section id="section" className="light nopad-t nopad-b">
          <div className="row">
            <div className="col-12">
              <div id="face" className="face">
                <a href="/portfolio">
                  <div id="designer" className="designer">
                    <div id="designer-desc" className="description">
                      <h1>designer</h1>
                      <p>Product designer specialising in UI design and design systems.</p>
                    </div>
                  </div>
                </a>

                <a href="/about">
                  <div id="coder" className="coder">
                    <div id="coder-desc" className="description">
                      <h1>coder</h1>
                      <p>Front end developer who writes clean, elegant and efficient code.</p>
                    </div>
                  </div>
                </a>

                <img id="face-img" className="face-img" src="images/adham-dannaway-designer-coder.jpg" alt="Vishal Sheth UI designer"/>
                <div id="designer-img" className="designer-img"></div>
                <div id="coder-img" className="coder-img"></div>
                <div id="designer-bg" className="designer-bg"></div>
                <div id="coder-bg" className="coder-bg"></div>
              </div>
            </div>
          </div>
        </section>

			<div>
				<section className="dark">
					<div className="row">
						<div className="col-12">
							<div id="content-detail">
								<div className="header-center"><h3>Some of my latest work</h3></div>
								<ul id="thumbs" className="thumbs clearfix">
										<li>
											<a href="../figma-design-system/figma-design-system.html">
												<img src="images/feature-figma-design-system.webp" 
                          className="attachment-post-thumbnail size-post-thumbnail wp-post-image" 
                          alt="Figma design system" 
                          decoding="async" 
                          fetchpriority="high" 
                          srcset="images/feature-figma-design-system.webp 628w, images/feature-figma-design-system-300x176.webp 300w" 
                          sizes="(max-width: 628px) 100vw, 628px"/>								    
                          <div className="description">
                            <span className="arrow-r"></span>
                            <h4>My Figma design system</h4>
                            <p>Design system</p>
												  </div>
											</a>
										</li>

										<li>
											<a href="../ui-design-book/ui-design-book.html">
												<img src="images/feature-ui-design-book.webp" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="UI design book" decoding="async" srcset="images/feature-ui-design-book.webp 628w, images/feature-ui-design-book-300x176.webp 300w" sizes="(max-width: 628px) 100vw, 628px"/>
                          <div className="description">
                            <span className="arrow-r"></span>
                            <h4>My UI design book</h4>
                            <p>Book</p>
												</div>
											</a>
										</li>

										<li>
											<a href="../creating-a-lean-design-system/creating-a-lean-design-system.html">
												<img src="images/feature-william-hill-design-system.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" decoding="async" srcset="images/feature-william-hill-design-system.jpg 628w, images/feature-william-hill-design-system-300x176.jpg 300w" sizes="(max-width: 628px) 100vw, 628px"/>		
   						            <div className="description">
                            <span className="arrow-r"></span>
                            <h4>Creating a lean design system</h4>
                            <p>Design system</p>
												</div>
											</a>
										</li>							
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>

		</div>


		<footer id="footer" role="contentinfo">
			<div className="row">
				<div className="col-12">
					<div className="left"><a className="transition" href="https://www.adhamdannaway.com/">� 2025 Vishal Sheth</a></div>
					<nav id="nav-footer">
						<ul>
							<li className="page_item page-item-2"><a href="https://www.adhamdannaway.com/about">about</a></li>
							<li className="page_item page-item-1552"><a href="https://www.adhamdannaway.com/learn-ui-design">learn</a></li>
							<li className="page_item page-item-7"><a href="https://www.adhamdannaway.com/portfolio">portfolio</a></li>
							<li className="page_item page-item-9"><a href="https://www.adhamdannaway.com/blog">blog</a></li>
							<li className="page_item page-item-11"><a href="../contact/contact.html">contact</a></li>
						</ul>
					</nav>
				</div>
			</div>
			<div className="gradient-white">
				<a className="top" href="#top">Back to top</a>
			</div>
		</footer>

      {/* <section className="light nopad-t nopad-b">
        <div className="row">
          <div className="col-12">
            <div id="face" className="face">
              <div id="designer" className="designer">
                <div id="designer-desc" className="description">
                  <h1>Designer</h1>
                  <p>Product designer specialising in UI design and design systems.</p>
                </div>
              </div>
              <div id="coder" className="coder">
                <div id="coder-desc" className="description">
                  <h1>&lt;Coder&gt;</h1>
                  <p>Front-end developer who writes clean, elegant, and efficient code.</p>
                </div>
              </div>
              <img
                id="face-img"
                className="face-img"
                src="images/adham-dannaway-designer-coder.jpg"
                alt="Vishal Sheth UI designer"
              />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
