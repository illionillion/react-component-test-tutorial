import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../hooks/useCounter";

describe("useCounter", () => {
  test("should add count", () => {
    // 1. hookのレンダーにrenderHookを使う
    const { result } = renderHook(() => useCounter(0));

    // countが0かどうか
    expect(result.current.count).toBe(0);

    act(() => {
      // 2. useCounterから返されるaddCountを実行してテスト
      result.current.addCount();
    });
    // 3. 本当にインクリメントされたかを確認
    expect(result.current.count).toBe(1);
  });

  test("should minus count", () => {
    // hookのレンダーにrenderHookを使う
    const { result } = renderHook(() => useCounter(1));

    // countが0かどうか
    expect(result.current.count).toBe(1);

    // 逆にminusCount時の挙動をテスト
    act(() => result.current.minusCount());
    expect(result.current.count).toBe(0);
  });
});
