// import CarouselComponent from "@/components/Carousel";
import Grid from '@/components/Grid-Question/Grid';
import {
  LoginLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/server';
// import Interpolate from "@/components/Spring/example2";

const Home = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '550px',
        margin: '0 auto',
      }}
    >
      <Grid/>
      {/* <RegisterLink>Register here</RegisterLink> */}
      {/* <LoginLink>Login</LoginLink> */}
      {/* <Interpolate/> */}
      {/* <CarouselComponent/> */}
    </div>
  );
};

export default Home;
