'use client';

import { axiosBase } from '@/config/axiosConfig';
import { IGanres } from '@/types/Genres';
import { IpersonPopular } from '@/types/Person';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      axiosBase
        .get<IpersonPopular>('/v1.4/person?page=1&limit=25&notNullFields=photo&countAwards=4-10&movies.rating=8-10')
        .then((el) => el.data.docs),
  });

  console.log(data);
  
  

  return (
    <div className=" flex-1">

    </div>
  );
}
