const axios   = require('axios')
const api = async () => {
    try {
        return await axios.get('http://api.plos.org/search?q=title:DNA');
    }catch (error) {
        throw new Error(`Something went wrong ${error}`);
    }
}

console.log(api().then((res)=> console.log(res)))
  