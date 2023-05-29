import { Link } from 'react-router-dom'

export const AppleTVPage = () => (
  <main className='flex flex-col items-center gap-y-4 p-8'>
    <h1 className='text-3xl font-bold'>Apple TV page</h1>
    <p>
      I created this page just to demonstrate the React Router usage. There is
      nothing to see here.
    </p>
    <Link to='/'>← Go back to the main page</Link>
  </main>
)
