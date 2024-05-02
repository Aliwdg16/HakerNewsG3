import { useEffect, useState } from "react";

export const ListElement = ({ news }) => {
  console.log({ news });
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    console.log(pageNo);
  }, [pageNo]);

  const showNumber = 5;
  return (
    <>
      <div className=" bg-gray-300">
        <ol className="list-decimal md:list-outside text-left  w-max">
          {news.map((news, index) => {
            if (
              index > (pageNo - 1) * showNumber &&
              index < pageNo * showNumber
            ) {
              return (
                <div>
                  <li
                    className="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10"
                    key={news.objectID}
                  >
                    <h3 className="text-neutral-700">
                      <a className="text-neutral-700" href={news.url}>
                        {" "}
                        {news.title}
                      </a>
                    </h3>
                    <p className="text-orange-900">
                      {/* created_at*/}
                      {news.points} points by | {news.author} |{" "}
                      {news.updated_at} | {news.num_comments} comments
                    </p>
                  </li>
                </div>
              );
            }
          })}
        </ol>
      </div>
<div className=" flex justify-center m-2">
      {pageNo > 1 && (
        <button
        className="inline-block rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-l font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900" 
        onClick={() => setPageNo(pageNo - 1)}>Back to {pageNo - 1}</button>
      )}
      <h4 
       className="inline-block rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-l font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
      //  className="mb-2 mt-0 text-2xl font-medium leading-tight text-primary"
        >{pageNo}</h4>
      {pageNo * showNumber < news.length - 1 && (
        <button
        className="inline-block rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-l font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
        onClick={() => setPageNo(pageNo + 1)}>
          Go to {pageNo + 1}
        </button>
       
      )}
       </div>
    </>
  );
};
