import { FC } from 'react';

type PropsType = {
  className?: string;
};

export const StarIcon: FC<PropsType> = (props) => {
  return (
    <svg
      className={props.className}
      xmlns='http://www.w3.org/2000/svg'
      width='26.233'
      height='25.163'
      viewBox='0 0 26.233 25.163'
    >
      <path
        id='star'
        d='M13.194-500.818a1.449,1.449,0,0,0-.708.513c-.077.118-.821,1.8-1.647,3.74-1.493,3.5-1.5,3.53-1.662,3.556-.087.01-1.842.174-3.9.359-4.018.364-3.971.354-4.341.682A1.28,1.28,0,0,0,.5-490.93a1.252,1.252,0,0,0,.523,1.083c.164.159,1.442,1.288,2.837,2.509s2.6,2.278,2.678,2.355l.144.133-.852,3.72c-.893,3.894-.934,4.146-.77,4.536a1.379,1.379,0,0,0,1.544.852c.3-.062.431-.139,4.31-2.458,1.38-.826,2.56-1.529,2.617-1.555.087-.041.636.272,3.335,1.888,1.78,1.062,3.335,1.981,3.458,2.037a1.373,1.373,0,0,0,.554.1,1.337,1.337,0,0,0,1.365-1.37c-.005-.2-.3-1.6-.857-4.028l-.852-3.72.318-.287c.18-.159,1.488-1.308,2.914-2.56s2.653-2.36,2.735-2.478a1.4,1.4,0,0,0-.652-2.063c-.144-.056-1.452-.195-4.074-.431-2.124-.195-3.874-.364-3.884-.375s-.7-1.6-1.519-3.53-1.57-3.617-1.657-3.74A1.447,1.447,0,0,0,13.194-500.818Z'
        transform='translate(-0.5 500.878)'
      />
    </svg>
  );
};
