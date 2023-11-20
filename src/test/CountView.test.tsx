import { render, screen } from "@testing-library/react"
import { CountView } from "../components/SimpleCounter"

describe("CountView", () => {
    test("propsが渡されているか", async () => {
        const count = 0;
        render(<CountView count={count} />);
        const countText = screen.queryByText(`カウント：`)?.textContent;
        expect(countText).toBe(`カウント：${count}`)
    })
})