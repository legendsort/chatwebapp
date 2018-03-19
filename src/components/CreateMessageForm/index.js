import React from 'react'
import style from './index.module.css'
import { FileInput } from '../FileInput'

export const CreateMessageForm = ({
  state: { user = {}, room = {}, message = '' },
  actions: { setMessage, runCommand },
}) =>
  room.id ? (
    <form
      className={style.component}
      onSubmit={e => {
        e.preventDefault()
        message.startsWith('/')
          ? runCommand(message.slice(1))
          : message.length > 0 &&
            user
              .sendMessage({
                text: message,
                roomId: room.id,
              })
              .then(x => setMessage(''))
      }}
    >
      <input
        placeholder="Type a Message.."
        value={message}
        onInput={e => {
          setMessage(e.target.value)
          user.isTypingIn({ roomId: room.id })
        }}
      />
      <FileInput state={{ user, room, message }} />
      <button type="submit">
        <svg>
          <use xlinkHref="index.svg#send" />
        </svg>
      </button>
    </form>
  ) : null
