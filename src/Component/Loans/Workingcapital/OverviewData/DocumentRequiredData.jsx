import ApplyLoan from "../Applyloan"


const DocumentRequiredData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Document List for Working Capital Loan – Navmi Finserrv</h3>
                <p style={{ marginTop: '40px' }}>To apply for a CGTMSE-backed loan and access collateral-free funding, please provide the following documents:</p>
                <div className="documents">
                    <h1>KYC Documents</h1>
                    <ul className="mb-5">
                        <li>Aadhaar Card / Passport / Voter ID / Driving License (Any one for ID & Address Proof)</li >
                        <li>PAN Card</li >
                    </ul>
                    <h1>Business Documents</h1>
                    <ul>
                        <li>Business Registration Certificate (Partnership Deed / Company Incorporation, etc.)</li>
                        <li>GST Registration / GST Returns (Last 6 months)</li>
                        <li> Last 2-3 Years ITR (Income Tax Returns)</li>
                        <li>Last 6-12 Months Bank Statements (Business Account)</li>
                    </ul>
                    <h1>Financial Documents</h1>
                    <ul>
                        <li>Latest 2-3 Years Profit & Loss Statement</li>
                        <li>Latest 2-3 Years Balance Sheet</li>
                        <li>Business Continuity Proof (if applicable)</li>
                    </ul>
                    <h1>Additional Documents (If required)</h1>
                    <ul>
                        <li>Brief Business Plan (for new businesses)</li>
                        <li>Proof of Outstanding Debts / Liabilities (if applicable)</li>
                        <li>Any other documents as requested by the lender</li>
                    </ul>
                    <p className="mt-4"> Secure your working capital needs with Navmi Finserrv – the trusted loan partner for your Business Growth! Let us help you grow your Business without financial stress!</p>
                </div >
            </section >
        </>
    )
}

export default DocumentRequiredData
