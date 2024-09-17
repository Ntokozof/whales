export const handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
  
    // Check the HTTP method and path to handle different routes
    const path = event.path;
    const httpMethod = event.httpMethod;
  
    // Initialize response object
    let response;
  
    if (path === '/test001' && httpMethod === 'GET') {
      response = {
        statusCode: 200,
        body: JSON.stringify({ message: 'This is the /test001 endpoint!' }),
      };
    }
    else if (path === '/whales_secured' && httpMethod === 'GET') {
      response = {
        statusCode: 200,
        //sample data test
        body: JSON.stringify({ 
            "responseTimestamp": "2024-08-29 17:01",
            "responseHeaders": {
            "content-security-policy": "script-src 'self'; script-src https://use.typekit.net/; default-src 'self'; block-all-mixed-content",
            "x-kong-request-id": "68e870537aa92553f57d7e3772495143",
            "cf-cache-status": "DYNAMIC",
            "content-type": "application/json;charset=UTF-8",
            "x-kong-upstream-latency": "62",
            "cache-control": "max-age=31536000, private, no-cache, no-store, must-revalidate",
            "referrer-policy": "no-referrer-when-downgrade",
            "transfer-encoding": "chunked",
            "vary": "Origin, Origin",
            "x-frame-options": "SAMEORIGIN",
            "strict-transport-security": "max-age=31536000; includeSubDomains",
            "x-application-context": "application:9103",
            "x-xss-protection": "1; mode=block",
            "access-control-allow-credentials": "true",
            "access-control-allow-origin": "https://secure.adviserweb.oldmutual.co.za",
            "connection": "keep-alive",
            "content-encoding": "gzip",
            "date": "Thu, 29 Aug 2024 15:01:26 GMT",
            "pragma": "no-cache",
            "cf-ray": "8bad6a94166e06d7-CPT",
            "via": "kong/3.7.1.1-enterprise-edition",
            "server": "cloudflare",
            "x-content-type": "nosniff",
            "x-kong-proxy-latency": "1"
        },
            "responseBody": {
            "message": "Success",
            "responsePayloadListBankDetails": [
                {
                "accountHolderName": "OAKER",
                "bankName": "South African Postbank SOC Ltd",
                "bankShortName": "POST",
                "branchCode": "460005",
                "accountNumber": "26010426062",
                "accountType": "C",
                "purpose": "premiumPayer",
                "accNumberIdentifier": "South African Postbank SOC Ltd*******6062",
                "deductionDate": "5",
                "payPointIdentifier": "PDNedbank",
                "payPointName": "Debit Orders Nedbank"
                },
                {
                "accountHolderName": "OAKER",
                "bankName": "South African Postbank SOC Ltd",
                "bankShortName": "POST",
                "branchCode": "460005",
                "accountNumber": "26010426062",
                "accountType": "C",
                "purpose": "premiumPayer",
                "accNumberIdentifier": "South African Postbank SOC Ltd*******6062",
                "deductionDate": "15",
                "payPointIdentifier": "PDNedbank",
                "payPointName": "Debit Orders Nedbank"
                }
      ],
      "statusCode": "200",
      "appStatus": "Success"
    },
    "statusCode": 200
  
    }),
        

      };
    } 
    else {
      // Handle unsupported routes
       response = {
         statusCode: 404,
         body: JSON.stringify({ message: "404 nothing found "   })
       };
    }
    return response;
  };
  