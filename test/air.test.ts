import { HoggConnectorAirtable, HoggOffsetCount } from '../src';
import { airtableApiKey } from '../src/config-nx';

const air = new HoggConnectorAirtable();
air.init({apiKey: airtableApiKey});

describe('airtable', () => {
  it('info', async () => {
    const info = await air.dbInfoGet('appXv6ry7Vn262nGR');
    console.log('!!-!!-!! info {210414105020}\n', info);
  });

  it('query', async () => {
    const tuples = await air
      .db('appXv6ry7Vn262nGR')
      .table('main')
      .columns(['id', 'title', 'body', 'url', 'comm', 'trans_count', 'trans_date_last', 'show_date_last'])
      .query(new HoggOffsetCount(false, 3, 3));

    console.log(
      '!!-!!-!! 1435-20 tuples {210414143637}\n',
      JSON.stringify(tuples, null, 2)
    );

  });
});
