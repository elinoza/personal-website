import React,{useContext} from "react";
import "./Main/Main.scss"
import { IoMoonOutline } from "react-icons/io5";
import {Form} from "react-bootstrap"
import { ThemeContext, Themes} from "../contexts/theme";

export default function ThemeToggler(){
    const [theme,setTheme] =useContext(ThemeContext)
    console.log(theme)
    return(
<Form>
      <Form.Check 
        type="switch"
        id="theme-toggler-switch"
        label={<IoMoonOutline />}
        checked={theme=== Themes.dark}
        onChange={()=>{setTheme(theme=== Themes.dark ?Themes.light :Themes.dark)}}
      />
       </Form>
    )
}