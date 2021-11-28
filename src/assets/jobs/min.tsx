import * as React from 'react';

function SvgMin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      width='1em'
      height='1em'
      className='ijob'
      {...props}
    >
      <path d='M148 130q-1-1 0-2l26-22q1-2 3-1 4 3 9 3 13 0 17-4l9-13q8-10 12.5-13.5T254 65l3-1q2-1 3 1l4 7q1 2-1 3-12 2-25 11-6 4-9 11-2 3-1 19v3q0 5-6 12-4 5-4 8.5t5 15.5l2 3-1 5 6 9-1 3 29 33 1 2v2l-10 13q-1 2-.5 3t2.5 0l6-5 6-7h1l38 43q2 1 1 3l-14 15q-1 0-.5 1t1.5 1q6-4 11-8l6-5q1 0 2 1l49 52 64 68 1 1-5 5-15 18q-2 2-1 2t2-1h1q11-8 15-12 3-2 5-5l2-2q1-1 2 0l12 13q3 3 2 6v6q-3 20-4 21l-2 2q-6 6-8 6.5t-15.5 0-15-1T354 387l-65-88-84-105-2 1q-1 1-2 0l-7-8q-1 0-2 .5t-2 .5-9-6l-8-5q-2 0-3 1l-26 24q-2 2-8 17-8 22-15 34-17 31-44 56 0 1-1 1t-1-1l-6-6v-2q27-39 36-61t11-49q1-6 1-7l8-10 4-7 1-3q0-4 1-5 17-17 17.5-21t-.5-8z' />
    </svg>
  );
}

export default SvgMin;