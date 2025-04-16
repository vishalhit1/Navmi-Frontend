import { Row, Col } from "react-bootstrap"
import mens from '../../../../assets/men.png'
import Pseudo from '../../../../assets/Homepage/pseudo.svg'
import ApplyLoan from "../ApplyLoan"
const ReviewsData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Reviews</h3>
                <p style={{ marginTop: '60px' }}></p>
                <Row>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens} alt="" />
                            <h1 className="mt-3 mb-3">Vishal Dodia</h1>
                        </div>
                        <div className="testi" style={{ margin: '0px', marginBottom: '50px', position: 'relative' }}>
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>
                                "Excellent Home Loan Service by Navmi Finserrv!
                                I recently availed a home loan through Navmi Finserrv Pvt. Ltd., and I must say, the experience was seamless! From the very beginning, their team provided expert guidance, helping me choose the best loan option from their vast network of 40+ banks and NBFCs.
                            </p>
                            <img className="pseudoo" src={Pseudo} alt="" />
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default ReviewsData
