import React, { useState } from 'react';
import { Table } from "react-bootstrap";
import ApplyLoan from "../ApplyLoan";

const HDFCPersonalLoanData = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate pagination indexes
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Bank data array (extracted from your table rows)
  const bankData = [
    { bank: "Bajaj Finance" },
    { bank: "DCB Bank"},
    { bank: "Poonawalla Fincorp"},
    { bank: "Bandhan Bank"},
    { bank: "Aditya Birla Capital"},
    { bank: "Bank of Baroda"},
    { bank: "Deutsche Bank"},
    { bank: "Bank of India"},
    { bank: "HDFC Bank"},
    { bank: "Bank of Maharashtra"},
    { bank: "ICICI Bank"},
    { bank: "Canara Bank"},
    { bank: "ICICI Home Finance"},
    { bank: "Catholic Syrian Bank Ltd."},
    { bank: "Federal Bank"},
    { bank: "Central Bank of India"},
    { bank: "IDFC Bank"},
    { bank: "AnandRathi"},
    { bank: "Yes Bank"},
    { bank: "Fed Fina"},
    { bank: "HSBC Bank"},
    { bank: "IDBI Bank"},
    { bank: "Axis Bank"},
    { bank: "IndusInd Bank"},
    { bank: "Axia Finance"},
    { bank: "Kotak Mahindra Bank"},
    { bank: "Hero Fincorp"},
    { bank: "Punjab National Bank"},
    { bank: "Godrej Capital"},
    { bank: "RBL Bank"},
    { bank: "India Bull"},
    { bank: "Standard Chartered Bank"},
    { bank: "L & T Finance"},
    { bank: "State Bank of India"},
    { bank: "IIFL"},
  ];

  // Get current page items
  const currentItems = bankData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(bankData.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <ApplyLoan />
      <section className="sidecontent">
        <h3>Banks and NBFCs ROI</h3>
        <p className="mt-5">
        Navmi Finserrv, we work with a wide network of reputed Banks and Non-Banking Financial Companies (NBFCs) to provide you with the best Loan Against Property options. Whether you are looking for quick approval, low interest rates, or flexible repayment terms, we collaborate with leading financial institutions to meet your specific needs
        </p>
        <h2 className='roi-abcd'>The Interest Rate for a Loan Against Property usually starts from 9.00% p.a. and ranges anywhere between 9.00% p.a. and 13-15% p.a.</h2>
        
        <Table striped className="mt-5 roi-banks">
          <thead>
            <tr>
              <th>Banks</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>{item.bank}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Pagination controls */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm border rounded disabled:opacity-50"
          >
            Previous
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 text-sm border rounded ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {index + 1}
            </button>
          ))}
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default HDFCPersonalLoanData;