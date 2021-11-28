import * as React from 'react';

function SvgBsm(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      width='1em'
      height='1em'
      className='ijob'
      {...props}
    >
      <path d='M106 228q-1 0-3-2l-13-17q-2-3 0-6l3-3q3-4 6-4h179q9 0 14 2t7 4l2 2q2 3 3.5 1.5t.5-3.5l-2-3q-2-3-7-5.5t-14-2.5H69q-5 0-5-5v-15q0-5 5-6h252q2 0 4.5 1.5t3.5 3.5l6 11q2 6 4 6h105q2-1 3.5.5t.5 3.5l-5 12q-6 14-15 26-12 16-26.5 25.5T365 271q-20 7-22.5 5.5T339 271t-3.5-3.5-2.5 6.5q0 2-1.5 3t-6 2.5T315 287q-9 10-9 25 0 9 6.5 17t13.5 11 15 5q4 0 4 5v32q0 5-4 5h-56q-5 0-5-5v-7q0-7-15.5-14.5t-28.5-7-23 2.5q-7 2-11 4l-4 3q-2 1-5-1l-2-4q-2-4-2-6 0-7 9-15 7-7 20-11 6-1 1-3l-6 1q-7 1-14 5-17 11-17 29v24q0 5-5 5h-53q-5 0-5-5v-30q0-2 1.5-4.5t3.5-2.5l10-5q12-8 19-19 10-14 10-33 0-28-20-45-17-15-37-15z' />
    </svg>
  );
}

export default SvgBsm;