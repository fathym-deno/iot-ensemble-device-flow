import { AzureFunctionsContext } from '../../deps.ts';
import { loadKustoClient } from '../../src/services.ts';

async function handler(context: AzureFunctionsContext) {
  const kustoClient = loadKustoClient('frg1-data-explorer', 'westus2');

  context.res = {
    status: 200,
    body: `Welcome 2 deno ${Deno.version.deno} 🦕 in Azure Functions ⚡️!!!`,
  };
}

export default {
  handler,

  // Name of the function
  name: 'explore',

  // By default, it's an HTTP function. For other functions, add a `metadata` property
  // with the contents of function.json that describes the trigger and bindings.
  // https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-example
};
