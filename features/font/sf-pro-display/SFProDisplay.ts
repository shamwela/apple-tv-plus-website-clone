import localFont from 'next/font/local'

export const SFProDisplay = localFont({
  variable: '--font-sf-pro-display',
  src: [
    {
      path: './sf-pro-display_medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './sf-pro-display_semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './sf-pro-display_bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})
