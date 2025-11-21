// components/Header.tsx
import Link from "next/link"
export default function Header() {
  return (
    <>
      <header id="header">
        <div className="row">
          <div className="col-12">
            <Link id="logo" className="logo" href="/">Vishal Sheth</Link>
            <div className="icon-nav">navigation</div>
            <nav>
                <ul id="nav" className="portfolio">
                  <li className="page_item page-item-2">
                    <Link href="/login">uber for hr</Link>
                  </li>
                  <li className="page_item page-item-2"><a href="https://www.vishalsheth.com/about">FL</a></li>
                  <li className="page_item page-item-2"><a href="https://www.vishalsheth.com/about">Vishal</a></li>
                  <li className="page_item page-item-2"><a href="https://www.vishalsheth.com/about">about</a></li>
                  <li className="page_item page-item-1552"><a href="https://www.vishalsheth.com/learn-ui-design">learn</a></li>
                  <li className="page_item page-item-7"><a href="https://www.vishalsheth.com/portfolio">portfolio</a></li>
                  <li className="page_item page-item-9 current_page_parent"><a href="https://www.vishalsheth.com/blog">blog</a></li>
                  <li className="page_item page-item-11"><a href="https://www.vishalsheth.com/contact">contact</a></li>
                  <li>
                    <ul className="social">
                      <li className="email"><span id="email-tooltip" 
                      // tooltip="Click to copy my email address to your clipboard 😀"
                      ><a id="email" data-clipboard-text="email address goes here">email</a></span></li>
                      {/* <li className="twitter"><a href="https://www.twitter.com/VishalSheth" title="Follow me on Twitter" target="_blank">twitter</a></li> */}
                      <li className="linkedin"><a href="https://au.linkedin.com/in/VishalSheth" title="Connect with me on Linkedin" target="_blank">linkedin</a></li>
                      {/* <li className="facebook"><a href="https://www.facebook.com/vishalsheth4" title="Like me on Facebook" target="_blank">facebook</a></li> */}
                      {/* <li className="instagram"><a href="https://www.instagram.com/shethvishal5" title="Follow me on Instagram" target="_blank">instagram</a></li> */}
                      {/* <li className="dribbble"><a href="https://www.dribbble.com/VishalSheth" title="See my Dribbble shots" target="_blank">dribbble</a></li> */}
                    </ul>
                  </li>
                </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
