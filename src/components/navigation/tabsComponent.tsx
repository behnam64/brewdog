import { Box, Tab, Tabs, styled } from '@mui/material';
import { useGetParams } from '@src/hooks/useGetParams';
import { FoodEnum } from '@src/types/beerType';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, memo, useMemo } from 'react';

const BoxStyled = styled(Box)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  & > div {
    flex: 0 1 60rem;
    padding: 0 1rem;
  }
`;

export type TabsPropsType = {};

export const TabsComponent: FC<TabsPropsType> = memo((props) => {
  const router = useRouter();
  const { food } = useGetParams();
  const tabs: { label: string; value: string }[] = useMemo(() => {
    return [
      {
        label: 'All',
        value: FoodEnum.all,
      },
      {
        label: 'Steak',
        value: FoodEnum.steak,
      },
      {
        label: 'Pizza',
        value: FoodEnum.pizza,
      },
    ];
  }, []);

  return (
    <BoxStyled>
      <Box>
        <Tabs
          value={food}
          onChange={(event, newValue) => {
            router.push({ pathname: router.pathname, query: { ...router.query, food: newValue } });
          }}
        >
          {tabs.map((food) => (
              <Tab key={food.value} sx={{ width: '33.33%', minWidth: 0 }} label={food.label} value={food.value} />
          ))}
        </Tabs>
      </Box>
    </BoxStyled>
  );
});
