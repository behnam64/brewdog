import { Badge, Box, Button, Typography, styled } from '@mui/material';
import Link from 'next/link';
import { FC, memo, useEffect, useState } from 'react';
import { ThemeChangeComponent } from './themeChangeComponent';
import { CartIcon } from '@src/icons/CartIcon';
import { StarIcon } from '@src/icons/StarIcon';
import { useCartsStore } from '@src/store/useCartStore';
import { useFavouritesStore } from '@src/store/useFavouritesStore';

const BoxStyled = styled(Box)`
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${(props) => props.theme.palette.background.default};
  z-index: 1200;
  & > div {
    height: 100%;
    flex: 0 1 60rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > a {
      text-decoration: none;
      & > p {
        font-weight: bold;
        color: ${(props) => props.theme.palette.text.primary};
        font-size: 1.2rem;
      }
    }
    & > div {
      height: 100%;
      display: flex;
      align-items: center;
      & > button {
        & svg {
          width: 1rem;
          height: 1rem;
          & > path {
            fill: ${(props) => props.theme.palette.text.primary};
          }
        }
      }
      & > a {
        display: block;
        margin-left: 0.5rem;
        & > button {
          position: relative;
          color: white;
          & svg {
            width: 1rem;
            height: 1rem;
            & > path {
              fill: white;
            }
          }
          & > div {
            position: absolute;
            top: -0.5rem;
            right: -0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.5rem;
            height: 1.5rem;
            font-size: 0.8rem;
            background: ${(props) => props.theme.palette.error.main};
            border-radius: 20rem;
          }
        }
      }
    }
  }
`;

export type HeaderPropsType = {};

export const HeaderComponent: FC<HeaderPropsType> = memo((props) => {
  const cartsStore = useCartsStore();
  const favouritesStore = useFavouritesStore();
  const [favouritesLength, setFavouritesLength] = useState(0);
  const [cartsLength, setCartsLength] = useState(0);
  useEffect(() => {
    setFavouritesLength(favouritesStore.ids.length);
  }, [favouritesStore]);
  useEffect(() => {
    setCartsLength(cartsStore.ids.length);
  }, [cartsStore]);

  return (
    <>
      <Box sx={{ height: '4rem', width: '100%' }} />
      <BoxStyled>
        <Box>
          <Link href={'/'}>
            <Typography>BrewDog</Typography>
          </Link>
          <Box>
            <ThemeChangeComponent />
            <Link href={'/favourites'}>
              <Button variant='contained' endIcon={<StarIcon />}>
                Favourites
                {!!favouritesLength && <Box>{favouritesLength}</Box>}
              </Button>
            </Link>
            <Link href={'/cart'}>
              <Button variant='contained' endIcon={<CartIcon />}>
                Cart
                {!!cartsLength && <Box>{cartsLength}</Box>}
              </Button>
            </Link>
          </Box>
        </Box>
      </BoxStyled>
    </>
  );
});
