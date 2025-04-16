import { Table } from "react-bootstrap"
import ApplyLoan from "../ApplyLoan"
const InterestRateData = () => {
    return (
        <>
            <ApplyLoan/>
            <section className="sidecontent">
                <h3>Interest Rate</h3>
                <p style={{ marginTop: '60px' }}><b>The Factors depend on rate of interest and eligibility are:</b></p>
                <ul className="listloan">
                    <li>Current rate of interest is @ 10.49%.</li>
                    <li>Company for which the prospective borrower is working.</li>
                    <li>Credit history of the borrower.</li>
                </ul>
            </section>
        </>
    )
}

export default InterestRateData
