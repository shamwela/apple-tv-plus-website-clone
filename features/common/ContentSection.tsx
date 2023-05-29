import { type ReactNode } from 'react'

type ContentSectionProps = {
  reverse?: boolean
  children: ReactNode
}

export const ContentSection = ({
  reverse = false,
  children,
}: ContentSectionProps) => {
  // Some sections need to be reversed.
  const rowStyle = reverse ? 'md:flex-row-reverse' : 'md:flex-row'
  const className =
    rowStyle +
    ' mx-auto mt-32 flex w-full max-w-[1360px] flex-col gap-y-4 bg-light-gray px-10 py-8 md:px-28 md:py-20'

  return <section className={className}>{children}</section>
}
