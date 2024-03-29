import React, {useState} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    const dataFakultas = [
        "Pilih","Ilmu Pengetahuan dan Budaya", "Hukum", "Teknik", "Matematika dan Ilmu Pengetahuan Alam", "Ilmu Komputer", 
        "Farmasi", "Ilmu Sosial dan Politik", "Ilmu Keperawatan","Kedokteran", "Kedokteran Gigi", 
        "Ilmu Administrasi", "Ekonomi dan Bisnis", "Kesehatan Masyarakat", "Psikologi", "Vokasi"
    ]
   
    const [name, setName] = useState('');
    const [fakultas, setFakultas] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [emailSent, setEmailSent] = useState(false)

    const baseUrl = process.env.REACT_APP_BASE_URL;

    const saveUser = async (e) => {
        e.preventDefault()
        try {
             const res = await axios.post(`${baseUrl}/users`, {
                name: name,
                fakultas: fakultas,
                email: email,
                password: password,
                confPassword: confPassword,
                role: "user"
            });
            setEmailSent(true)
            setMsg(res.data.msg)
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
                setEmailSent(false)
            }
        }
    }

  return (
    <section className="hero has-background-light is-success is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-4">
                    <form className='box' onSubmit={saveUser}>
                        <p className='has-text-centered has-text-danger'>{msg}</p>
                        <h1 className='title is-2 has-text-black'>Sign Up</h1>
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
                                    { dataFakultas.map((opt1, index)=> (<option key={index} value={opt1}>{opt1}</option>)) }
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
                       <button type='submit' className="button is-success is-fullwidth">Daftar</button>
                        </div>
                        {emailSent === true && (
                        <div className="field">
                            <h1>Pesan verifikasi akun telah dikirimkan ke email terdaftar {email}</h1>
                            <NavLink to={"/signup"}><button className="button is-info is-small">Halaman Login</button></NavLink>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp