// components/Header.tsx
import Link from "next/link"
export default function Footer() {
  return (
    <>
    <footer id="footer" role="contentinfo">
      <div className="row">
      <div className="col-12">
        <div className="left">
        <a className="transition" href="">© 2025 Vishal Sheth</a>
        </div>
          <nav id="nav-footer">
          <ul>
              <li className="page_item page-item-2"><a href="about.html">about</a></li>
              <li className="page_item page-item-1552"><a href="learn-ui-design.html">learn</a></li>
              <li className="page_item page-item-7"><a href="portfolio.html">portfolio</a></li>
              <li className="page_item page-item-9"><a href="blog.html">blog</a></li>
              <li className="page_item page-item-11"><a href="contact.html">contact</a></li>
          </ul>
          </nav>
        </div>
      </div>
      <div className="gradient-white">
        <a className="top" href="#top">Back to top</a>
      </div>
    </footer>

    </>
  );
}
