import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GET_POST } from "../graphql/query";

const Detail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { postId: id },
  });

  console.log("detail", data);

  return (
    <div className=" h-screen flex flex-col justify-center items-center bg-cyan-50 ">
      <div className="card card-compact flex flex-col justify-center items-center  w-1/2 bg-base-100 shadow-2xl  shadow-cyan-500/100 bg-cyan-100 ">
        <div className="card card-compact  w-1/3 bg-base-100 shadow-2xl shadow-2xl  shadow-cyan-500/100 bg-cyan-500 text-white ">
          <div className="card-body flex flex-col justify-center items-center ">
            <h2 className="card-title font-mono text">
              {data?.getPost?.title}{" "}
            </h2>
            <iframe
              width="800"
              height="500"
              src={data?.getPost?.movie}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
