import { useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import ApplyLoan from "../../Personalloans/ApplyLoan";
const PersonalLoanAmount = () => {
  return (
    <>
      <ApplyLoan/>
      <section className="sidecontent">
        <h3>Personal Loan of Rs 50,000</h3>
        <p style={{ marginTop: "60px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industr. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Table striped className="mt-4">
          <thead>
            <tr>
              <th>Loan Amount ( Rs )</th>
              <th>Tenure ( Years )</th>
              <th>Interest Rate</th>
              <th>EMI ( Rs )</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>50,000</td>
              <td>1</td>
              <td>11</td>
              <td>4,400</td>
            </tr>
            <tr>
              <td>50,000</td>
              <td>2</td>
              <td>11</td>
              <td>2,400</td>
            </tr>
            <tr>
              <td>50,000</td>
              <td>3</td>
              <td>11</td>
              <td>1,400</td>
            </tr>
            <tr>
              <td>50,000</td>
              <td>4</td>
              <td>11</td>
              <td>1,000</td>
            </tr>
          </tbody>
        </Table>
        <p style={{ marginTop: "30px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industr. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industr. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </section>
    </>
  );
};

export default PersonalLoanAmount;
