const http = require("http");

const handleRequest = (request, response) => {
  // console.log(request.method);
  // console.log(request.url);
  // console.log(request.headers);
  // console.log(request.body);
  // console.log("====================");
  // response.end("Hi there");
  // ===============================================================
  // if (request.method === "POST") {
  //   return response.end("Sorry gak melayani request POST");
  // }
  // if (request.method === "GET") {
  //   return response.end("Response HTTP Request menggunakan get");
  // }
  // if (request.method === "PUT") {
  //   response.writeHead(501);
  //   return response.end("Sorry ada error di server jadi gak bisa diproses");
  // }
  // if (request.method === "DELETE") {
  //   return response.end("Response HTTP Request menggunakan delete");
  // }
  // return response.end("Method tidak diketahui");
  // ===============================================================

  const dataSiswa = {
    nama: "Enrico",
    kelas: "Gold Binar",
  };

  console.log(typeof dataSiswa);
  console.log(dataSiswa);
  console.log(typeof JSON.stringify(dataSiswa));
  console.log(JSON.stringify(dataSiswa));

  response.writeHead(200, { "Content-Type": "application/json" });
  return response.end(JSON.stringify(dataSiswa));
};

http.createServer(handleRequest).listen(9000);
