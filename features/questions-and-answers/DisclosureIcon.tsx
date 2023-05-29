export const DisclosureIcon = ({ className }: { className: string }) => (
  <svg
    width={21}
    className={className}
    color='rgb(134, 134, 139)'
    viewBox='0 0 17 8.85'
  >
    <polyline
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      fillRule='evenodd'
      points='15 1.13 8.5 7.72 2 1.13'
    >
      <animate
        attributeName='points'
        values='15 1.13 8.5 7.72 2 1.13;
					15.85 4.42 8.5 4.42 1.15 4.42;
					15 7.72 8.5 1.13 2 7.72'
        dur='320ms'
        begin='indefinite'
        fill='freeze'
        keyTimes='0;
					0.5;
					1'
        calcMode='spline'
        keySplines='0.12, 0, 0.38, 0;
						0.2, 1, 0.68, 1'
      ></animate>
      <animate
        attributeName='points'
        values='15 7.72 8.5 1.13 2 7.72;
					15.85 4.42 8.5 4.42 1.15 4.42;
					15 1.13 8.5 7.72 2 1.13'
        dur='320ms'
        begin='indefinite'
        fill='freeze'
        keyTimes='0;
					0.5;
					1'
        calcMode='spline'
        keySplines='0.2, 0, 0.68, 0;
						0.2, 1, 0.68, 1'
      ></animate>
    </polyline>
  </svg>
)
