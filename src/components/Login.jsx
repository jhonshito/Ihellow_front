
import React, { useState } from 'react'
import '../styles/login.css'
import logo from "../assets/iHellow-Logo.webp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoginMutation } from "../api/apiSplice";
import { useNavigate } from "react-router-dom";

const Login = () => {

    //llamar funcion para hacer la peticion
    const [ logi ] = useLoginMutation();

    //configuracion de react-router-dom
    const navigate = useNavigate();

    // donde se van almacenar los datos temporarmente
    const [datos, setDatos] = useState({
        userName: '',
        contraseña: ''
    });
    
    // algunos estados del formulario
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errorShown, setErrorShown] = useState(false);

    //capturamos los datos y hacemos algunas validaciones
    const handleChangeValue = (event) => {
        const { name, value } = event.target;

        if (name === 'nombre' && !/^[a-zA-Z\s]*$/.test(value)) {
            if(!errorShown){
                setErrorShown(true);
                toast.error('El nombre solo puede contener letras', {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-error'
                });
            }
            return;
        }else {
            setErrorShown(false);
        }

        setDatos(datos => ({ ...datos, [name]: value }));
    }

    //esta funcion hace que el input de la contraseña cambie a text o password
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    //aqui hacemos el proceso de la petición
    const login = async(e) => {
        e.preventDefault();
        const { userName, contraseña } = datos

        switch(true){
            case !userName && !contraseña:
                toast.error('Los campos son requeridos', {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-error'
                });
                break;
            case !userName:
                toast.error('El nombre es requerido', {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-error'
                });
                break;
            case !contraseña:
                toast.error('La contraseña es requerido', {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-error'
                });

            default:
                try {
                    const respuesta = await logi({userName: userName, contraseña: contraseña})
                    console.log(respuesta)
                    const { data } = respuesta

                    if(data){
                        toast.success(data.mensaje, {
                            position: toast.POSITION.TOP_CENTER
                        })

                        setTimeout(() => {
                            navigate('/inicio/anotherInicio/aperturas')
                        }, 2000)
                    }

                } catch (error) {
                    console.log(error)
                }
                break;
        }

    }


  return (
    <main className='content_login'>
        <section className="content_form">
            <div className="form">
                <div className="content_logo">
                    <img src={logo} alt="Este es el logo de ihellow" />
                </div>

                <div className="formulario">
                    <form onSubmit={login}>
                        <div className="content_input">
                            <input type="text" onChange={handleChangeValue} name='userName' placeholder='Ingresa username' />
                            <div className="content_icon">
                                <i className="bi bi-person-circle"></i>
                            </div>
                        </div>

                        <div className="content_input">
                            <input name='contraseña' onChange={handleChangeValue} type={passwordVisible ? 'text' : 'password'} placeholder='Ingresa contraseña' autoComplete='off' />
                            <div className="content_icon">
                                <i onClick={togglePasswordVisibility} className={passwordVisible ? 'bx bxs-lock-open-alt': 'bx bxs-lock-alt'}></i>
                            </div>
                        </div>
                        <button type='submit' className='boton'>Agregar</button>
                    </form>
                </div>
            </div>
        </section>
        <ToastContainer />
    </main>
  )
}

export default Login
