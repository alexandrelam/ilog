import { Kafka, Producer } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'api-service',
  brokers: ['kafka:9092'],
});

export async function send(
  producer: Producer,
  subject: string,
  body
): Promise<void> {
  await producer.send({
    topic: 'book',
    messages: [{ value: JSON.stringify({ subject, body }) }],
  });
  console.log(`sent: ${JSON.stringify(body)}`);
}

export default kafka;
