import { Button, Menu, MenuItem, Typography, styled } from '@mui/material';
import { ArrowIcon } from '@src/icons/ArrowIcon';
import { ThemeIcon } from '@src/icons/ThemeIcon';
import { ThemeEnum } from '@src/types/themeType';
import { useTheme } from 'next-themes';
import { FC, memo, useEffect, useMemo, useState } from 'react';

const ButtonStyled = styled(Button)`
  color: ${(props) => props.theme.palette.text.primary};
  & > p {
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
  & svg {
    width: 1rem;
    height: 1rem;
    & > path {
      fill: ${(props) => props.theme.palette.text.primary};
    }
    @media screen and (max-width: 500px) {
      &:nth-of-type(1) {
        margin: 0;
      }
    }
  }
`;

export type ThemeChangePropsType = {};

export const ThemeChangeComponent: FC<ThemeChangePropsType> = memo((props) => {
  const { theme, setTheme } = useTheme();
  const [themeText, setThemeText] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const themeList = useMemo(() => {
    return [
      {
        text: 'Device theme',
        value: ThemeEnum.system,
      },
      {
        text: 'Dark theme',
        value: ThemeEnum.dark,
      },
      {
        text: 'Light theme',
        value: ThemeEnum.light,
      },
    ];
  }, []);

  useEffect(() => {
    setThemeText(themeList.find((el) => el.value === theme)?.text as string);
  }, [theme]);

  return (
    <>
      <ButtonStyled
        onClick={(event) => setAnchorEl(event.currentTarget)}
        startIcon={<ThemeIcon />}
        endIcon={<ArrowIcon />}
      >
        <Typography>{`${themeText}`}</Typography>
      </ButtonStyled>
      <Menu open={!!anchorEl} onClose={() => setAnchorEl(null)} anchorEl={anchorEl}>
        {themeList.map((el) => (
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              setTheme(el.value);
            }}
          >
            {el.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
});
