import { createIcon } from '@chakra-ui/react';

export const Bell = createIcon({
  displayName: 'Bell',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 5,
    height: 5,
    stroke: 'grey',
    fill: 'none',
  },
  path: (
    <>
      <path
        stroke="currentColor"
        d="M19 11V8A7 7 0 105 8v3c0 3.3-3 4.1-3 6 0 1.7 3.9 3 10 3s10-1.3 10-3c0-1.9-3-2.7-3-6z"
      />
      <path
        stroke="currentColor"
        d="M12 22c-1.011 0-1.961-.034-2.855-.1a2.992 2.992 0 005.71 0c-.894.066-1.844.1-2.855.1z"
      />
    </>
  ),
});

export const Bold = createIcon({
  displayName: 'Bold',
  viewBox: '0 0 12 12',
  d: 'M8.67 5.487a2.612 2.612 0 001.064-2.405C9.586 1.729 8.357.75 6.997.75H1.5v.75l1.085.543a.75.75 0 01.415.67v6.573a.75.75 0 01-.415.671L1.5 10.5v.75h5.867c1.578 0 2.985-1.16 3.121-2.733a3 3 0 00-1.817-3.03zM5.25 2.25H6a1.5 1.5 0 110 3h-.75v-3zm0 4.5v3h1.5a1.5 1.5 0 000-3h-1.5z',
});

export const Bookmark = createIcon({
  displayName: 'Bookmark',
  viewBox: '0 0 19 21',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <>
      <path
        stroke="currentColor"
        fill="none"
        d="M12.966 14.474h-7.22M12.966 10.287h-7.22M8.5 6.11H5.747"
      />
      <path
        stroke="currentColor"
        fill="none"
        d="M13.158 1l-7.689.004C2.709 1.021 1 2.837 1 5.607v9.196c0 2.784 1.722 4.607 4.506 4.607l7.689-.003c2.76-.017 4.47-1.834 4.47-4.604V5.607C17.665 2.823 15.942 1 13.158 1z"
      />
    </>
  ),
});

export const Box = createIcon({
  displayName: 'Box',
  viewBox: '0 0 19 20',
  path: (
    <>
      <path fill="currentColor" d="M1 5.5l8.25 3 8.25-3M9.25 8.5V19" />
      <path
        fill="currentColor"
        d="M17.5 15.4L9.25 19 1 15.4V4.6L9.25 1l8.25 3.6v10.8z"
      />
    </>
  ),
});

export const Close = createIcon({
  displayName: 'Close',
  viewBox: '0 0 24 24',
  d: 'M16 8l-8 8M16 16L8 8',
});

export const DarkAdd = createIcon({
  displayName: 'DarkAdd',
  viewBox: '0 0 36 36',
  d: 'M19.5 12h-3v4.5H12v3h4.5V24h3v-4.5H24v-3h-4.5V12z',
});

export const Discovery = createIcon({
  defaultProps: {
    width: 5,
    height: 5,
    fill: 'none',
    stroke: '#fff',
  },
  displayName: 'Discovery',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.27002 14.9519L9.8627 9.8627L14.9519 8.27002L13.3593 13.3593L8.27002 14.9519Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
      <circle
        cx="11.611"
        cy="11.611"
        r="9.61098"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </>
  ),
});

export const Emo = createIcon({
  displayName: 'Emo',
  viewBox: '0 0 16 16',
  defaultProps: {
    width: 4,
    height: 4,
  },
  path: (
    <>
      <path
        d="M8 13C9.7 13 11 11.7 11 10H5C5 11.7 6.3 13 8 13Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 5C16 4 15.2 3.1 14.2 3C12.7 1.1 10.4 0 8 0C5.6 0 3.3 1.1 1.8 3C0.8 3.1 0 4 0 5V8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8V5ZM14 6V7H11V5H14V6ZM11 3H11.3C10.3 2.4 9.2 2 8 2C6.8 2 5.7 2.4 4.7 3H5C6.1 3 7 3.9 7 5H9C9 3.9 9.9 3 11 3ZM2 5H5V7H2V5ZM2.1 9C2.6 11.8 5 14 8 14C11 14 13.4 11.8 13.9 9H11C9.9 9 9 8.1 9 7H7C7 8.1 6.1 9 5 9H2.1Z"
        fill="currentColor"
      />
    </>
  ),
});

