import { Card, IconButton, Skeleton, Typography, styled } from '@mui/material';
import { StarBorderIcon } from '@src/icons/StarBorderIcon';
import { StarIcon } from '@src/icons/StarIcon';
import { useFavouritesStore } from '@src/store/useFavouritesStore';
import { BeerType } from '@src/types/beerType';
import { FC, MouseEvent, memo, useMemo } from 'react';

const CardStyled = styled(Card)`
  position: relative;
  width: calc(33.33% - 1rem);
  margin: 0.5rem;
  box-shadow: ${(props) => props.theme.shadows[2]};
  @media screen and (max-width: 800px) {
    width: calc(50% - 1rem);
  }
  @media screen and (max-width: 500px) {
    width: calc(100% - 1rem);
  }
  & > p:nth-of-type(1) {
    margin: 1rem;
    margin-top: 3rem;
    text-align: center;
    font-weight: bold;
  }
  & > img {
    display: block;
    height: 15rem;
    width: 100%;
    object-fit: contain;
    object-position: center center;
    margin: 1rem auto;
  }
  & > p:nth-of-type(2) {
    margin: 1rem;
    text-align: center;
  }
  & > button {
    position: absolute;
    top: 0;
    right: 0;
    width: 3rem;
    height: 3rem;
    & > svg {
      width: 1.3rem;
      height: 1.3rem;
      & > path {
        fill: orange;
      }
    }
  }
`;

const SkeletonStyled = styled(Skeleton)`
  border-radius: 0.25rem;
`;

export type BeerCardPropsType = {
  beer?: BeerType;
  onSelect?: (id: number) => void;
};

export const BeerCardComponent: FC<BeerCardPropsType> = memo((props) => {
  const favouritesStore = useFavouritesStore();

  const isFavourite = useMemo(() => {
    if (props.beer) {
      if (favouritesStore.ids && favouritesStore.ids.length >= 0) {
        return favouritesStore.ids.some((id) => id === props.beer?.id);
      } else {
        return false;
      }
    }
  }, [favouritesStore, props.beer]);

  const onSwitchFavourites = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (props.beer) {
      if (isFavourite) {
        favouritesStore.remove(props.beer.id);
      } else {
        favouritesStore.add(props.beer.id);
      }
    }
  };

  if (props.beer) {
    return (
      <CardStyled onClick={() => props.onSelect && props.beer && props.onSelect(props.beer.id)}>
        <Typography>{props.beer.name}</Typography>
        <img alt={props.beer.name} src={props.beer.image_url} loading='lazy' />
        <Typography>{props.beer.tagline}</Typography>
        <IconButton onClick={(event) => onSwitchFavourites(event)}>
          {!isFavourite && <StarBorderIcon />}
          {!!isFavourite && <StarIcon />}
        </IconButton>
      </CardStyled>
    );
  } else {
    return (
      <CardStyled sx={{height: '25rem'}}>
      </CardStyled>
    );
  }
});
