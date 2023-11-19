import React, { useContext, useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import myContext from "../../../context/data/myContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/FirebaseConfig";

export default function AdminLogin() {
    const context = useContext(myContext);
    const { mode } = context;

    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const login = async () => {
        if(!email || !password) {
            return toast.error("All fileds are required")
        }

        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            toast.success("Login successful")
            localStorage.setItem("admin", JSON.stringify(result));
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
            toast.error("Login failed")
        }

    }

    useEffect(() => {
        window.scrollTo(0, 0)
 }, [])

    return (
        <div className="flex justify-center items-center h-screen">

            {/* Card  */}
            <Card
                className="w-full max-w-[24rem]"
                style={{
                    background: mode === 'dark'
                        ? 'rgb(30, 41, 59)'
                        : 'rgb(226, 232, 240)'
                }}
            >
                {/* CardHeader */}
                <CardHeader
                    color="blue"
                    floated={false}
                    shadow={false}
                    className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
                    style={{
                        background: mode === 'dark'
                            ? ' linear-gradient(243deg, rgba(199,6,236,1) 0%, rgba(116,60,164,1) 40%)'
                            : ' linear-gradient(243deg, rgba(199,6,236,1) 0%, rgba(116,60,164,1) 40%)'
                    }}
                >
                    <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-2 text-white">
                        <div className=" flex justify-center">
                            {/* Image  */}
                            <img src="https://cdn-icons-png.flaticon.com/128/727/727399.png" className="h-20 w-20"
                            />
                        </div>
                    </div>

                    {/* Top Haeding  */}
                    <Typography className="font-avi" variant="h4" style={{
                        color: mode === 'dark'
                            ? 'rgb(226, 232, 240)'
                            : 'rgb(226, 232, 240)'
                    }}>
                        Admin Login
                    </Typography>
                </CardHeader>

                {/* CardBody */}
                <CardBody>
                    <form className=" flex flex-col gap-4 font-avi text-white">
                        {/* First Input  */}
                        <div>
                            <Input
                           style={{
                            color: mode === 'dark'
                                ? 'rgb(226, 232, 240)'
                                : 'black'
                        }}
                                type="email"
                                label="Email"
                                name="email"
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>
                        {/* Second Input  */}
                        <div>
                            <Input
                            style={{
                                color: mode === 'dark'
                                    ? 'rgb(226, 232, 240)'
                                    : 'black'
                            }}
                                type="password"
                                label="Password"
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                        </div>
                        {/* Login Button  */}
                        <Button
                        className="font-avi"
                        onClick={login}
                            style={{
                                background: mode === 'dark'
                                    ? ' linear-gradient(243deg, rgba(199,6,236,1) 0%, rgba(116,60,164,1) 40%)'
                                    : ' linear-gradient(243deg, rgba(199,6,236,1) 0%, rgba(116,60,164,1) 40%)',
                                color: mode === 'dark'
                                    ? 'white'
                                    : 'white'
                            }}>
                            Login
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>


    );
} 