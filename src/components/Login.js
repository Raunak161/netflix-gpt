import { Link } from "react-router-dom";
import { useRef } from "react";
import { checkValidData } from "../utils/Validate";
import { useState } from "react";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);

  const [Message, setMessage] = useState(null);

  return (
    <div className="m-0 p-0">
      <img
        className="absolute w-full "
        src="https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"
        alt="img"
      ></img>
      <form className="fixed left-[520px] top-[140px] h-[500px] w-3/12 border border-white bg-red-950 bg-opacity-25 flex flex-col font-sans ">
        <div className="font-bold font-sans text-white text-xl my-1 ml-[140px]">
          Sign-in
        </div>
        <div className=" ml-5 mt-4">
          <div className="relative top-[25px] left-4  text-white text-sm">
            Enter your email :
          </div>
          <input
            ref={email}
            type="email"
            className="relative h-[57px] w-11/12 rounded-lg px-3 m-1 outline-none bg-gray-400 bg-opacity-50"
          ></input>
        </div>
        <div className=" ml-5">
          <div className="relative top-[25px] left-4  text-white text-sm">
            Enter your password :
          </div>
          <input
            ref={password}
            type="password"
            className="relative h-[57px] w-11/12 rounded-lg px-3 m-1 outline-green-300  bg-gray-400 bg-opacity-50"
          ></input>
        </div>
        {Message != null && (
          <p className="text-white ml-[90px] text-lg">{Message}</p>
        )}
        <button
          onSubmit={(e) => e.preventDefault()}
          onClick={(e) => {
            setMessage(
              checkValidData(email.current.value, password.current.value)
            );
            return e.preventDefault();
          }}
          className="h-10 w-3/12  bg-green-400 rounded-lg ml-[120px] my-6"
        >
          SignIn
        </button>

        <div className="text-white mx-[90px]">
          <Link to={"/SignUp"} className="cursor-pointer">
            "New User? SignUp"
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
