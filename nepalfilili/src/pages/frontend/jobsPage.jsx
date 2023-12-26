import React from "react";
import HeaderComponent from "../../components/header/headerComponent";
import FooterComponent from "../../components/footer/footerComponent";
import { FaSearch } from "react-icons/fa";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";


const JobsPage = () => {
  return (
    <>
        <HeaderComponent />

      <div className="w-full bg-black text-white mt-5 py-5">
        <div className="text-center p-5">
          <h1 className="pt-5 fw-bold">CREATE YOUR BUSINESS LISTING</h1>
        </div>

        <div className="container text-center fw-light fs-5">
          <p>Craft your ideal team by creating a compelling job listing that highlights the unique opportunities and benefits your company offers. Showcase the key responsibilities and qualifications for the position, providing a snapshot of your company culture and values.Attract top talent by emphasizing career growth, work-life balance, and any distinctive perks that set your organization apart. </p>
        </div>

        <div className="container p-5 text-center">
          <FaSearch size={40} className="m-5 p-5" />
          <IoPhonePortraitSharp size={40} className="mx-5 p-5" />
      </div>
      </div>

      <div className="flex">
      <div className="mx-5 text-black w-25 h-50 bg-light p-5 text-center">
        <div className="text-center">
          <h1 className="fw-bold fs-2">FREE</h1>
          <h1 className="fw-bold">0
            <span className="fw-normal mx-1 fs-4">USD</span>
          </h1>
          
          <div className="fw-normal fs-5">
            <p>No Charges</p>
          </div>
          <hr />
        </div>

          <div className="p-3 flex">
            {/* <IoMdTime size={30} /> */}
            <p className="mx-5">10 day Review Process</p>
            <p className="mx-5">No User</p>
          </div>

          <div className="mx-4 lh-1">
            <p>Can't Update Listing any time</p>
            <p>Can't Reply to Reviews and Questions</p>
            <p>No Enquiries Inbox</p>
          </div>

          <div className="m-4">
            <div className="mt-5">
              <p>3 Categories</p>
              <p>2 Keywords</p>
              <p>1 Photo</p>
              <p>0 Products</p>
              <p>0 Job Offers</p>
            </div>
          </div>

          <div className="text-center mt-5">
            <button className="p-2 w-50 bg-danger text-white border-0 rounded">Get Listed</button>
          </div>

      </div>

      <div className="text-black w-25 bg-light p-5 text-center position-absolute top-100 start-50 translate-middle mt-5">
        <div className="text-center">
          <h1 className="fw-bold fs-2">FREE</h1>
          <h1 className="fw-bold">0
            <span className="fw-normal mx-1 fs-4">USD</span>
          </h1>
          
          <div className="fw-normal fs-5">
            <p>No Charges</p>
          </div>
          <hr />
        </div>

          <div className="p-3 flex">
            {/* <IoMdTime size={30} /> */}
            <p className="mx-5">10 day Review Process</p>
            <p className="mx-5">No User</p>
          </div>

          <div className="mx-4 lh-1">
            <p>Can't Update Listing any time</p>
            <p>Can't Reply to Reviews and Questions</p>
            <p>No Enquiries Inbox</p>
          </div>

          <div className="m-4">
            <div className="mt-5">
              <p>3 Categories</p>
              <p>2 Keywords</p>
              <p>1 Photo</p>
              <p>0 Products</p>
              <p>0 Job Offers</p>
            </div>
          </div>

          <div className="text-center mt-5">
            <button className="p-2 w-50 bg-danger text-white border-0 rounded">Get Listed</button>
          </div>
      </div>

        <div className="mt-5 text-center bg-light p-5">
          <h1 className="fw-bold">Why Choose NepalFilili Website?</h1>

            <div className="text-start p-3">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorem libero vero praesentium aperiam animi inventore odit, impedit officia recusandae magni natus beatae eaque dolores voluptatum harum nobis molestias obcaecati?
                Suscipit architecto ratione dolores omnis iusto quibusdam iure assumenda quia molestias excepturi? Voluptate praesentium dolorum cupiditate exercitationem at non consectetur vel! Eos suscipit, sed ullam iste commodi vero. Pariatur, laborum?
                Velit repudiandae assumenda eius aliquid harum sequi, cumque commodi, voluptatibus qui quod reprehenderit accusamus nostrum numquam maiores quos atque exercitationem earum, perspiciatis eum illum quam? Porro animi unde mollitia magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facilis inventore blanditiis animi, pariatur nostrum adipisci repellendus consequuntur quia reiciendis provident, culpa debitis ea, necessitatibus fugit. Quam asperiores aperiam officia.
                Sit enim ipsum blanditiis similique. Quidem temporibus praesentium necessitatibus mollitia omnis explicabo nulla sint corrupti maiores rerum, numquam aliquid! Rerum eum soluta ut praesentium nobis sequi blanditiis saepe exercitationem eos!
                Sequi, consequuntur ratione, sapiente voluptates velit vitae, maiores autem similique dolor quam harum iusto! Ipsa laboriosam quis quos tenetur itaque tempore, vitae aliquam aspernatur reprehenderit perspiciatis laudantium officia, explicabo harum.</p>
            </div>

        </div>

        <FooterComponent />
      </div>
    </>
  )
};

export default JobsPage;
