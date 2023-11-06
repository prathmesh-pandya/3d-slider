// import CarouselComponent from "@/components/Carousel";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/server';
// import Interpolate from "@/components/Spring/example2";

const Home = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isAuthed=await isAuthenticated()
  return (
    <div
      style={{
        height: '100vh',
        width: '550px',
        margin: '0 auto',
      }}
    >
      {isAuthed ? (
        <LogoutLink>Logout</LogoutLink>
      ) : (
        <>
          <div>
            <LoginLink>Login</LoginLink>
          </div>
          <div>
            <RegisterLink>Register here</RegisterLink>
          </div>
        </>
      )}
      {/* <Interpolate/> */}
      {/* <CarouselComponent/> */}
    </div>
  );
};

export default Home;
