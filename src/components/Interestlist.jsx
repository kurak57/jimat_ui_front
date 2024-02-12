import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';  

const Interestlist = () => {
    const [scores, setScores] = useState([]);
    const {user} = useSelector((state) => state.auth);

    useEffect(()=>{
        getScores();
    },[]);

    const getScores = async () => {
        const response = await axios.get('https://jimat-ui-back.vercel.app/scores');
        setScores(response.data);
    }

    const deleteScore = async (scoreId) =>{
        await axios.delete(`https://jimat-ui-back.vercel.app/scores/${scoreId}`);
        getScores();
    }

  return (
    <div>
        <div className='pl-2 mb-2'>
        <h1 className='title'>Interest</h1>
        <h2 className='subtitle'>List of Interest</h2>
        <Link to={"/formq"} className='button is-primary'>Add New</Link>
        </div>
        <div className='table-container px-2'>
        <table className='table is-striped is-narrow is-hoverable is-fullwidth'>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Fakultas</th>
                    {/* <th>Pertukaran Pelajar</th>
                    <th>Magang</th>
                    <th>Asistensi Mengajar</th>
                    <th>Penelitian</th>
                    <th>Kemanusiaan</th>
                    <th>Wirausaha</th>
                    <th>Studi Independen</th>
                    <th>K2N Tematik</th> */}
                    <th>Created By</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {scores.map((interest, index) => (
                    <tr key={interest.uuid}>
                    <td>{interest.name}</td>
                    <td>{interest.fakultas}</td>
                    {/* <td>{interest.pertukaranPelajar}</td>
                    <td>{interest.magang}</td>
                    <td>{interest.asistensiMengajar}</td>
                    <td>{interest.penelitian}</td>
                    <td>{interest.kemanusiaan}</td>
                    <td>{interest.wirausaha}</td>
                    <td>{interest.stupen}</td>
                    <td>{interest.k2nTematik}</td> */}
                    <td>{interest.user.name}</td>
                    <td>
                        <div className='columns is-gapless is-mobile'>
                            <div className='column'>
                                <Link to={`/interests/minat/${interest.uuid}`} className='button is-small is-success ' >Profil</Link>
                                <Link to={`/interests/mbkm/${interest.uuid}`} className='button is-small is-success ' >MBKM</Link>
                            </div>
                            <div className='column'>
                            {user && user.role === "admin" && (
                                <Link to={`/interests/edit/${interest.uuid}`} className='button is-small is-info ' >Edit</Link>
                            )}
                            {user && user.role === "admin" && (
                            <button onClick={()=> deleteScore(interest.uuid)} className='button is-small is-danger ' >Delete</button> 
                            )}
                            </div>
                        </div>
                    </td>
                </tr>
                ))}
               
            </tbody>
        </table>
        </div>
        
    </div>
  )
}

export default Interestlist