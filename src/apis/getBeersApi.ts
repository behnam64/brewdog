import { BeerType, FoodEnum } from '@src/types/beerType';
import { axiosInstance } from './axiosInstance';

export const getBeersApi = async (food: FoodEnum, ids?: number[]): Promise<BeerType[]> => {
  let filter = '?';
  if (food !== FoodEnum.all) {
    filter += `food=${food}`;
  }
  if (ids && ids.length) {
    filter += `&ids=${ids.join('|')}`;
  }
  if (!ids || ids.length > 0) {
    const response = await axiosInstance.get<BeerType[]>(`beers${filter}`);
    return response.data;
  } else {
    return [];
  }
};
