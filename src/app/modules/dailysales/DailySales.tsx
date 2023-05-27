import React from "react";

import { ChartsWidget3 } from "../../../_metronic/partials/widgets";
import { ChartsWidget4 } from "../../../_metronic/partials/widgets";

const DailySalesComponent: React.FC =() => {
    return <>

<div className='col-xl-12'>
        <ChartsWidget3 className='card-xl-stretch mb-xl-10'/>
      </div>
      

  
      <div className='col-xl-12'>
      <ChartsWidget4 className='card-xl-stretch mb-xl-10'/>
      </div>

    </>
}
export default DailySalesComponent