import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams} from 'react-router-dom';
import {Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale, Filler, RadarController, elements} from 'chart.js'
import {Radar} from 'react-chartjs-2';
ChartJS.register(
    LineElement, PointElement, Tooltip, Legend, RadialLinearScale, Filler, RadarController, elements
)

const PM = () => {
    const [dataScore, setDataScore] =  useState({
        name: "",
        fakultas: "",
        sf_like: 0, sf_comp: 0, ma_like: 0, ma_comp: 0, bd_like: 0, bd_comp: 0,
        dp_like: 0, dp_comp: 0, me_like: 0, me_comp: 0, no_like: 0, no_comp: 0,
        ar_like: 0, ar_comp: 0, he_like: 0, he_comp: 0, ss_like: 0, ss_comp: 0,
        in_like: 0, in_comp: 0, bs_like: 0, bs_comp: 0, fa_like: 0, fa_comp: 0,
        sc_like: 0, sc_comp: 0, qc_like: 0, qc_comp: 0, mw_like: 0, mw_comp: 0,
        ps_like: 0, ps_comp: 0, cr_like: 0, cr_comp: 0, bse_like: 0, bse_comp: 0,
        k2nTematik: "", pertukaranPelajar: "", magang: "", asistensiMengajar: "",
        penelitian: "", kemanusiaan: "", wirausaha: "",stupen: ""
    })
    const dsc=dataScore
    const [avgFakultas, setAvgFakultas] =  useState({
        avg_pp: 0,avg_mpk: 0, avg_am:0,
        avg_pr: 0, avg_pk:0,avg_kw:0, avg_spi:0, avg_k2n:0,
    });
    const [avgUniv, setAvgUniv] =  useState({
        avgU_pp: 0,avgU_mpk: 0, avgU_am:0,
        avgU_pr: 0, avgU_pk:0,avgU_kw:0, avgU_spi:0, avgU_k2n:0,
    });
    // console.log(avgUniv, avgFakultas);
    const [msg, setMsg] = useState('');
    // const navigate = useNavigate();
    const {id} = useParams();

    const points = [dsc.pertukaranPelajar, dsc.magang, dsc.asistensiMengajar, dsc.penelitian,
    dsc.kemanusiaan, dsc.wirausaha, dsc.stupen, dsc.k2nTematik];
    points.sort(function(a, b){return b-a});
    
    // console.log("3 Nilai tertinggi:");
    // for (let i = 0; i < 3; i++) {
    //     console.log(points[i]);
    // }
    const rekom = () => {
        let results = [];
        for (let i = 0; i < points.length; i++) {
            let result = '';
            if (points[i] === dsc.pertukaranPelajar && !results.includes("Pertukaran Pelajar")) {
                result = "Pertukaran Pelajar";
                results.push(result);
            } else if (points[i] === dsc.magang && !results.includes("Magang/ Praktik Kerja")) {
                result = "Magang/ Praktik Kerja";
                results.push(result);
            } else if (points[i] === dsc.asistensiMengajar && !results.includes("Asistensi Mengajar di Satuan Pendidikan")) {
                result = "Asistensi Mengajar di Satuan Pendidikan";
                results.push(result);
            } else if (points[i] === dsc.penelitian && !results.includes("Penelitian/ Riset")) {
                result = "Penelitian/ Riset";
                results.push(result);
            } else if (points[i] === dsc.kemanusiaan && !results.includes("Proyek Kemanusiaan")) {
                result = "Proyek Kemanusiaan";
                results.push(result);
            } else if (points[i] === dsc.wirausaha && !results.includes("Kegiatan Wirausaha")) {
                result = "Kegiatan Wirausaha";
                results.push(result);
            } else if (points[i] === dsc.stupen && !results.includes("Studi/ Proyek Independen")) {
                result = "Studi/ Proyek Independen";
                results.push(result);
            } else if (points[i] === dsc.k2nTematik && !results.includes("Membangun Desa/ Kuliah Kerja Nyata Tematik")) {
                result = "Membangun Desa/ Kuliah Kerja Nyata Tematik";
                results.push(result);
            }
            if (results.length === 3) {
                break;
            }
        }
        return results;
    }

    // console.log("Rekomendasi:");
    // console.log(rekom());

    useEffect(()=>{
        const getScoreById = async () =>{
            try {
                const response = await axios.get(`https://jimat-ui-back.vercel.app/scores/${id}`);
                const sdt = response.data
                setDataScore(d => ({
                ...d,
                name: sdt.name, fakultas: sdt.fakultas,
                sf_like: sdt.sf_like, sf_comp: sdt.sf_comp, ma_like: sdt.ma_like, ma_comp: sdt.ma_comp, bd_like: sdt.bd_like, bd_comp: sdt.bd_comp,
                dp_like: sdt.dp_like, dp_comp: sdt.dp_comp, me_like: sdt.me_like, me_comp: sdt.me_comp, no_like: sdt.no_like, no_comp: sdt.no_comp,
                ar_like: sdt.ar_like, ar_comp: sdt.ar_comp, he_like: sdt.he_like, he_comp: sdt.he_comp, ss_like: sdt.ss_like, ss_comp: sdt.ss_comp,
                in_like: sdt.in_like, in_comp: sdt.in_comp, bs_like: sdt.bs_like, bs_comp: sdt.bs_comp, fa_like: sdt.fa_like, fa_comp: sdt.fa_comp,
                sc_like: sdt.sc_like, sc_comp: sdt.sc_comp, qc_like: sdt.qc_like, qc_comp: sdt.qc_comp, mw_like: sdt.mw_like, mw_comp: sdt.mw_comp,
                ps_like: sdt.ps_like, ps_comp: sdt.ps_comp, cr_like: sdt.cr_like, cr_comp: sdt.cr_comp, bse_like: sdt.bse_like, bse_comp: sdt.bse_comp,
                k2nTematik: sdt.k2nTematik, pertukaranPelajar: sdt.pertukaranPelajar, 
                magang: sdt.magang, asistensiMengajar: sdt.asistensiMengajar,
                penelitian: sdt.penelitian, kemanusiaan: sdt.kemanusiaan, 
                wirausaha: sdt.wirausaha, stupen: sdt.stupen
                }));
                // console.log(response);
            } catch (error) {
                if(error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        }
        const getAvgFakultas = async () =>{
            try {
                const dataFakultas = await axios.get(`https://jimat-ui-back.vercel.app/scores/${id}/fakultas`);
                setAvgFakultas( af => ({
                        ...af,
                        avg_pp: dataFakultas.data[0].avgPrtknPelajar,
                        avg_mpk: dataFakultas.data[0].avgMagang, 
                        avg_am: dataFakultas.data[0].avgAsisMengajar,
                        avg_pr: dataFakultas.data[0].avgPenelitian,
                        avg_pk: dataFakultas.data[0].avgKemanusiaan,
                        avg_kw: dataFakultas.data[0].avgWirausaha,
                        avg_spi: dataFakultas.data[0].avgStupen, 
                        avg_k2n: dataFakultas.data[0].avgTematik
                    }))
                // console.log(dataFakultas);
            } catch (error) {
                if(error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
        const getAvgUniv = async () =>{
            try {
                const dataUniv= await axios.get(`https://jimat-ui-back.vercel.app/scores/${id}/univ`);
                setAvgUniv(avgu => ({
                    ...avgu,
                    avgU_pp: dataUniv.data[0].avgAllPrtknPelajar,
                    avgU_mpk: dataUniv.data[0].avgAllMagang, 
                    avgU_am: dataUniv.data[0].avgallAsisMengajar,
                    avgU_pr: dataUniv.data[0].avgAllPenelitian,
                    avgU_pk: dataUniv.data[0].avgAllKemanusiaan,
                    avgU_kw: dataUniv.data[0].avgAllWirausaha,
                    avgU_spi: dataUniv.data[0].avgAllStupen, 
                    avgU_k2n: dataUniv.data[0].avgAllTematik
                }))
            } catch (error) {
                if(error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
        getScoreById(); 
        getAvgFakultas();
        getAvgUniv();
    }, [id]);

    const data ={
        labels: [
            'PP',
            'MPK',
            'AM',
            'PR',
            'PK',
            'KW',
            'SPI',
            'K2N',
        ],
        datasets: [
            {
            label: dataScore.name,
            data: [
                dataScore.pertukaranPelajar, 
                dataScore.magang, 
                dataScore.asistensiMengajar, 
                dataScore.penelitian, 
                dataScore.kemanusiaan, 
                dataScore.wirausaha,
                dataScore.stupen,
                dataScore.k2nTematik
            ],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
          },
          {
            label: dataScore.fakultas,
            data: [
                avgFakultas.avg_pp, 
                avgFakultas.avg_mpk, 
                avgFakultas.avg_am, 
                avgFakultas.avg_pr, 
                avgFakultas.avg_pk, 
                avgFakultas.avg_kw,
                avgFakultas.avg_spi,
                avgFakultas.avg_k2n
            ],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
          },
          {
            label: 'Universitas',
            data: [
                avgUniv.avgU_pp, 
                avgUniv.avgU_mpk, 
                avgUniv.avgU_am, 
                avgUniv.avgU_pr, 
                avgUniv.avgU_pk, 
                avgUniv.avgU_kw,
                avgUniv.avgU_spi,
                avgUniv.avgU_k2n
            ],
            fill: true,
            backgroundColor: 'rgba(203, 223, 0, 0.2)',
            borderColor: 'rgb(203, 223, 0)',
            pointBackgroundColor: 'rgb(203, 223, 0)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(203, 223, 0)'
          }
        ]
    }
    const options={
        type: 'radar',
        responsive: true,
        mainAspectRatio: true,
        radius: 3,
        hitRadius: 1,
        scales: {
            r: {
                min: 0,
                max: 60,
            }
        }
        
    }
        
  return (
    <div>
        <div className='pl-2'>
            <h1 className='title'>Profil Minat dalam Kegiatan MBKM</h1>
            <h2 className='subtitle'>{dataScore.name} - {dataScore.fakultas}</h2>
        </div>
        <div className=" ">
            <p className='is-danger'>{msg}</p>
            <div className='card is-shadowless mt-5'>
                <div className="card-content columns is-multiline is-mobile is-centered">
                    <div className="content column is-half">
                        <Radar
                        data={data}
                        options={options}
                        ></Radar>
                    </div>
                    <div className='content column is-one-quarter'>
                        <p className='mb-0'><strong>Rekomendasi</strong></p>
                        <p className='mb-0'>Peserta direkomendasikan untuk mengikuti kegiatan MBKM:</p>
                        <ol className='mt-0'>
                            <li>{rekom()[0]}</li>
                            <li>{rekom()[1]}</li>
                            <li>{rekom()[2]}</li>
                        </ol>
                    </div>
                    <div className='column is-full px-5 mt-0'>
                    <table className='table is-bordered is-striped is-narrow is-hoverable is-fullwidth is-half '>
                        <thead>
                            <tr>
                                <th className='is-success'>Kegiatan MBKM</th>
                                <th className='is-success'> Skor </th>
                            </tr> 
                        </thead>
                        <tbody>
                        <tr>
                                <td className='is-warning is-light'>Pertukaran Pelajar</td>
                                <td rowSpan="2">{dataScore.pertukaranPelajar}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Kegiatan pembelajaran lintas kampus (dalam atau luar negeri) dalam Program Studi yang sama dan dapat dilakukan secara tatap muka atau dalam jaringan (daring)
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Magang/ Praktik Kerja</td>
                                <td rowSpan="2">{dataScore.magang}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Kegiatan pembelajaran langsung di tempat kerja selama 1-2 semester. Kegiatan ini dilakukan melalui kerja sama dengan mitra perusahaan, yayasan nirlaba, organisasi multilateral, institusi pemerintah, maupun perusahaan rintisan (start up company).
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Asistensi Mengajar di Satuan Pendidikan</td>
                                <td rowSpan="2">{dataScore.asistensiMengajar}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Kegiatan pembelajaran dalam bentuk asistensi mengajar dilakukan oleh mahasiswa di satuan pendidikan seperti sekolah dasar, menengah, maupun atas. Sekolah tempat praktik mengajar dapat berada di lokasi kota maupun di daerah terpencil.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Penelitian/ Riset</td>
                                <td rowSpan="2">{dataScore.penelitian}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Kegiatan penelitian di Lembaga Riset/pusat studi.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Proyek Kemanusiaan</td>
                                <td rowSpan="2">{dataScore.kemanusiaan}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Kegiatan proyek jangka pendek menjadi relawan di lembaga dalam negeri (Pemda, PMI, BPBD, BNPB, dll) atau lembaga luar negeri (UNESCO, UNICEF, WHO, UNOCHA, UNHCR, dll).
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Kegiatan Wirausaha</td>
                                <td rowSpan="2">{dataScore.wirausaha}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Melaksanakan kegiatan berwirausaha dan menyampaikan laporan dalam bentuk presentasi.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Studi/ Proyek Independen</td>
                                <td rowSpan="2">{dataScore.stupen}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Kegiatan mengembangkan sebuah proyek berdasarkan topik khusus yang dapat dikerjakan bersama dengan mahasiswa lain. Luaran dari kegiatan ini dapat berupa:
                                    <ul>
                                        <li>
                                        Partisipasi dalam kegiatan dan atau prestasi yang dihasilkan dalam suatu kegiatan, misal perlombaan ilmiah.
                                        </li>
                                        <li>
                                        Produk sebagai output kegiatan yang dapat dilanjutkan sebagai hak cipta.
                                        </li>
                                    </ul>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Membangun Desa/ Kuliah Kerja Nyata Tematik</td>
                                <td rowSpan="2">{dataScore.k2nTematik}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Kegiatan pembelajaran berupa hidup di tengah masyarakat di luar kampus, secara langsung bersama-sama masyarakat mengidentifikasi potensi dan menangani masalah untuk mengembangkan potensi desa/daerah dan meramu solusi terhadap permasalahan yang ditemukan.
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                
                  
            </div>
        </div>
    </div>
  )
}
export default PM;
