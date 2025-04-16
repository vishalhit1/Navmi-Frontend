import ApplyLoan from "../ApplyLoan"

const DocumentRequiredData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Document Required</h3>
                <div className="documents">
                    <h1>Salaried</h1>
                    <ul className="mb-4">
                        <li>Pan Card copy</li>
                        <li>PAdhar card copy</li>
                        <li>PResidence Light Bill Latest</li>
                        <li>PLatest 12 months Bank E-statement   of salary a/c from 01/11/2022 to 31/10/2023</li>
                        <li>PLatest 2 yrs Form16</li>
                        <li>PLatest 3 months’ salary slip</li>
                        <li>PNew Car Proforma</li>
                    </ul>
                    <h6 className="docu-loan">If the customer stays at Rent, then - Rent Agreement + Light bill and Permanent Address Light bill</h6>
                    <h1>Self Employed</h1>
                    <ul className="mb-4">
                        <li>1 photo</li>
                        <li>Adhar card copy</li>
                        <li>Pan card copy</li>
                        <li>Residence electric bill latest</li>
                        <li>Latest 2yrs ITR with (Computation of income, P&L, Balance Sheet & Form 26AS)</li>
                        <li>1 year Bank E-statement (From 1st November 2022 till 31st October 2023</li>
                        <li> Business proof (GST Certificate or Gomasta)</li>
                        <li>Udyam certificate</li>
                        <li> New Car Proforma</li>
                    </ul>
                    <h6 className="docu-loan">If the customer stays at Rent, then - Rent Agreement + Light bill and Permanent Address Light bill</h6>                </div >
            </section >
        </>
    )
}

export default DocumentRequiredData