export const Hamburger = createIcon({
  displayName: 'Hamburger',
  viewBox: '0 0 32 20',
  defaultProps: {
    width: 7,
    height: 7,
  },
  path: (
    <>
      <rect y="5" width="32" height="2" rx="1" fill="currentColor" />
      <rect y="13" width="32" height="2" rx="1" fill="currentColor" />
    </>
  ),
});

export const Heart = createIcon({
  displayName: 'Heart',
  viewBox: '0 0 17 15',
  defaultProps: {
    width: 5,
    height: 5,
    fill: 'none',
    stroke: 'currentcolor',
  },
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.8285 2.1725C13.2665 0.6105 10.7335 0.6105 9.1715 2.1725C8.8915 2.4525 8.6805 2.7705 8.5005 3.1015C8.3205 2.7705 8.1095 2.4515 7.8285 2.1715C6.2665 0.6095 3.7335 0.6095 2.1715 2.1715C0.6095 3.7335 0.6095 6.2665 2.1715 7.8285L8.5005 14.0005L14.8285 7.8285C16.3915 6.2665 16.3915 3.7345 14.8285 2.1725Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});

export const ImgStack = createIcon({
  displayName: 'ImgStack',
  viewBox: '0 0 13 13',
  path: (
    <>
      <path
        fill="currentColor"
        d="M.751 3h10.5a.709.709 0 01.75.75v7.5a.709.709 0 01-.75.75H.751a.709.709 0 01-.75-.75v-7.5A.709.709 0 01.751 3zm.75 7.5h9v-6h-9v6z"
      />
      <path
        fill="currentColor"
        d="M1.501 0H10.501V1.5H1.501zM3.751 9.75L7.501 6l2.25 3.75h-6z"
      />
    </>
  ),
});

export const Italic = createIcon({
  displayName: 'Italic',
  viewBox: '0 0 12 12',
  d: 'M9 1.5V0H4.5v1.5h.953c.228 0 .403.202.371.428L4.692 9.856a.75.75 0 01-.743.644H3V12h4.5v-1.5h-.953a.375.375 0 01-.371-.428l1.132-7.928a.75.75 0 01.743-.644H9z',
});

export const LeftArrow = createIcon({
  displayName: 'LeftArrow',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 7,
    height: 7,
  },
  path: (
    <>
      <path
        d="m12 1a11 11 0 1 0 11 11 11.013 11.013 0 0 0 -11-11zm0 20a9 9 0 1 1 9-9 9.01 9.01 0 0 1 -9 9z"
        stroke="currentColor"
      />
      <path
        d="m14.707 6.293a1 1 0 0 0 -1.414 0l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414l-4.293-4.293 4.293-4.293a1 1 0 0 0 0-1.414z"
        stroke="currentColor"
      />
    </>
  ),
});

export const RightArrow = createIcon({
  displayName: 'RightArrow',
  viewBox: '0 0 30 30',
  defaultProps: {
    width: 8,
    height: 8,
  },
  path: (
    <path
      id="Shape"
      d="m16 4c6.627417 0 12 5.372583 12 12s-5.372583 12-12 12-12-5.372583-12-12 5.372583-12 12-12zm0 2c-5.5228475 0-10 4.4771525-10 10s4.4771525 10 10 10 10-4.4771525 10-10-4.4771525-10-10-10zm-1.2928932 4.2928932 5.7071068 5.7071068-5.7071068 5.7071068-1.4142136-1.4142136 4.2921068-4.2928932-4.2921068-4.2928932z"
      stroke="currentColor"
      fillRule="nonzero"
    />
  ),
});

export const Drag = createIcon({
  displayName: 'Drag',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'grey',
    width: 8,
    height: 8,
  },
  path: (
    <>
      <circle cx="8" cy="4" r="2" />
      <circle cx="8" cy="12" r="2" />
      <circle cx="8" cy="20" r="2" />
      <circle cx="16" cy="4" r="2" />
      <circle cx="16" cy="12" r="2" />
      <circle cx="16" cy="20" r="2" />
    </>
  ),
});

export const Menu = createIcon({
  displayName: 'Menu',
  viewBox: '0 0 24 6',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <>
      <circle
        cx="12"
        cy="3"
        r="2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
      <circle
        cx="3"
        cy="3"
        r="2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
      <circle
        cx="21"
        cy="3"
        r="2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </>
  ),
});

