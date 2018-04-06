import React from 'react'
import style from './index.module.css'

export const FileInput = ({ state: { user, message, room } }) =>
  room.id ? (
    <button>
      <svg>
        <use xlinkHref="index.svg#attach" />
      </svg>
      <input
        className={style.component}
        type="file"
        onChange={e => {
          const file = e.target.files[0]
          file &&
            user.sendMessage({
              text: message || file.name,
              roomId: room.id,
              attachment: {
                name: file.name.replace(/[^A-Za-z0-9._-]/g, '--'),
                file,
              },
            })
        }}
      />
    </button>
  ) : null
