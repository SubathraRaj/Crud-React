import { useEffect , useRef} from "react";
import { useNavigate } from "react-router-dom";

const SESSION_TIMEOUT = 60000; //1 minute in miliseconds
const useSessionTimeout =() => {
    const navigate=useNavigate();
    const timeoutRef=useRef(null);

    const resetSessionTimout =() => {
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current=setTimeout(()=>{
            navigate("/")
        }, SESSION_TIMEOUT)
    };
    const clearSessionTimeout = () =>  {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }
    useEffect(()=> {
        resetSessionTimout();

        window.addEventListener("mousemove", resetSessionTimout);
        window.addEventListener("mousedown", resetSessionTimout);
        window.addEventListener("keypress", resetSessionTimout);
        window.addEventListener("touchmove", resetSessionTimout);

        return()=> {
            clearSessionTimeout();

            window.addEventListener("mousemove", resetSessionTimout);
            window.addEventListener("mousedown", resetSessionTimout);
            window.addEventListener("keypress", resetSessionTimout);
            window.addEventListener("touchmove", resetSessionTimout);
        };
         //eslint-disable-next-line
    } , [navigate]);
    return null
}
export default useSessionTimeout;




