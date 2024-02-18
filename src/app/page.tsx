'use client';

import { PremiereMovie } from '@/components/premiereMovie/PremiereMovie';
import { axiosBase } from '@/config/axiosConfig';
import { Ipopular } from '@/types/PopularFilms';
import { RatingMovie } from '@/utils/Rating';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

export default function Home() {
      const { isPending, error, data } = useQuery({
    queryKey: ['movieTop'],
    queryFn: () =>
      axiosBase
        .get<Ipopular>(
          '/v1.4/movie?rating.imdb=8-10',
        )
        .then(el => el.data.docs),
  });

  console.log(data)
  

  return (
    <div className="py-4 px-2 flex-1">
      <PremiereMovie />
      <div className=" px-4 py-10">
        <h1 className="text-[30px] mb-5 text-white font-semibold ">Популярные фильмы</h1>
        {isPending ? <span>loading.....</span> : 
        <ul className="flex gap-14 justify-center flex-wrap">
        {data?.map(el => 
                    <li className=" cursor-pointer relative">
                    <Image
                      style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }}
                      width={250}
                      height={240}
                      priority
                      alt=""
                      src={
                        el.poster.url
                      }></Image>
                    <div className=" bottom-0 h-9 bg-[#47475081] left-0 right-0 absolute">
                      <h1 className=" w-[240px] truncate text-[#fff] px-1 py-1 flex text-lg items-center">
                        {el.name}
                      </h1>
                    </div>
                    <span className=" top-[20px] right-0 left-[200px] bg-[#ffffff59] w-[40px] h-[40px] rounded-[20px] flex justify-center items-center absolute">
                      <p className={`text-[${RatingMovie(el.rating.imdb)}] `}>{el.rating.imdb}</p>
                    </span>
                  </li>
          )}
        </ul>
        }
      </div>
    </div>
  );
}
