import ApplyLoan from "../ApplyLoan"

const DocumentRequiredData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Document List for Health Insurance</h3>
                <div className="documents">
                    <h1>KYC Documents</h1>
                    <ul className="mb-4">
                        <li>Pan Card copy</li>
                        <li>Aadhaar Card / Passport / Voter ID / Driving License (Anyone for ID & Address Proof)</li>
                    </ul>
                    <h1>Income Proof (If required based on plan and coverage amount)</h1>
                    <ul className="mb-4">
                        <li>Latest Salary Slips (Last 3 months) – for Salaried Individuals</li>
                        <li>Last 2-3 Years ITR with Computation – for Self-Employed</li>
                        <li>Last 6 Months Bank Statements</li>
                    </ul>
                    <h1>Medical & Health Documents (As per insurer’s requirements)</h1>
                    <ul className="mb-4">
                        <li> Medical Reports (as per insurer’s guidelines)</li>
                        <li>Existing Health Conditions Disclosure</li>
                        <li>Previous Health Insurance Policy Details (if any)</li>
                    </ul>
                    <h1>Additional Documents (If required)</h1>
                    <ul className="mb-4">
                        <li>Passport-Sized Photographs</li>
                        <li>Nominee Details & KYC Documents</li>
                        <li>Proposal Form (Duly Filled & Signed)</li>
                    </ul>
                </div >
            </section >
        </>
    )
}

export default DocumentRequiredData
