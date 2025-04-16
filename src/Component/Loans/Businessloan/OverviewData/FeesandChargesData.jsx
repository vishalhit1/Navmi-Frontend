import { Table } from "react-bootstrap"
import ApplyLoan from "../ApplyLoan"
const FeesandChargesData = () => {
    return (
        <>
            <ApplyLoan/>
            <section className="sidecontent">
                <h3>Fees and Charges</h3>
                <p style={{ marginTop: '60px' }}>Navmi Finserrv, we aim to provide transparent and easy-to-understand information regarding the fees associated with our Business Loans. Below is a breakdown of the key charges you may incur:</p>
                <Table striped className="mt-4">
                    <thead>
                        <tr>
                            <th>Particulars</th>
                            <th>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Loan Processing Fees</td>
                            <td>1.5% to 2% of Loan Amount</td>
                        </tr>
                        <tr>
                            <td>Loan Cancellation</td>
                            <td>Usually, 0 to 5% of the Loan Amount</td>
                        </tr>
                        <tr>
                            <td>Stamp Duty Charges</td>
                            <td>60/- to 600/-</td>
                        </tr>
                        <tr>
                            <td>Legel Fee</td>
                            <td>Nil</td>
                        </tr>
                        <tr>
                            <td>Penal Charges</td>
                            <td>Nil</td>
                        </tr>
                        <tr>
                            <td>EMI / Cheque Bounce Charges</td>
                            <td>Approx 499/- to 599/-</td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </>
    )
}

export default FeesandChargesData
