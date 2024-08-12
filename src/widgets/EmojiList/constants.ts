import {EmojiItemType, Emotion} from '@entities/EmojiListItem';
import EmojiAnger from '@shared/assets/image/EmojiAnger.png';
import EmojiAnticipation from '@shared/assets/image/EmojiAnticipation.png';
import EmojiDisgust from '@shared/assets/image/EmojiDisgust.png';
import EmojiFear from '@shared/assets/image/EmojiFear.png';
import EmojiJoy from '@shared/assets/image/EmojiJoy.png';
import EmojiSadness from '@shared/assets/image/EmojiSadness.png';
import EmojiSurprise from '@shared/assets/image/EmojiSurprise.png';
import EmojiTrust from '@shared/assets/image/EmojiTrust.png';

// export const emojiItemList: EmojiItemType[] = [
//   {key: '0', title: '신뢰 Trust', source: EmojiTrust},
//   {key: '1', title: '두려움 Fear', source: EmojiFear},
//   {key: '2', title: '놀라움 Surprise', source: EmojiSurprise},
//   {key: '3', title: '슬품 Sadness', source: EmojiSadness},
//   {key: '4', title: '혐오 Disgust', source: EmojiDisgust},
//   {key: '5', title: '분노 Anger', source: EmojiAnger},
//   {key: '6', title: '기대 Anticipation', source: EmojiAnticipation},
//   {key: '7', title: '기쁨 Joy', source: EmojiJoy},
// ];

export const emojiItemList: EmojiItemType[] = [
  {key: '0', title: Emotion.TRUST, source: EmojiTrust},
  {key: '1', title: Emotion.FEAR, source: EmojiFear},
  {key: '2', title: Emotion.SURPRISE, source: EmojiSurprise},
  {key: '3', title: Emotion.SADNESS, source: EmojiSadness},
  {key: '4', title: Emotion.DISGUST, source: EmojiDisgust},
  {key: '5', title: Emotion.ANGER, source: EmojiAnger},
  {key: '6', title: Emotion.ANTICIPATION, source: EmojiAnticipation},
  {key: '7', title: Emotion.JOY, source: EmojiJoy},
];
