
import dynamic from 'next/dynamic';

const CarouselComponent = dynamic(() => import('../components/Carousel'), {
  ssr: false,
});

const Home = () => {

  return (
    <div>
      <CarouselComponent/>
    </div>
  );
};

export default Home;
