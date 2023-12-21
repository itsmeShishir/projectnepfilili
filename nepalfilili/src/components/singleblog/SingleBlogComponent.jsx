import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import mainimg from "../../assets/images/blogs/blog-1.jpg";
const SingleBlogComponent = () => {
  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <li>Blog Single</li>
          </ol>
          <h2>Blog Single</h2>
        </div>
      </section>
      <div className="container aos-init aos-animate pt-5" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12 entries">
            <article className="entry entry-single">
              <div className="entry-img">
                <img src={mainimg} alt="" className="img-fluid" />
              </div>

              <h2 className="entry-title">
                <a href="blog-single.html">
                  Dolorum optio tempore voluptas dignissimos cumque fuga qui
                  quibusdam quia
                </a>
              </h2>

              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-person"></i>
                    <Link to="/blogs">John Doe</Link>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-clock"></i>
                    <Link to="/">
                      <time datetime="2020-01-01">Jan 1, 2020</time>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas.
                  Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                  nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                  ea dolorem doloremque deleniti aperiam unde soluta. Est cum et
                  quod quos aut ut et sit sunt. Voluptate porro consequatur
                  assumenda perferendis dolore. Sed quo laboriosam qui
                  architecto. Occaecati repellendus omnis dicta inventore
                  tempore provident voluptas mollitia aliquid. Id repellendus
                  quia. Asperiores nihil magni dicta est suscipit perspiciatis.
                  Voluptate ex rerum assumenda dolores nihil quaerat. Dolor
                  porro tempora et quibusdam voluptas. Beatae aut at ad qui
                  tempore corrupti velit quisquam rerum. Omnis dolorum
                  exercitationem harum qui qui blanditiis neque. Iusto autem
                  itaque. Repudiandae hic quae aspernatur ea neque qui.
                  Architecto voluptatem magni. Vel magnam quod et tempora
                  deleniti error rerum nihil tempora.
                </p>
                <p>
                  Officiis animi maxime nulla quo et harum eum quis a. Sit hic
                  in qui quos fugit ut rerum atque. Optio provident dolores
                  atque voluptatem rem excepturi molestiae qui. Voluptatem
                  laborum omnis ullam quibusdam perspiciatis nulla nostrum.
                  Voluptatum est libero eum nesciunt aliquid qui. Quia et
                  suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt
                  accusamus quia aut ratione aspernatur dolor. Sint harum
                  eveniet dicta exercitationem minima. Exercitationem omnis
                  asperiores natus aperiam dolor consequatur id ex sed.
                  Quibusdam rerum dolores sint consequatur quidem ea. Beatae
                  minima sunt libero soluta sapiente in rem assumenda. Et qui
                  odit voluptatem. Cum quibusdam voluptatem voluptatem accusamus
                  mollitia aut atque aut.
                </p>
                <p>
                  Alias quia non aliquid. Eos et ea velit. Voluptatem maxime
                  enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia
                  nisi asperiores est veniam.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogComponent;
