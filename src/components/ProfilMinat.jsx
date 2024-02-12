import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams} from 'react-router-dom';
import {Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale, Filler, RadarController, elements} from 'chart.js'
import {Radar} from 'react-chartjs-2';
ChartJS.register(
    LineElement, PointElement, Tooltip, Legend, RadialLinearScale, Filler, RadarController, elements
)

const PMin = () => {
    const [dataScore, setDataScore] =  useState({
        name: "",
        fakultas: "",
        sf_like: 0, sf_comp: 0, ma_like: 0, ma_comp: 0, bd_like: 0, bd_comp: 0,
        dp_like: 0, dp_comp: 0, me_like: 0, me_comp: 0, no_like: 0, no_comp: 0,
        ar_like: 0, ar_comp: 0, he_like: 0, he_comp: 0, ss_like: 0, ss_comp: 0,
        in_like: 0, in_comp: 0, bs_like: 0, bs_comp: 0, fa_like: 0, fa_comp: 0,
        sc_like: 0, sc_comp: 0, qc_like: 0, qc_comp: 0, mw_like: 0, mw_comp: 0,
        ps_like: 0, ps_comp: 0, cr_like: 0, cr_comp: 0, bse_like: 0, bse_comp: 0
    })
    const dsc=dataScore
    
    const [msg, setMsg] = useState('');
    const {id} = useParams();

    // const liking = [
    //     dsc.sf_like, dsc.ma_like, dsc.bd_like, dsc.dp_like, dsc.me_like, dsc.no_like,
    //     dsc.ar_like, dsc.he_like, dsc.ss_like, dsc.in_like, dsc.bs_like, dsc.fa_like,
    //     dsc.sc_like, dsc.qc_like, dsc.mw_like, dsc.ps_like, dsc.cr_like, dsc.bse_like
    // ];
    // liking.sort(function(a, b){return b-a});
    // const competence = [
    //     dsc.sf_comp, dsc.ma_comp, dsc.bd_comp, dsc.dp_comp, dsc.me_comp, dsc.no_comp,
    //     dsc.ar_comp, dsc.he_comp, dsc.ss_comp, dsc.in_comp, dsc.bs_comp, dsc.fa_comp,
    //     dsc.sc_comp, dsc.qc_comp, dsc.mw_comp, dsc.ps_comp, dsc.cr_comp, dsc.bse_comp
    // ]
    // competence.sort(function(a, b){return b-a});
    const sf  = (dsc.sf_like+dsc.sf_comp)/2
    const ma  = (dsc.ma_like+dsc.ma_comp)/2
    const bd  = (dsc.bd_like+dsc.bd_comp)/2
    const dp  = (dsc.dp_like+dsc.dp_comp)/2
    const me  = (dsc.me_like+dsc.me_comp)/2
    const no  = (dsc.no_like+dsc.no_comp)/2
    const ar  = (dsc.ar_like+dsc.ar_comp)/2
    const he  = (dsc.he_like+dsc.he_comp)/2
    const ss  = (dsc.ss_like+dsc.ss_comp)/2
    const inc = (dsc.in_like+dsc.in_comp)/2
    const bs  = (dsc.bs_like+dsc.bs_comp)/2
    const fa  = (dsc.fa_like+dsc.fa_comp)/2
    const sc  = (dsc.sc_like+dsc.sc_comp)/2
    const qc  = (dsc.qc_like+dsc.qc_comp)/2
    const mw  = (dsc.mw_like+dsc.mw_comp)/2
    const ps  = (dsc.ps_like+dsc.ps_comp)/2
    const cr  = (dsc.cr_like+dsc.cr_comp)/2
    const bse = (dsc.bse_like+dsc.bse_comp)/2

    const composite = [sf, ma, bd, dp, me, no, ar, he, ss, inc, bs, fa, sc, qc, mw, ps, cr, bse]
    composite.sort(function(a, b){return b-a});

    const rekomL = () => {
        let results = [];
        for (let x = 0; x < 3; x++) {
            if (composite[x] === sf && !results.includes("Social Facilitating")) {
                results.push("Social Facilitating");
            } 
            else if (composite[x] === ma && !results.includes("Managing")) {
                results.push("Managing");
            } 
            else if (composite[x] === bd && !results.includes("Business Detail")) {
                results.push("Business Detail");
            } 
            else if (composite[x] === dp && !results.includes("Data Processing")) {
                results.push("Data Processing");
            } 
            else if (composite[x] === me && !results.includes("Mechanical")) {
                results.push("Mechanical");
            } 
            else if (composite[x] === no && !results.includes("Nature/Outdoors")) {
                results.push("Nature/Outdoors");
            } 
            else if (composite[x] === ar && !results.includes("Artistic")) {
                results.push("Artistic");
            } 
            else if (composite[x] === he && !results.includes("Helping")) {
                results.push("Helping");
            } 
            else if (composite[x] === ss && !results.includes("Social Sciences")) {
                results.push("Social Sciences");
            } 
            else if (composite[x] === inc && !results.includes("Influence")) {
                results.push("Influence");
            } 
            else if (composite[x] === bs && !results.includes("Business Systems")) {
                results.push("Business Systems");
            } 
            else if (composite[x] === fa && !results.includes("Financial Analysis")) {
                results.push("Financial Analysis");
            } 
            else if (composite[x] === sc && !results.includes("Science")) {
                results.push("Science");
            } 
            else if (composite[x] === qc && !results.includes("Quality Control")) {
                results.push("Quality Control");
            } 
            else if (composite[x] === mw && !results.includes("Manual Work")) {
                results.push("Manual Work");
            } 
            else if (composite[x] === ps && !results.includes("Personal Service")) {
                results.push("Personal Service");
            } 
            else if (composite[x] === cr && !results.includes("Construction/Repair")) {
                results.push("Construction/Repair");
            } 
            else if (composite[x] === bse && !results.includes("Basic Service")) {
                results.push("Basic Service");
            }
        }
        return results;
    }

    // console.log("Rekomendasi:");
    // console.log(rekomL());

    useEffect(()=>{
        const getScoreById = async () =>{
            try {
                const response = await axios.get(`https://jimat-ui-back.vercel.app/cores/${id}`);
                const sdt = response.data
                setDataScore( d => ({
                ...d, 
                name: sdt.name, fakultas: sdt.fakultas,
                sf_like: sdt.sf_like, sf_comp: sdt.sf_comp, ma_like: sdt.ma_like, ma_comp: sdt.ma_comp, bd_like: sdt.bd_like, bd_comp: sdt.bd_comp,
                dp_like: sdt.dp_like, dp_comp: sdt.dp_comp, me_like: sdt.me_like, me_comp: sdt.me_comp, no_like: sdt.no_like, no_comp: sdt.no_comp,
                ar_like: sdt.ar_like, ar_comp: sdt.ar_comp, he_like: sdt.he_like, he_comp: sdt.he_comp, ss_like: sdt.ss_like, ss_comp: sdt.ss_comp,
                in_like: sdt.in_like, in_comp: sdt.in_comp, bs_like: sdt.bs_like, bs_comp: sdt.bs_comp, fa_like: sdt.fa_like, fa_comp: sdt.fa_comp,
                sc_like: sdt.sc_like, sc_comp: sdt.sc_comp, qc_like: sdt.qc_like, qc_comp: sdt.qc_comp, mw_like: sdt.mw_like, mw_comp: sdt.mw_comp,
                ps_like: sdt.ps_like, ps_comp: sdt.ps_comp, cr_like: sdt.cr_like, cr_comp: sdt.cr_comp, bse_like: sdt.bse_like, bse_comp: sdt.bse_comp
                }));
                // console.log(response);
            } catch (error) {
                if(error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        }
        getScoreById(); 
    }, [id]);

    const data ={
        labels: [
            'Social Facilitating',
            'Managing',
            'Business Detail',
            'Data Processing',
            'Mechanical',
            'Nature/ Outdoor',
            'Artistic',
            'Helping'
        ],
        datasets: [
            {
            label: "Liking",
            data: [
                dsc.sf_like, dsc.ma_like, dsc.bd_like, dsc.dp_like,
                dsc.me_like, dsc.no_like, dsc.ar_like, dsc.he_like
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
            label: "Competence",
            data: [
                dsc.sf_comp, dsc.ma_comp, dsc.bd_comp, dsc.dp_comp,
                dsc.me_comp, dsc.no_comp, dsc.ar_comp, dsc.he_comp
            ],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
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
            <h1 className='title'>Profil Minat</h1>
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
                        <p className='mb-0'><strong>Kesimpulan</strong></p>
                        <p className='mb-0'>Peserta memiliki minat dominan pada aspek:</p>
                        <ol className='mt-0'>
                            <li>{rekomL()[0]}</li>
                            <li>{rekomL()[1]}</li>
                            <li>{rekomL()[2]}</li>
                        </ol>
                    </div>
                    <div className='column is-full px-5 mt-0'>
                    <table className='table is-bordered is-striped is-narrow is-hoverable is-fullwidth is-half '>
                        <thead>
                            <tr>
                                <th className='is-success'>Basic Interest</th>
                                <th className='is-success'> Liking </th>
                                <th className='is-success'> Competence </th>
                                <th className='is-success'> Composite </th>
                            </tr> 
                        </thead>
                        <tbody>
                        <tr>
                                <td className='is-warning is-light'>Social Facilitating</td>
                                <td rowSpan="2">{dsc.sf_like}</td>
                                <td rowSpan="2">{dsc.sf_comp}</td>
                                <td rowSpan="2">{sf}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Ketertarikan untuk bekerja dengan orang lain. Mencakup kegiatan seperti menjual sesuatu, memberi bantuan/pendampingan (assisting), memberikan informasi, instruksi, atau layanan administrasi di bidang pelayanan.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Managing</td>
                                <td rowSpan="2">{dsc.ma_like}</td>
                                <td rowSpan="2">{dsc.ma_comp}</td>
                                <td rowSpan="2">{ma}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Ketertarikan untuk mengelola dan merencanakan kegiatan bisnis atau organisasi. Mencakup kegiatan seperti mengolah informasi; memecahkan masalah; mengambil keputusan; meramalkan dan merencanakan masa depan; berkomunikasi dengan orang lain; mengorganisasi, mengoordinasikan, dan mengawasi orang lain; membujuk dan mempengaruhi orang lain.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Business Detail</td>
                                <td rowSpan="2">{dsc.bd_like}</td>
                                <td rowSpan="2">{dsc.bd_comp}</td>
                                <td rowSpan="2">{bd}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Ketertarikan pada bidang akuntansi, asesmen, estimasi, memberikan saran bisnis, dan merencanakan anggaran.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Data Processing</td>
                                <td rowSpan="2">{dsc.dp_like}</td>
                                <td rowSpan="2">{dsc.dp_comp}</td>
                                <td rowSpan="2">{dp}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Ketertarikan untuk mengelola informasi. Mencakup kegiatan menggunakan matematika dan sistem komputer untuk menganalisis dan menginterpretasi data serta untuk mengklarifikasi dan memecahkan masalah teknis.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Mechanical</td>
                                <td rowSpan="2">{dsc.me_like}</td>
                                <td rowSpan="2">{dsc.me_comp}</td>
                                <td rowSpan="2">{me}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Ketertarikan untuk memahami cara kerja mesin dan bekerja menggunakan mesin. Mencakup kegiatan seperti melakukan perancangan, perakitan, dan perawatan mesin.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Nature/Outdoors</td>
                                <td rowSpan="2">{dsc.no_like}</td>
                                <td rowSpan="2">{dsc.no_comp}</td>
                                <td rowSpan="2">{no}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Ketertarikan untuk bekerja di luar ruangan. Mencakup kegiatan menerapkan pengetahuan tentang ilmu hayat pada tanaman dan hewan.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Artistic</td>
                                <td rowSpan="2">{dsc.ar_like}</td>
                                <td rowSpan="2">{dsc.ar_comp}</td>
                                <td rowSpan="2">{ar}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Ketertarikan pada aktivitas kreatif dan ekspresif, seperti seni visual, pertunjukan, dan sastra.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Helping</td>
                                <td rowSpan="2">{dsc.he_like}</td>
                                <td rowSpan="2">{dsc.he_comp}</td>
                                <td rowSpan="2">{he}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Ketertarikan untuk membantu orang-orang dari berbagai kelompok usia dan dengan berbagai cara. Mencakup kegiatan seperti mengajar, memberi dukungan dan nasihat kepada orang lain, serta melakukan konseling.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th className='is-success'>Higher Prestige Interest</th>
                                <th className='is-success'> Liking </th>
                                <th className='is-success'> Competence </th>
                                <th className='is-success'> Composite </th>
                            </tr> 
                            <tr>
                                <td className='is-warning is-light'>Social Science</td>
                                <td rowSpan="2">{dsc.ss_like}</td>
                                <td rowSpan="2">{dsc.ss_comp}</td>
                                <td rowSpan="2">{ss}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Ketertarikan untuk menolong orang lain secara medis dan psikologis. Mencakup kegiatan seperti membantu orang lain dalam memecahkan masalah medis dan psikologis dengan pendekatan individu ataupun kelompok.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Influence</td>
                                <td rowSpan="2">{dsc.in_like}</td>
                                <td rowSpan="2">{dsc.in_comp}</td>
                                <td rowSpan="2">{inc}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Ketertarikan untuk memimpin dan mengarahkan orang lain. Mencakup kegiatan seperti memimpin dan mengarahkan orang lain dalam bisnis, politik dan penelitian, termasuk aktivitas seperti mempersuasi orang lain.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Business Systems</td>
                                <td rowSpan="2">{dsc.bs_like}</td>
                                <td rowSpan="2">{dsc.bs_comp}</td>
                                <td rowSpan="2">{bs}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Ketertarikan untuk mengaplikasikan pengetahuan untuk menjalankan bisnis. Aktivitas yang meliputi minat ini termasuk merancang, membuat program dan sistem serta penerapannya dalam bisnis dan keuangan.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Financial Analysis</td>
                                <td rowSpan="2">{dsc.fa_like}</td>
                                <td rowSpan="2">{dsc.fa_comp}</td>
                                <td rowSpan="2">{fa}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Ketertarikan untuk membantu orang lain dalam masalah keuangan. Mencakup kegiatan seperti bekerja sama dengan klien dalam penyelesaian permasalahan keuangan.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Science</td>
                                <td rowSpan="2">{dsc.sc_like}</td>
                                <td rowSpan="2">{dsc.sc_comp}</td>
                                <td rowSpan="2">{sc}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Ketertarikan pada ilmu pengetahuan. Mencakup kegiatan seperti mempelajari fenomena, melakukan penelitian dan mengembangkan pengetahuan di bidang biologi, fisika, dan perilaku.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <th className='is-success'>Lower Prestige Interest</th>
                                <th className='is-success'> Liking </th>
                                <th className='is-success'> Competence </th>
                                <th className='is-success'> Composite </th>
                            </tr> 
                            <tr>
                                <td className='is-warning is-light'>Quality Control</td>
                                <td rowSpan="2">{dsc.qc_like}</td>
                                <td rowSpan="2">{dsc.qc_comp}</td>
                                <td rowSpan="2">{qc}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Ketertarikan untuk memeriksa dan melindungi kualitas atau keamanan suatu produk, bahan, atau pelayanan.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Manual Work</td>
                                <td rowSpan="2">{dsc.mw_like}</td>
                                <td rowSpan="2">{dsc.mw_comp}</td>
                                <td rowSpan="2">{mw}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Ketertarikan pada pekerjaan dengan menggunakan tangan atau mesin sederhana. Mencakup kegiatan seperti mengoperasikan mesin atau kendaraan, melakukan pelayanan, dan bekerja pada posisi yang membutuhkan sedikit pelatihan.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Personal Service</td>
                                <td rowSpan="2">{dsc.ps_like}</td>
                                <td rowSpan="2">{dsc.ps_comp}</td>
                                <td rowSpan="2">{ps}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Ketertarikan pada aktivitas menawarkan bantuan kepada orang-orang dalam kegiatan sehari-hari. Mencakup aktivitas seperti menyajikan makanan dan minuman, memberikan informasi, membantu dalam membelikan pakaian, dan membantu memberikan kenyamanan.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Construction/ Repair</td>
                                <td rowSpan="2">{dsc.cr_like}</td>
                                <td rowSpan="2">{dsc.cr_comp}</td>
                                <td rowSpan="2">{cr}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Ketertarikan untuk membangun atau memperbaiki sesuatu. Mencakup kegiatan seperti bekerja di luar ruangan, mengerjakan struktur bangunan, dan mengoperasikan atau memperbaiki mesin.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='is-warning is-light'>Basic Service</td>
                                <td rowSpan="2">{dsc.bse_like}</td>
                                <td rowSpan="2">{dsc.bse_comp}</td>
                                <td rowSpan="2">{bse}</td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                    Ketertarikan untuk menjual produk dan jasa, menyapa orang, membuat reservasi, menyewa peralatan, dan membersihkan.
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
export default PMin;