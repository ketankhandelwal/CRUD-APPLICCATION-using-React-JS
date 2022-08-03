export default function ValidateInfo(values) {
  let error = {
    name : 1,
    email : 1
 
    
  };

  if (!values.name) {
    error.name = 0;
  }

  if (!values.email) {
    error.email = 0;
  }
  
   else if (!/\S+@\S+\.\S+/.test(values.email)) {
    error.email = 0
   }
  

  return error;
}




 

