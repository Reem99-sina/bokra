import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function RootPage() {
  const cookieStore = await cookies();
  const isToken = cookieStore.get('access_tokens');

  if (isToken) {
    redirect('/dashboard');
  } else {
    redirect('/login');
  }
 
}
