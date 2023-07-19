import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Axios from 'axios'

const Register = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')
    const [occupation, setOccupation] = useState('')
    const [image, setImage] = useState('')
    const [imageSender, setImageSender] = useState('')


    // function registerUser(event) {
    //     event.preventDefault()
    //     const formData = new FormData()
    //     formData.append("file", image)
    //     formData.append("upload_preset", "ade40fld")
    //      Axios.post("https://api.cloudinary.com/v1_1/dv4j8hjqf/image/upload", formData)
    //         .then((response) => {
    //             setImageSender(response.data.public_id)
    //             console.log(response.data.public_id);
    //         })
    //         .then(() => {
    //             second()
    //             console.log(imageSender);
    //             console.log('I am here');
    //         })

    // }
  
    useEffect(()=>{
        if(imageSender==''){
            console.log('');
        }else{
            second();
        }
    }, [imageSender])
    async function registerUser(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "ade40fld");
    
        try {
            const response = await Axios.post("https://api.cloudinary.com/v1_1/dv4j8hjqf/image/upload", formData);
            setImageSender(response.data.public_id);
            console.log(response.data.public_id);
            //await second(); // Assuming second() is an asynchronous function
            console.log(imageSender);
            console.log('I am here');
            
        } catch (error) {
            console.error("Error occurred during user registration:", error);
        }
         //second()
    }
    

    async function second() {
        try {
            const response = await Axios.post('http://localhost:2000/api/register', {
                firstName,
                lastName,
                email,
                password,
                status,
                occupation,
                imageSender,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('I am here also');

            const data = response.data;

            if (data.status === 'ok') {
                navigate('/login');
            }
        } catch (error) {
            // Handle errors here, e.g., network errors or server errors.
            console.error('Error:', error);
        }
    }

    // async function second(){
    //     const response = await fetch('http://localhost:2000/api/register', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             firstName,
    //             lastName,
    //             email,
    //             password,
    //             status,
    //             occupation,
    //             imageSender,
    //         }),
    //     })
    //     console.log('I am here also');
    //     const data = await response.json()
    //     if (data.status === 'ok') {
    //         navigate('/login');
    //     }
    // }
    // function registerUser(event){
    //     event.preventDefault()
    //     const formData = new FormData()
    //     formData.append("file", image)
    //     formData.append("upload_preset", "ade40fld")
    //     Axios.post("https://api.cloudinary.com/v1_1/dv4j8hjqf/image/upload", formData)
    //     .then((response)=>{
    //         setImage("")
    //         console.log(response.data.public_id);
    //     })
    // }

    return (
        <div className='App'>
            <h1>Register</h1>
            <form>
                <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    placeholder="first name"
                />
                <br />
                <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    placeholder="last name"
                />
                <br />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />
                <br />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <br />
                <input
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    type="text"
                    placeholder="staus"
                />
                <br />
                <input
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    type="text"
                    placeholder="occupation"
                />
                <br />
                <input
                    onChange={(e) => setImage(e.target.files[0])}
                    type="file"
                />
                <br />
                <button onClick={registerUser}>Register</button>
                <button><Link to='/login'>login</Link></button>
            </form>
        </div>
    )
}

export default Register