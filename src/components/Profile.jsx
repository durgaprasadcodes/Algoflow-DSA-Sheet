import { useNavigate } from 'react-router-dom'
import "./all_css_codes/Profile.css"
import Pagination from './Pagination';
import { data as problemsData } from '../data/data';

export default function Profile() {
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem("user_info"));
    const completed = JSON.parse(localStorage.getItem("completed")) || 0;

    const totalProblems = Object.values(problemsData).reduce(
        (acc, curr) => acc + (Array.isArray(curr) ? curr.length : 0),
        0
    );

    const handleLogout = () => {
        const ok = confirm(
            "Are you sure you want to log out? You can lose all your progress!"
        );
        if (ok) {
            localStorage.clear();
            navigate("/login", { replace: true });
        }
    };

    const HandleUpdateProfile = () => {
        const ok = confirm(
            "Are you sure you want to update your profile?"
        );
        if (ok) {
            const Type = prompt('Enter Your Choice \n 1. Update Name \n 2. Update Email')
            if (Type == 1) {
                const update_name = prompt("Enter your name");
                localStorage.setItem("user_info", JSON.stringify({ name: update_name, email: data?.email, isAuthenticated: true }));
            }
            else if (Type == 2) {
                const update_email = prompt("Enter your email");
                localStorage.setItem("user_info", JSON.stringify({ name: data?.name, email: update_email, isAuthenticated: true }));
            }
            navigate("/profile", { replace: true });
        }
    };

    return (
        <div className="profile-container" >
            <div className="profile-nav">
                <button onClick={() => navigate(-1)} className="nav-back-btn">← Go Back</button>
                <h1>Profile Page</h1>
                <button className="logout-btn" onClick={handleLogout}>Log Out</button>
            </div>
            <div className="profile-part">
                <div className="main-profile">
                    <div className="profile-img">
                        <img src="https://i.pinimg.com/736x/f5/45/52/f54552354fa7d1ca346638ea3d8912cf.jpg" alt="profile-img" />
                    </div>
                    <div className="profile-part1">
                        <div className="profile-card">
                            <h1>{data?.name}</h1>
                            <p className="profile-email">Email: {data?.email}</p>
                            <p className="profile-status">
                                Status: <span className={`status-badge ${data?.isAuthenticated ? 'active' : 'inactive'}`}>
                                    {data?.isAuthenticated ? "Active" : "Inactive"}
                                </span>
                            </p>
                            <button className="update-btn" onClick={HandleUpdateProfile}>Update Profile</button>
                        </div>
                        <div className="progress">
                            <h2>Problem Solving Progress</h2>
                            <div className="complted-problems">
                                <b>Total Solved Problems : <span>{completed}</span>/{totalProblems} </b>
                            </div>
                            <div className="progress-bar-container">
                                <div className="progress-bar-fill" style={{ width: `${Math.min((completed / totalProblems) * 100, 100)}%` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-part2">
                    <h2>Recent Activity</h2>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}
