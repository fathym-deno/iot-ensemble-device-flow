import { AzureFunctionsContext } from '../deps.ts';

async function handler(context: AzureFunctionsContext) {
  context.res = {
    status: 200,
    body: context.bindings.connectionInfo,
  };
}

export default {
  handler,

  // Name of the function
  name: 'negotiate',

  metadata: {
    bindings: [
      {
        type: 'httpTrigger',
        authLevel: 'anonymous',
        direction: 'in',
        methods: ['GET', 'POST'],
        name: 'req',
      },
      {
        type: 'http',
        direction: 'out',
        name: 'res',
      },
      {
        type: 'signalRConnectionInfo',
        name: 'connectionInfo',
        direction: 'in',
        hubName: 'Devices',
        connectionStringSetting: 'AzureSignalRConnectionString',
      },
    ],
  },
};
