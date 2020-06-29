MATCH (n)-[p:PROCESSED_TO]-()
DETACH DELETE n, p;

CREATE(input:String {value: 'A string representing some potentially invalid domain name'})
        -[operationSucceeds:PROCESSED_TO {operation: 'map to valid domain name successful'}]->
      (output:UnresolvedDomain {name: 'valid domain name'})
RETURN input, operationSucceeds, output;

MATCH(input:String)
MERGE (input)
  -[operationFails:PROCESSED_TO {operation: 'map to valid domain name failed'}]->
(output:FailedOperation {domainName: 'some domain name', failedAt: 'some date', reason: 'INVALID_DOMAIN_NAME'})
RETURN input, operationFails, output;

MATCH (input:UnresolvedDomain)
MERGE (input)
  -[successfulOperation:PROCESSED_TO {operation: 'resolve dns'}]->
(output:ResolvedDomain {name: 'valid domain name', resolvedAt: 'some date', ipAddresses: ['ip1', 'ip2']})
RETURN input, successfulOperation, output;

MATCH (input:UnresolvedDomain)
MERGE (input)
  -[operationFails:PROCESSED_TO {operation: 'resolve dns failed'}]->
(output:FailedOperation {domainName: 'some domain name', failedAt: 'some date', reason: 'RESOLVE_FAILED'})
RETURN input, operationFails, output;

MATCH (input:ResolvedDomain)
MERGE (input)
-[operationSucceeds:PROCESSED_TO {operation: 'fetch domain'}]->
(output:FetchedDomain {name: 'valid domain name', fetchedAt: 'some date'})
RETURN input, operationSucceeds, output;

MATCH (input:ResolvedDomain)
MERGE (input)
  -[operationFails:PROCESSED_TO {operation: 'fetch domain failed'}]->
(output:FailedOperation {domainName: 'some domain name', failedAt: 'some date', reason: 'DOMAIN_FETCH_FAILED'})
RETURN input, operationFails, output;

MATCH (input:FetchedDomain), (output:UnresolvedDomain)
MERGE (input)
-[operation:PROCESSED_TO {operation: 'parse domains'}]->
(output)
RETURN input, operation, output;

MATCH (input:FetchedDomain)
MERGE (input)
  -[operation:PROCESSED_TO {operation: 'parse paths'}]->
(output:UnfetchedPath {host: 'valid domain name', path: 'full path incl. search and hash', parsedAt: 'some date'})
RETURN input, operation, output;

MATCH (input:UnfetchedPath)
MERGE (input)
-[operation:PROCESSED_TO {operation: 'fetch path'}]->
(output:FetchedPath {host: 'valid domain name', path: 'full path incl. search and hash', fetchedAt: 'some date'})
RETURN input, operation;

MATCH (input:UnfetchedPath)
MERGE (input)
  -[operationFails:PROCESSED_TO {operation: 'fetch path failed'}]->
(output:FailedOperation {host: 'some host', path: 'full path incl. search and hash', reason: 'PATH_FETCH_FAILED'})
RETURN input, operationFails, output;

MATCH (n)-[p:PROCESSED_TO]-()
RETURN n, p;