import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_POSTS } from "../graphql/query";
import { CREATE_POST } from "./../graphql/mutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const notify = () =>
    toast.success("Film eklendi,lütfen siteyi refresh edin.");

  const { loading, error, data } = useQuery(GET_POSTS);
  const [post, setPost] = useState({
    title: "",
    description: "",
    url: "",
    movie: "",
  });

  const [createPost, { dataa, loadingg, errorr }] = useMutation(CREATE_POST);

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col justify-center items-center m-10 bg-gray-100 shadow-cyan-500/50">
      <h1 className="font-mono bg-black text-white">
        NOT: EKLEMEK İSTEDİĞİNİZ FİLMİN BİLGİLERİNİ GİRDİKTEN SONRA "FİLM EKLE"
        BUTONUNA BASIP SİTEYİ REFRESH EDİN !!!
      </h1>
      <div className="flex  my-10 ">
        <label className="label flex flex-col font-serif shadow-lg shadow-cyan-500/50 mx-5">
          Film Adı
          <input
            placeholder="Giriniz..."
            className="input input-bordered input w-full h-10 max-w-xs mx-10 shadow-lg shadow-cyan-500/50"
            type="text"
            name="title"
            value={post.title}
            onChange={onChange}
          />
        </label>
        <label className="label flex flex-col font-serif shadow-lg shadow-cyan-500/50 mx-5">
          <h1>Film Açıklaması</h1>
          <input
            placeholder="Giriniz..."
            className="input input-bordered input w-full h-10 max-w-xs mx-10 shadow-lg shadow-cyan-500/50"
            type="text"
            name="description"
            value={post.description}
            onChange={onChange}
          />
        </label>
        <label className="label flex flex-col font-serif shadow-lg shadow-cyan-500/50 mx-5">
          <h1>Film Resim Url</h1>
          <input
            placeholder="Giriniz..."
            className="input input-bordered input w-full h-10 max-w-xs mx-10 shadow-lg  shadow-cyan-500/50"
            type="text"
            name="url"
            value={post.url}
            onChange={onChange}
          />
        </label>
        <label className="label flex flex-col font-serif shadow-lg shadow-cyan-500/50 mx-5">
          <h1>Film Youtube İframe Url</h1>
          <input
            placeholder="Giriniz..."
            className="input input-bordered input w-full h-10 max-w-xs mx-10 shadow-lg  shadow-cyan-500/50"
            type="text"
            name="movie"
            value={post.movie}
            onChange={onChange}
          />
        </label>
        <button onClick={notify}>
          <button
            className="btn-lg btn-active btn-accent text-white rounded-xl shadow-2xl  "
            onClick={() => createPost({ variables: { body: post } })}
          >
            Film Ekle...
          </button>
        </button>
        <ToastContainer />
      </div>

      <div className="flex flex-wrap justify-center ">
        {data?.getPosts?.map((dt, i) => (
          <div
            className="m-5"
            onClick={() => (window.location = `/post/${dt.id}`)}
            key={i}
          >
            <div className="card card-compact w-96 bg-base-100 shadow-xl  shadow-cyan-500/100 hover:scale-105 transition-all cursor-pointer ">
              <figure>
                <img src={dt.url} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{dt.title} </h2>
                <p>{dt.description}</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
