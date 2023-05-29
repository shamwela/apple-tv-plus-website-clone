import { ButtonLink } from '../common/ButtonLink'
import { Headline } from '../common/Headline'
import Image from 'next/image'
import AppleMusicStudentPlanImage from '@/public/images/apple-music-student-plan.jpg'

export const AppleMusicStudentPlan = () => (
  <div className='mx-auto mt-[39px] flex w-full max-w-[1360px] flex-col gap-y-4 bg-light-gray px-10 pt-8 md:flex-row md:px-28 md:pt-20'>
    <div className='flex flex-col items-start justify-center gap-y-8 md:basis-1/2'>
      <Headline
        text='The Apple Music Student Plan comes with Apple TV+ for free.'
        alignLeft
      />
      <ButtonLink href='#' color='black'>
        Try Apple Music free
      </ButtonLink>
    </div>
    <div className='flex items-center justify-end md:basis-1/2'>
      <Image
        src={AppleMusicStudentPlanImage}
        alt='Apple One Bundle'
        className='w-[299px] md:w-[319px] lg:w-[533px]'
      />
    </div>
  </div>
)
