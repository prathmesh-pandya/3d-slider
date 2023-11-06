// import CarouselComponent from "@/components/Carousel";
import {
  LoginLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
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
      <RegisterLink>Register here</RegisterLink>
      <LoginLink>Login</LoginLink>
      {/* <Interpolate/> */}
      {/* <CarouselComponent/> */}
    </div>
  );
};

export default Home;
