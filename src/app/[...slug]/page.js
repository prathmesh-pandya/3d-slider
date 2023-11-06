import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/server';
import { redirect } from 'next/navigation';

async function SlugComponent({ params }) {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isAuthed = await isAuthenticated();

  if (!isAuthed) {
    redirect('not-authenticated');
  }
  return (
    <div>
      <h1>Welcome to {params.slug[0]} Page</h1>
      <h3>{user.given_name}</h3>
    </div>
  );
}
export default SlugComponent;
