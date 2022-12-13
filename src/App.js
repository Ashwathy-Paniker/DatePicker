import logo from "./logo.svg";
import "./App.css";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Input } from '@chakra-ui/react'
import DatePicker from "./DatePicker";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const d = new Date();
  // const years = range(2004, d.getFullYear() + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    // <DatePicker
    //   renderCustomHeader={({
    //     date,
    //     changeYear,
    //     changeMonth,
    //     decreaseMonth,
    //     increaseMonth,
    //     prevMonthButtonDisabled,
    //     nextMonthButtonDisabled,
    //   }) => (
    //     <div
    //       style={{
    //         margin: 10,
    //         display: "flex",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
    //         {"<"}
    //       </button>
    //       <select
    //         value={d.getFullYear()}
    //         onChange={({ target: { value } }) => changeYear(value)}
    //       >
    //         {years.map((option) => (
    //           <option key={option} value={option}>
    //             {option}
    //           </option>
    //         ))}
    //       </select>

    //       <select
    //         value={months[d.getMonth()]}
    //         onChange={({ target: { value } }) =>
    //           changeMonth(months.indexOf(value))
    //         }
    //       >
    //         {months.map((option) => (
    //           <option key={option} value={option}>
    //             {option}
    //           </option>
    //         ))}
    //       </select>

    //       <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
    //         {">"}
    //       </button>
    //     </div>
    //   )}
    //   selected={startDate}
    //   onChange={(date) => setStartDate(date)}
    // />
    <>
      <DatePicker/>
      {/* <Input
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
        min='2004-12-01'
        max='2022-12-01'
      /> */}
            {/* end:<input type='date' min='2004-12-01' max='2022-12-01'/> */}

    </>
  );
}

export default App;
