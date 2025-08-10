import { gql } from '@apollo/client';

export const SEND_MESSAGE = gql`
  mutation SendMessage($message: String!) {
    sendMessage(message: $message) {
      success
      message
      response
    }
  }
`;

export const GET_CHAT_HISTORY = gql`
  query GetChatHistory {
    chatHistory {
      id
      message
      response
      timestamp
    }
  }
`;