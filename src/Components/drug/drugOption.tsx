/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as s from "../../styles/drugSearchStyle";
import {colorShape} from "./drugOprionData";

// 약품 검색 옵션 상태 관리 (useState)
interface SelectedDrugOption {
  shape: string;
  color: string;
  line: string;
}

const optionInitialData: SelectedDrugOption = {
  shape: '전체',
  color: '전체',
  line: '전체'
}

// const selectedDrugOption: SelectedDrugOption = {
//   shape:drugShape,
//   color:colorShape,
//   line:lineShape
// }

// const optionInitialization: SelectedDrugOption = {
//   shape: {}
// }

export default function Index01() {
  const [selectedDrugOption, setSelectedDrugOption] = useState<SelectedDrugOption>(optionInitialData);


  const handleColorShapeClick = (selectedDrugOption: SelectedDrugOption) => {
    setSelectedDrugOption(selectedDrugOption);
  };

  
  return (
    <>
      <div css={s.csearchSt}>
        <div css={s.colorLt}>
          {colorShape.map((shape) => (
            <div
              key={shape.id}
              onClick={() => handleColorShapeClick(selectedDrugOption)}
              css={shape.style} 
            >
              {shape.name}
            </div>
          ))}
          <hr />
          <div>
            {selectedDrugOption && (
              <div>
                선택한 색상: {selectedDrugOption.color} / 선택한 모양: {selectedDrugOption.shape} / 선택한 분할선:{selectedDrugOption.line}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}