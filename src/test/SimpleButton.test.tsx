import { render, screen } from "@testing-library/react";
import { SimpleButton } from "../components/SimpleButton";
import userEvent from "@testing-library/user-event";

describe("SimpleButton", () => {
    test("should call onClick", async () => {
        const onClickMock = jest.fn();
        // 1. コンポーネントの描画
        render(<SimpleButton onClick={onClickMock}>ボタン</SimpleButton>);
        // 2. <button></button>を取得
        const button = screen.getByRole("button")
        // 3. <button></button>をクリック
        userEvent.click(button);
        // 4. クリック時に引数に渡された関数が実行されているか確認する
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    test("should not call onClick", async () => {
        const onClickMock = jest.fn();
        // 1. コンポーネントの描画
        render(<SimpleButton onClick={onClickMock} isDisabled>ボタン</SimpleButton>);
        // 2. <button></button>を取得
        const button = screen.getByRole("button")
        // 3. <button></button>をクリック
        userEvent.click(button);
        // 4. クリック時に引数に渡された関数が実行されていないか確認する
        expect(onClickMock).toHaveBeenCalledTimes(0);
    });
});