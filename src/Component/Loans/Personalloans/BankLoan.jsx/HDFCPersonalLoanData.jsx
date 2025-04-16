import { Table } from "react-bootstrap";
import ApplyLoan from "../ApplyLoan";
const HDFCPersonalLoanData = () => {
  return (
    <>
      <ApplyLoan />
      <section className="sidecontent">
        <h3>Banks and NBFCs ROI</h3>
        <p style={{ marginTop: '60px' }}>Navmi Finserrv, we work with a wide network of reputed banks and Non-Banking Financial Companies (NBFCs) to provide you with the best personal loan options. Whether you are looking for quick approval, low interest rates, or flexible repayment terms, we collaborate with leading financial institutions to meet your specific needs</p>
        <Table striped className="mt-5 roi-banks">
          <thead>
            <th>Banks</th>
            <th>ROI</th>
          </thead>
          <tbody>
            <tr>
              <td>HDFC Bank Personal Loan</td>
              <td>10.70% p.a. onwards</td>
            </tr>
            <tr>
              <td>ICICI Personal Loan</td>
              <td>10.80% p.a. onwards</td>
            </tr>
            <tr>
              <td>Kotak Mahindra Personal Loan</td>
              <td>10.49% p.a. onwards</td>
            </tr>
            <tr>
              <td>TATA Capital Personal Loan</td>
              <td>10.99% p.a. onwards</td>
            </tr>
            <tr>
              <td>IDFC First Bank Personal Loan</td>
              <td>10.99% p.a. onwards</td>
            </tr>
            <tr>
              <td>Aditya Birla Capital Personal Loan</td>
              <td>10.99% p.a. onwards</td>
            </tr>
            <tr>
              <td>IndusInd Bank Personal Loan</td>
              <td>11.99% p.a. onwards</td>
            </tr>
            <tr>
              <td>(Fullerton India) SMFG India Credit Personal Loan</td>
              <td>11.99% p.a. onwards</td>
            </tr>
            <tr>
              <td>Axis Bank Personal Loan</td>
              <td>15.00% p.a. onwards</td>
            </tr>
            <tr>
              <td>HDFC Bank Personal Loan</td>
              <td>10.70% p.a. onwards</td>
            </tr>
          </tbody>
        </Table>
      </section>
    </>
  )
}

export default HDFCPersonalLoanData
