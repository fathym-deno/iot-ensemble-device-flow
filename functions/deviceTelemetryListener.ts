import { AzureFunctionsContext } from '../deps.ts';

async function handler(context: AzureFunctionsContext) {
  context.log(`Receive ${context.bindingData.message}.`);
}

export default {
  handler,

  // Name of the function
  name: 'deviceTelemetryListener',

  metadata: {
    bindings: [
      {
        type: 'signalRTrigger',
        name: 'invocation',
        direction: 'in',
        hubName: 'Devices',
        category: 'messages',
        event: 'telemetry',
        parameterNames: ['telemetry'],
        connectionStringSetting: 'AzureSignalRConnectionString',
      },
    ],
  },
};
