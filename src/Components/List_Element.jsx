import { useEffect, useState } from "react";

export const ListElement = ({ news }) => {
  console.log({ news });
  const [pageNo, setPageNo] = useState(1);

  const showNumber = 9;
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
        className="inline-block rounded bg-blue-500 px-3 py-0 text-l font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" 
        onClick={() => setPageNo(pageNo - 1)}> {'<'}</button>
      )}
      <h4 
       className="inline-block rounded   px-6 pb-[6px] pt-2 text-xl font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out       active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
      //  className="mb-2 mt-0 text-2xl font-medium leading-tight text-primary"
        >{pageNo}</h4>
      {pageNo * showNumber < news.length - 1 && (
        <button
        className="inline-block rounded bg-blue-500 px-3 py-0  text-l font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        onClick={() => setPageNo(pageNo + 1)}>
          {'>'}
        </button>
       
      )}
       </div>
    </>
  );
};
