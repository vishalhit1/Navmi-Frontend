import ApplyLoan from "../ApplyLoan"

const EligibilityData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Eligibility</h3>
                <h3 class="itro-sxssa mt-5 mb-3">Credit Score:</h3>
                <p>A good credit score is often required to qualify for a Home loan. Lenders use your credit history to assess your ability to repay the loan.</p>
                <h3 class="itro-sxssa mt-3 mb-3">Age Criteria: </h3>
                <p>Min. 21 years at the time of loan application & Max. 65 years at the time of loan maturity.</p>
                <h3 class="itro-sxssa mt-3 mb-3">Credit Score: </h3>
                <p>700 or above (Preferred by most private and public sector banks).</p>
                <h3 class="itro-sxssa mt-3 mb-3">Nationality:</h3>
                <p>Indian citizens.</p>
                <h3 class="itro-sxssa mt-3 mb-3">Additional Criteria:</h3>
                <p>Applicants must own either a residence, office, shop, or Godown.</p>
                <h3 class="itro-sxssa mt-3 mb-3">Eligible Entities:</h3>
                <p>Individuals, Salaried, MSMEs, Sole Proprietorships, Partnership Firms, Public and Private Limited Companies, Limited Liability Partnerships, retailers, traders, manufacturers, and other non-farm income-generating business entities engaged only in the services, trading,  manufacturing sectors.</p>
            </section>
        </>
    )
}

export default EligibilityData
