import React from 'react'

import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

export { FaBook as LyricIcon } from 'react-icons/fa'
export { FaHeadphones as FaHeadphonesIcon } from 'react-icons/fa'
export { FaRegMinusSquare as FaMinusSquareOIcon } from 'react-icons/fa'
export { FaSpinner as LoadIcon } from 'react-icons/fa'
export { FaSyncAlt as ReloadIcon } from 'react-icons/fa'
export { FiChevronsDown as ArrowDownIcon } from 'react-icons/fi'
export { GoMute as VolumeMuteIcon } from 'react-icons/go'
export { GoUnmute as VolumeUnmuteIcon } from 'react-icons/go'
export { MdClose as CloseIcon } from 'react-icons/md'
export { MdLibraryMusic as EmptyIcon } from 'react-icons/md'
export { MdRepeat as RepeatIcon } from 'react-icons/md'
export { MdRepeatOne as LoopIcon } from 'react-icons/md'
export { MdSkipPrevious as PrevAudioIcon } from 'react-icons/md'
export { MdViewHeadline as OrderPlayIcon } from 'react-icons/md'
export { MdSkipNext as NextAudioIcon } from 'react-icons/md'
export { RiDeleteBinLine as DeleteIcon } from 'react-icons/ri'
export { RiPlayList2Fill as PlayListsIcon } from 'react-icons/ri'
export { TiArrowShuffle as ShufflePlayIcon } from 'react-icons/ti'
export { TiDownload as DownloadIcon } from 'react-icons/ti'

export const AnimatePlayIcon = () => (
  <FaPlayCircle className="react-jinke-music-player-play-icon" />
)
export const AnimatePauseIcon = () => (
  <FaPauseCircle className="react-jinke-music-player-pause-icon" />
)
