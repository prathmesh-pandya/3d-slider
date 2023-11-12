"use client";
import React, { useEffect, useMemo, useState } from "react";

const Grid = () => {
  const [stack, setStack] = useState([]);
  const cell = [1, 2, 3, 9, 8, 7, 4, 5, 6];

  useEffect(() => {
    let intervalId;
    if (stack.length === cell.length) {
      intervalId = setInterval(function () {
        console.log("triggerd");
        if (stack.length !== 0) {
          stack.pop();
          setStack([...stack]);
        } else {
          clearInterval(intervalId);
        }
      }, 500);
    } else {
      clearInterval(intervalId);
    }
  }, [stack]);

  const gridShell = useMemo(
    () =>
      cell.map((item, index) => (
        <div
          key={item}
          className={`${
            stack?.includes(cell[index]) ? "bg-green-300" : "bg-gray-200"
          } h-20 w-20 flex justify-center items-center active:bg-green-700 active:w-30 active:h-30 transition-all duration-150   text-green-500 font-bold cursor-pointer `}
          onClick={() => setStack([...stack, cell[index]])}
        >
          {item}
        </div>
      )),
    [stack]
  );
  return <div className="grid grid-cols-3 gap-3">{gridShell}</div>;
};

export default Grid;
