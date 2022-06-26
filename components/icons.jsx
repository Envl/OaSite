export function ICONS(props) {
  const { name } = props

  if (name === 'home')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M19 7H5c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z"
          opacity=".3"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="30;0"
          ></animate>
        </path>
        <path
          fill="currentColor"
          d="M19 5H5C2.79 5 1 6.79 1 9v5c0 2.21 1.79 4 4 4h2v1h10v-1h2c2.21 0 4-1.79 4-4V9c0-2.21-1.79-4-4-4zm2 9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v5z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="30;0"
          ></animate>
        </path>
      </svg>
    )

  if (name === 'news-paper')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m21.15 3.85l-.82.82l-.95-.96c-.39-.39-1.02-.39-1.42 0l-.96.96l-.96-.96c-.39-.39-1.03-.39-1.42 0l-.95.96l-.96-.96a.996.996 0 0 0-1.41 0l-.96.96l-.96-.96c-.39-.39-1.02-.39-1.42 0L7 4.67l-.96-.96c-.39-.39-1.03-.39-1.42 0l-.95.96l-.82-.82a.5.5 0 0 0-.85.36V19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4.21a.5.5 0 0 0-.85-.36zM11 19H4v-6h7v6zm9 0h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4H4V8h16v3z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="30;0"
          ></animate>
        </path>
      </svg>
    )

  if (name === 'telegram')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M231.3 31.7A16.1 16.1 0 0 0 215 29L30.4 101.5a15.8 15.8 0 0 0-10.1 16.3a16 16 0 0 0 12.8 14.3l46.9 9.3V200a16 16 0 0 0 9.9 14.8A16.6 16.6 0 0 0 96 216a15.8 15.8 0 0 0 11.3-4.7l26-25.9l39.3 34.6a16 16 0 0 0 10.5 4a14.2 14.2 0 0 0 5-.8a15.9 15.9 0 0 0 10.7-11.6l37.6-164.2a16 16 0 0 0-5.1-15.7ZM183.2 208l-82.4-72.5l118.7-85.7Z"
        ></path>
      </svg>
    )

  if (name === 'github')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          fill="currentColor"
          fillOpacity="0"
          d="M15 4.5C14.6122 4.39991 13.6683 4 12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98302 13.0822 6 14C7.01698 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18V22H15V18C15 17.3743 15.1506 16.038 14.5 15.5C15.8887 15.3749 16.983 14.9178 18 14C19.017 13.0822 19.5 11.6875 19.5 9.5C19.5 8 19.25 7 18.5 6C18.7863 5.21921 18.8438 4 18.5 3C16.9375 3 15.5255 4.07463 15 4.5Z"
        >
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.6s"
            dur="0.15s"
            values="0;0.3"
          ></animate>
        </path>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path
            strokeDasharray="30"
            strokeDashoffset="30"
            d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.6s"
              values="30;0"
            ></animate>
          </path>
          <path
            strokeDasharray="10"
            strokeDashoffset="10"
            d="M9 19C7.59375 19 6.15625 18.4375 5.3125 17.8125C4.46875 17.1875 4.21875 16.1562 3 15.5"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.7s"
              dur="0.2s"
              values="10;0"
            ></animate>
          </path>
        </g>
      </svg>
    )

  if (name === 'twitter')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          fill="currentColor"
          fillOpacity="0"
          stroke="currentColor"
          strokeDasharray="62"
          strokeDashoffset="62"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.8906 7.34375C19.7969 7.67188 19.4001 8.50548 18.7219 9.29669C18.2698 17.9717 9.84907 20.7974 4.08456 17.8869C3.29335 16.8414 6.93856 17.2653 8.26666 15.259C3.23684 12.6876 3.63244 5.82103 4.64971 6.1036C7.02333 9.29669 10.8381 9.57926 11.4597 9.29669C11.4597 8.562 11.1489 6.97958 12.8726 5.65148C13.8616 4.94505 15.9297 4.3125 17.8047 6.34375C18.125 6.55469 18.5859 6.64844 19.2734 6.49219C19.6797 6.28125 20.2262 6.427 19.9453 7.15625"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="62;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.6s"
            dur="0.15s"
            values="0;0.3"
          ></animate>
        </path>
      </svg>
    )
}
