'use strict';

import Subscription from "../../../../src/domain/models/subscription";

test('Validate schema subscription', () => {
  const data = {
    id: 'airpurifier#air_quality',
    createdAt: '2019-06-18T19:30:00+1:00',
    version: '1',
    alias: 'AirQuality',
    description: 'Measure the air quality',
    sql: {
      projection: 'id, clientId(), msg.air as air',
      where: 'air > 60'
    },
    typeHierarchy: {
      organization: '4kj23l-l3k4j5l34-lk3j4lkj5l'
    }
  };

  const subscription = new Subscription(data);

  console.log(JSON.stringify(subscription));


});
