import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Login} from '../src/screen/login';
import {Alert} from 'react-native';
describe('Login component', () => {
  test('renders correctly', () => {
    const {getByText, getByTestId} = render(<Login />);
    const loginHeaderTxt = getByText('Login Details');
    const usernameLabelTxt = getByText('Enter Username');
    const passwordLabelTxt = getByText('Enter Password');
    const loginInput = getByTestId('loginInput');
    const passwordInput = getByTestId('passwordInput');
    const loginButton = getByText('Login');
    expect(loginHeaderTxt).toBeTruthy();
    expect(usernameLabelTxt).toBeTruthy();
    expect(passwordLabelTxt).toBeTruthy();
    expect(loginInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(loginButton).toBeTruthy();
  });
  test('login success', () => {
    const navigationMock = {navigate: jest.fn()};
    const {getByTestId, getByText} = render(
      <Login navigation={navigationMock} />,
    );
    const loginInput = getByTestId('loginInput');
    const passwordInput = getByTestId('passwordInput');
    const loginButton = getByText('Login');
    fireEvent.changeText(loginInput, 'admin');
    fireEvent.changeText(passwordInput, 'Admin@123');
    fireEvent.press(loginButton);
    expect(navigationMock.navigate).toHaveBeenCalledWith('Dashboard');
  });
  test('login failure', () => {
    const alertMock = jest.spyOn(Alert, 'alert');
    const {getByTestId, getByText} = render(<Login />);
    const loginInput = getByTestId('loginInput');
    const passwordInput = getByTestId('passwordInput');
    const loginButton = getByText('Login');
    fireEvent.changeText(loginInput, 'invaliduser');
    fireEvent.changeText(passwordInput, 'InvalidPassword');
    fireEvent.press(loginButton);
    expect(alertMock).toHaveBeenCalledWith(
      'Login Failed',
      'Invalid username or password.',
    );
  });
});