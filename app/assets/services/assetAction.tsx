import { IAssets } from "../listofassets/models/assets.model";


const deleteUser =async(item:IAssets)=>{
       await fetch(`${process.env.NEXT_PUBLIC_API_URL}\\users/${item.id}`, {
      method: "DELETE",
    });
}

const createUser = async (_user:IAssets)=>{
  const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(_user),
      };
      await  fetch(`${process.env.NEXT_PUBLIC_API_URL}\\users`, requestOptions)
    
}

// const updateUser = async (newUser:IAssets)=>{
//   const requestOptions = {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newUser),
//   }
//    await fetch(`${process.env.NEXT_PUBLIC_API_URL}\\users/${newUser.id}`,requestOptions)
     
// }


const updateAsset = async (id:any,users:any) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
      credentials: 'include',
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(users),
  });
  return response;
}

export {deleteUser, createUser, updateAsset}