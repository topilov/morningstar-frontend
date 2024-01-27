import React, { useState } from "react";

interface FormState {
    [key: string]: string,
}

interface CheckboxState {
    showPassword: boolean,
}

interface FormHook {
    formState: FormState,
    checkboxState: CheckboxState,
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const useAuthForm = (initialFormState: FormState, initialCheckboxState: CheckboxState): FormHook => {
    const [formState, setFormState] = useState(initialFormState)
    const [checkboxState, setCheckboxState] = useState(initialCheckboxState)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormState((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target
        setCheckboxState((prevState) => ({ ...prevState, showPassword: checked }))
    }

    return { formState, checkboxState, handleInputChange, handleCheckboxChange }
}