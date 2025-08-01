import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const Mail_Big = (props: Props) => (
  <svg {...props} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 7L16 16L29 7M3 25H29V7H3V25Z" stroke="black" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

export default Mail_Big;
