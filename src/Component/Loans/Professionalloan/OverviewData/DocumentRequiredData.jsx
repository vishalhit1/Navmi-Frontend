import ApplyLoan from "../../Personalloans/ApplyLoan"

const DocumentRequiredData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Document List for Professional Loan – Navmi Finserrv</h3>
                <p style={{ marginTop: '40px' }}>To apply for a CGTMSE-backed loan and access collateral-free funding, please provide the following documents:</p>
                <div className="documents">
                    <h1>KYC Documents</h1>
                    <ul className="mb-5">
                        <li>Aadhaar Card / Passport / Voter ID / Driving License (Any one for ID & Address Proof)</li >
                        <li>PAN Card</li >
                    </ul>
                    <h1>Income Documents</h1>
                    <ul>
                        <li> Latest 2-3 years ITR with Computation, Balance Sheet & Profit & Loss Statement (CA certified)</li>
                        <li> Last 6-12 months Bank Statements (Personal & Business)</li>
                    </ul>
                    <h1>Business/Professional Proof</h1>
                    <ul>
                        <li>Registration Certificate of Practice (For Doctors, CA, CS, etc.)</li>
                        <li>Business Registration / GST Certificate (if applicable)</li>
                        <li>Business Establishment Proof (Rent Agreement, Utility Bill, etc.)</li>
                    </ul>
                    <h1>Additional Documents (If required)</h1>
                    <ul>
                        <li>Loan Repayment Track Record (if any existing loan)</li>
                        <li>Latest Salary Slips (for salaried professionals, if applicable)</li>
                        <li>Any other documents as requested by the lender</li>
                    </ul>
                </div >
            </section >
        </>
    )
}

export default DocumentRequiredData
