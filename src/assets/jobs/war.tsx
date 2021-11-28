import * as React from 'react';

function SvgWar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      width='1em'
      height='1em'
      className='ijob'
      {...props}
    >
      <path d='M448 256q-1-7-1-13-2-16-6-33-6-22-16-41-13-25-38-46.5T351 104q-8 3-13 7.5t-7 15.5l-2 11q-2 11-5 17-3 8-12 18t-23 15q-10 3-23 4h-10q-10 1-22-1-22-4-33-17-10-11-13-19-3-6-5-17l-2-11q-2-11-7-15.5t-13-6.5q-11-4-36 17.5T87 169q-10 19-16 41-4 17-6 33l-1 13q0 12 3 29 6 32 19.5 57.5t38.5 47 37 18.5q7-3 12-7.5t7-15.5l3-11q2-11 4-17 4-8 13-19 11-13 34-17 12-2 21-1 11-1 22 1 23 4 33 17 9 11 13 19 2 6 4 17l3 11q2 11 7 15.5t13 6.5q11 4 36-17.5t38-46.5q14-27 20-60 3-16 3-27zm-59 65q-11 21-24 33l-4-10q-4-12-11-22-10-15-23-23-16-10-35-15-13-4-26-4h-10q-9-1-23 1-25 4-47 18-14 9-23 23-7 10-12 22l-3 10-9-9q-9-11-16-24t-10-30q-3-12-4-25v-10q0-10 1-22 3-25 13-43 7-13 16-24l8-9 4 10q4 12 11 22 10 15 23 23 23 14 49 18 13 2 22 1 10 1 23-1 26-4 48-18 18-12 30-35 6-11 8-20l8 9q9 11 16 24 10 18 13 42 1 13 1 23 1 37-14 65z' />
    </svg>
  );
}

export default SvgWar;