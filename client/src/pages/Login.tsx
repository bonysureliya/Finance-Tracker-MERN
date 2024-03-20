import Input from "../components/Input"
import Button from '../components/Button'
import ButtonColor from "../enums/ButtonColor"

const Login = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 flex flex-col items-center to-cyan-400 h-[100vh] w-full">
      <div className="flex gap-4 flex-col justify-center items-center h-full" id="card-container">
        <p className="text-2xl text-white font-sans"> Welcome to Your Personalised Finance Tracker </p>
        <div className="w-[600px] drop-shadow-md flex flex-col gap-4 items-center rounded-xl bg-white h-[300px] border border-black" id="card">
          <div className="flex h-[40px] border-b-4 items-center justify-around w-full">
            <div className="text-xl">Login</div>
          </div>
          <div className="w-full space-y-4">
            <div className="w-full flex flex-col px-4 gap-4">
              <div className="w-full space-y-1">
                <p>Username :</p>
                <Input size="medium" variant="outlined" type="text" />
              </div>
              <div className="w-full space-y-1">
                <p>Password :</p>
                <Input size="medium" variant="outlined" type="password" />
              </div>
            </div>
            <div className="w-full flex justify-end px-4">
              <Button color={ButtonColor.blue} onClick={() => console.log("Hii")} text="Submit" variant="contained" />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Login
