import ApplyLoan from "../../Personalloans/ApplyLoan"

const EligibilityData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Loans Eligible for Balance Transfer</h3>
                 <ul className="listloan mt-5">
                    <li>Home Loan</li>
                    <li>Personal Loan</li>
                    <li>Loan Against Property (LAP)</li>
                </ul>
            </section>
        </>
    )
}

export default EligibilityData
