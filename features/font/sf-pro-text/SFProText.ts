import localFont from 'next/font/local'

export const SFProText = localFont({
  variable: '--font-sf-pro-text',
  src: [
    {
      path: './sf-pro-text_regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './sf-pro-text_semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './sf-pro-text_bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})
