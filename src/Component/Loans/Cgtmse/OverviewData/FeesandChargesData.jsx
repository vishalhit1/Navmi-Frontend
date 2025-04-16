import { Table } from "react-bootstrap"
import ApplyLoan from "../../Personalloans/ApplyLoan"
const FeesandChargesData = () => {
    return (
        <>
            <ApplyLoan/>
            <section className="sidecontent">
                <h3>Fees and Charges</h3>
                <p style={{ marginTop: '60px' }}>Navmi Finserrv, we aim to provide transparent and easy-to-understand information regarding the fees associated with our Personal loans. Below is a breakdown of the key charges you may incur:</p>
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
                            <td>4999/- to 2%</td>
                        </tr>
                        <tr>
                            <td>Cheque Bounce</td>
                            <td>Approx - 499-600</td>
                        </tr>
                        <tr>
                            <td>Stamp Duty</td>
                            <td>0.30% of the loan amount</td>
                        </tr>
                        <tr>
                            <td>Legel Fee</td>
                            <td>As per Bank</td>
                        </tr>
                        <tr>
                            <td>Loan Foreclosure</td>
                            <td>0% to 5%</td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </>
    )
}

export default FeesandChargesData
