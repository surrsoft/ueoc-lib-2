import React from 'react';

interface Props {
  w?: number
  h?: number
}

export function UeocEmpty (props: Props) {
  return <div style={{width: props.w || 0, height: props.h || 0}} />
}
