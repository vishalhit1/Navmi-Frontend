import ApplyLoan from "../ApplyLoan"

const DocumentSalaried = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Salaried Document Required</h3>
                <div className="documents">
                    <h1>Please find the list of documents as below for Loan Against Property Salaried </h1>
                    <h6 className="docu-loan">KYC OF APPLICANT AND CO-APPLICANT</h6>
                    <ul className="mb-4">
                        <li>Aadhar card</li>
                        <li>Pan card</li>
                        <li>Photo</li>
                        <li>Light bill</li>
                    </ul>
                    <h6 className="docu-loan">INCOME PROOF</h6>
                    <ul className="mb-4">
                        <li>6 months’ salary slip</li>
                        <li>2 years from 16</li>
                    </ul>
                    <h6 className="docu-loan">BANKING (latest one year)</h6>
                    <ul className="mb-4">
                        <li>Salary account</li>
                        <li>Saving account</li>
                    </ul>
                    <h6 className="docu-loan">PROPERTY PAPERS</h6>
                    <ul className="mb-4">
                        <li>Draft agreement/sale agreement/chain agreement</li>
                        <li>Society registration certificate (If society firm)</li>
                        <li>Share certificate</li>
                        <li>Oc</li>
                        <li>CC / approved plan</li>
                        <li>Maintenance bill</li>
                        <li>Property tax</li>
                    </ul>
                    <h6 className="docu-loan">OTHER DOCUMENTS</h6>
                    <ul className="mb-4">
                        <li>Sanction letter if any running loan </li>
                    </ul>
                </div >
            </section >
        </>
    )
}

export default DocumentSalaried
