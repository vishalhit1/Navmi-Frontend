import { Row, Col } from "react-bootstrap"
import Dollar from "../../../../assets/Homepage/dollar.svg"
import ApplyLoan from "../../Personalloans/ApplyLoan"
const Whynavami = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Why Navmi Finserrv Pvt. Ltd.?</h3>
                <ul className='itro-sxssaaasx mt-5'>
                    <li><b>Tie-ups with 40+ Banks & NBFCs –</b> Get the best rates and offers.</li>
                    <li><b>Expert Guidance –</b> 15+ years of experience in financial solutions.</li>
                    <li><b>Hassle-Free Process –</b> End-to-end assistance for a smooth transfer.</li>
                    <li><b>Quick Approvals –</b>Fast processing to ensure you save at the earliest.</li>
                </ul>
                <h5 className="h4-new">Don’t let high EMIs drain your savings! Switch to a better deal with Navmi Finserrv Pvt. Ltd.</h5>
            </section>
        </>
    )
}

export default Whynavami
