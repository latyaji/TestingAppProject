import React from 'react';
import {render} from '@testing-library/react-native';
import {Listdata} from '../src/screen/listdata';
const mockRoute = {
  params: {
    item: {
      id: 1,
      userId: 101,
      title: 'Mock Title',
      body: 'Mock Body',
    },
  },
};
describe('Listdata component', () => {
  test('renders the correct item details', () => {
    const {getByText} = render(<Listdata route={mockRoute} />);
    const itemAllDetailsTxt = getByText('Item all details');
    const idTxt = getByText('id : 1');
    const userIdTxt = getByText('User Id : 101');
    const titleTxt = getByText('Title : Mock Title');
    const bodyTxt = getByText('Body : Mock Body');
    expect(itemAllDetailsTxt).toBeTruthy();
    expect(idTxt).toBeTruthy();
    expect(userIdTxt).toBeTruthy();
    expect(titleTxt).toBeTruthy();
    expect(bodyTxt).toBeTruthy();
  });
});