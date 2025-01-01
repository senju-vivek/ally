
import { render,screen } from "@testing-library/react";
import React from "react";
import Form from "./form";

describe('Form component',() => {
    it("Contains input box",() => {
        render(<Form/>)
        let checkInput = screen.getByRole("textbox")
        expect(checkInput).toBeInTheDocument()
    }  )
} )