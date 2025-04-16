import { Table } from "react-bootstrap"
import ApplyLoan from "../ApplyLoan"
const FeesandChargesData = () => {
    return (
        <>
            <ApplyLoan/>
            <section className="sidecontent">
                <h3>Fees and Charges</h3>
                <p style={{ marginTop: '60px' }}>Navmi Finserrv, we aim to provide transparent and easy-to-understand information regarding the fees associated with our Car Loan. Below is a breakdown of the key charges you may incur:</p>
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
                            <td>1.5% to 4% of loan amount</td>
                        </tr>
                        <tr>
                            <td>Loan Cancellation</td>
                            <td>Usually around Rs 5,000</td>
                        </tr>
                        <tr>
                            <td>Stamp Duty</td>
                            <td>As per actuals</td>
                        </tr>
                        <tr>
                            <td>Legal Fees </td>
                            <td>As per actuals</td>
                        </tr>
                        <tr>
                            <td>Penal Charges</td>
                            <td>Usually @ 2% per month; 24% p.a.</td>
                        </tr>
                        <tr>
                            <td>EMI / Cheque Bounce Charges</td>
                            <td>Around Rs 400 per bounce</td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </>
    )
}

export default FeesandChargesData
