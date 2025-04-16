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
    { bank: "Piramal Finance Home Loan", roi: "10.00% p.a. onwards" },
    { bank: "Awas Bank Home Loan", roi: "10.00% p.a. onwards" },
    { bank: "Adhar Bank Home Loan", roi: "10.00% p.a. onwards" },
    { bank: "AU Small Finance Home Loan", roi: "10.50% p.a. onwards" },
    { bank: "Bank of India Home Loan", roi: "8.35% p.a. onwards" },
    { bank: "Bank of Baroda Home Loan", roi: "8.35% p.a. onwards" },
    { bank: "Bank of Maharashtra Home Loan", roi: "8.35% p.a. onwards" },
    { bank: "Union Bank Home Loan", roi: "8.35% p.a. onwards" },
    { bank: "State Bank India Home Loan", roi: "8.40% p.a. onwards" },
    { bank: "Panjab National Bank Home Loan", roi: "8.45% p.a. onwards" },
    { bank: "Federal Bank Home Loan", roi: "8.45% p.a. onwards" },
    { bank: "Bajaj Finance Home Loan", roi: "8.50% p.a. onwards" },
    { bank: "HSBC India Home Loan", roi: "8.50% p.a. onwards" },
    { bank: "Samman Capital Home Loan", roi: "8.50% p.a. onwards" },
    { bank: "Godrej Capital Home Loan", roi: "8.55% p.a. onwards" },
    { bank: "HDFC Bank Home Loan", roi: "8.60% p.a. onwards" },
    { bank: "Kotak Mahindra Home Loan", roi: "8.60% p.a. onwards" },
    { bank: "IDFC First Bank Home Loan", roi: "8.60% p.a. onwards" },
    { bank: "Axis Bank Home Loan", roi: "8.60% p.a. onwards" },
    { bank: "L & T Finance Home Loan", roi: "8.60% p.a. onwards" },
    { bank: "ICICI Home Loan", roi: "8.65% p.a. onwards" },
    { bank: "Aditya Birla Capital Home Loan", roi: "8.70% p.a. onwards" },
    { bank: "TATA Capital Home Loan", roi: "8.90% p.a. onwards" },
    { bank: "ICICI Home Finance Home Loan", roi: "9.30% p.a. onwards" },
    { bank: "Axis Finance Home Loan", roi: "9.50% p.a. onwards" },
    { bank: "Hero Fincorp Home Loan", roi: "9.50% p.a. onwards" },
    { bank: "RBL Bank Home Loan", roi: "9.50% p.a. onwards" },
    { bank: "IIFL Home Loan", roi: "9.50% p.a. onwards" }
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
          Navmi Finserrv, we work with a wide network of reputed Banks and Non-Banking Financial Companies (NBFCs) to provide you with the best Home loan options. Whether you are looking for quick approval, low interest rates, or flexible repayment terms, we collaborate with leading financial institutions to meet your specific needs
        </p>
        
        <Table striped className="mt-5 roi-banks">
          <thead>
            <tr>
              <th>Banks</th>
              <th>ROI</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>{item.bank}</td>
                <td>{item.roi}</td>
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