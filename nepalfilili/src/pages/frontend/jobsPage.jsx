import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";

const JobsPage = () => {
  return (
    <>
      <div className="w-full h-[80vh] bg-black text-white">
        <div className="text-center p-5">
          <h1 className="pt-5">CREATE YOUR BUSINESS LISTING</h1>
        </div>

        <div className="container text-center fw-light fs-5">
          <p>Craft your ideal team by creating a compelling job listing that highlights the unique opportunities and benefits your company offers. Showcase the key responsibilities and qualifications for the position, providing a snapshot of your company culture and values.Attract top talent by emphasizing career growth, work-life balance, and any distinctive perks that set your organization apart. </p>
        </div>

        <div className="container p-5">
          <FaSearch size={40} className="m-5" />
          <IoPhonePortraitSharp size={40} className="mx-5" />
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

      <div className="container text-black w-25 h-50 bg-light p-5">
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



      </div>
    </>
  )
};

export default JobsPage;
