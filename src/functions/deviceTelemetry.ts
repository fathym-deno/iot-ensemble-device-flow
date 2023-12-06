import { app, InvocationContext, output } from '@azure/functions';

export async function deviceTelemetry(
  messages: unknown | unknown[],
  context: InvocationContext
): Promise<void> {
  if (!Array.isArray(messages)) {
    messages = [messages];
  }

  if (Array.isArray(messages)) {
    context.log(`Processing ${messages.length} device messages`);

    const signalRMessages = messages.map((message) => {
      return {
        target: 'telemetry',
        arguments: [message],
      };
    });
    for (const message of messages) {
      context.log('Event hub message:', message);
    }

    context.extraOutputs.set('signalRMessages', signalRMessages);
  }
}

const signalrOutput = output.generic({
  type: 'signalR',
  name: 'signalRMessages',
  hubName: 'devices',
  connectionStringSetting: 'AzureSignalRConnectionString',
});

app.eventHub('deviceTelemetry', {
  connection: 'IoTHubEndpoint',
  eventHubName: 'fathym-res-group-1-iot-hu',
  cardinality: 'many',
  extraOutputs: [signalrOutput],
  handler: deviceTelemetry,
});
