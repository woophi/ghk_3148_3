import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: 'calc(100% - 24px)',
  padding: '12px',
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

const container = style({
  display: 'flex',
  padding: '21px',
  flexDirection: 'column',

  gap: '16px',
});

const btnContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'left',
  gap: '1rem',
});
const btn = style({
  borderRadius: '24px',
  padding: '1rem',
});

const slid = style({
  width: 'calc(100% - var(--slider-input-progress-margin-horizontal) * 2) !important',
});
const slider = style({
  borderRadius: '1rem !important',
});

const box = style({
  backgroundColor: '#F3F4F5',
  borderRadius: '1rem',
  padding: '12px 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  margin: '.5rem 0',
});

const row = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  padding: '8px 0',
});
const img = style({
  display: 'flex',
  backgroundColor: '#F2F3F5',
  borderRadius: '1rem',
  width: '48px',
  height: '48px',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
});
const rowText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const appSt = {
  bottomBtn,
  container,
  btnContainer,
  btn,
  slid,
  slider,
  box,
  row,
  img,
  rowText,
};
