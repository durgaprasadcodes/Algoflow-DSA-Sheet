import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "./all_css_codes/Login.css"
import algoflow from "../assets/algoflow_icon.png"
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const localStorageKey = "user_info";
    const [inputname, setInputName] = useState("");
    const [inputemail, setInputEmail] = useState("");
    const [user, setUser] = useState({
        name: null,
        email: null,
        isAuthenticated: false
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (user.name && user.email) {
            localStorage.setItem(localStorageKey, JSON.stringify(user));
        }
        console.log("User Data from Local Storage", JSON.parse(localStorage.getItem(localStorageKey)));
    }, [user]);

    function handleSubmit(e) {
        e.preventDefault();
        if (inputname === "" || inputemail === "") {
            setInputEmail("")
            setInputName("")
            return toast.error("Please Enter Valid Details")
        }

        const updatedUser = {
            name: inputname,
            email: inputemail,
            isAuthenticated: true
        };
        setUser(updatedUser);

        setInputEmail("")
        setInputName("")
        toast.success("User Details Saved Successfully")
        if (updatedUser.isAuthenticated) {
            setTimeout(() => {
                navigate("/", { replace: true });
            }, 500);
            return
        }
    }
    return (
        <div className="auth-border">
            <form className="authentication" onSubmit={handleSubmit}>
                <ToastContainer autoClose={2000} pauseOnHover={false} />

                <img src={algoflow} alt="AlgoFlow Logo" />

                <h2>Welcome To AlgoFlow</h2>


                <div className="input-group">
                    <label htmlFor="name">Username</label>

                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your username"
                        value={inputname}
                        onChange={(e) =>
                            setInputName(e.target.value.trim().toLowerCase())
                        }
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email</label>

                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={inputemail}
                        onChange={(e) =>
                            setInputEmail(e.target.value.trim().toLowerCase())
                        }
                        required
                    />
                </div>

                <button type="submit">
                    Continue
                </button>
            </form>
        </div>
    )
}
