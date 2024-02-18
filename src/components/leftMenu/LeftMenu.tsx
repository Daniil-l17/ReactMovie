'use client';

import { axiosBase } from '@/config/axiosConfig';
import { IpersonPopular } from '@/types/Person';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

export const LeftMenu = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      axiosBase
        .get<IpersonPopular>(
          '/v1.4/person?page=1&limit=25&notNullFields=photo&countAwards=4-10&movies.rating=8-10',
        )
        .then(el => el.data.docs),
  });

  return (
    <div style={{ borderLeft: `3px solid #1d1e23` }} className="flex flex-col h-[1200px] sticky top-0 overflow-auto !w-[350px] py-6 px-3">
      <div className="flex justify-center w-full">
        <input
          className=" border border-solid cursor-pointer border-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 py-3 px-7 rounded-xl"
          placeholder="найти по....."
          type="text"
        />
      </div>
      <h1 className="mb-4 text-[22px] mt-7 text-white font-semibold">Лучшие Актеры ✨</h1>
      <ul className=" flex flex-col gap-3 overflow-auto">
        {error ? (
          <h1>ошабка</h1>
        ) : isPending ? (
          <span>loading.....</span>
        ) : (
          data
            ?.filter(el => el.name && el.age)
            .map(el => (
              <li key={el.id} className="flex cursor-pointer gap-2">
                <Image
                  width={140}
                  priority
                  className=" rounded-lg"
                  src={el.photo}
                  height={140}
                  alt={el.name!}
                />
                <div className=" py-2">
                  <h1 className="text-xl  font-medium">{el.name}</h1>
                  <span>{`${el.age} лет`}</span>
                </div>
              </li>
            ))
        )}
      </ul>
    </div>
  );
};
