import { FoodEnum } from '@src/types/beerType';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export const useGetParams = () => {
  const router = useRouter();
  const food = useMemo(() => {
    if (router.query.food === FoodEnum.steak) {
      return FoodEnum.steak;
    } else if (router.query.food === FoodEnum.pizza) {
      return FoodEnum.pizza;
    } else {
      return FoodEnum.all;
    }
  }, [router]);
  return { food };
};
