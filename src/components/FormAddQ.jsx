import React, { useState } from "react";
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import Questions1 from "./FormList/Questions1";
import Questions2 from "./FormList/Questions2";
import Questions3 from "./FormList/Questions3";
import Questions4 from "./FormList/Questions4";
import Questions5 from "./FormList/Questions5";
import Questions6 from "./FormList/Questions6";
import Questions7 from "./FormList/Questions7";
import Questions8 from "./FormList/Questions8";
import Questions9 from "./FormList/Questions9";
import Questions10 from "./FormList/Questions10";
import Questions11 from "./FormList/Questions11";
import Questions12 from "./FormList/Questions12";
import Questions13 from "./FormList/Questions13";
import Questions14 from "./FormList/Questions14";
import Questions15 from "./FormList/Questions15";
import Questions16 from "./FormList/Questions16";
import Questions17 from "./FormList/Questions17";
import Questions18 from "./FormList/Questions18";

const FormQ = () => {
// const data = ['Pilih',1,2,3,4,5,6];
  const [page, setPage] = useState(0);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    fakultas: "",
    ls1:0, cs1:0, ls2:0, cs2:0, ls3:0, cs3:0, ls4:0, cs4:0, ls5:0, cs5:0, ls6:0, cs6:0,
    ls7:0, cs7:0, ls8:0, cs8:0, ls9:0, cs9:0, ls10:0, cs10:0, ls11:0, cs11:0, ls12:0, cs12:0,
    ls13:0, cs13:0, ls14:0, cs14:0, ls15:0, cs15:0, ls16:0, cs16:0, ls17:0, cs17:0, ls18:0, cs18:0,
    ls19:0, cs19:0, ls20:0, cs20:0, ls21:0, cs21:0, ls22:0, cs22:0, ls23:0, cs23:0, ls24:0, cs24:0, 
    ls25:0, cs25:0, ls26:0, cs26:0, ls27:0, cs27:0, ls28:0, cs28:0, ls29:0, cs29:0, ls30:0, cs30:0, 
    ls31:0, cs31:0, ls32:0, cs32:0, ls33:0, cs33:0, ls34:0, cs34:0, ls35:0, cs35:0, ls36:0, cs36:0, 
    ls37:0, cs37:0, ls38:0, cs38:0, ls39:0, cs39:0, ls40:0, cs40:0, ls41:0, cs41:0, ls42:0, cs42:0, 
    ls43:0, cs43:0, ls44:0, cs44:0, ls45:0, cs45:0, ls46:0, cs46:0, ls47:0, cs47:0, ls48:0, cs48:0, 
    ls49:0, cs49:0, ls50:0, cs50:0, ls51:0, cs51:0, ls52:0, cs52:0, ls53:0, cs53:0, ls54:0, cs54:0, 
    ls55:0, cs55:0, ls56:0, cs56:0, ls57:0, cs57:0, ls58:0, cs58:0, ls59:0, cs59:0, ls60:0, cs60:0, 
    ls61:0, cs61:0, ls62:0, cs62:0, ls63:0, cs63:0, ls64:0, cs64:0, ls65:0, cs65:0, ls66:0, cs66:0, 
    ls67:0, cs67:0, ls68:0, cs68:0, ls69:0, cs69:0, ls70:0, cs70:0, ls71:0, cs71:0, ls72:0, cs72:0, 
    ls73:0, cs73:0, ls74:0, cs74:0, ls75:0, cs75:0, ls76:0, cs76:0, ls77:0, cs77:0, ls78:0, cs78:0, 
    ls79:0, cs79:0, ls80:0, cs80:0, ls81:0, cs81:0, ls82:0, cs82:0, ls83:0, cs83:0, ls84:0, cs84:0, 
    ls85:0, cs85:0, ls86:0, cs86:0, ls87:0, cs87:0, ls88:0, cs88:0, ls89:0, cs89:0, ls90:0, cs90:0, 
    ls91:0, cs91:0, ls92:0, cs92:0, ls93:0, cs93:0, ls94:0, cs94:0, ls95:0, cs95:0, ls96:0, cs96:0, 
    ls97:0, cs97:0, ls98:0, cs98:0, ls99:0, cs99:0, ls100:0, cs100:0, ls101:0, cs101:0, ls102:0, cs102:0, 
    ls103:0, cs103:0, ls104:0, cs104:0, ls105:0, cs105:0, ls106:0, cs106:0, ls107:0, cs107:0, ls108:0, cs108:0

  });

  const FormTitles = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

  const PageDisplay = () => {
    if (page === 0) {
      return <Questions1 formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Questions2 formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
        return <Questions3 formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
        return <Questions4 formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
        return <Questions5 formData={formData} setFormData={setFormData} />;
    } else if (page === 5) {
        return <Questions6 formData={formData} setFormData={setFormData} />;
    } else if (page === 6) {
        return <Questions7 formData={formData} setFormData={setFormData} />;
    } else if (page === 7) {
        return <Questions8 formData={formData} setFormData={setFormData} />;
    } else if (page === 8) {
        return <Questions9 formData={formData} setFormData={setFormData} />;
    } else if (page === 9) {
        return <Questions10 formData={formData} setFormData={setFormData} />;
    } else if (page === 10) {
        return <Questions11 formData={formData} setFormData={setFormData} />;
    } else if (page === 11) {
        return <Questions12 formData={formData} setFormData={setFormData} />;
    } else if (page === 12) {
        return <Questions13 formData={formData} setFormData={setFormData} />;
    } else if (page === 13) {
        return <Questions14 formData={formData} setFormData={setFormData} />;
    } else if (page === 14) {
        return <Questions15 formData={formData} setFormData={setFormData} />;
    } else if (page === 15) {
        return <Questions16 formData={formData} setFormData={setFormData} />;
    } else if (page === 16) {
        return <Questions17 formData={formData} setFormData={setFormData} />;
    } else {
      return <Questions18 formData={formData} setFormData={setFormData} />;
    }
  };

