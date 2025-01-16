import React from 'react';

function FormateDate(date) {
  return date ? date.split("T")[0] : "";
}

export default FormateDate;
