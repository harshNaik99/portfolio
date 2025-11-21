import Image from "next/image";

export default function Home() {
  return (
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
                    <h1><span className="chevron-left">&lt;</span>coder<span className="chevron-right">&gt;</span></h1>
                    <p>Front end developer who writes clean, elegant and efficient code.</p>
                  </div>
                </div>
              </a>

              <img
                id="face-img"
                className="face-img"
                src="/images/adham-dannaway-designer-coder.jpg"
                alt="Vishal Sheth UI designer"
              />

              <div id="designer-img" className="designer-img"></div>
              <div id="coder-img" className="coder-img"></div>
              <div id="designer-bg" className="designer-bg"></div>
              <div id="coder-bg" className="coder-bg"></div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
