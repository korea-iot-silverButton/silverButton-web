/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "../../../styles/drugSearchStyle";
import { SelectedDrugOption } from "../../../types/DrugSearchListType";
import {
  drugColor,
  drugShape,
  drugLine,
} from "../../../constants/DrugSearchList";
import axios from "axios";

const optionInitialData: SelectedDrugOption = {
  shape: "전체",
  color: "전체",
  line: "전체",
};

export default function Index() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedDrugOption, setSelectedDrugOption] =
    useState<SelectedDrugOption>(optionInitialData);
  const [visibleColors, setVisibleColors] = useState(5);
  const navigate = useNavigate();

  const callApi = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=jptKXkEhoWS2pwVQ34adwBGaLMbSQxl8jipaqrcP3oFbUD%2BVSG73q0mvxhSxJ46NK3v%2BsGLTPy0bH0oTQmuSdQ%3D%3D&pageNo=1&numOfRows=10&type=json&itemName=활명수"
      );
      setData(response.data);

      navigate("/medicineListPage", { state: { data: response.data } });
    } catch (err) {
      const error = err as Error;
      console.error("Caught error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleShapeClick = (shapeName: string) => {
    setSelectedDrugOption((prev) => ({
      ...prev,
      shape: shapeName,
    }));
  };

  const handleColorClick = (colorName: string) => {
    setSelectedDrugOption((prev) => ({
      ...prev,
      color: colorName,
    }));
  };

  const handleLineClick = (lineName: string) => {
    setSelectedDrugOption((prev) => ({
      ...prev,
      line: lineName,
    }));
  };

  const handleShowMoreColors = () => {
    setVisibleColors((prev) => prev + 7);
  };

  const handleShowLessColors = () => {
    setVisibleColors(7);
  };

  return (
    <>
      <div css={s.contSt}>
        <div css={s.conttSt}>
          <h1 css={s.headerSt}>실버니즈 약품 검색</h1>
          <div css={s.nameSt}>
            약품 이름으로 검색
            <input
              css={s.inputSt}
              type="text"
              placeholder="검색하고자 하는 약품 이름을 입력해주세요."
            />
            <button onClick={callApi} disabled={loading} css={s.s1buttonSt}>
              {loading ? "검색중" : "검색"}
            </button>
            {error && <p>Error: {error}</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
          </div>

          <div css={s.shapeSt}>
            <div css={s.medicineAll}>
              <div css={s.medicineName1}>약품 모양 선택</div>
            <div css={s.shapeLt}>
              {drugShape.map((shape) => (
                <div
                  className="shape"
                  key={shape.id}
                  onClick={() => handleShapeClick(shape.name)}
                  css={[
                    shape.style,
                    selectedDrugOption.shape === shape.name && s.selectSt,
                  ]}
                >
                  {shape.icon}
                  <div css={s.Text}>{shape.name}</div>
                </div>
              ))}
            </div>
            </div>
          </div>

          <div css={s.shapeSt}>
            <div css={s.medicineAll}>
            <div css={s.medicineName1}>약품 색상 선택</div>
            <div css={s.colorLt}>
              {drugColor.slice(0, visibleColors).map((color) => (
                <div
                  className="color"
                  key={color.id}
                  onClick={() => handleColorClick(color.name)}
                  css={[
                    color.style,
                    selectedDrugOption.color === color.name && s.selectSt,
                  ]}
                >
                  {color.icon}
                  <div css={s.Text}>{color.name}</div>
                </div>
              ))}
            </div>
            </div>
            <div css={s.arrowButtonSt}>
              {visibleColors < drugColor.length ? (
                <button
                  onClick={handleShowMoreColors}
                  style={{ fontSize: "30px" }}
                >
                  +
                </button>
              ) : (
                <button
                  onClick={handleShowLessColors}
                  style={{ fontSize: "30px" }}
                >
                  −
                </button>
              )}
            </div>
          </div>

          <div css={s.shapeSt}>
            <div css={s.medicineAll}>
              <div css={s.medicineName1}>약품 분할선 선택</div>
            <div css={s.lineLi}>
              {drugLine.map((line) => (
                <div
                  className="line"
                  key={line.id}
                  onClick={() => handleLineClick(line.name)}
                  css={[
                    line.style,
                    selectedDrugOption.line === line.name && s.selectSt,
                  ]}
                >
                  {line.icon}
                  <div css={s.Text}>{line.name}</div>
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* <div>
            {selectedDrugOption && (
              <div>
                선택한 모양: {selectedDrugOption.shape} / 선택한 색상:{" "}
                {selectedDrugOption.color} / 선택한 분할선:{" "}
                {selectedDrugOption.line}
              </div>
            )}
          </div> */}

          <div css={s.buttonCT}>
            <button css={s.s2buttonSt}>검색</button>
            <button
              css={s.s2buttonSt}
              onClick={() => setSelectedDrugOption(optionInitialData)}
            >
              초기화
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
