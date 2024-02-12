import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';

const FormEditInterest = () => {
    const data = ["Pilih",1,2,3,4,5,6,7];
    const [name, setName] = useState('');
    const [fakultas, setFakultas] = useState('');
    const [k2nTematik, setK2nTematik] = useState('');
    const [pertukaranPelajar, setPertukaranPelajar] = useState('');
    const [magang, setMagang] = useState('');
    const [asistensiMengajar, setAsistensiMengajar] = useState('');
    const [penelitian, setPenelitian] = useState('');
    const [kemanusiaan, setKemanusiaan] = useState('');
    const [wirausaha, setWirausaha] = useState('');
    const [stupen, setStupen] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();
    const dataFakultas = [
        "Pilih","FIB", "FH", "FT", "FMIPA", "Fasilkom", "FF", "FISIP", "FIK",
        "FK", "FKG", "FIA", "FEB", "FKM", "FPs", "Vokasi"
    ]

    useEffect(()=>{
        const getInterestById = async () =>{
            try {
                const response = await axios.get(`https://jimat-ui-back.vercel.app/interests/${id}`);
                setName(response.data.name);
                setFakultas(response.data.fakultas);
                setK2nTematik(response.data.k2nTematik);
                setPertukaranPelajar(response.data.pertukaranPelajar);
                setMagang(response.data.magang);
                setAsistensiMengajar(response.data.asistensiMengajar);
                setPenelitian(response.data.penelitian);
                setKemanusiaan(response.data.kemanusiaan);
                setWirausaha(response.data.wirausaha);
                setStupen(response.data.stupen);
            } catch (error) {
                if(error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
        getInterestById();
    }, [id]);
    
    const updateInterest = async (e) => {
        e.preventDefault()

        try {
            await axios.patch(`https://jimat-ui-back.vercel.app/interests/${id}`, {
                name: name,
                fakultas: fakultas,
                k2nTematik: k2nTematik,
                pertukaranPelajar: pertukaranPelajar,
                magang: magang,
                asistensiMengajar: asistensiMengajar,
                penelitian: penelitian,
                kemanusiaan: kemanusiaan,
                wirausaha: wirausaha,
                stupen: stupen
            });
            navigate("/interests");
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
  return (
    <div>
        <h1 className='title'>Interest</h1>
        <h2 className='subtitle'>Edit Interest</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                <form onSubmit={updateInterest}>
                        <p className='has-text-centered'>{msg}</p>
                        <div className="field">
                            <label className='label'>Nama</label>
                            <div className="control">
                                <input type="text" className="input"  value={name} onChange={(e)=> setName(e.target.value)} placeholder='Nama' name='name' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Fakultas</label>
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select  name='fakultas' value={fakultas} onChange={(e)=> setFakultas(e.target.value)}>
                                     { dataFakultas.map(opt=><option>{opt}</option>) }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>T2N Tematik</label>
                            <div className="control">
                            <div className="select is-fullwidth">
                                    <select  name='k2nTematik' value={k2nTematik} onChange={(e)=> setK2nTematik(e.target.value)}>
                                     { data.map(opt=><option>{opt}</option>) }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Pertukaran Pelajar</label>
                            <div className="control">
                            <div className="select is-fullwidth">
                            <select name='pertukaranPelajar'  value={pertukaranPelajar} onChange={(e)=> setPertukaranPelajar(e.target.value)}>
                                     { data.map(opt1=><option>{opt1}</option>) }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Magang</label>
                            <div className="control">
                            <div className="select is-fullwidth">
                            <select name='magang'  value={magang} onChange={(e)=> setMagang(e.target.value)}>
                                     { data.map(opt=><option>{opt}</option>) }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Asisten Mengajar</label>
                            <div className="control">
                            <div className="select is-fullwidth">
                            <select name='asistensiMengajar'  value={asistensiMengajar} onChange={(e)=> setAsistensiMengajar(e.target.value)}>
                                     { data.map(opt=><option>{opt}</option>) }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Penelitian</label>
                            <div className="control">
                            <div className="select is-fullwidth">
                            <select name='penelitian'  value={penelitian} onChange={(e)=> setPenelitian(e.target.value)}>
                                     { data.map(opt=><option>{opt}</option>) }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Kemanusiaan</label>
                            <div className="control">
                            <div className="select is-fullwidth">
                            <select name='kemanusiaan'  value={kemanusiaan} onChange={(e)=> setKemanusiaan(e.target.value)}>
                                     { data.map(opt=><option>{opt}</option>) }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Wirausaha</label>
                            <div className="control">
                            <div className="select is-fullwidth">
                            <select name='wirausaha'  value={wirausaha} onChange={(e)=> setWirausaha(e.target.value)}>
                                     { data.map(opt=><option>{opt}</option>) }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Studi Independen</label>
                            <div className="control">
                            <div className="select is-fullwidth">
                            <select name='stupen'  value={stupen} onChange={(e)=> setStupen(e.target.value)}>
                                     { data.map(opt=><option>{opt}</option>) }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button type='submit' className="button is-success">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormEditInterest