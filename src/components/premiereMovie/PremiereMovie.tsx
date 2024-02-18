import { axiosBase } from '@/config/axiosConfig';
import { IpersonPopular } from '@/types/Person';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

export const PremiereMovie = () => {
  /*  const { isPending, error, data } = useQuery({
    queryKey: ['user'],
    queryFn: () => axiosBase.get<IpersonPopular>('/v1.4/movie/5275429').then(el => el.data.docs),
  });*/
  return (
    <div className="flex w-full h-[500px] justify-center">
      <Image width={400} alt='' height={400} src={'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/0626de3c-b731-4f72-9bd0-906aacc3bbe1/x1000'} />
    </div>
  )
};
