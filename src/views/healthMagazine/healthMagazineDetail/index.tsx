/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React from 'react'
import HealthMagazineDetail from "../../../components/HealthMagazine/HealthMagazineDetail";

export default function Index() {
  
  return (
    <div css={s.contSt}>
      <div css={s.conttSt}>
        <HealthMagazineDetail />
      </div>
    </div>
  )
}
