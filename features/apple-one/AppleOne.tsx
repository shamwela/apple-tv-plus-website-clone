import AppleOneImage from '@/public/images/apple-one.png'
import AppleOneBundleImage from '@/public/images/apple-one-bundle.jpg'
import Image from 'next/image'
import { ButtonLink } from '../common/ButtonLink'
import { Headline } from '../common/Headline'
import { ContentSection } from '../common/ContentSection'

export const AppleOne = () => (
  <ContentSection reverse>
    <div className='flex flex-col items-center gap-y-8 md:basis-1/2'>
      <Image
        src={AppleOneImage}
        alt='Apple One'
        className='w-[62px] lg:w-[102px]'
      />
      <Headline text='Bundle Apple TV+ with up to five other great services. And enjoy more for less.' />
      <ButtonLink href='#' color='black'>
        Try Apple One free
      </ButtonLink>
      <a href='#' className='text-[17px] lg:text-[19px]'>
        Learn more {'>'}
      </a>
    </div>
    <div className='flex items-center md:basis-1/2'>
      <Image src={AppleOneBundleImage} alt='Apple One Bundle' />
    </div>
  </ContentSection>
)
