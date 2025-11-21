// components/Header.tsx
import Link from "next/link"
import Header from "../components/Header";
export default function Body() {
  return (
    <>
        <div id="content" className="clearfix home">
			<section id="section" className="light nopad-t nopad-b">
				<div className="row">
					<div className="col-12">
						<div id="face" className="face">
							<a href="/portfolio">
								<div id="designer" className="designer">
									<div id="designer-desc" className="description">
										<h1>designer</h1>
										<p>UI/UX Designer with a passion for designing beautiful and functional user experiences.</p>
										<p>Product designer specialising in UI design and design systems.</p>
									</div>
								</div>
							</a>

							<a href="/about">
								<div id="coder" className="coder">
									<div id="coder-desc" className="description">
										<h1><span className="chevron-left"></span>coder<span className="chevron-right"></span></h1>
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
		</div>

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
                                        alt="Figma design system" decoding="async" 
                                        // fetchpriority="high" 
                                        // srcset="images/feature-figma-design-system.webp 628w, images/feature-figma-design-system-300x176.webp 300w" 
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
                                        <img src="images/feature-ui-design-book.webp" 
                                        className="attachment-post-thumbnail size-post-thumbnail wp-post-image" 
                                        alt="UI design book" decoding="async" 
                                        // srcset="images/feature-ui-design-book.webp 628w, images/feature-ui-design-book-300x176.webp 300w" 
                                        sizes="(max-width: 628px) 100vw, 628px"/>      
                                        <div className="description">
                                            <span className="arrow-r"></span>
                                            <h4>My UI design book</h4>
                                            <p>Book</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="../creating-a-lean-design-system/creating-a-lean-design-system.html">
                                        <img src="images/feature-william-hill-design-system.jpg" 
                                        className="attachment-post-thumbnail size-post-thumbnail wp-post-image" 
                                        alt="" decoding="async" 
                                        // srcset="images/feature-william-hill-design-system.jpg 628w, images/feature-william-hill-design-system-300x176.jpg 300w" 
                                        sizes="(max-width: 628px) 100vw, 628px"/>        
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
    </>
  );
}
