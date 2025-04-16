import { Container } from "react-bootstrap"
import Loanbank from '../../assets/Homepage/loanbank.jpeg'
const BetterLoan = () => {
    return (
        <div>
            <section className="creditandloan12">
                <div>
                    <Container>
                        <img className="w-100 mt-3" src={Loanbank} alt="" />
                    </Container>
                </div>
            </section>
        </div>
    )
}

export default BetterLoan
