import Offerbanner from '../../../../assets/Homepage/Offer banner.png'
import ApplyLoan from '../../Personalloans/ApplyLoan'
const IntroDuctionData = () => {
    return (
        <>
            <ApplyLoan/>
            <section className="sidecontent">
                <h3>Personal Loan – Instant Financial Support with Navmi Finserrv</h3>
                <p style={{ marginTop: '45px' }}>At Navmi Finserrv Pvt. Ltd., financial needs can arise anytime—whether for a medical emergency, wedding, home renovation, education, or travel. Our Personal Loan solutions are designed to provide quick, hassle-free, and flexible funding to help you meet your financial goals.</p>
                <p>As a trusted channel partner with <b>40+</b> leading banks and NBFCs, we ensure you get the best Personal Loan offers with competitive interest rates, minimal documentation, and easy repayment options. With our expertise and strong banking network, we make the loan process simple and efficient.</p>
            </section>
            <h3 className='itro-sxssa'>Why Choose Navmi Finserrv for Your Personal Loan?</h3>
            <ul className='itro-sxssaaasx'>
                <li>Loan Amounts – Up to ₹75 lakh</li>
                <li>Flexible Tenure – Up to 8 years</li>
                <li>Competitive Interest Rates – Tailored to your profile</li>
                <li>Quick Approvals & Fast Disbursal – Minimal paperwork, maximum convenience</li>
                <li>No Collateral Required – 100% unsecured loan</li>
                <li>Expert Guidance – 15+ years of industry experience</li>
                <li>Competitive interest rates</li>
                <li>The hassle-free process with expert guidance</li>
            </ul>
            <p className='itro-sxssaaasxaa'>Under <b>Mr. Ashish Joshi's</b> leadership, backed by extensive experience in financial services, we ensure transparent, reliable, and customer-friendly loan solutions.</p>
            <p className='itro-sxssaaasxaa'>Navmi Finserrv helps you achieve your financial goals effortlessly. Apply today and get the funds you need—when you need them!</p>
            <section className="offersection mt-4">
                <img className='w-100' src={Offerbanner} alt="" />
            </section>
        </>
    )
}

export default IntroDuctionData
