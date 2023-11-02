import { notFound } from 'next/navigation';

const GTMComponent = ({ params }) => {
  if (params.slug[0] === 'prathmesh') {
    return <div>page</div>;
  }
  return notFound();
};

export default GTMComponent;
