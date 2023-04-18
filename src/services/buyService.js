import * as request from './requester';


export const buyProducts =async (data) => {
  const product=await request.post('http://localhost:3030/data/buy',data);
  return product
};


export const getProduct =async (userId) => {
    const product=await request.get(`http://localhost:3030/data/buy/?where=_ownerId IN ("${userId}")`);
    return product
}

export const delProducts =async (id) => {
  await request.del(`http://localhost:3030/data/buy/${id}`);

};