export const Message = createIcon({
  displayName: 'Message',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 5,
    height: 5,
    stroke: '#000',
    fill: 'none',
  },
  path: (
    <>
      <path
        stroke="currentColor"
        d="M17.268 9.061l-4.266 3.434a2.223 2.223 0 01-2.746 0L5.954 9.061"
      />
      <path
        stroke="currentColor"
        d="M6.888 3.5h9.428c1.36.015 2.653.59 3.58 1.59a5.017 5.017 0 011.326 3.704v6.528a5.017 5.017 0 01-1.326 3.704 4.957 4.957 0 01-3.58 1.59H6.888C3.968 20.616 2 18.241 2 15.322V8.794C2 5.875 3.968 3.5 6.888 3.5z"
      />
    </>
  ),
});

export const Plus = createIcon({
  displayName: 'Plus',
  viewBox: '0 0 22 22',
  defaultProps: {
    width: 5,
    height: 5,
    stroke: 'currentcolor',
    fill: 'currentcolor',
  },
  d: 'M11 6v10M16 11H6',
});

export const Remove = createIcon({
  displayName: 'Remove',
  viewBox: '0 0 512 512',
  d: 'M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm94.273 320.105c8.34 8.344 8.34 21.825 0 30.168a21.275 21.275 0 01-15.086 6.25c-5.46 0-10.921-2.09-15.082-6.25L256 286.164l-64.105 64.11a21.273 21.273 0 01-15.083 6.25 21.275 21.275 0 01-15.085-6.25c-8.34-8.344-8.34-21.825 0-30.169L225.836 256l-64.11-64.105c-8.34-8.344-8.34-21.825 0-30.168 8.344-8.34 21.825-8.34 30.169 0L256 225.836l64.105-64.11c8.344-8.34 21.825-8.34 30.168 0 8.34 8.344 8.34 21.825 0 30.169L286.164 256zm0 0',
});

export const Search = createIcon({
  displayName: 'Search',
  viewBox: '0 0 24 24',
  d: 'M11.611 2C6.303 2 2 6.208 2 11.4c0 5.19 4.303 9.399 9.611 9.399 2.27 0 4.357-.77 6.002-2.058l3.124 3.048.083.07c.29.21.701.186.964-.072a.713.713 0 00-.002-1.023l-3.087-3.012a9.253 9.253 0 002.528-6.353C21.223 6.21 16.92 2 11.612 2zm0 1.448c4.491 0 8.132 3.56 8.132 7.951 0 4.392-3.64 7.952-8.131 7.952S3.48 15.79 3.48 11.399c0-4.391 3.64-7.951 8.131-7.951z',
});

export const Share = createIcon({
  defaultProps: {
    width: 5,
    height: 5,
  },
  displayName: 'Share',
  viewBox: '0 0 17 14',
  d: 'M16 7L9 1v4.033C5.219 5.033 1 6.5 1 13c1.969-3.188 5-4 8-4v4l7-6z',
});

export const ShareCourse = createIcon({
  displayName: 'ShareCourse',
  viewBox: '0 0 17 14',
  d: 'M16 7L9 1v4.033C5.219 5.033 1 6.5 1 13c1.969-3.188 5-4 8-4v4l7-6z',
});

export const SmallMenu = createIcon({
  displayName: 'SmallMenu',
  viewBox: '0 0 12 3',
});

export const SmallStar = createIcon({
  displayName: 'SmallStar',
  viewBox: '0 0 12 12',
  d: 'M11.358 3.788l-3.237-.47L6.673.383c-.253-.512-1.092-.512-1.345 0L3.88 3.317l-3.238.47a.751.751 0 00-.415 1.28L2.57 7.352l-.553 3.224a.75.75 0 001.088.79L6 9.845l2.896 1.522a.751.751 0 001.088-.79l-.552-3.224 2.343-2.283a.752.752 0 00-.417-1.281z',
});

