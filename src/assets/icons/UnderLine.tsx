import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const UnderLineIcon = (props: Props) => (
  <svg {...props} width="48" height="1" viewBox="0 0 48 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<line y1="0.5" x2="48" y2="0.5" stroke="black"/>
</g>
</svg>
);

export default UnderLineIcon;
