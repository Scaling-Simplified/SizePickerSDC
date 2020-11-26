/* eslint-disable max-len */
import React, { useContext } from 'react';
import BaseModal from '../baseModal';
import ProductContext from '../../context/productContext';
import HoverLink from '../../hoverLink';

function CreatorsClubModal() {
  const { modalView, setModalView } = useContext(ProductContext);
  return (
    <BaseModal
      title="JOIN CREATORS CLUB TO GET UNLIMITED FREE SHIPPING, RETURNS, & EXCHANGES"
      show={modalView.creatorsClub}
      handleExit={() => setModalView({ creatorsClub: false })}
      wide
    >
      <p>
        <HoverLink message="Sign up" />
        {' '}
        for the Creators Club and get free shipping and free returns or exchanges on any order.
      </p>
    </BaseModal>
  );
}

export default CreatorsClubModal;
