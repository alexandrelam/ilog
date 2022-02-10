import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'write-service',
  brokers: ['kafka:9092'],
});

export default kafka;
