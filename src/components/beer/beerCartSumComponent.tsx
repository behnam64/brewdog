import { Box, Button, Typography, styled } from '@mui/material';
import { useCartsStore } from '@src/store/useCartStore';
import { BeerType } from '@src/types/beerType';
import { FC, memo, useMemo } from 'react';

const BoxStyled = styled(Box)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 1rem 0;
  & > div {
    flex: 0 1 60rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export type BeerCartSumPropsType = {
  beers?: BeerType[];
};

export const BeerCartSumComponent: FC<BeerCartSumPropsType> = memo((props) => {
  const cartsStore = useCartsStore();

  const sum = useMemo(() => {
    if (props.beers) {
      return props.beers.reduce((sum, beer) => sum + beer.srm, 0);
    } else {
      return 0;
    }
  }, [props.beers]);

  return (
    <BoxStyled>
      <Box>
        <Typography>Sum: {sum}</Typography>
        <Button variant='contained' onClick={() => cartsStore.clear()}>
          Clear Cart
        </Button>
      </Box>
    </BoxStyled>
  );
});