//   Get Liking and Comptence Score
  const fd = formData
    //   1. Social Facilitating
  const sf1 = (parseInt(fd.ls1)+parseInt(fd.ls19)+parseInt(fd.ls37)+parseInt(fd.ls55)+parseInt(fd.ls73)+parseInt(fd.ls91))/6*10
  const sf2 = (parseInt(fd.cs1)+parseInt(fd.cs19)+parseInt(fd.cs37)+parseInt(fd.cs55)+parseInt(fd.cs73)+parseInt(fd.cs91))/6*10
    //   2. Managing
  const ma1 = (parseInt(fd.ls2)+parseInt(fd.ls20)+parseInt(fd.ls38)+parseInt(fd.ls56)+parseInt(fd.ls74)+parseInt(fd.ls92))/6*10
  const ma2 = (parseInt(fd.cs2)+parseInt(fd.cs20)+parseInt(fd.cs38)+parseInt(fd.cs56)+parseInt(fd.cs74)+parseInt(fd.cs92))/6*10
    //   3. Business Detail
  const bd1 = (parseInt(fd.ls3)+parseInt(fd.ls21)+parseInt(fd.ls39)+parseInt(fd.ls57)+parseInt(fd.ls75)+parseInt(fd.ls93))/6*10
  const bd2 = (parseInt(fd.cs3)+parseInt(fd.cs21)+parseInt(fd.cs39)+parseInt(fd.cs57)+parseInt(fd.cs75)+parseInt(fd.cs93))/6*10
    //   4. Business Detail
  const dp1 = (parseInt(fd.ls4)+parseInt(fd.ls22)+parseInt(fd.ls40)+parseInt(fd.ls58)+parseInt(fd.ls76)+parseInt(fd.ls94))/6*10
  const dp2 = (parseInt(fd.cs4)+parseInt(fd.cs22)+parseInt(fd.cs40)+parseInt(fd.cs58)+parseInt(fd.cs76)+parseInt(fd.cs94))/6*10
  //   5. Business Detail
  const me1 = (parseInt(fd.ls5)+parseInt(fd.ls23)+parseInt(fd.ls41)+parseInt(fd.ls59)+parseInt(fd.ls77)+parseInt(fd.ls95))/6*10
  const me2 = (parseInt(fd.cs5)+parseInt(fd.cs23)+parseInt(fd.cs41)+parseInt(fd.cs59)+parseInt(fd.cs77)+parseInt(fd.cs95))/6*10
  //   6. Business Detail
  const no1 = (parseInt(fd.ls6)+parseInt(fd.ls24)+parseInt(fd.ls42)+parseInt(fd.ls60)+parseInt(fd.ls78)+parseInt(fd.ls96))/6*10
  const no2 = (parseInt(fd.cs6)+parseInt(fd.cs24)+parseInt(fd.cs42)+parseInt(fd.cs60)+parseInt(fd.cs78)+parseInt(fd.cs96))/6*10
  //   7. Artistic
  const ar1 = (parseInt(fd.ls7)+parseInt(fd.ls25)+parseInt(fd.ls43)+parseInt(fd.ls61)+parseInt(fd.ls79)+parseInt(fd.ls97))/6*10
  const ar2 = (parseInt(fd.cs7)+parseInt(fd.cs25)+parseInt(fd.cs43)+parseInt(fd.cs61)+parseInt(fd.cs79)+parseInt(fd.cs97))/6*10
  //   8. Helping
  const he1 = (parseInt(fd.ls8)+parseInt(fd.ls26)+parseInt(fd.ls44)+parseInt(fd.ls62)+parseInt(fd.ls80)+parseInt(fd.ls98))/6*10
  const he2 = (parseInt(fd.cs8)+parseInt(fd.cs26)+parseInt(fd.cs44)+parseInt(fd.cs62)+parseInt(fd.cs80)+parseInt(fd.cs98))/6*10
  //   9. Social Science
  const ss1 = (parseInt(fd.ls9)+parseInt(fd.ls27)+parseInt(fd.ls45)+parseInt(fd.ls63)+parseInt(fd.ls81)+parseInt(fd.ls99))/6*10
  const ss2 = (parseInt(fd.cs9)+parseInt(fd.cs27)+parseInt(fd.cs45)+parseInt(fd.cs63)+parseInt(fd.cs81)+parseInt(fd.cs99))/6*10
  //   10. Influence
  const in1 = (parseInt(fd.ls10)+parseInt(fd.ls28)+parseInt(fd.ls46)+parseInt(fd.ls64)+parseInt(fd.ls82)+parseInt(fd.ls100))/6*10
  const in2 = (parseInt(fd.cs10)+parseInt(fd.cs28)+parseInt(fd.cs46)+parseInt(fd.cs64)+parseInt(fd.cs82)+parseInt(fd.cs100))/6*10
  //   11. Business Systems
  const bs1 = (parseInt(fd.ls11)+parseInt(fd.ls29)+parseInt(fd.ls47)+parseInt(fd.ls65)+parseInt(fd.ls83)+parseInt(fd.ls101))/6*10
  const bs2 = (parseInt(fd.cs11)+parseInt(fd.cs29)+parseInt(fd.cs47)+parseInt(fd.cs65)+parseInt(fd.cs83)+parseInt(fd.cs101))/6*10
  //   12. Financial Analysis
  const fa1 = (parseInt(fd.ls12)+parseInt(fd.ls30)+parseInt(fd.ls48)+parseInt(fd.ls66)+parseInt(fd.ls84)+parseInt(fd.ls102))/6*10
  const fa2 = (parseInt(fd.cs12)+parseInt(fd.cs30)+parseInt(fd.cs48)+parseInt(fd.cs66)+parseInt(fd.cs84)+parseInt(fd.cs102))/6*10
  //   13. Science
  const sc1 = (parseInt(fd.ls13)+parseInt(fd.ls31)+parseInt(fd.ls49)+parseInt(fd.ls67)+parseInt(fd.ls85)+parseInt(fd.ls103))/6*10
  const sc2 = (parseInt(fd.cs13)+parseInt(fd.cs31)+parseInt(fd.cs49)+parseInt(fd.cs67)+parseInt(fd.cs85)+parseInt(fd.cs103))/6*10
  //   14. Quality Control
  const qc1 = (parseInt(fd.ls14)+parseInt(fd.ls32)+parseInt(fd.ls50)+parseInt(fd.ls68)+parseInt(fd.ls86)+parseInt(fd.ls104))/6*10
  const qc2 = (parseInt(fd.cs14)+parseInt(fd.cs32)+parseInt(fd.cs50)+parseInt(fd.cs68)+parseInt(fd.cs86)+parseInt(fd.cs104))/6*10
  //   15. Manual Work
  const mw1 = (parseInt(fd.ls15)+parseInt(fd.ls33)+parseInt(fd.ls51)+parseInt(fd.ls69)+parseInt(fd.ls87)+parseInt(fd.ls105))/6*10
  const mw2 = (parseInt(fd.cs15)+parseInt(fd.cs33)+parseInt(fd.cs51)+parseInt(fd.cs69)+parseInt(fd.cs87)+parseInt(fd.cs105))/6*10
  //   16. Personal Sevice
  const ps1 = (parseInt(fd.ls16)+parseInt(fd.ls34)+parseInt(fd.ls52)+parseInt(fd.ls70)+parseInt(fd.ls88)+parseInt(fd.ls106))/6*10
  const ps2 = (parseInt(fd.cs16)+parseInt(fd.cs34)+parseInt(fd.cs52)+parseInt(fd.cs70)+parseInt(fd.cs88)+parseInt(fd.cs106))/6*10
  //   17. Construction/ Repair
  const cr1 = (parseInt(fd.ls17)+parseInt(fd.ls35)+parseInt(fd.ls53)+parseInt(fd.ls71)+parseInt(fd.ls89)+parseInt(fd.ls107))/6*10
  const cr2 = (parseInt(fd.cs17)+parseInt(fd.cs35)+parseInt(fd.cs53)+parseInt(fd.cs71)+parseInt(fd.cs89)+parseInt(fd.cs107))/6*10
  //   18. Basic Service
  const bse1 = (parseInt(fd.ls18)+parseInt(fd.ls36)+parseInt(fd.ls54)+parseInt(fd.ls72)+parseInt(fd.ls90)+parseInt(fd.ls108))/6*10
  const bse2 = (parseInt(fd.cs18)+parseInt(fd.cs36)+parseInt(fd.cs54)+parseInt(fd.cs72)+parseInt(fd.cs90)+parseInt(fd.cs108))/6*10

