import { AzureFunctionsWorker } from './deps.ts';

import hello_world from './functions/hello_world.ts';
import hello_world2 from './functions/hello_world2.ts';
import deviceTelemetry from './functions/deviceTelemetry.ts';
import deviceTelemetryListener from './functions/deviceTelemetryListener.ts';
import deviceTelemetryNegotiate from './functions/deviceTelemetryNegotiate.ts';

const worker = new AzureFunctionsWorker([
  hello_world,
  hello_world2,
  deviceTelemetry,
  deviceTelemetryListener,
  deviceTelemetryNegotiate,
]);

await worker.run();
