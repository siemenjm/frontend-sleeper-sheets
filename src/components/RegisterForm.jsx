import { useNavigate } from "react-router"

export default function RegisterForm({ signal, ...rest }) {
    const navigate = useNavigate();
    const data = { ...rest };
    const { login } = data;

    const [userInput, setUserInput] = useState({
        email: '',
        password: '',
    });

    function handleChange(e) {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const authResponse = await signal(userInput);
            console.log(authResponse);
            navigate('/user', { replace: true }); // need to change route
        } catch(err) {
            navigate('/', { replace: true })
        }
    }
}