// Get Composite Score
    const sf  = (sf1+sf2)/20
    const ma  = (ma1+ma2)/20
    const bd  = (bd1+bd2)/20
    const dp  = (dp1+dp2)/20
    const me  = (me1+me2)/20
    const no  = (no1+no2)/20
    const ar  = (ar1+ar2)/20
    const he  = (he1+he2)/20
    const ss  = (ss1+ss2)/20
    const inc = (in1+in2)/20
    const bs  = (bs1+bs2)/20
    const fa  = (fa1+fa2)/20
    const sc  = (sc1+sc2)/20
    const qc  = (qc1+qc2)/20
    const mw  = (mw1+mw2)/20
    const ps  = (ps1+ps2)/20
    const cr  = (cr1+cr2)/20
    const bse = (bse1+bse2)/20

  const saveQ = async () => {
        try {
            await axios.post('https://jimat-ui-back.vercel.app/scores', {
                name: fd.name,
                fakultas: fd.fakultas,
                sf_like: sf1, sf_comp: sf2, ma_like: ma1, ma_comp: ma2, bd_like: bd1, bd_comp: bd2,
                dp_like: dp1, dp_comp: dp2, me_like: me1, me_comp: me1, no_like: no1, no_comp: no2,
                ar_like: ar1, ar_comp: ar2, he_like: he1, he_comp: he2, ss_like: ss1, ss_comp: ss2,
                in_like: in1, in_comp: in2, bs_like: bs1, bs_comp: bs2, fa_like: fa1, fa_comp: fa2,
                sc_like: sc1, sc_comp: sc2, qc_like: qc1, qc_comp: qc2, mw_like: mw1, mw_comp: mw2,
                ps_like: ps1, ps_comp: ps2, cr_like: cr1, cr_comp: cr2, bse_like: bse1, bse_comp: bse2,
                k2nTematik: (sf*3+ma*1.5+no*2+he*2+ss*2.5+inc*0.5+mw*0.5+ps*1.5+cr+bse*0.5)/15*10,
                pertukaranPelajar: (inc*0.5+sc*4)/4.5*10,
                magang: (sf*2+ma*2+bd+dp*1.5+fa*0.5)/7*10,
                asistensiMengajar: (sf*3.5+he*4+ss*0.5+ps+bse*0.5)/9.5*10,
                penelitian: (dp*4+ss+sc*4+qc*0.5)/9.5*10,
                kemanusiaan: (no*0.5+he*4+ss*3+mw+ps*3+bse*2)/13.5*10,
                wirausaha: (sf*0.5+ma*4+bd*4+inc*4+bs+fa+ps*0.5+bse*2)/17*10,
                stupen: (ma*3+dp*1.5+me*2+ar*0.5+ss+bs+fa*0.5+sc*1.5+mw*0.5+cr+bse*0.5)/15*10
            });
            console.log("Berhasil mengisi data pertanyaan");
            navigate("/interests");
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

  return (
    <div>
        <div className='columns pl-2 mb-1'>
            <div className="column">
                <h1 className='title'>Pertanyaan Pemetaan Minat dan Bakat MBKM</h1>
                <h2 className='subtitle'>Silahkan isi sesuai kondisi diri!</h2>
            </div>
            <div className="column is-one-quarter has-text-right is-size-3">
                <h2 className="title mr-6 mt-4" >{FormTitles[page]}/18</h2>
            </div> 
        </div>
        <div className="card is-shadowless">      
            <div className="card-content">
            <p className='has-text-centered'>{msg}</p>

                {PageDisplay()}
            </div>
            <div className="footer">
                <button
                    className="button is-primary is-rounded"
                    disabled={page === 0}
                    onClick={() => {
                    setPage((currPage) => currPage - 1);
                    }}
                >
                    Prev
                </button>

                <button
                    className="ml-1 button is-primary is-rounded"
                    onClick={() => {
                        if (page === FormTitles.length - 1) {
                            alert("FORM SUBMITTED");
                            console.log(formData);
                            saveQ()
                        } else {
                            setPage((currPage) => currPage + 1);
                        }
                    }}
                >
                {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
            </div>
        </div>
    </div>
  );
}

export default FormQ;