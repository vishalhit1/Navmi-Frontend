import Offerbanner from '../../../../assets/Homepage/Offer banner.png'
import ApplyLoan from "../ApplyLoan"
const Insurancetype = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Types of Health Insurance Plans Offered</h3>
            </section>
            <ul className='itro-sxssaaasx mb-4 mt-5'>
                <li><b>Individual Health Insurance:</b> Designed for individuals seeking personal coverage against medical expenses.</li>
                <li><b>Family Floater Plans:</b> Covers all family members under a single policy, sharing the sum insured among them.</li>
                <li><b>Critical Illness Insurance:</b> Provides a lump sum payment upon the diagnosis of specified life-threatening diseases.</li>
                <li><b>Top-Up Plans:</b> Offers extra coverage beyond existing health insurance policies for higher medical expenses.</li>
                <li><b>Senior Citizen Health Insurance:</b> Specifically tailored for older adults, addressing age-related health issues.</li>
                <h4 className='reach-outs'>Reach out to us today to discover more about our Health Insurance solutions.</h4>
            </ul >
        </>
    )
}

export default Insurancetype
