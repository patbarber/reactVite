import React, { useState } from "react"
import Form1 from "./form1";
import './styles/nav.scss'


const Nav = () => {
    const [form, setForm] = useState("")

    return (
        <div className="header">
        <p className="heading">Switcher</p>
        <div className="nav">
          <div onClick={() => setForm("form1")} className="item">
            Nav 1
          </div>
          <div onClick={() => setForm("form2")} className="item">
            Nav 2
          </div>
        </div>
        <div className="content">
          <div className="formSection">
            {/* {form == "form1" && form1}
            {form == "form2" && form2} */}
            <Form1></Form1>
          </div>
        </div>
      </div>
    );
}

export default Nav;