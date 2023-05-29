export const Headline = ({
  text,
  alignLeft = false,
}: {
  text: string
  alignLeft?: boolean
}) => (
  <p
    className={`${
      // One headline needs to be aligned left only on larger screens.
      alignLeft ? 'md:text-left' : ''
    } text-center font-display text-[28px] font-bold leading-[30px] md:text-[24px] lg:text-[48px] lg:leading-[52px]`}
  >
    {text}
  </p>
)
