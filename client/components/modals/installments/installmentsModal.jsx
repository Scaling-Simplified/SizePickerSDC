/* eslint-disable max-len */
import React, { useContext } from 'react';
import BaseModal from '../baseModal';
import ProductContext from '../../context/productContext';

function InstallmentsModal() {
  const { modalView, setModalView } = useContext(ProductContext);
  console.log(modalView.installments);
  return (
    <BaseModal
      title="Paying in installments"
      show={modalView.installments}
      handleExit={() => setModalView({ installments: false })}
    >
      <p>
        Want to spread out the cost of your order with adidas? Select ‘Affirm’, ‘Klarna‘, or ‘Afterpay‘ as your payment method at checkout to pay in interest-free installments, with no hidden fees.
      </p>
      <br />
      <p>
        With Klarna, pay in 4 interest-free installments. The first payment is taken when the order is processed and the remaining 3 are automatically taken every two weeks. For CA residents, loans made or arranged are pursuant to a California Finance Lenders Law license.
      </p>
      <br />
      <p>
        With Affirm, you can make 3 monthly payments with zero hidden fees. Payment options are subject to eligibility check and approval. Estimated payment amount excludes taxes and shipping fees. A down payment may be required. Affirm Payment options are provided by Cross River Bank, Member FDIC.
      </p>
      <br />
      <p>
        With Afterpay, make 4 interest-free payments. You must be over 18, a resident of the U.S., and meet additional eligibility criteria to qualify. Late fees may apply. Click here for complete terms. Loans to California residents made or arranged are pursuant to a California Finance Lenders Law license.
      </p>
    </BaseModal>
  );
}

export default InstallmentsModal;
