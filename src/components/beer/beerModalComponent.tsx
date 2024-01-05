import { Box, Button, Card, Modal, Typography, styled } from '@mui/material';
import { useCartsStore } from '@src/store/useCartStore';
import { BeerType } from '@src/types/beerType';
import { FC, useMemo, useState } from 'react';

const BoxStyled = styled(Box)`
  padding: 0 1.5rem;
  max-width: 40rem;
  margin: 2rem auto;
  outline: none;
  & > div {
    max-height: calc(100);
    & > p:nth-of-type(1) {
      margin: 1rem;
      text-align: center;
      font-weight: bold;
    }
    & > img {
      aspect-ratio: 1/0.5;
      width: 100%;
      object-fit: contain;
      object-position: center center;
      margin: 1rem auto;
    }
    & > p:nth-of-type(2) {
      margin: 1rem;
      text-align: center;
    }
    & > p:nth-of-type(3) {
      margin: 1rem;
      text-align: center;
    }
    & > p:nth-of-type(4) {
      margin: 1rem;
      text-align: justify;
      & > button {
        padding: 0.2rem;
        display: inline;
      }
    }
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 1rem;
    }
  }
`;

export type BeerModalPropsType = {
  beer?: BeerType;
  onClose: () => void;
};

export const BeerModalComponent: FC<BeerModalPropsType> = (props) => {
  const cartsStore = useCartsStore();
  const [showMore, setShowMore] = useState(false);
  useMemo(() => {setShowMore(false)}, [props.beer]);

  const isAddedToCart = useMemo(() => {
    if (props.beer) {
      if (cartsStore.ids && cartsStore.ids.length >= 0) {
        return cartsStore.ids.some((id) => id === props.beer?.id);
      } else {
        return false;
      }
    }
  }, [cartsStore, props.beer]);

  return (
    <Modal
      open={!!props.beer}
      onClose={props.onClose}
      aria-labelledby='parent-modal-title'
      aria-describedby='parent-modal-description'
      sx={{ overflowY: 'scroll' }}
    >
      <BoxStyled>
        <Card>
          <Typography>{props.beer?.name}</Typography>
          <img alt={props.beer?.name} src={props.beer?.image_url} loading='lazy' />
          <Typography>{props.beer?.tagline}</Typography>
          <Typography>Abv: {props.beer?.abv}</Typography>
          {props.beer?.description && props.beer?.description.length > 200 && (
            <Typography>
              {showMore ? props.beer?.description : `${props.beer?.description.substring(0, 200)}`}
              {!showMore && '...'}
              <Button onClick={() => setShowMore(!showMore)}>
                {!showMore && 'Show more'}
                {showMore && 'Show less'}
              </Button>
            </Typography>
          )}
          {props.beer?.description && props.beer?.description.length <= 200 && (
            <Typography>{props.beer?.description}</Typography>
          )}
          <Box>
            <Typography>Price: {props.beer?.srm}</Typography>
            {!isAddedToCart && <Button variant='contained' onClick={() => props.beer && cartsStore.add(props.beer.id)}>Add to Cart</Button>}
            {isAddedToCart && <Button variant='contained' onClick={() => props.beer && cartsStore.remove(props.beer.id)}>Remove from Cart</Button>}
          </Box>
        </Card>
      </BoxStyled>
    </Modal>
  );
};
