import { useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import ApplyLoan from "../../Personalloans/ApplyLoan";
const HDFCPersonalLoanData = () => {
  return (
    <>
      <ApplyLoan />
      <section className="sidecontent">
        <h3>HDFC Personal Loan Highlights</h3>
        <p style={{ marginTop: '60px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industr. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <Table striped className="mt-5">
          <tbody>
            <tr>
              <td>Interest Rate</td>
              <td>10.50% p.a. onwards</td>
            </tr>
            <tr>
              <td>Loan Amount</td>
              <td>Up to Rs 40 Lakh</td>
            </tr>
            <tr>
              <td>Tenure</td>
              <td>Up to 6 Years</td>
            </tr>
            <tr>
              <td>Minimum Monthly Salary</td>
              <td>Rs 25,000</td>
            </tr>
            <tr>
              <td>Processing Fees</td>
              <td>Up to Rs 4,999</td>
            </tr>
            <tr>
              <td>Pre - Approved instant Personal Loan</td>
              <td>Offered to select customers of HDFC Bank with loan <br />disbursal in 10 seconds</td>
            </tr>
            <tr>
              <td>Pre - Closure Charges</td>
              <td>
                <h6 className="salaried">For Salaried</h6>
                4% of principal outstanding ( 13-24 months )<br />
                3% of principal outstanding ( 25-36 months )<br />
                2% of principal outstanding ( After 36 months )
              </td>
            </tr>
            <tr>
              <td>Part - Payment Fees</td>
              <td>
                <h6 className="salaried">For Salaried</h6>
                4% of principal outstanding ( 13-24 months )<br />
                3% of principal outstanding ( 25-36 months )<br />
                2% of principal outstanding ( After 36 months )
              </td>
            </tr>
            <tr>
              <td>Pre - Closure Charges</td>
              <td>Proof of Identity<br />
                Proof of Address<br />
                Bank Statements ( Last 3 months )<br />
                Salary Slips ( Latest )</td>
            </tr>
          </tbody>
        </Table>
      </section>
    </>
  )
}

export default HDFCPersonalLoanData