export const Star = createIcon({
  defaultProps: {
    width: 5,
    height: 5,
    fill: 'none',
    stroke: 'grey-s-light',
  },
  displayName: 'Star',
  viewBox: '0 0 24 24',
  path: (
    <path
      stroke="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.7511 2.96585L15.1897 7.87984C15.3092 8.12682 15.5446 8.29947 15.8184 8.34111L21.2766 9.13187C21.4981 9.16215 21.6982 9.27864 21.8323 9.45542C21.9665 9.6322 22.0236 9.85463 21.991 10.0732C21.9636 10.253 21.8765 10.4185 21.7434 10.5439L17.7902 14.3848C17.5904 14.574 17.5008 14.8502 17.5521 15.119L18.5046 20.5319C18.5736 20.978 18.2686 21.3965 17.8188 21.4733C17.6333 21.502 17.4433 21.4724 17.2758 21.3886L12.4082 18.8375C12.165 18.7052 11.8702 18.7052 11.6271 18.8375L6.73083 21.4074C6.32005 21.6157 5.81611 21.4609 5.59727 21.0591C5.51195 20.8971 5.48188 20.7122 5.51154 20.5319L6.46411 15.119C6.51019 14.8506 6.42137 14.5767 6.22597 14.3848L2.24422 10.5439C1.91859 10.2177 1.91859 9.69345 2.24422 9.36721C2.37711 9.24562 2.54233 9.16398 2.72051 9.13187L8.17874 8.34111C8.45127 8.29644 8.68532 8.12472 8.80744 7.87984L11.246 2.96585C11.3424 2.7666 11.5161 2.61425 11.7277 2.54335C11.9393 2.47246 12.171 2.48902 12.3701 2.5893C12.5343 2.67162 12.6678 2.80352 12.7511 2.96585Z"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});

export const Sun = createIcon({
  displayName: 'Sun',
  viewBox: '0 0 24 24',
  d: 'M1 12h1M4.2 4.2l.7.7M12 1v1M19.8 4.2l-.7.7M23 12h-1M19.8 19.8l-.7-.7M12 23v-1M4.2 19.8l.7-.7',
});

export const Verified = createIcon({
  defaultProps: {
    width: 4,
    height: 4,
    fill: 'green.500',
  },
  displayName: 'Verified',
  viewBox: '0 0 16 16',
  path: (
    <>
      <rect width="16" height="16" rx="8" fill="#7FBA7A" />
      <path
        d="M6.8 9L5.2 7.4L4 8.6L6.8 11.4L12 6.2L10.8 5L6.8 9Z"
        fill="white"
      />
    </>
  ),
});

export const VerifiedUser = createIcon({
  displayName: 'VerifiedUser',
  viewBox: '0 0 20 20',
  d: 'M7.5 10c-2.3 0-4.167-2.7-4.167-5v-.833a4.167 4.167 0 018.333 0V5c0 2.3-1.865 5-4.166 5zM10 16.667c0-1.755.778-3.325 2.005-4.394-1.252-.329-2.807-.606-4.505-.606-2.353 0-4.44.531-5.812.994A2.492 2.492 0 000 15.027v3.306h10.245A5.825 5.825 0 0110 16.667zM14.167 19.512l-2.845-2.845 1.178-1.179 1.667 1.667 4.166-4.167 1.179 1.179-5.345 5.345z',
});

export const Video = createIcon({
  displayName: 'Video',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 5,
    height: 5,
    fill: 'none',
    stroke: 'grey-s-dark',
  },
  path: (
    <>
      <path
        stroke="currentColor"
        opacity="0.4"
        d="M17 9.6L18.8314 8.2814C20.1544 7.32887 22 8.27427 22 9.90447V14.0955C22 15.7257 20.1544 16.6711 18.8314 15.7186L17 14.4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        stroke="currentColor"
        x="3"
        y="3"
        width="14"
        height="18"
        rx="4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

export const VideoPlaylist = createIcon({
  displayName: 'VideoPlaylist',
  viewBox: '0 0 20 20',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <>
      <rect
        x="1"
        y="5"
        width="15"
        height="12"
        rx="1"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 8L12 11L7 14V8V8Z"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 1.5H13"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

export const Wallet = createIcon({
  displayName: 'Wallet',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 5,
    height: 5,
    fill: 'none',
  },
  path: (
    <>
      <path
        stroke="currentColor"
        d="M21.639 14.396H17.59a2.693 2.693 0 01-2.693-2.692 2.693 2.693 0 012.693-2.69h4.048M18.049 11.643h-.312"
      />
      <path
        stroke="currentColor"
        d="M7.748 3h8.643a5.248 5.248 0 015.248 5.248v7.177a5.248 5.248 0 01-5.248 5.247H7.748A5.248 5.248 0 012.5 15.425V8.248A5.248 5.248 0 017.748 3z"
      />
      <path stroke="currentColor" d="M7.036 7.538h5.399" />
    </>
  ),
});

export const Wishlist = createIcon({
  displayName: 'Wishlist',
  viewBox: '0 0 20 19',
  d: 'M13.85 0c.631 0 1.261.09 1.86.29 3.691 1.2 5.021 5.25 3.91 8.79a12.728 12.728 0 01-3.009 4.81 38.456 38.456 0 01-6.331 4.96l-.25.15-.26-.16a38.094 38.094 0 01-6.369-4.96A12.933 12.933 0 01.39 9.08C-.74 5.54.59 1.49 4.321.27c.29-.1.589-.17.889-.21h.12c.281-.04.56-.06.84-.06h.11c.63.02 1.24.13 1.831.33h.059c.04.02.07.04.09.06.221.07.43.15.63.26l.38.17c.092.05.195.124.284.189.056.04.107.078.146.101l.05.03c.085.05.175.101.25.16A6.263 6.263 0 0113.85 0zm2.66 7.2c.41-.01.76-.34.79-.76v-.12a3.3 3.3 0 00-2.11-3.16.8.8 0 00-1.01.5c-.14.42.08.88.5 1.03.641.24 1.07.87 1.07 1.57v.03a.86.86 0 00.19.62c.14.17.35.27.57.29z',
});

export const Profile = createIcon({
  displayName: 'Profile',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0043 2C9.07027 2 6.69177 4.38864 6.69177 7.33517C6.69177 10.2817 9.07027 12.6703 12.0043 12.6703C14.9383 12.6703 17.3168 10.2817 17.3168 7.33517C17.3168 4.38864 14.9383 2 12.0043 2ZM12.0043 3.44767C14.1422 3.44767 15.8753 5.18816 15.8753 7.33517C15.8753 9.48218 14.1422 11.2227 12.0043 11.2227C9.8664 11.2227 8.1333 9.48218 8.1333 7.33517C8.1333 5.18816 9.8664 3.44767 12.0043 3.44767ZM9.83005 14.8209C9.05233 14.8749 8.26621 14.9859 7.4908 15.1521C5.99418 15.4604 4.79685 16.0763 4.28724 17.0999C4.09503 17.5002 3.99839 17.9288 4.00002 18.3627C3.99944 18.7935 4.0953 19.2227 4.28062 19.6153C4.76994 20.6271 5.8278 21.1997 7.25624 21.5171L7.51213 21.5705C8.26648 21.7407 9.05284 21.8553 9.84446 21.909C9.91189 21.9288 10.0726 21.9472 10.248 21.9561L10.3922 21.9615C10.4664 21.9633 10.5506 21.9637 10.676 21.9637C11.8138 22.0263 12.9934 22.0081 14.1675 21.9081C14.7932 21.8653 15.4231 21.7835 16.0477 21.6636L16.5151 21.5666C18.0576 21.2623 19.2126 20.6836 19.7186 19.6164C20.0937 18.8241 20.0937 17.9047 19.7188 17.1127C19.214 16.0483 18.0737 15.4744 16.5034 15.1509C15.8873 15.0194 15.2612 14.922 14.6307 14.8599L14.1697 14.8209C12.7259 14.6935 11.2738 14.6935 9.83005 14.8209ZM14.0436 16.263L14.0562 16.264C14.7799 16.3149 15.4991 16.4165 16.2087 16.568C17.3751 16.8083 18.1667 17.2067 18.4171 17.7348C18.6057 18.133 18.6057 18.5958 18.4169 18.9944C18.1829 19.4879 17.472 19.8691 16.4445 20.1021L16.2195 20.1498C15.496 20.3112 14.7791 20.4152 14.0576 20.4647C12.9379 20.5599 11.8249 20.5771 10.7148 20.5171L10.3212 20.5103C10.2119 20.5048 10.1198 20.4942 10.0345 20.4771C9.35872 20.4261 8.75066 20.3454 8.16027 20.2283L7.80775 20.1537C6.63771 19.9244 5.83915 19.5243 5.58024 18.989C5.48964 18.797 5.44125 18.5803 5.44154 18.3609C5.44073 18.1428 5.48848 17.931 5.58118 17.7379C5.83293 17.2324 6.67919 16.7971 7.78606 16.569C8.50073 16.4159 9.21962 16.3144 9.94294 16.264C11.316 16.143 12.6837 16.143 14.0436 16.263Z"
      fill="currentColor"
    />
  ),
});

export const Chat = createIcon({
  displayName: 'Chat',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.058 2.00023C8.54635 1.98612 5.28554 3.807 3.46059 6.80009C1.63541 9.79358 1.51288 13.5226 3.13765 16.6291L3.32147 16.9875C3.39175 17.1192 3.40531 17.2613 3.36458 17.3926C3.10204 18.0865 2.87136 18.8357 2.6873 19.597L2.66776 19.7609C2.66776 20.5263 3.07616 21.0523 3.88671 21.0343L4.02167 21.018C4.75798 20.8554 5.4831 20.646 6.19261 20.3909C6.28665 20.3671 6.4407 20.3763 6.57971 20.4332L7.26224 20.8194C7.26378 20.8242 7.26493 20.8278 7.27208 20.8319L7.31788 20.848C10.9929 22.7804 15.4812 22.2473 18.5997 19.5079C21.7187 16.7681 22.8199 12.3901 21.3675 8.50386C19.9153 4.61802 16.2115 2.03076 12.058 2.00023ZM11.7675 3.39902L12.0484 3.39462C15.6231 3.42181 18.8109 5.64861 20.0605 8.99234C21.31 12.3357 20.3626 16.1021 17.6788 18.4596L17.4587 18.6466C14.8626 20.778 11.2582 21.2076 8.23269 19.7468L7.94496 19.6026L7.95729 19.6042L7.93909 19.5993L7.51677 19.3569C7.36471 19.271 7.24408 19.2059 7.14685 19.159C6.6837 18.9681 6.21354 18.9399 5.77133 19.0617L5.35272 19.2055C5.07605 19.2969 4.80372 19.3794 4.53273 19.4541L4.13767 19.5573L4.04356 19.9249C4.21419 19.2192 4.42804 18.5246 4.68389 17.8451C4.84853 17.3183 4.79818 16.7905 4.55755 16.3402L4.37662 15.9873C2.97627 13.3099 3.08168 10.1019 4.65196 7.52648C6.17338 5.0312 8.85494 3.48235 11.7675 3.39902ZM6.4746 12.0002C6.4746 11.37 6.98586 10.8596 7.61596 10.8596C8.24606 10.8596 8.75732 11.37 8.75732 12.0002C8.75732 12.6304 8.24606 13.1408 7.61596 13.1408C6.98586 13.1408 6.4746 12.6304 6.4746 12.0002ZM10.9115 12.0002C10.9115 11.37 11.4227 10.8596 12.0528 10.8596C12.6829 10.8596 13.1942 11.37 13.1942 12.0002C13.1942 12.6304 12.6829 13.1408 12.0528 13.1408C11.4227 13.1408 10.9115 12.6304 10.9115 12.0002ZM16.4897 10.8596C15.8596 10.8596 15.3484 11.37 15.3484 12.0002C15.3484 12.6304 15.8596 13.1408 16.4897 13.1408C17.1198 13.1408 17.6311 12.6304 17.6311 12.0002C17.6311 11.37 17.1198 10.8596 16.4897 10.8596Z"
      fill="currentColor"
    />
  ),
});

export const Bag = createIcon({
  displayName: 'Bag',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <path
      d="M21 17h-1 1Zm-1-6 1-1-1 1ZM3 17h1-1Zm1-6-1-1 1 1Zm1-3Zm2-1v1-1Zm0 0Zm2-4V2v1Zm6 0h-1 1Zm2 4Zm0 0v1-1Zm-1 0v1-1ZM8 7v1-1Zm8 5h-1 1Zm5 4v-6l-1 1v6l1-1Zm-5 7 4-2c1-1 2-3 1-5l-1 1v3l-4 2v1Zm-8 0h8v-1H8v1Zm-5-7c-1 3 0 4 1 5l4 2v-1l-4-1v-4l-1-1Zm0-6v6l1 1v-6l-1-1Zm2-2-2 2 1 1 1-2V8Zm2-1L5 8v1l2-1V7ZM6 7h1-1Zm3-5C7 3 6 5 6 7h1l3-4-1-1Zm6 0H9l1 1h4l1-1Zm3 5c0-2-1-4-3-5l-1 1 3 4h1Zm0 0h-1 1Zm3 3c-1-2-2-3-4-3v1l3 3 1-1Zm-9-7c-2 0-4 2-4 4h1c0-1 1-3 3-3V3Zm4 4c0-2-2-4-4-4v1c2 0 3 2 3 3h1Zm0 0h-1 1ZM8 8h8V7H8v1Zm0-1h1-1Zm1 5H8l1 1v-1Zm0 0v1l1-1H9Zm0-1v1h1l-1-2v1Zm0 1v-2l-1 2h1Zm6 0v1h1l-1-1Zm0 0 1 1v-1h-1Zm0-1v1h1l-1-2v1Zm0 1v-2l-1 2h1Zm0 0h-1l1 1v-1Z"
      fill="currentColor"
    />
  ),
});

export const Chart = createIcon({
  displayName: 'Chart',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <>
      <path
        opacity="0.4"
        d="M7.37145 10.2017V17.0618"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M12.0381 6.91913V17.0618"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M16.6286 13.8268V17.0618"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

export const Home = createIcon({
  displayName: 'Home',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <path
      d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714"
      stroke="currentColor"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});

export const Settings = createIcon({
  displayName: 'Settings',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8067 7.62357L20.1842 6.54348C19.6577 5.62956 18.4907 5.31427 17.5755 5.83867V5.83867C17.1399 6.0953 16.6201 6.16811 16.1307 6.04104C15.6413 5.91398 15.2226 5.59747 14.9668 5.16133C14.8023 4.8841 14.7139 4.56835 14.7105 4.24599V4.24599C14.7254 3.72918 14.5304 3.22836 14.17 2.85762C13.8096 2.48689 13.3145 2.27782 12.7975 2.27803H11.5435C11.037 2.27802 10.5513 2.47987 10.194 2.8389C9.83669 3.19793 9.63717 3.68455 9.63961 4.19107V4.19107C9.6246 5.23688 8.77248 6.07677 7.72657 6.07666C7.40421 6.07331 7.08846 5.9849 6.81123 5.82036V5.82036C5.89606 5.29597 4.72911 5.61125 4.20254 6.52517L3.53435 7.62357C3.00841 8.53635 3.3194 9.70256 4.23 10.2323V10.2323C4.8219 10.574 5.18653 11.2055 5.18653 11.889C5.18653 12.5725 4.8219 13.204 4.23 13.5458V13.5458C3.32056 14.0719 3.00923 15.2353 3.53435 16.1453V16.1453L4.16593 17.2346C4.41265 17.6797 4.8266 18.0082 5.31619 18.1474C5.80578 18.2865 6.33064 18.2249 6.77462 17.976V17.976C7.21108 17.7213 7.73119 17.6515 8.21934 17.7822C8.70749 17.9128 9.12324 18.233 9.37416 18.6716C9.5387 18.9488 9.62711 19.2646 9.63046 19.587V19.587C9.63046 20.6435 10.487 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9089 18.6 15.2682 18.2407C15.6275 17.8814 16.1155 17.6806 16.6236 17.6831C16.9452 17.6917 17.2596 17.7797 17.5389 17.9394V17.9394C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8067 16.1453C21.0618 15.7075 21.1318 15.186 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6718 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8873 19.1603 11.3658 19.4154 10.9279C19.5812 10.6383 19.8214 10.3982 20.111 10.2323V10.2323C21.0161 9.70285 21.3264 8.54345 20.8067 7.63272V7.63272V7.62357Z"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        opacity="0.4"
        cx="12.1751"
        cy="11.889"
        r="2.63616"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

export const Logout = createIcon({
  displayName: 'Logout',
  viewBox: '0 0 490 490',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <>
      <path
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m474.667969 251h-309.335938c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h309.335938c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
      />
      <path
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m250.667969 336.332031c-4.097657 0-8.191407-1.554687-11.308594-4.691406l-85.332031-85.332031c-6.25-6.253906-6.25-16.386719 0-22.636719l85.332031-85.332031c6.25-6.25 16.382813-6.25 22.636719 0 6.25 6.25 6.25 16.382812 0 22.632812l-74.027344 74.027344 74.027344 74.027344c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.234375 4.671875-11.328125 4.671875zm0 0"
      />
      <path
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m234.667969 469.667969c-129.386719 0-234.667969-105.28125-234.667969-234.667969s105.28125-234.667969 234.667969-234.667969c97.085937 0 182.804687 58.410157 218.410156 148.824219 3.242187 8.210938-.8125 17.492188-9.023437 20.753906-8.214844 3.203125-17.496094-.789062-20.757813-9.042968-30.742187-78.082032-104.789063-128.535157-188.628906-128.535157-111.746094 0-202.667969 90.925781-202.667969 202.667969s90.921875 202.667969 202.667969 202.667969c83.839843 0 157.886719-50.453125 188.628906-128.511719 3.242187-8.257812 12.523437-12.246094 20.757813-9.046875 8.210937 3.242187 12.265624 12.542969 9.023437 20.757813-35.605469 90.390624-121.324219 148.800781-218.410156 148.800781zm0 0"
      />
    </>
  ),
});

export const CheckBox = createIcon({
  displayName: 'CheckBox',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <>
      <rect
        x="1"
        y="1"
        width="14"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeOpacity="0.49776"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

export const CheckBoxChecked = createIcon({
  displayName: 'CheckBoxChecked',
  viewBox: '0 0 16 16',
  defaultProps: {
    width: 8,
    height: 8,
  },
  path: (
    <>
      <rect width="16" height="16" rx="4" fill="#6C5DD3" />
      <path
        d="M6.8 8.2998L5.2 6.6998L4 7.8998L6.8 10.6998L12 5.4998L10.8 4.2998L6.8 8.2998Z"
        fill="white"
      />
    </>
  ),
});

export const ChatFill = createIcon({
  displayName: 'ChatFill',
  viewBox: '0 0 20 20',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <path
      d="M9 1C4.6 1 1 4.1 1 8C1 11.9 4.6 15 9 15C9.4 15 9.8 15 10.1 14.9L15 17V12.6C16.2 11.4 17 9.8 17 8C17 4.1 13.4 1 9 1Z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
  ),
});

export const List = createIcon({
  displayName: 'List',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 6,
    height: 6,
  },
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 4.5H18.5C19.052 4.5 19.5 4.948 19.5 5.5V18.5C19.5 19.052 19.052 19.5 18.5 19.5H5.5C4.948 19.5 4.5 19.052 4.5 18.5V5.5C4.5 4.948 4.948 4.5 5.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8.5 9.5H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8.5 14.5H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
});

export const Folder = createIcon({
  displayName: 'Folder',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.9446 15.7579C21.9446 19.336 19.836 21.4446 16.2579 21.4446H8.47173C4.88444 21.4446 2.77588 19.336 2.77588 15.7579V7.9626C2.77588 4.38444 4.09031 2.27588 7.66847 2.27588H9.66749C10.3858 2.27588 11.0621 2.61406 11.4931 3.18868L12.4059 4.40269C12.8378 4.97618 13.5135 5.31406 14.2315 5.31549H17.0611C20.6484 5.31549 21.972 7.14108 21.972 10.7923L21.9446 15.7579Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        opacity="0.4"
        d="M7.55884 14.4891H17.1523"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
});

export const Like = createIcon({
  displayName: 'Like',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 6,
    height: 6,
  },
  path: (
    <>
      <rect
        x="4.5"
        y="11.5"
        width="3"
        height="8"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 19.5H16.4C17.3372 19.4998 18.1486 18.8489 18.352 17.934L19.463 12.934C19.5948 12.3412 19.4501 11.7206 19.0696 11.2472C18.6892 10.7738 18.1143 10.4989 17.507 10.5H13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5L9.5 10.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

export const Trending = createIcon({
  displayName: 'Trending',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <>
      <path
        opacity="0.4"
        d="M7.24487 14.7815L10.238 10.8913L13.6522 13.5732L16.5813 9.79291"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="19.9954"
        cy="4.20024"
        r="1.9222"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9245 3.12015H7.65679C4.64535 3.12015 2.77808 5.25287 2.77808 8.26431V16.3467C2.77808 19.3581 4.60874 21.4817 7.65679 21.4817H16.2609C19.2724 21.4817 21.1396 19.3581 21.1396 16.3467V9.30779"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
