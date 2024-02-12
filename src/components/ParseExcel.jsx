import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const XLSX = require('xlsx')

const ParseExcel = () => {

    const [excelData, setExcelData] = useState([]);
    const [fileName,setFileName] = useState(null)
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const handleFile = async (e) => {
        // const reader = new FileReader();
        // reader.readAsBinaryString(e.target.files[0])
        // reader.onload = (e) => {
        //     const data = e.target.result;
        //     const workbook = XLSX.read(data, {type: "binary"})
        //     const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        //     const jsonData = XLSX.utils.sheet_to_json(worksheet)
        //     setExcelData(jsonData)
        //     console.log(excelData);
        // }
        const file = e.target.files[0];
        setFileName(file.name);
        // console.log(fileName);
        const data = await file.arrayBuffer();
        var workbook = XLSX.read(data)

        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        const jsonData = XLSX.utils.sheet_to_json(worksheet)
        setExcelData(jsonData)
    }

    const saveUser = async (e) => {
        // const excel = excelData[1]
        for (let i = 0; i < excelData.length; i++) {
            let excel = excelData[i]
            // console.log(
            //     excel.nama,
            //     excel.fakultas,
            //     excel.email,
            //     excel.npm
            //     );
            e.preventDefault()
            try {
                await axios.post('https://jimat-ui-back.vercel.app/users', {
                    name: excel.nama,
                    fakultas: excel.fakultas,
                    email: excel.email,
                    password: toString(excel.npm),
                    confPassword: toString(excel.npm),
                    role: "user"
                });
            } catch (error) {
                if(error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        }
        navigate("/users");
    }

  return (
    <div>
        <div className='pl-2'>
            <h1 className='title'>Add Users</h1>
            <h2 className='subtitle'>Batch add with excel file</h2>
            <Link to={"/users/add"} className='button is-primary mb-2'>Add a user</Link>
        </div>
        <div className="card is-shadowless">
            <p>{msg}</p>
            <div className="card-content">
                <div className="content">
                <h3>Parse Excel</h3>
                    
                    <div className="file has-name">
                    <label className="file-label">
                        <input className="file-input" type="file" accept='.xlsx, .xls' onChange={(e) => handleFile(e)}/>
                        <span className="file-cta">
                            <span className="file-label">
                                Choose a file…
                            </span>
                        </span>
                        <span className='file-name'>
                        {fileName && (
                        <p> FileName: <span>{fileName}</span></p>
                        )}
                        </span>
                    </label>
                    </div>
                </div>
                {excelData.length > 0 && (
                    <div className='table-container'>
                    <table className="table is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Fakultas</th>
                                <th>Email</th>
                                <th>NPM</th>
                                {/* {Object.keys(excelData[0]).map((key) => (
                                    <th key={key}>{key}</th>
                                ))} */}
                            </tr>
                        </thead>
                        <tbody>
                        {excelData.map((eData, index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{eData.nama}</td>
                                <td>{eData.fakultas}</td>
                                <td>{eData.email}</td>
                                <td>{eData.npm}</td>
                            </tr>
                            ))}
                            {/* {excelData.map((row, index)=>(
                            <tr key={index}>
                                <td>inde</td>
                                {Object.values(row).map((value, index) => (
                                    <td key={index}>{value}</td>
                                ))}
                            </tr>
                            ))} */}
                        </tbody>
                    </table>
                    <div>
                       <button onClick={saveUser} type='submit' className="button is-success is-fullwidth">Daftarkan!</button>
                    </div>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default ParseExcel