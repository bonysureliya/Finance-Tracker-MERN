const Login = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full flex flex-col justify-center items-center">
      <div className="border flex flex-col items-end border-2-white rounded-xl space-y-4 w-[400px] h-[350px] px-2">
        <div className="w-full flex justify-around ">
          <button className="border border-white w-full">Login</button>
          <button className="border border-white w-full">SignUp</button>
        </div>
        <input type="text" placeholder="Username" className="w-full" />
        <input type="password" placeholder="Password" className="w-full" />
        <button className="border border-white px-4 py-1 rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
