import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import axios from 'axios';
import {Dashboard} from '../src/screen/dashboard';

jest.mock('axios');
const mockResponse = [
  {id: 1, title: 'Mock Title 1', body: 'Mock Body 1'},
  {id: 2, title: 'Mock Title 2', body: 'Mock Body 2'},
];
describe('Dashboard component', () => {
  test('renders correctly', () => {
    const {getByText} = render(<Dashboard />);
    const headerTxt = getByText('Welcome to Dashboard');
    const refreshButton = getByText('Refresh');
    expect(headerTxt).toBeTruthy();
    expect(refreshButton).toBeTruthy();
  });
  test('fetches and displays data correctly', async () => {
    axios.get.mockResolvedValue({data: mockResponse});
    const {findByText} = render(<Dashboard />);
    const title1 = await findByText('Mock Title 1');
    const body1 = await findByText('Mock Body 1');
    expect(title1).toBeTruthy();
    expect(body1).toBeTruthy();
    const title2 = await findByText('Mock Title 2');
    const body2 = await findByText('Mock Body 2');
    expect(title2).toBeTruthy();
    expect(body2).toBeTruthy();
  });
  test('navigates to Listdata on item press', async () => {
    axios.get.mockResolvedValue({data: mockResponse});
    const navigationMock = {navigate: jest.fn()};
    const {findByText} = render(<Dashboard navigation={navigationMock} />);
    await waitFor(() => expect(findByText('Mock Title 1')).toBeTruthy());
    expect(navigationMock.navigate).toBeTruthy();
  });
});