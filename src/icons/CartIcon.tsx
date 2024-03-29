import { FC } from 'react';

type PropsType = {
  className?: string;
};

export const CartIcon: FC<PropsType> = (props) => {
  return (
    <svg
      className={props.className}
      xmlns='http://www.w3.org/2000/svg'
      width='512'
      height='449.863'
      viewBox='0 0 512 449.863'
    >
      <path
        id='cart'
        d='M7.8-478.9C3.5-476.7,0-470.8,0-466a15.784,15.784,0,0,0,8,13c3.7,1.9,5.8,2,36.7,2H77.6l36.1,126.6,36.2,126.6L147-192c-5,9.9-7.2,17.7-7.2,26a44.415,44.415,0,0,0,33.7,43.5c4.3,1.1,11.5,1.5,26.5,1.6,18.4.1,20,.2,15.5,1.3-8.3,2-14.6,5.6-21.1,12-17.7,17.8-17.7,45.5,0,63.1,17.9,17.8,45.5,17.8,63.1.1a44.788,44.788,0,0,0,8.8-51.4c-5.2-11.1-18.8-21.8-30.6-24.2-2.4-.4,26.2-.8,65.8-.8,57.3,0,69.1.2,65,1.2-8.3,2-14.6,5.6-21.1,12-17.7,17.8-17.7,45.5,0,63.1,17.9,17.8,45.5,17.8,63.1.1,17.8-17.9,17.8-45.4,0-63.2a41.414,41.414,0,0,0-21-12c-4.3-1.1-1.1-1.2,23.8-1.3,26.8-.1,29.1-.2,32.7-2.1a15.784,15.784,0,0,0,8-13,15.784,15.784,0,0,0-8-13c-3.9-2-5.6-2-133.2-2-121.1,0-129.5-.1-132.8-1.8-8.1-4-10.1-12.8-5.3-22.7l2.7-5.5H307.7c131.2,0,132.4,0,136.4-2a12.11,12.11,0,0,0,5.9-6.3c2.5-5.4,62-213.8,62-217.2,0-4.5-3.7-10.3-8-12.5-3.9-2-5.5-2-195.3-2H117.3l-6.7-23.8c-8-28.2-9.3-31.1-14.5-34-3.8-2.2-4.6-2.2-44.2-2.2C13.7-480.9,11.3-480.8,7.8-478.9Z'
        transform='translate(0 481)'
      />
    </svg>
  );
};
