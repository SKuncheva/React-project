import * as request from './requester';


export const products = (data) => {
   request.post('http://localhost:3030/data/products',data);
};
