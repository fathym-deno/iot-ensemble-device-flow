import { AzureFunctionsWorker } from './deps.ts';

import hello_world from './functions/hello_world.ts';
import deviceTelemetry from './functions/deviceTelemetry.ts';
import deviceTelemetryListener from './functions/deviceTelemetryListener.ts';
import deviceTelemetryNegotiate from './functions/deviceTelemetryNegotiate.ts';

const worker = new AzureFunctionsWorker([
  hello_world,
  deviceTelemetry,
  deviceTelemetryNegotiate,
  //   deviceTelemetryListener,
]);

await worker.run();
