import { useState, useEffect } from "react";
import { Koncert, getKoncerts, cancelKoncert } from "../utils/api";

const MainPage = () => {
  const [data, setData] = useState<Koncert[]>([]);
  const [canceledConcerts, setCanceledConcerts] = useState<Set<number>>(new Set());

  useEffect(() => {
    const fetchData = async () => {
      const data = await getKoncerts();
      setData(data);
    };
    fetchData();
  }, []);

  const handleCancel = async (id: number) => {
    await cancelKoncert(id);
    const updatedData = await getKoncerts();
    setData(updatedData);
    setCanceledConcerts((prev) => new Set(prev).add(id));
  };

  return (
    <>
      <div className="heading flex justify-center items-center w-screen h-auto absolute top-24">
        <h1 className="text-black text-4xl font-bold">Concerts</h1>
      </div>
      <div className="wrapper flex justify-center items-center w-screen h-screen">
        <div className="cards-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-scroll">
          {data.map((koncert) => {
            const isCanceled = canceledConcerts.has(koncert.id);
            return (
              <div
                key={koncert.id}
                className={
                  `card flex flex-col text-black justify-center items-center rounded-xl p-4 m-4 w-[300px] h-[150px] ` +
                  (isCanceled ? "bg-gray-500" : "bg-gray-100")
                }
              >
                <h2 className="text-xl font-bold">{koncert.artist}</h2>
                <p>Start: {new Date(koncert.start).toLocaleString()}</p>
                <button
                  className={
                    `text-white p-2 rounded cursor-pointer ` +
                    (isCanceled ? "bg-green-500" : "bg-red-500")
                  }
                  onClick={() => (handleCancel(koncert.id), cancelKoncert(koncert.id))}
                >
                  {isCanceled ? "Continue" : "Cancel"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MainPage;
