import jsonwebtoken from 'jsonwebtoken'

const generateJwtoken = async (id) => {
  return await jsonwebtoken.sign(id, "some_secret_key");
};

export default generateJwtoken;