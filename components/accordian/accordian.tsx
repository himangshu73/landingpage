"use client";

import { useState } from "react";
import data from "./data";
import Image from "next/image";

export default function Accordian() {
  const [selected, setSelected] = useState(1);
  const handleClick = (id: number) => {
    setSelected(id);
  };
  return (
    <div className="bg-[url('/bg.png')] bg-cover bg-center rounded-xl">
      <div className="px-30 py-8">
        <h2 className="text-white text-center">FAQ</h2>
        <h1 className="text-white text-center text-6xl font-semibold px-10 py-8">
          Frequently Asked Questions.
        </h1>
        {data.map((dataItem) => (
          <ul key={dataItem.id} className="mb-8 bg-white p-8 rounded-xl">
            <li
              onClick={() => handleClick(dataItem.id)}
              className="text-lg font-semibold"
            >
              <div className="flex items-center justify-between">
                <span>{dataItem.question}</span>
                <Image
                  src="/chevron-up.png"
                  width={25}
                  height={25}
                  alt="icon"
                />
              </div>
            </li>
            {selected === dataItem.id && <div>{dataItem.answer}</div>}
          </ul>
        ))}
      </div>
    </div>
  );
}
