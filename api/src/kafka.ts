import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'api-service',
  brokers: ['kafka:9092'],
});

export default kafka;
