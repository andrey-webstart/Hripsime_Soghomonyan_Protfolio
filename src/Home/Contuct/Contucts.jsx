import React from 'react';
import Styles from './Contucts.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Contucts() {
  return (
    <>
    <div className={Styles.contuct}>
      <p className={Styles.title}>Contucts</p>
        <i className="bi bi-telephone"></i><span>+37499501760 ( <i className='bi bi-whatsapp' />, <i class="bi bi-telegram" /> )</span><br />
        <i class="bi bi-envelope-at"><span>hripsime.soghomon@gmail.com</span></i><br />
        <i class="bi bi-facebook"><a href='https://www.facebook.com/hripsime.sogomonyan/' title='Hripsime Soghomonyan Facebook'>Facebook</a></i>
        <i class="bi bi-linkedin"><a href="https://www.linkedin.com/in/hripsime-soghomonyan-615962a9/" title='Hripsime Soghomonyan LinkedIn'>LinkedIn</a></i><br />
        <i class="bi bi-github"><a href="https://github.com/HripsimeSoghomonyanOfficial" title='Hripsime Soghomonyan GitHub'>GitHub</a></i>
        <i class="uil uil-500px"><a href="https://500px.com/p/HripsimeSogomonyan?view=photos">500px</a></i>
    </div>  
    </>
  )
}
