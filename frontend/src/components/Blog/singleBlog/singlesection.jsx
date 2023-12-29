import React from "react";
import "./singlesection.css";
import imgs from "../../../assets/images/32.jpg";

const SingleSection = () => {
  return (
    <div className="container">
      <div className="singleblog">
        <h2 className="singleblog_title">
          Traveling Abroad for Thanksgiving Is a Great Way to Save Money
        </h2>
        <div className="singleblog_info">
          <p>
            category: <span className="singleblog_catname">Travel</span>
          </p>
          <p className="singleblog_author">
            author: <span>Penici Design</span>
          </p>
          <p className="singleblog_date">
            Posted: <span>October 11, 2019</span>
          </p>
        </div>
        <img src={imgs} alt="" className="singleblog_img" />

        <p className="singleblog_desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
          quaerat maiores voluptatem et, quis ut, laudantium modi quas eligendi
          ea nihil! Perferendis aperiam vero ullam nulla amet delectus repellat
          corporis architecto, explicabo, vel minus odio quidem sint dicta
          dolorum eaque reiciendis optio qui nostrum sunt pariatur iste? Ipsum
          illum vel maiores laborum eum fuga enim perspiciatis atque quasi rem
          asperiores animi quia veniam, blanditiis distinctio exercitationem
          accusantium quae nemo. Molestias. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Ratione earum rem nam alias ut, saepe
          porro doloremque. Consectetur recusandae veniam nobis incidunt
          officiis perferendis molestias obcaecati, maxime nisi repellendus aut
          voluptas rem libero officia corrupti magnam illo in error praesentium
          placeat iusto at inventore assumenda quisquam! Adipisci cupiditate
          sapiente eveniet fugit, tempore et nisi porro qui sint repudiandae
          aspernatur quae saepe praesentium aliquam ex sed. Impedit nisi dolore
          similique porro minus officiis esse eveniet! Doloremque repellat quo
          deserunt incidunt natus maiores voluptatem quos, velit magnam
          architecto quod suscipit quae. Quo perferendis sed quia, deserunt
          magni molestias placeat ducimus vero voluptatum.
        </p>
      </div>
    </div>
  );
};

export default SingleSection;
