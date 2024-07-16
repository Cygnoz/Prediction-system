import React from 'react'
import { NavLink } from 'react-router-dom'
 import AccessTimeIcon from '@mui/icons-material/AccessTime';
 import QueryStatsIcon from '@mui/icons-material/QueryStats';
function Sidebar({children}) {
    const MenuItem=[
        {
            path:"/home",
            name:"Daily Draw",
            icon: <AccessTimeIcon/>,
        }, 
        {
            path:"/analysis",
            name:"Analysis",
            icon: <QueryStatsIcon/>,
        }
    ]
  return (
    <div className='main'>
        
        <div className="sidebar">
            <div className="topheading">
                <h2 style={{backgroundColor:'rgb(41,40,91)', color:"white"}}>Prediction</h2>
            </div>
            {
                MenuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div  className="icon">{item.icon}</div>
                        <div className="linktext">{item.name}</div>
                    </NavLink>
                    
                ))
            }
        </div>
        <main>{children}</main>
        
    </div>
  )
}

export default Sidebar