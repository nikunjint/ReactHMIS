import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { pathologyHdata } from '../../utiles/sider'

const PathoLogyHeader=({handleheader})=>{
    const [id,setId]=React.useState("/patientlist")
    const handelClick=(iD,name)=>{
        setId(iD)
        handleheader(name)
    }
    return(
        <div className='md:flex justify-between items-center gap-3 w-full bg-primary font-Poppins text-[white] px-3 rounded-md py-1'>
        {
            pathologyHdata?.map((item)=>{
                return(
                    <div key={item.to} onClick={()=>handelClick(item.to,item.name)}>
                    <div className={id===item.to ? 'bg-[white] py-1 rounded-full text-main px-4 text-sm':''}>
                     <Link className='text-sm' to={`/pathology${item.to}`} >
                    {item.name} 
 
                     </Link>
 
                     </div>
                 </div>
                )
             
           })
        }
        </div>
    )
}
export default memo(PathoLogyHeader)
