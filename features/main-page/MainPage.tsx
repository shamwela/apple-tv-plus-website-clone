import Head from 'next/head'
import Image from 'next/image'
import AirPlayScreenshot from '@/public/images/airplay-screenshot.jpg'
import RemoteImage from '@/public/images/remote.jpg'
import AppleTVImage from '@/public/images/apple-tv.jpg'
import IPhoneImage from '@/public/images/iphone.jpg'
import IPadImage from '@/public/images/ipad.jpg'
import MacImage from '@/public/images/mac.jpg'
import AirPlayImage from '@/public/images/airplay.jpg'
import AppleTVPlusImage from '@/public/images/apple-tv-plus.png'
import SamsungSmartTVImage from '@/public/images/samsung-smart-tv.jpg'
import LGSmartTVImage from '@/public/images/lg-smart-tv.jpg'
import VizioImage from '@/public/images/vizio.jpg'
import SonyImage from '@/public/images/sony.jpg'
import XFinityImage from '@/public/images/xfinity.jpg'
import RokuImage from '@/public/images/roku.jpg'
import FireTVImage from '@/public/images/fire-tv.jpg'
import GoogleTVImage from '@/public/images/google-tv.jpg'
import PlayStationImage from '@/public/images/playstation.jpg'
import XBoxImage from '@/public/images/xbox.jpg'
import AppleTV4KImage from '@/public/images/apple-tv-4k.png'
import { QuestionsAndAnswers } from '@/features/questions-and-answers/QuestionsAndAnswers'
import { AppleOne } from '@/features/apple-one/AppleOne'
import { AppleMusicStudentPlan } from '../apple-music-student-plan/AppleMusicStudentPlan'
import { Headline } from '../common/Headline'
import { ButtonLink } from '../common/ButtonLink'

export const MainPage = () => {
  return (
    <>
      <Head>
        <title>Apple TV+ - Apple</title>
        <meta
          name='description'
          content='Apple TV+ features critically acclaimed Apple Original shows and movies. Watch on the Apple TV app across devices.'
        />
      </Head>

      <main>
        <div className='mx-auto p-4 lg:w-[980px]'>
          <Image
            src={AppleTVPlusImage}
            alt='Apple TV+'
            className='mx-auto h-[57px] w-[57px] lg:h-[86px] lg:w-[86px]'
          />
          <h2 className='p-4 text-center text-[28px] font-bold md:text-[40px] md:leading-[44px] lg:text-[80px] lg:leading-[84px]'>
            Watch Apple TV+ anywhere on the Apple TV app.
          </h2>
          <p className='p-4 text-center text-[17px]'>
            Find the Apple TV app on your favorite Apple devices. Or watch Apple
            TV+ online at{' '}
            <a href='https://tv.apple.com' target='_blank'>
              tv.apple.com
            </a>
            .
          </p>
          <div className='grid grid-cols-3 gap-y-5 md:grid-cols-5'>
            <div className='flex flex-col items-center gap-y-2'>
              <Image
                src={AppleTVImage}
                alt='Apple TV'
                height={51}
                className='lg:h-[82px] lg:w-[66px]'
              />
              <h3 className='text-xs font-semibold lg:text-[19px]'>Apple TV</h3>
            </div>
            <div className='flex flex-col items-center gap-y-2'>
              <Image
                src={IPhoneImage}
                alt='Apple'
                height={51}
                className='lg:h-[81px] lg:w-[90px]'
              />
              <h3 className='text-xs font-semibold lg:text-[19px]'>iPhone</h3>
            </div>
            <div className='flex flex-col items-center gap-y-2'>
              <Image
                src={IPadImage}
                alt='iPad'
                height={51}
                className='lg:h-[81px] lg:w-[85px]'
              />
              <h3 className='text-xs font-semibold lg:text-[19px]'>iPad</h3>
            </div>
            <div className='flex flex-col items-center gap-y-2'>
              <Image
                src={MacImage}
                alt='Mac'
                height={51}
                className='lg:h-[81px] lg:w-[114px]'
              />
              <h3 className='text-xs font-semibold lg:text-[19px]'>Mac</h3>
            </div>
            <div className='flex flex-col items-center gap-y-2'>
              <Image
                src={AirPlayImage}
                alt='AirPlay'
                height={51}
                className='lg:h-[81px] lg:w-[54px]'
              />
              <h3 className='text-xs font-semibold lg:text-[19px]'>AirPlay</h3>
            </div>
          </div>
        </div>

        <div className='mx-auto flex flex-col items-center gap-y-4 px-4 py-20 lg:w-[980px]'>
          <p className='text-center text-[28px] font-semibold leading-[32px]  md:max-w-[50%] lg:text-[40px] lg:leading-[44px]'>
            See it on your smart TV or streaming device.
          </p>
          <a
            href='https://support.apple.com/en-gb/guide/tvplus/welcome/web'
            target='_blank'
          >
            Set up your device {'>'}
          </a>
          <div className='grid grid-cols-3 place-items-center gap-x-10 lg:grid-cols-5'>
            <Image src={SamsungSmartTVImage} alt='Samsung Smart TV' />
            <Image src={LGSmartTVImage} alt='LG Smart TV' />
            <Image src={VizioImage} alt='Vizio' />
            <Image src={SonyImage} alt='Sony' />
            <Image src={XFinityImage} alt='XFinity' />
            <Image src={RokuImage} alt='Roku' />
            <Image src={FireTVImage} alt='Fire TV' />
            <Image src={GoogleTVImage} alt='Google TV' />
            <Image src={PlayStationImage} alt='PlayStation' />
            <Image src={XBoxImage} alt='XBox' />
          </div>
        </div>

        <QuestionsAndAnswers />
        <AppleOne />
        <AppleMusicStudentPlan />

        {/* Top margin should be the same as the gap. */}
        <div className='mx-auto my-[39px] flex max-w-[1360px] flex-col gap-[39px] md:flex-row'>
          <div className='flex basis-1/2 flex-col items-center gap-y-4 bg-light-gray px-10 pt-8 md:px-10 md:pt-20'>
            <Image src={AppleTV4KImage} alt='Apple TV 4K' />
            <Headline text='The Apple experience. Cinematic in every sense.' />
            <div className='flex items-center gap-x-[30.4px]'>
              <ButtonLink href='#' color='blue'>
                Buy
              </ButtonLink>
              <a href='#' className='text-[17px] lg:text-[19px]'>
                Learn more {'>'}
              </a>
            </div>
            <Image src={RemoteImage} alt='Remote' />
          </div>
          <div className='flex basis-1/2 flex-col items-center justify-between gap-y-4 bg-light-gray px-10 pt-8 md:px-20 md:pt-20'>
            <div className='flex flex-col items-center gap-y-4'>
              <span className='font-display text-[19px] font-semibold lg:text-[32px]'>
                AirPlay
              </span>
              <Headline text='Bring Apple TV+ to a screen near you.' />
              <a href='#' className='text-[17px] lg:text-[19px]'>
                Learn more {'>'}
              </a>
            </div>
            <Image src={AirPlayScreenshot} alt='AirPlay screenshot' />
          </div>
        </div>
      </main>
    </>
  )
}
