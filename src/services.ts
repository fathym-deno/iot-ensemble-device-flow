import {
  Client as KustoClient,
  KustoConnectionStringBuilder,
} from 'npm:azure-kusto-data';

const kustoClientCache: Record<string, KustoClient> = {};

export function loadKustoClient(cluster: string, region: string): KustoClient {
  const clusterConectionString = `https://${cluster}.${region}.kusto.windows.net`;

  if (!(clusterConectionString in kustoClientCache)) {
    const kcs = KustoConnectionStringBuilder.withAadApplicationKeyAuthentication(
      clusterConectionString
    );

    const kustoClient = new KustoClient(kcs);

    return kustoClient;
  } else {
    return kustoClientCache[clusterConectionString];
  }
}
