import ApplyLoan from "../ApplyLoan"

const DocumentRequiredData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Document List for Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)</h3>
                <p style={{ marginTop: '40px' }}>To apply for a CGTMSE-backed loan and access collateral-free funding, please provide the following documents:</p>
                <div className="documents">
                    <h1>KYC Documents</h1>
                    <ul className="mb-5">
                        <li>Aadhaar Card / Passport / Voter ID / Driving License (Any one for ID & Address Proof)</li >
                        <li>PAN Card</li >
                    </ul>
                    <h1>Business Documents</h1>
                    <ul>
                        <li>Business Registration / GST Certificate)</li>
                        <li> Memorandum of Association (MOA) / Articles of Association (AOA) (For Companies)</li>
                        <li>Partnership Deed (For Partnerships)</li>
                        <li>Shop Act License / Trade License (if applicable)</li>
                        <li> Proof of Business Address (Utility Bills, Rent Agreement, etc.)</li>
                    </ul>
                    <h1>Financial Documents</h1>
                    <ul>
                        <li>Last 2-3 Years ITR with Computation, Balance Sheet & Profit & Loss Statement (For Self-Employed or Sole Proprietors)</li>
                        <li>Last 6-12 Months Bank Statements (Personal & Business)</li>
                        <li>Latest Salary Slips (for salaried professionals, if applicable)</li>
                    </ul>
                    <h1>Loan Documents</h1>
                    <ul>
                        <li>Loan Application Form (Duly filled & signed)</li>
                        <li>Business Plan / Project Report (if applicable)</li>
                        <li>Existing Loan Details (if any) – Sanction Letters, Repayment Track Record</li>
                    </ul>
                    <h1>Additional Documents (If required)</h1>
                    <ul>
                        <li>Collateral Documents (For other types of loans if CGTMSE is not applicable)</li>
                        <li>Any other documents as requested by the lender</li>
                    </ul>
                    <p className="mt-4"> Take advantage of CGTMSE with Navmi Finserrv and empower your business to grow without the stress of collateral! This is a great opportunity to boost your business without any risk of asset forfeiture.</p>
                </div >
            </section >
        </>
    )
}

export default DocumentRequiredData
