import axios from "axios";

const login = async (usuario) => {
    try{

        const removeCircular = JSON.stringify(usuario, removeCircularReferences());
        const response = await axios.post('http://localhost:5000/login', removeCircular, {
            headers:{
            'Content-Type': 'application/json',
            },
      });
      return response.data
    } catch (error) {
      if(error.response){
        throw new Error(error.response.data.message || 'Login falhou');
      } else if ( error.request ){
          throw new Error('Sem resposta do servidor');
      } else {
        throw new Error(error.message);
      }

    };

    function removeCircularReferences() {
        const seen = new WeakSet();
        return function replacer(key, value) {
          if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
              return; // Remove referências circulares
            }
            seen.add(value);
          }
          return value;
        };
      }
  }

  export default {
    login,
  };