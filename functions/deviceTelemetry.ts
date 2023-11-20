import { AzureFunctionsContext } from '../deps.ts';

async function handler(context: AzureFunctionsContext) {
  context.log(`Telemetry item received: ${context.bindings.deviceTelemetry}`);
  // context.log(JSON.parse(context.bindings.deviceTelemetry));

  context.bindings!.signalRMessages = [
    {
      target: 'telemetry',
      arguments: [JSON.parse(context.bindings.deviceTelemetry)],
    },
  ];

  // context.res!.Outputs = {
  //   signalRMessages: context.bindings!.signalRMessages,
  // };

  // context.res! = {
  //   body: {
  //     Outputs: context.res!.Outputs,
  //   },
  // };

  // return {
  //   Outputs: {
  //     signalRMessages: [
  //       {
  //         target: 'telemetry',
  //         arguments: [JSON.parse(context.bindings.deviceTelemetry)],
  //       },
  //     ],
  //   },
  // };

  // return {
  //   signalRMessages: [
  //     {
  //       target: 'telemetry',
  //       arguments: [JSON.parse(context.bindings.deviceTelemetry)],
  //     },
  //   ],
  // };
}

export default {
  handler,

  // Name of the function
  name: 'deviceTelemetry',

  metadata: {
    bindings: [
      {
        type: 'eventHubTrigger',
        name: 'deviceTelemetry',
        direction: 'in',
        eventHubName: 'fathym-res-group-2-iot-hu',
        connection: 'IoTHubEndpoint',
        // consumerGroup: 'cg',
      },
      {
        type: 'signalR',
        name: 'signalRMessages',
        direction: 'out',
        hubName: 'Devices',
        connectionStringSetting: 'AzureSignalRConnectionString',
      },
    ],
  },
};
