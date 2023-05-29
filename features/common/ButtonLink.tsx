import { type ReactNode } from 'react'

type ButtonLinkProps = {
  color: 'black' | 'blue'
  href: string
  children: ReactNode
}

export const ButtonLink = ({ color, href, children }: ButtonLinkProps) => {
  return (
    <a
      href={href}
      className={`${
        // Apple uses bold font only in black buttons,
        // and font sizes are not the same either.
        color === 'black'
          ? 'bg-dark-gray text-[14px] font-bold'
          : 'bg-[#0071e3] text-[17px]'
      } inline-block rounded-full bg-dark-gray px-[22px] py-[12px] text-center text-white hover:no-underline hover:opacity-90`}
    >
      {children}
    </a>
  )
}
