import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { HiViewGrid } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { rightsiderData } from '../utiles/rightsider';
import MenuSearch from './MenuSearch';



const RightSider=()=> {

  const [filterData, setFilterData] = React.useState([]);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const drawerTitleStyle = {
    color: 'white',
    padding: 15,
  };
  
  const OnFilterData = React.useCallback((filter) => {
    setFilterData(filter);
  }, []);
  
  React.useEffect(()=>{
    setFilterData(rightsiderData)
  },[])

  console.log(filterData, 'filterDataitems');

  return (

    <div>
     
      <Button type="primary" onClick={showDrawer} className="bg-main h-11 rounded-none w-36 flex items-center justify-between px-2">
        <div className='text-xs uppercase flex flex-col items-start mr-3'>
          <span className="text-xxs">CURRENTLY AT</span>
          <span className='font-semibold'>Module</span>
        </div>

        <HiViewGrid size={20} />

      </Button>
   
      <Drawer title={<div style={drawerTitleStyle}>Modules</div>} closable={false} placement="right" onClose={onClose} open={open} headerStyle={{ backgroundColor: "#071936", padding: 0 }} bodyStyle={{ backgroundColor: "#071936", padding: 0 }}
        className="bg-main">

        <MenuSearch data={rightsiderData} onFilterData={ (OnFilterData)} />
        
        {filterData?.map((item,index) => (
    
              <div key={item.to}> 
                <div className=' pb-5 text-white text-main px-4 text-sm'>
                  <Link className='text-sm' to={item.to} >
                    {item.name}
                  </Link>

                </div>
              </div>
            ))

          
        }
      </Drawer>
    </div>
  )
}

export default RightSider 