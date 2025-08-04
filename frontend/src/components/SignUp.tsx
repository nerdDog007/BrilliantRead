import { FaAmazon, FaApple } from "react-icons/fa";
import Continue from "./Continue";

function SignUp() {
    return (
      <div className="w-[100vw] md:w-[45%] h-fit lg:w-[35%] xl:w-[30%] md:absolute md:top-1/2 md:transform md:-translate-y-1/2 bg-white md:right-0  mx-auto shadow-2xl flex flex-col items-center gap-4 p-4">
        <h1 className="text-2xl text-center"> Discover & read more </h1>
        <Continue
          text={'Continue with Amazon'}
          clasName={' flex py-2 items-center gap-2 w-full  bg-[#f5d47a] w-full max-w-sm justify-center'}
          Icon={FaAmazon}
        />
        <Continue
          text={'Continue with Apple'}
          clasName={' flex py-2 items-center gap-2 w-full  bg-[#4285f4] w-full max-w-sm justify-center text-white'}
          Icon={FaApple}
        />
          <div className={`flex py-2 max-w-sm items-center gap-2 w-full bg-[#000] text-white justify-center`}>
        <p>Sign Up with Email</p>
    </div>
    <p className="text-center text-sm">
        By creating an account, you agree to the Goodreads Terms of Service and Privacy Policy.
    </p>
    <div className="flex justify-center gap-2 text-sm">
        <h1>Already have an account?</h1>
        <p>Sign in</p>
    </div>
      </div>
    );
  }


export default SignUp