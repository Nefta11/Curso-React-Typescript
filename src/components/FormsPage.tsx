import { useForm } from "react-hook-form"


type FormInputs = {
        email: string,
        password:string
}


const FormsPage = () => {


    
    const {register} = useForm<FormInputs>({
        defaultValues:{
            email: 'neftali@gmail.com',
            password:'1234567'
        }

    });


  return (
    <>
      
    <form action="">
    <h3>Formularios</h3>

    <div style={{display:'flex', flexDirection:'column'}}>
        <input type="text" placeholder="Email" {...register('email')}/>
        <input type="text" placeholder="Password"  {...register('password')}/>


        <button type="submit">Ingresar</button>

    </div>


    </form>


    </>
  )
}

export default FormsPage
