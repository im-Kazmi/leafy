import React from "react";

const NewsLetter = () => {
  return (
    <div className=" w-full border p-10 flex flex-col items-center rounded-md justify-center min-h-[200px] gap-3">
      <h1 className=" text-2xl">
        Stay upto <span className=" font-bold text_gradient2">Date</span>
      </h1>
      <p className=" text-center">
        Subscribe to our Newletter and stay up to date with
        <span className=" text_gradient2"> Articles</span> and so much more
      </p>
      <div className=" flex gap-2 w-full">
        <input
          type="text"
          className=" w-full px-3 py-2 rounded-md border outline-none bg-transparent  "
          placeholder="Enter email Address"
        />
        <button className=" w-fit rounded-md px-3 py-2 bg-gradient-to-r from-orange-500 to-yellow-200 ">
          Submit
        </button>
      </div>
      <p className=" text-center mt-2 text-sm">
        I respect your<span className=" text_gradient2"> privacy.</span>{" "}
        Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsLetter;
