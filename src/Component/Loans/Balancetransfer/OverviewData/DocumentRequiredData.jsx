import ApplyLoan from "../../Personalloans/ApplyLoan"

const DocumentRequiredData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Document List for Balance Transfer – Navmi Finserrv</h3>
                <p style={{ marginTop: '60px' }}>Switch to a lower interest rate and save more with our hassle-free <b>Balance Transfer</b> process!</p>
                <div className="documents">
                    <h1>Id Proof </h1>
                    <ul className="mb-5">
                        <li> Aadhaar Card / Passport / Voter ID / Driving License (Anyone for ID & Address Proof)</li >
                        <li> PAN Card</li>
                    </ul>
                    <h1>Income Documents</h1>
                    <ul>
                        <li>Latest 2-3 Years ITR with Computation, Balance Sheet & Profit & Loss Statement (For Self-Employed)</li>
                        <li>Last 6-12 Months’ Bank Statements (Personal & Business)</li>
                        <li>Latest Salary Slips (Last 3 months) – for Salaried Individuals</li>
                        <li>Form 16 (for Salaried Individuals)</li>
                    </ul>
                    <h1>Property/Asset Documents (For Secured Loans)</h1>
                    <ul>
                        <li>Sale Deed / Title Deed of Property</li>
                        <li>Latest Property Valuation Report (if required)</li>
                        <li>Encumbrance Certificate (EC)</li>
                    </ul>
                    <h1>Additional Documents (If Required)</h1>
                    <ul>
                        <li> NOC from Current Lender</li>
                        <li> Any other documents as requested by the new lender</li>
                    </ul>
                </div >
            </section >
        </>
    )
}

export default DocumentRequiredData
