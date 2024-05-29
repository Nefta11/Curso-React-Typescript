import { useAuthStore } from "../store/auth.store"

const LoginPage = () => {

    const authStatus = useAuthStore(state => state.status);


  return (
    <>
    <h3>
      LoginPage
    </h3>

{authStatus}
    </>
    
  )
}

export default LoginPage
