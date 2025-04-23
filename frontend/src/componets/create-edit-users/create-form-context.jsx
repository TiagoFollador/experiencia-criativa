import React, { createContext, useState } from "react";
import { Form, useForm, useFormContext } from "react-hook-form";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const methods = useForm();

  return (
    <FormContext.Provider value={ methods }>
      {children}
    </FormContext.Provider>
  );
};