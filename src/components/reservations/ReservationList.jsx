import React from 'react';
import PageHeader from '../common/pageHeader/PageHeader';
import { ClientSideRowModelModule, CsvExportModule, QuickFilterModule, ExternalFilterModule } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { ExcelExportModule, MasterDetailModule } from 'ag-grid-enterprise';


const ReservationList = () => {

    const rowData = [
        { 
          lapsedMins: "2323",
          resId: "12234",
          earliestArrivalTime: "12/17/18 mon",
          callerFirstName: "STORM" , 
          firstName: "CHRIS",
          customerName: "DEMO",
          workLocation: "ATLANTA"
         },
         { 
            lapsedMins: "2321",
            resId: "12234",
            earliestArrivalTime: "12/17/18 mon",
            callerFirstName: "STORM" , 
            firstName: "CHRIS",
            customerName: "DEMO",
            workLocation: "ATLANTA"
        },
        { 
            lapsedMins: "233",
            resId: "12234",
            earliestArrivalTime: "12/17/18 mon",
            callerFirstName: "STORM" , 
            firstName: "CHRIS",
            customerName: "DEMO",
            workLocation: "ATLANTA"
           },
           { 
            lapsedMins: "2322",
            resId: "12234",
            earliestArrivalTime: "12/17/18 mon",
            callerFirstName: "STORM" , 
            firstName: "CHRIS",
            customerName: "DEMO",
            workLocation: "ATLANTA"
           },
      ]

    let gridCols = [
        { field: "lapsedMins", headerName : "Lapsed Minutes" },
        { field: "resId", headerName : 'Res ID' },
        { field: "earliestArrivalTime" , headerName : 'Earliest Arrival Time' },
        { field: "callerFirstName" , headerName : 'Caller First Name'  },
        { field: "firstName" , headerName : 'First Name' },
        { field: "customerName"  , headerName : 'Customer Name'  },
        { field: "workLocation"  , headerName : 'Work Location'  },
    ]
    
    const defaultColDef = {
        flex: 1,
      };

    return (
        <>
            <div className="clearfix">
                <div className="container-fluid form-container">
                    <div className="form-section">
                        <PageHeader name="Reservation" />


                        <div className="card form-body" style={{ minHeight: '20vh' }}>
                            <div className="form-section">
                                <h3>Reservation LIST</h3>
                                <div className='ag-theme-alpine' style={{ width: "100%", height: "500px" }}>
                                    <AgGridReact
                                        rowData={rowData}
                                        columnDefs={gridCols}
                                        defaultColDef={defaultColDef}
                                        modules={[
                                            ClientSideRowModelModule,
                                            CsvExportModule,
                                            ExcelExportModule,
                                            MasterDetailModule,
                                            QuickFilterModule,
                                            ExternalFilterModule,
                                            
                                        ]}
                                    />
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default ReservationList;