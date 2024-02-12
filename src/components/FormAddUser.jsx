import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddUser = () => {
    const dataFakultas = [
        "Pilih","FIB", "FH", "FT", "FMIPA", "Fasilkom", "FF", "FISIP", "FIK",
        "FK", "FKG", "FIA", "FEB", "FKM", "FPs", "Vokasi"
    ]
    const [name, setName] = useState('');
    const [fakultas, setFakultas] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [role, setRole] = useState('');
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault()
        try {
            await axios.post('https://jimat-ui-back.vercel.app/users', {
                name: name,
                email: email,
                fakultas: fakultas,
                password: password,
                confPassword: confPassword,
                role: role,
            });
            navigate("/users");
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

  return (
    <div>
        <h1 className='title'>Users</h1>
        <h2 className='subtitle'>Add New User</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                    <form onSubmit={saveUser}>
                        <p className='has-text-centered'>{msg}</p>
                        <div className="field">
                            <label className='label'>Nama</label>
                            <div className="control">
                                <input type="text" className="input" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Nama' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Fakultas</label>
                            <div className="control">
                            <div className="select is-fullwidth">
                                    <select value={fakultas} onChange={(e)=> setFakultas(e.target.value)}>
                                    { dataFakultas.map((opt1, index)=>(<option key={index} value={opt1}>{opt1}</option>)) }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Email</label>
                            <div className="control">
                                <input type="text" className="input" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Password</label>
                            <div className="control">
                                <input type="password" className="input" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='******' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Konfirmasi Password</label>
                            <div className="control">
                                <input type="password" className="input" value={confPassword} onChange={(e)=> setConfPassword(e.target.value)} placeholder='******' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Role</label>
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select value={role} onChange={(e)=> setRole(e.target.value)}>
                                        <option selected>Pilih</option>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button type='submit' className="button is-success">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAddUser;