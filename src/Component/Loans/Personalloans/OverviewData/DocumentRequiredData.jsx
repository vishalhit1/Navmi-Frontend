import ApplyLoan from "../ApplyLoan"

const DocumentRequiredData = () => {
    return (
        <>
            <ApplyLoan/>
            <section className="sidecontent">
                <h3>Document Required</h3>
                <div className="documents mt-5">
                    <h1>Id Proof </h1>
                    <ul className="mb-5">
                        <li>Pan Card</li>
                        <li>Driving License</li>
                        <li>Passport</li>
                        <li>Aadhaar Card</li >
                    </ul>
                    <h1>Address Proof</h1>
                    <ul>
                        <li>Electricity bill</li>
                        <li>Registered rent agreement</li>
                        <li>Mobile Bill</li>
                        <li>Gas Bill</li>
                    </ul>
                    <h1>Income Document </h1>
                    <ul>
                        <li>Salary Slips (Mini. 3 Months)</li>
                    </ul>
                    <h1>Banking</h1>
                    <ul>
                        <li>Latest 6 Months Salary account bank statement to Date</li>
                    </ul>
                    <h1>Loan Document </h1>
                    <ul>
                        <li>Personal Loan Repayment Schedule</li>
                        <li>Home Loan Sanction Letter</li>
                        <li>Car Loan Repayment Schedule</li>
                    </ul>
                    <h1>Other Documents </h1>
                    <ul>
                        <li>Form 16</li>
                        <li>Form 26AS</li>
                        <li>Latest increment letter with current CTC</li>
                        <li>Bonus Slips</li>
                    </ul>
                </div >
            </section >
        </>
    )
}

export default DocumentRequiredData
