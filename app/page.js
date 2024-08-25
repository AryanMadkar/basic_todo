"use client";

import { useState } from "react";

export default function Home() {
  const [title, settitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Maintask, setMaintask] = useState([]);
  const submithandler = (e) => {
    e.preventDefault();
    setMaintask([...Maintask, { title, Desc }]);
    settitle("");
    setDesc("");
    console.log(Maintask);
  };

  let render = <h2 className="">No Task Available</h2>;
  if (Maintask.length > 0) {
    render = Maintask.map((t, i) => {
      return (
        <div className="flex flex-row justify-between w-[90vw]">
          <h5 className="text-pretty font-bold text-xl">{t.title}</h5>

          <h6 className="text-pretty font-bold text-xl">{t.Desc}</h6>
        </div>
      );
    });
  }
  return (
    <div>
      <h1 className="bg-black text-white text-center font-bold text-5xl p-5">
        Todo App
      </h1>
      <form onSubmit={submithandler}>
        <input
          value={title}
          onChange={(elem) => {
            settitle(elem.target.value);
          }}
          type="text"
          className="bg-black text-white text-xl border-2 m-5 p-3 border-gray-600-700 rounded-lg"
          placeholder="Enter Task Here"
        ></input>

        <input
          value={Desc}
          onChange={(elem) => {
            setDesc(elem.target.value);
          }}
          type="text"
          className="bg-black text-white text-xl border-2 m-5 p-3 border-gray-600-700 rounded-lg "
          placeholder="Enter Description Here"
        ></input>
        <button className=" text-white bg-black text-xl font-bold m-5 p-3 rounded-lg hover:bg-blue-700">
          Enter Task
        </button>
      </form>
      <hr></hr>
      <div className="p-8  w-full bg-slate-200 flex flex-col items-center justify-start">
        <ul>{render}</ul>
      </div>
    </div>
  );
}
