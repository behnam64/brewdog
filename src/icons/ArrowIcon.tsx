import { FC } from 'react';

type PropsType = {
  className?: string;
};

export const ArrowIcon: FC<PropsType> = (props) => {
  return (
    <svg
      className={props.className}
      width='12'
      height='7'
      viewBox='0 0 12 7'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 6.75C5.75391 6.75 5.53516 6.66797 5.37109 6.50391L0.996094 2.12891C0.640625 1.80078 0.640625 1.22656 0.996094 0.898438C1.32422 0.542969 1.89844 0.542969 2.22656 0.898438L6 4.64453L9.74609 0.898437C10.0742 0.542969 10.6484 0.542969 10.9766 0.898437C11.332 1.22656 11.332 1.80078 10.9766 2.12891L6.60156 6.50391C6.4375 6.66797 6.21875 6.75 6 6.75Z'
        fill='#000'
      />
    </svg>
  );
};
