// Next BFF (Back-end For Front-end)
// The Next create a mini back-end (calles BFF) that encapsulate
// a private request which uses secret token for a API
export default async function bffCommunity(request, response) {
  if(request.method === 'POST') {
    const TOKEN = 'fakeTokenHere';
    const fakeRequestAPi = async function (token) {
      return {
        code_status: 200,
        status: "created"
      }
    }
    const register = await fakeRequestAPi(TOKEN);
    response.json({
      data: register
    });
    return;
  }
  response.json({
    message: 'GET not implemented, use POST'
  })
}