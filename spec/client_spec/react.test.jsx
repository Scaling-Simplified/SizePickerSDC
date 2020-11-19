import React from 'react';
import { mount, shallow } from 'enzyme';
import { ProductProvider } from '../../client/components/context/productContext';
import App from '../../client/components/app';
import ProductInfo from '../../client/components/productDescription/productInfo';
import SizePicker from '../../client/components/sizeSelector/sizePicker';
import BottomButtons from '../../client/components/addToBag/bottomButtons';
import CheckoutModal from '../../client/components/modals/checkout/checkoutModal';

describe('<App />', () => {
  it('should render <ProductInfo>', () => {
    const wrapper = mount(<ProductProvider><App /></ProductProvider>);
    expect(wrapper.find(ProductInfo)).toHaveLength(1);
  });

  it('should render <SizePicker>', () => {
    const wrapper = mount(<ProductProvider><App /></ProductProvider>);
    expect(wrapper.find(SizePicker)).toHaveLength(1);
  });

  it('should render <BottomButtons>', () => {
    const wrapper = mount(<ProductProvider><App /></ProductProvider>);
    expect(wrapper.find(BottomButtons)).toHaveLength(1);
  });

  it('should render <CheckoutModal>', () => {
    const wrapper = mount(<ProductProvider><App /></ProductProvider>);
    expect(wrapper.find(CheckoutModal)).toHaveLength(1);
  });
});
