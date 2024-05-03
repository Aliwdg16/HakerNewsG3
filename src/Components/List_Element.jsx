import { useEffect, useState } from "react";

export const ListElement = ({ news }) => {
  console.log({ news });
  const [pageNo, setPageNo] = useState(1);

  const showNumber = 5;
  return (
    <>
      <div  className=" mt-0 space-y-1 list-outside bg-sky-800/60 flex justify-center ">

        {/* <ol className="list-none md:list-outside  text-center w-max  "> */}
        <ol  className=" mt-0 w-3/5 space-y-1 list-outside bg-sky-800/0 flex flex-col justify-center">
          {news.map((news, index) => {
            if (
              index > (pageNo - 1) * showNumber &&
              index < pageNo * showNumber
            ) {
              return (
                <div>
                  <li
                    className="w-full border-b-2 text-left border-blue-950 py-4  mr-0"
                    key={news.objectID}
                  >
                   <div className="flex flex-row"> <p className="mr-2 text-xl font-bold">{index }.</p><h3 className="text-neutral-700 text-xl">
                      <a className="text-neutral-900 hover:forced-color-adjust-none   hover:text-orange-400 active:text-red-700" href={news.url}>
                        
                        {news.title}
                      </a>
                    </h3>
                    </div>
                    <p className="text-orange-900 text-s">
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
