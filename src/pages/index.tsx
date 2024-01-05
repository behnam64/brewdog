import { getBeersApi } from '@src/apis/getBeersApi';
import { BeerListComponent } from '@src/components/beer/beerListComponent';
import { BeerModalComponent } from '@src/components/beer/beerModalComponent';
import { HeaderComponent } from '@src/components/navigation/headerComponent';
import { TabsComponent } from '@src/components/navigation/tabsComponent';
import { useGetParams } from '@src/hooks/useGetParams';
import { BeerType } from '@src/types/beerType';
import { useState } from 'react';
import { useQuery } from 'react-query';

export default function Home() {
  const { food } = useGetParams();
  const [beerId, setBeerId] = useState<number | null>(null);
  const {
    data: bears,
    isLoading,
    isFetching,
    isError,
  } = useQuery<BeerType[]>(['beers', food], () => getBeersApi(food));

  return (
    <>
      <HeaderComponent />
      <TabsComponent />
      <BeerListComponent
        beers={bears}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        onSelect={(index) => setBeerId(index)}
      />
      <BeerModalComponent
        beer={beerId !== null && bears ? bears.find((beer) => beer.id === beerId) : undefined}
        onClose={() => setBeerId(null)}
      />
    </>
  );
}
