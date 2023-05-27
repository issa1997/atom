import {EnableSidebar, PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget4,
  ListsWidget5,
  TablesWidget9,
  MixedWidget13,
  MixedWidget14,
  MixedWidget15,
  ChartsWidget3,
  ChartsWidget4,
} from '../../../_metronic/partials/widgets'

const DashboardPage = () => (
  <>
    <div className='row gy-5 g-xl-10'>
      {/*begin::Col*/}
      <div className='col-xl-4'>
        <MixedWidget13
          className='card-xl-stretch mb-xl-10'
          backGroundColor='#F7D9E3'
          chartHeight='100px'
        />
      </div>
      {/*end::Col*/}

      {/*begin::Col*/}
      <div className='col-xl-4'>
        <MixedWidget14
          className='card-xl-stretch mb-xl-10'
          backGroundColor='#CBF0F4'
          chartHeight='100px'
        />
      </div>
      {/*end::Col*/}

      {/*begin::Col*/}
      <div className='col-xl-4'>
        <MixedWidget15 className='card-xl-stretch mb-xl-10' backGroundColor='#CBD4F4' />
      </div>
      {/*end::Col*/}
    </div>
    {/*end::Row*/}

    {/* <TablesWidget9 className='mb-5 mb-xl-10' /> */}

    <div className='row gy-5 g-xl-10'>
      
      {/* <div className='col-xl-6'>
        <ChartsWidget3 className='card-xl-stretch mb-xl-10'/>
      </div>
      

  
      <div className='col-xl-6'>
      <ChartsWidget4 className='card-xl-stretch mb-xl-10'/>
      </div> */}
    

     
    </div>

    {/*begin::Row*/}
    <div className='row gy-5 g-xl-10'>
      {/*begin::Col*/}
      {<div className='col-xxl-12'>
        <ListsWidget5 className='card-xl-stretch mb-xl-10' />
      </div>}
      {/*end::Col*/}

      {/*begin::Col*/}
      {/* <div className='col-xxl-6'>
        <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-10' items={5} />
      </div> */}
      {/*end::Col*/}
    </div>
  </>
)

const DashboardWrapper = () => {
  return (
    <EnableSidebar>
      <PageTitle description='You’re having 5 bookings coming up' breadcrumbs={[]}>
        Hello, Paul
      </PageTitle>
      <DashboardPage />
    </EnableSidebar>
  )
}

export {DashboardWrapper}
