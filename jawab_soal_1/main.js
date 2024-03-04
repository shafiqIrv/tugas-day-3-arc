const axios = require("axios")
const link = "https://reqres.in/api/users"

async function main() {
  const response = await axios.get(link)
  const users = response.data
  console.log(users)
}

main()