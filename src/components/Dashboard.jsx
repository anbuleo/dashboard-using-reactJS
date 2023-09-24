import React from 'react'
import  Table  from 'react-bootstrap/Table'

function Dashboard() {
    let data=[
        {
            name:'Customer',
            placeholder:'Enter Customer Name'
        },
        {
            name:'Invoice ID',
            placeholder:'Enter Invoice ID'
        },
        {
            name:'Start Date',
            placeholder:'Start Date'
        },
        {
            name:'End Date',
            placeholder:'End Date'
        }
    ]
    let tableData=[
        {
            InvoiceId:'#AHGA68',
            Date:'23/09/2022',
            Customer:'Jacob Marcus',
            PayableAmount:'$100',
            PaidAmount:'$000',
            Due:'$000'
        },
        {
            InvoiceId:'#AHGA68',
            Date:'23/09/2022',
            Customer:'Jacob Marcus',
            PayableAmount:'$100',
            PaidAmount:'$000',
            Due:'$000'
        },
        {
            InvoiceId:'#AHGA68',
            Date:'23/09/2022',
            Customer:'Jacob Marcus',
            PayableAmount:'$100',
            PaidAmount:'$000',
            Due:'$000'
        },
        {
            InvoiceId:'#AHGA68',
            Date:'23/09/2022',
            Customer:'Jacob Marcus',
            PayableAmount:'$100',
            PaidAmount:'$000',
            Due:'$000'
        },
        {
            InvoiceId:'#AHGA68',
            Date:'23/09/2022',
            Customer:'Jacob Marcus',
            PayableAmount:'$100',
            PaidAmount:'$000',
            Due:'$000'
        },
        {
            InvoiceId:'#AHGA68',
            Date:'23/09/2022',
            Customer:'Jacob Marcus',
            PayableAmount:'$100',
            PaidAmount:'$000',
            Due:'$000'
        },
        {
            InvoiceId:'#AHGA68',
            Date:'23/09/2022',
            Customer:'Jacob Marcus',
            PayableAmount:'$100',
            PaidAmount:'$000',
            Due:'$000'
        },
        {
            InvoiceId:'#AHGA68',
            Date:'23/09/2022',
            Customer:'Jacob Marcus',
            PayableAmount:'$100',
            PaidAmount:'$000',
            Due:'$000'
        },
        {
            InvoiceId:'#AHGA68',
            Date:'23/09/2022',
            Customer:'Jacob Marcus',
            PayableAmount:'$100',
            PaidAmount:'$000',
            Due:'$000'
        }
    ]
  return <>
  <div className="dashbord">
    <div className="first-row">
        <div className="search-bar w-50 p-1"><input className='form-control me-2 inputfirstline' type="text"  placeholder='Search'/></div>
        <div className="notification"><img src="src/imagesAndSvg/notification-bing.svg" alt="notification-svg" /><img className='ellipse' src="src/imagesAndSvg/Ellipse 1.svg" alt="yello-eplise" /></div>
    </div>
    <div className="form">
        <div>
            <span className='about'><strong>Sales Information</strong></span>
            <div className="add_details ">
            {
                data.map((e,i)=>{
                    return <>
                    <div >
                <h6 >{e.name }</h6>
                <input type=" form-control border-success addinputs" placeholder={e.placeholder} key={i}/>
            </div>
            </>
                })
            }
            </div>
        </div>
        <Table bordered hover>
            <thead>
                <tr>
                    <th><input type='checkbox'/>&nbsp;Invoice ID</th>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Payable Amount</th>
                    <th>Paid Amount</th>
                    <th>Due</th>
                </tr>
            </thead>
            <tbody>
               {
                tableData.map((e,i)=>{
                    return <>
                     <tr>
                    <td className='text-primary'><input type='checkbox'/>&nbsp;{e.InvoiceId}</td>
                    <td className='text-muted'>{e.Date}</td>
                    <td className='text-muted'>{e.Customer}</td>
                    <td className='text-muted'>{e.PayableAmount}</td>
                    <td className='text-muted'>{e.PaidAmount}</td>
                    <td className='text-muted'>{e.Due}</td>
                </tr>
                    </>
                })
               }
            </tbody>
        </Table>
    </div>
  </div>
  </>
}

export default Dashboard