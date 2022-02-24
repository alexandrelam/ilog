import { KafkaMessage } from 'kafkajs';

export function parseMessage(message: KafkaMessage) {
  return {
    subject: JSON.parse(message.value.toString()).subject,
    body: JSON.parse(message.value.toString()).body,
  };
}

export type Operation = 'create' | 'update' | 'delete';
