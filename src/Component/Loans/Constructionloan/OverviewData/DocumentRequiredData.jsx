import ApplyLoan from "../../Personalloans/ApplyLoan"

const DocumentRequiredData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Document List for Construction Loan – Navmi Finserrv</h3>
                <div className="documents mt-5">
                    <h1>KYC Documents</h1>
                    <ul className="mb-5">
                        <li>Aadhaar Card / Passport / Voter ID / Driving License (Anyone for ID & Address Proof)</li>
                        <li>PAN Card</li>
                    </ul>
                    <h1>Income Documents</h1>
                    <ul>
                        <li>Latest 2-3 Years ITR with Computation, Balance Sheet & Profit & Loss Statement (For Self-Employed)</li>
                        <li>Last 6-12 Months Bank Statements (Personal & Business)</li>
                        <li>Latest Salary Slips (Last 3 months) – for Salaried Individuals</li>
                        <li>Form 16 (for Salaried Individuals)</li>
                    </ul>
                    <h1>Property Documents</h1>
                    <ul>
                        <li>Sale Deed / Title Deed of the Land</li>
                        <li>Approved Building Plan from Local Authority</li>
                        <li>Estimate of Construction Cost from Architect/Engineer</li>
                        <li>Encumbrance Certificate (EC)</li>
                    </ul>
                    <h1>Additional Documents (If Required)</h1>
                    <ul>
                        <li>Existing Loan Sanction Letters & Repayment Track (if any)</li>
                        <li>No Objection Certificate (NOC) from Society/Authority</li>
                        <li>Any other documents as requested by the lender</li>
                    </ul>
                </div >
            </section >
        </>
    )
}

export default DocumentRequiredData
