import { Table } from "react-bootstrap"
import ApplyLoan from "../ApplyLoan"
const FeesandChargesData = () => {
    return (
        <>
            <ApplyLoan/>
            <section className="sidecontent">
                <h3>Fees and Charges</h3>
                <p style={{ marginTop: '60px' }}>Navmi Finserrv, we aim to provide transparent and easy-to-understand information regarding the fees associated with our Home loan. Below is a breakdown of the key charges you may incur:</p>
                <Table striped className="mt-4">
                    <thead>
                        <tr>
                            <th>Particulars</th>
                            <th>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Processing fee</td>
                            <td>₹1000/- to 1.50%</td>
                        </tr>
                        <tr>
                            <td>Legal Fee</td>
                            <td>As per Bank</td>
                        </tr>
                        <tr>
                            <td>Stamp Duty</td>
                            <td>0.30% of the loan amount</td>
                        </tr>
                        <tr>
                            <td>Notice of Intimation</td>
                            <td>₹16,500 /-</td>
                        </tr>
                        <tr>
                            <td>Stamp paper </td>
                            <td>₹3,500 /-</td>
                        </tr>
                        <tr>
                            <td>Loan Foreclosure</td>
                            <td>0% to 5%</td>
                        </tr>
                        <tr>
                            <td>Cheque Bounce</td>
                            <td>Approx - 499-600</td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </>
    )
}

export default FeesandChargesData
