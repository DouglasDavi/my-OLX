import React from 'react'
import {Link} from 'react-router-dom'

const Page = ()=>{
    return(
        <div> 
            Sobre
            <br></br>
            <div>
                <Link to='/'>Voltar página inicial</Link>
            </div>
        </div>
    )
}

export default Page