import React, { useEffect, useRef, useState } from "react";
import "moment/locale/ja";
import moment from "moment-timezone";

const SelectTimeZone = () => {
  const [timezone, setTimezone] = useState("Asia/Tokyo");
  const [showOptions, setShowOptions] = useState(false);
  const [importantTimezones, setImportantTimezones] = useState([
    {
      label: "ロンドン",
      value: "Europe/London",
      image: "https://www.svgrepo.com/show/242303/united-kingdom-uk.svg",
      utc: "+00:00",
      isSelected: false,
    },
    {
      label: "ドバイ",
      value: "Asia/Dubai",
      image: "https://www.svgrepo.com/show/242287/united-arab-emirates.svg",
      utc: "+04:00",
      isSelected: false,
    },
    {
      label: "東京",
      value: "Asia/Tokyo",
      image: "https://www.svgrepo.com/show/242294/japan.svg",
      utc: "+09:00",
      isSelected: true,
    },
    {
      label: "シドニー",
      value: "Australia/Sydney",
      image: "https://www.svgrepo.com/show/242348/australia.svg",
      utc: "+11:00",
      isSelected: false,
    },
    {
      label: "ニューヨーク",
      value: "America/New_York",
      image:
        "https://www.svgrepo.com/show/242307/united-states-of-america-united-states.svg",
      utc: "-05:00",
      isSelected: false,
    },

    {
      label: "ロサンゼルス",
      value: "America/Los_Angeles",
      image:
        "https://www.svgrepo.com/show/242307/united-states-of-america-united-states.svg",
      utc: "-08:00",
      isSelected: false,
    },
  ]);

  useEffect(() => {
    moment.locale("ja"); // 日本語ロケールを設定
  }, []);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleTimezoneChange = (timezoneValue) => {
    setImportantTimezones((prevTimezones) => {
      return prevTimezones.map((tz) => {
        tz.isSelected = tz.value === timezoneValue;
        return tz;
      });
    });
    setTimezone(timezoneValue);
  };
  const wrapperRef = useRef(null);

  useEffect(() => {
    /**
     * 選択肢以外をクリックした場合、選択肢を閉じる。
     */
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    // ページが読み込まれたら、クリックイベントのリスナーを追加
    document.addEventListener("mousedown", handleClickOutside);

    // コンポーネントがアンマウントされるとき、クリックイベントのリスナーを削除
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div class="relative text-left w-[90%] mx-auto">
      <div className="flex justify-between items-center px-2">
        <div>
          <img
            onClick={toggleOptions}
            className="w-8 h-8"
            src="https://www.svgrepo.com/show/287560/earth.svg"
            alt=""
          />
        </div>
        <div className="font-bold">
          <div className="text-red-700">1 BTC = 22009.26 USD</div>
          <div className="text-green-700">1 BTC = 20874.23 EUR</div>
        </div>
      </div>
      {showOptions && (
        <div
          ref={wrapperRef}
          id="timezone"
          value={timezone}
          class="absolute left-0 top-20 z-10 mt-2 py-1 w-[17rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-700"
        >
          <div className="flex flex-col">
            {importantTimezones.map((timezone, index) => (
              <div
                onClick={() => handleTimezoneChange(timezone.value)}
                key={index}
                className={` flex space-x-1 justify-center items-center py-2 ${
                  timezone.isSelected ? "bg-blue-600 text-white" : ""
                } ${index === 0 ? "" : "border-t-2"}`}
              >
                <p className="text-sm">(UTC{timezone.utc})</p>
                <button
                  key={timezone.value}
                  value={timezone.value}
                  className="font-bold"
                >
                  {timezone.label}
                </button>
                <img className="w-6 h-6" src={timezone.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      )}
      <p className="mt-2">
        {moment().tz(timezone).format("LLLL")} (UTC
        {moment().tz(timezone).utcOffset() / 60}:00)
      </p>
    </div>
  );
};

export default SelectTimeZone;
