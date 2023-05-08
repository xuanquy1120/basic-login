import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function Admin() {
    const navigate = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        navigate("/");
    }
    return (
        <div>
            <h1>
                admin
            </h1>
            <Button onClick={handleLogout}> logout</Button>
        </div>
    );
}

export default Admin;