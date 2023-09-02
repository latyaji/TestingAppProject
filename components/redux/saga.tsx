import {takeEvery,put} from 'redux-saga/effects';
import { SET_USER_DATA, USER_LIST} from './constant';

function* userList() {
    // console.warn('Saga Function Called');
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    let data =  yield fetch(url)  
        data =  yield data.json()
        // console.log("data ========",data);
        yield put({type : SET_USER_DATA , data})
        // yield put({type : DISPLAY_SAGA_DATA , Apidata}) // put method humko direct connect krwata hai reducer se iske under hum action jese 2 parameter pass krte hai ab data reducer kai pass jayega yha se
        
  }
  function* SagaData() {
    yield takeEvery(USER_LIST, userList);
  }


export default SagaData


//Note Function kai sath start lgana mtlb ki async operation ko handle krne kai lliye use krte hai or itterate krwane kai liye bhi use krte hai baki 
// Generators or iterators pdna hai useme pta chl jayega ki q use krte hai.
// ye file connect hogi store wali file kai sath mai