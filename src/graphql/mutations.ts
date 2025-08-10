import { gql } from '@apollo/client'

export const SEND_MESSAGE = gql`
  mutation SendMessage($userId: String!, $message: String!) {
    sendMessage(userId: $userId, message: $message) {
      success
      message
      response
    }
  }
`

export const GET_CHAT_HISTORY = gql`
  query GetChatHistory($userId: String!) {
    chatHistory(userId: $userId) {
      id
      message
      response
      timestamp
    }
  }
`
