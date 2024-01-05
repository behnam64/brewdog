import { Box, CircularProgress, styled } from '@mui/material';
import { BeerType } from '@src/types/beerType';
import { FC, useCallback } from 'react';
import { BeerCardComponent } from './beerCardComponent';

const BoxStyled = styled(Box)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  & > div:nth-of-type(1) {
    flex: 0 1 60rem;
    padding: 0 0.5rem;
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
  }
  & > div:nth-of-type(2) {
    background: ${(props) => props.theme.palette.background.default};
    opacity: 0.2;
    width: 100%;
    height: 100%;
  }
  & > div:nth-of-type(3) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15rem;
  }
`;

export type BeerListPropsType = {
  beers?: BeerType[];
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  onSelect: (index: number) => void;
};

export const BeerListComponent: FC<BeerListPropsType> = (props) => {
  const onSelect = useCallback((id: number) => {
    props.onSelect(id);
  }, []);

  if (!props.isLoading) {
    return (
      <BoxStyled>
        <Box>
          {!props.isLoading &&
            props.beers?.map((beer, i) => <BeerCardComponent key={beer.id} beer={beer} onSelect={onSelect} />)}
          {!!props.isLoading && [0, 1, 2, 3, 4, 5, 6, 7].map((el) => <BeerCardComponent key={el} />)}
        </Box>
        <Box sx={{ display: !!props.isFetching ? 'block' : 'none' }} />
        <Box sx={{ display: !!props.isLoading ? 'flex' : 'none !important' }}>
          <CircularProgress />
        </Box>
      </BoxStyled>
    );
  } else if (props.isLoading) {
  }
};
