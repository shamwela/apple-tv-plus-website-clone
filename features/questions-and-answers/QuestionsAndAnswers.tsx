import { Disclosure } from '@headlessui/react'
import { DisclosureIcon } from './DisclosureIcon'

const questionsAndAnswers = [
  {
    question: 'What is Apple TV+?',
    answer:
      'Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added every month.',
  },
  {
    question: 'How can I watch it?',
    answer:
      'Watch Apple TV+ on the Apple TV app, which is already on your favorite Apple devices. Just open the app, click or tap Apple TV+, and enjoy the shows and movies. You can also watch Apple TV+ on streaming platforms, popular smart TVs, and AirPlay-enabled TVs with the Apple TV app — or watch online at tv.apple.com. Learn more',
  },
  {
    question: 'What does it cost?',
    answer:
      'That all depends on which offer you choose. (1) If you buy an Apple device, Apple TV+ is included free for 3 months.1 (2) A monthly subscription is just $6.99 per month after a free seven-day trial. (3) Apple TV+ is included in Apple One, which bundles up to five other Apple services into a single monthly subscription. Apple One plans start at $16.95 per month. (4) The Apple Music Student Plan comes with a free subscription to Apple TV+.',
  },
  {
    question: 'Can I share with my family?',
    answer:
      'Of course. Apple TV+ lets you share your subscription with up to five family members.',
  },
  {
    question: 'Are there commercials? And can I watch on demand?',
    answer:
      'Apple Originals are always commercial-free. Some shows release all episodes at once. Other shows add new episodes every Friday. You can then watch them on demand anytime, anywhere.',
  },
  {
    question: 'Do I need an Apple TV 4K?',
    answer:
      'No, you don’t. While Apple TV 4K — with 4K HDR and Dolby Atmos sound — is the ultimate way to experience Apple TV+, the original shows and movies on Apple TV+ are always available on the Apple TV app on your favorite devices.',
  },
  {
    question: 'Can I download to watch offline?',
    answer:
      'Absolutely. Download your favorite Apple Originals to your Apple device and watch them anywhere, anytime without a Wi-Fi connection.',
  },
]

export const QuestionsAndAnswers = () => {
  return (
    <div className='mx-auto mt-10 max-w-[980px]'>
      <h2 className='mb-[52px] text-center text-[28px] font-bold md:text-[40px] lg:text-[72px]'>
        Questions? Answers.
      </h2>
      <div className='px-[38.4px]'>
        {questionsAndAnswers.map(({ question, answer }, index) => {
          const isLastOne = index === questionsAndAnswers.length - 1

          return (
            <Disclosure key={question}>
              {({ open }) => (
                <div
                  // Do not add bottom border on the last one.
                  className={isLastOne ? '' : 'border-b-2'}
                >
                  <Disclosure.Button className='flex w-full items-baseline justify-between py-[21px]'>
                    <span className='text-left font-display text-[19px] font-semibold md:text-[21px] lg:text-[24px]'>
                      {question}
                    </span>
                    <DisclosureIcon
                      className={
                        open
                          ? 'rotate-180'
                          : 'transition-transform duration-300 ease-in-out'
                      }
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='pb-[38px] text-[17px]'>
                    {answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          )
        })}
      </div>
    </div>
  )
}
