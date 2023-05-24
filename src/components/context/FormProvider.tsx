"use client";
import { createContext, useContext, useState } from "react";

// TODO: add typing

const FormContext = createContext<any>({});

interface Props {
	children: React.ReactNode;
}

const FormProvider = ({ children }: Props) => {
	const [formData, setFormData] = useState({});
	return (
		<FormContext.Provider value={{ formData, setFormData }}>
			{children}
		</FormContext.Provider>
	);
};

export const useForm = () => useContext(FormContext);
export default FormProvider;
