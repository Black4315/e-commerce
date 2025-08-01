import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const ColourChnageIcon = (props: Props) => (
  <svg {...props} width="48" height="20" viewBox="0 0 48 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="6" fill="#A0BCE0" />
    <circle cx="10" cy="10" r="9" stroke="black" strokeWidth="2" />
    <circle cx="38" cy="10" r="10" fill="#E07575" />
  </svg>
);

export default ColourChnageIcon;
